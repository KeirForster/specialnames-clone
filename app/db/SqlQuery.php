<?php
    class SqlQuery
    {
        public static $selectQuery = array
        (
            'preparedStatement' => array
            (
                'names' => "SELECT * FROM names WHERE meaning IN (?)"
            ),
            'categories' => "SELECT * FROM categories;"
        );
    }