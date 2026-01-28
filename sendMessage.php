<?php
include("memcached.php");
$inputStream = fopen("php://input", "r");
$post = json_decode(file_get_contents("php://input"), true);
if(!isset($post["text"], $post["sender"], $post["color"], $post["uuid"])){
    if(!isset($post["text"])){
        echo json_encode(array("error" => "Missing text"));
    }else if(!isset($post["sender"])){
        echo json_encode(array("error" => "Missing sender"));
    } else if(!isset($post["color"])){
        echo json_encode(array("error" => "Missing color"));
    }else if(!isset($post["uuid"])){
        echo json_encode(array("error" => "Missing uuid"));
    }
    http_response_code(400);
    return;
}

$messages = $memcached->get("messages");
if($messages == null){
    $messages = array();
}

$messages[] = array("text"=>$post["text"], "sender"=>$post["sender"], "color"=>$post["color"], "uuid"=>$post["uuid"]);

$memcached->set("messages", $messages);

echo json_encode(array());
?>