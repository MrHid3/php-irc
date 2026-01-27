<?php
$time = time();
$messages = array();
while(time() - $time <= 5){
    usleep(1000);
}
echo json_encode($messages);
?>