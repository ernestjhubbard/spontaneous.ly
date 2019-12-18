<?php

$link = get_db_link();

if ($request['method'] === 'POST') {
  $user_email = $request['body']['email'];
  $user_first_name = $request['body']['firstName'];
  $user_last_name = $request['body']['lastName'];
  $user_image = $request['body']['image'];
  $user_password = $request['body']['password'];
  if(!isset($request['body']['email'])){
    throw new ApiError('All Fields are Required', 400);
  }
  $password_hash = password_hash($user_password, PASSWORD_DEFAULT);
  $create_user = "INSERT INTO users (`email`, `firstName`, `lastName`, `image`, `password`)
                         VALUES (?,?,?,?,?)";
  $sql_prepare_user = mysqli_prepare($link, $create_user);
  mysqli_stmt_bind_param($sql_prepare_user, 'sssss', $user_email, $user_first_name, $user_last_name, $user_image, $password_hash);
  mysqli_stmt_execute($sql_prepare_user);
  $insert = mysqli_insert_id($link);
  $response['body'] = $request['body'];
  send($response);
}
