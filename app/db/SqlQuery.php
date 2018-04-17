<?php
    
    class SqlQuery
    {
        public static $selectQuery = array
        (
            'categories' => "SELECT * FROM categories;"
        );
        
        public static function setNamesQuery($catName, $gender)
        {
            return "SELECT a.name_value, a.name_gender, b.cat_name, b.cat_img
                FROM names As a
                INNER JOIN categories As b on a.cat_id = b.cat_id
                WHERE b.cat_name =  '$catName' AND
                a.name_gender = '$gender'
                ORDER BY Rand()
                LIMIT 2;";
        }
    }