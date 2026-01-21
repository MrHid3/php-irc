<?php
$time = time();
while(time() - $time <= 5){
    usleep(1000);
}
echo '"aaa"';
?>