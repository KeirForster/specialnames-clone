<?php
    header('Content-type: application/json; charset=utf-8');
    
    spl_autoload_register(function ($class) {
        require "$class.php";
    });
    
    if (isset($_GET['request']) && $_GET['request'] === 'getNameCategories')
    {
        getNameCategories();
    }
    
    
    if (isset($_GET['request']) && $_GET['request'] === 'getNames')
    {
        getNames();
    }
    
    function getNames()
    {
        $db         = new DbUtil();
        $result     = array();
        $gender     = $_GET['gender'];
        $categories = explode(',', $_GET['catNames']);
        
        foreach ($categories as $catName)
        {
            $tempResult = $db->executeSelect(SqlQuery::setNamesQuery($catName, $gender));
            while (containsDuplicates($tempResult, $result))
                $tempResult = $db->executeSelect(SqlQuery::setNamesQuery($catName, $gender));
            
            $result = array_merge($tempResult, $result);
        }
        echo json_encode($result);
    }
    
    function containsDuplicates($tempArray, $array)
    {
        if (sizeof($array) === 0)
            return false;
        
        // check if $tempArray has same names as $array,
        // if so, re-execute query until there are no duplicates in $tempArray
        foreach ($tempArray as $tempRow)
            foreach ($array as $arrayRow)
                if ($tempRow['name_value'] == $arrayRow['name_value'])
                    return true;
        return false;
    }
    
    function getNameCategories()
    {
        $db     = new DbUtil();
        $result = $db->executeSelect(SqlQuery::$selectQuery['categories']);
        echo json_encode($result);
    }