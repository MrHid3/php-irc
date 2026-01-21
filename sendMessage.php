<?php
    if(isset($_POST["message"], $_POST["sender"], $_POST["color"], $_POST["uuid"])){
        Memcached::add($_POST["uuid"], $_POST["message"]);
    }
?>