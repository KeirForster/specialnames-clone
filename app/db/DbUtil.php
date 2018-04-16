<?php
    class DbUtil
    {
        private $servername = 'localhost';
        private $username = 'root';
        private $password = '1234';
        private $database = 'special-names';
        private $conn;
        private $stmt;
        private $resultSet;
        
        public function __construct()
        {
            $this->conn = null;
            $this->stmt = null;
            $this->resultSet = null;
        }

        private function connect()
        {
            $this->conn = new mysqli($this->servername, $this->username, $this->password, $this->database);
            $stmt = null;
            
            // connect to MySQL
            if ($this->conn->connect_errno)
                echo "Failed to connect to MySQL: (" . $this->conn->connect_errno . ") " . $this->conn->connect_error;
        }
        
        public function executeSelect($queryString, $stmtParams = null)
        {
            $this->connect();
            
            if ($stmtParams)
                $this->processPreparedStatement($queryString, $stmtParams);
            else
                $this->processStatement($queryString);
        }

        private function processPreparedStatement($queryString, $stmtParams)
        {
            $this->setPreparedStatement($queryString);
            $this->executePreparedStatement('i', '5');
            
            $this->resultSet = $this->stmt->get_result();
            $myArray = array();
            
            while($row = $this->resultSet->fetch_assoc())
                $myArray[] = $row;
            
            $this->stmt->close();
            $this->conn->close();
            echo json_encode($myArray);
        }
    
        private function setPreparedStatement($queryString)
        {
            if (!($this->stmt = $this->conn->prepare($queryString)))
                echo "Prepare failed: (" . $this->conn->errno . ") " . $this->conn->error;
        }
    
        private function executePreparedStatement($format, $params)
        {
            if (!$this->stmt->bind_param($format, $params))
                echo "Binding parameters failed: (" . $this->stmt->errno . ") " . $this->stmt->error;
        
            if (!$this->stmt->execute())
                echo "Execute failed: (" . $this->stmt->errno . ") " . $this->stmt->error;
        }
    
        private function processStatement($queryString)
        {
            $this->executeStatement($queryString);
            $myArray = array();
        
            while($row = $this->resultSet->fetch_assoc())
                $myArray[] = $row;
        
            $this->conn->close();
            echo json_encode($myArray);
        }
    
        private function executeStatement($queryString)
        {
            if (!($this->resultSet = $this->conn->query($queryString)))
                echo "Executing statement failed: (" . $this->stmt->errno . ") " . $this->stmt->error;
        }
    }