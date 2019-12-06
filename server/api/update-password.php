<?php

$link = get_db_link();

if ($request['method'] === 'POST') {
  if (isset($_SESSION['user_id'])) {
    $user_id = $_SESSION['user_id'];
    $user_password = $request['body']['password'];
    $password_hash = password_hash($user_password, PASSWORD_DEFAULT);
    $password_update = "UPDATE users SET password = ? WHERE userId = $user_id";
    $change_password = mysqli_prepare($link, $password_update);
    mysqli_stmt_bind_param($change_password, 's', $password_hash);
    mysqli_stmt_execute($change_password);
    $response['body'] = "success";
    send($response);
  }
}
