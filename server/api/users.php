<?php

$link = get_db_link();
if ($request['method'] === 'GET') {
  $user_id = $_SESSION['user_id'];
  $sql_login = "SELECT * 
                  FROM users
                 WHERE userId = '$user_id'";
  $login_query = mysqli_query($link, $sql_login);
  $login = mysqli_fetch_assoc($login_query);
  $response['body'] = $login;
  send($response);
}

if ($request['method'] === 'POST') {
  if (isset($_SESSION['user_id'])) {
    unset($_SESSION['user_id']);
  } else {
    $email = $request['body']['email'];
    $password = $request['body']['password'];
    $sql_login = "SELECT *
                  FROM users
                 WHERE email = ?";
    $login_prepare = mysqli_prepare($link, $sql_login);
    mysqli_stmt_bind_param($login_prepare, 's', $email);
    mysqli_stmt_execute($login_prepare);
    $result = mysqli_stmt_get_result($login_prepare);
    $login = mysqli_fetch_assoc($result);
    $fetch_password = $login['password'];
    if (password_verify($password, $fetch_password)) {
      $user_id = $login['userId'];
      $_SESSION['user_id'] = $user_id;
      $response['body'] = [
        'userId' => $login['userId'],
        'email' => $login['email'],
        'firstName' => $login['firstName'],
        'lastName' => $login['lastName'],
        'image' => $login['image']
      ];
      send($response);
    } else {
      terminal_log('invalid');
      throw new ApiError('Invalid login', 401);
    }
  }
}
