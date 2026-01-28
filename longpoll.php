<?php
//include("memcached.php");
$memcached = new Memcached();
$memcached->addServer('127.0.0.1', 11211);
$time = time();
while(time() - $time <= 1){ #change for prod
    usleep(1000);
}
$messages = $memcached->get("messages");
echo json_encode($messages);
?>