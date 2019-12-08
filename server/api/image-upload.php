<?php

$link = get_db_link();

$current_directory = getcwd();
$upload_directory = "../public/assets/images/users/";
$image = $_FILES['image'];

$image_name = $_FILES['image']['name'];
$image_size = $_FILES['image']['size'];
$image_tmp_name = $_FILES['image']['tmp_name'];

$destination_file = "../public/assets/images/users/".$_FILES['image']['name'];
move_uploaded_file( $_FILES['image']['tmp_name'], $destination_file );

$response['body'] = $destination_file;
send($response);
