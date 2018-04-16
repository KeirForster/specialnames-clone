<?php
    class SqlQuery
    {
        public static $selectQuery = array
        (
            'preparedStatement' => array
            (
                'categories' => "SELECT * FROM categories WHERE type_id = ?"
            ),
            'categories' => "SELECT * FROM categories;"
        );
    }