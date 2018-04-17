<?php
    
    class DbUtil
    {
        private $servername = 'localhost';
        private $username   = 'root';
        private $password   = '1234';
        private $database   = 'special-names';
        private $conn;
        private $stmt;
        private $resultSet;
        
        public function __construct()
        {
            $this->conn      = null;
            $this->stmt      = null;
            $this->resultSet = null;
        }
        
        private function connect()
        {
            $this->conn = new mysqli($this->servername, $this->username, $this->password, $this->database);
            $stmt       = null;
            
            // connect to MySQL
            if ($this->conn->connect_errno)
                echo "Failed to connect to MySQL: (" . $this->conn->connect_errno . ") " . $this->conn->connect_error;
        }
        
        public function executeSelect($queryString, $stmtParams = null)
        {
            $this->connect();
            
            if ($stmtParams)
                return $this->processPreparedStatement($queryString, $stmtParams);
            else
                return $this->processStatement($queryString);
        }
        
        private function processPreparedStatement($queryString, $stmtParams)
        {
            $this->setPreparedStatement($queryString);
            $this->executePreparedStatement($stmtParams);
            
            $this->resultSet = $this->stmt->get_result();
            $myArray         = array();
            
            while ($row = $this->resultSet->fetch_assoc())
                $myArray[] = $row;
            
            $this->stmt->close();
            $this->conn->close();
            return $myArray;
        }
        
        private function setPreparedStatement($queryString)
        {
            if (!($this->stmt = $this->conn->prepare($queryString)))
            {
                echo json_encode(array('error' => "Prepare failed: (" . $this->conn->errno . ") " . $this->conn->error));
                die();
            }
        }
        
        private function executePreparedStatement($stmtParams)
        {
            if (!$this->stmt->bind_param('ss', 'warrior', 'male'))
            {
                echo json_encode(array('error' => "Binding parameters failed: (" . $this->stmt->errno . ") " . $this->stmt->error));
                die ();
            }
            if (!$this->stmt->execute())
            {
                echo json_encode(array('error' => "Execute failed: (" . $this->stmt->errno . ") " . $this->stmt->error));
                die ();
            }
        }
        
        private function processStatement($queryString)
        {
            $this->executeStatement($queryString);
            $myArray = array();
            
            while ($row = $this->resultSet->fetch_assoc())
                $myArray[] = $row;
            
            $this->conn->close();
            return $myArray;
        }
        
        private function executeStatement($queryString)
        {
            if (!($this->resultSet = $this->conn->query($queryString)))
                echo "Executing statement failed: (" . $this->stmt->errno . ") " . $this->stmt->error;
        }
    }