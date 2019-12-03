<?php
$link = get_db_link();
    $current_directory = getcwd();
    $upload_directory = "../public/assets/images/users/";
    $image = $_FILES['myFile'];

    $image_name = $_FILES['myFile']['name'];
    $image_size = $_FILES['myfile']['size'];
    $image_tmp_name = $_FILES['myFile']['tmp_name'];
    $destination_file = "../public/assets/images/users/".$_FILES['myFile']['name'];
    move_uploaded_file( $_FILES['myFile']['tmp_name'], $destination_file );
    $response['body'] = $destination_file;
    send($response);

    