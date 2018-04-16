<?php
    header('Content-type: application/json; charset=utf-8');
    
    spl_autoload_register(function($class) {
        require "$class.php";
    });
    
    $db = new DbUtil();
    $db->executeSelect(SqlQuery::$selectQuery['categories']);