<?php
    header('Content-type: application/json; charset=utf-8');
    
    spl_autoload_register(function($class) {
        require "$class.php";
    });
    
    if (isset($_GET['request']) && $_GET['request'] === 'getNameCategories')
        getNameCategories();
    
    else if (isset($_GET['request']) && $_GET['request'] === 'getNames')
        getNames();
    
    function getNames()
    {
        echo json_encode(array('userName' => 'meh'));
//        $db = new DbUtil();
//        $db->executeSelect(SqlQuery::$selectQuery['categories']);
    }
    
    function getNameCategories()
    {
        $db = new DbUtil();
        $db->executeSelect(SqlQuery::$selectQuery['categories']);
    }