<?php
$link = get_db_link();
if ($request['method'] === 'GET') {
    $sql_login = "SELECT userId FROM `logins` ORDER BY `logins`.`loginId` DESC";
    $login_query = mysqli_query($link, $sql_login);
    $user_fetch = mysqli_fetch_assoc($login_query);
    $user_id = $user_fetch['userId'];
    $user_query =  "SELECT * FROM users AS u WHERE $user_id = u.`userId`";
    $user_result = mysqli_query($link, $user_query);
    $output = mysqli_fetch_assoc($user_result);
    $response['body'] = $output;
    send($response);
  }
if ($request['method'] === 'POST') {
    $user_email = $request['body']['email'];
    // $user_first_name = $request['body']['firstName'];
    // $user_last_name = $request['body']['lastName'];
    // $user_password = $request['body']['password'];
    // $user_image = $request['body']['image'];
    if(!isset($user_email)){
      throw new ApiError('User email is required', 400);
    }
    // if(isset($user_first_name)){
    //   $create_user = "INSERT INTO users (`email`, `firstName`, `lastName`, `image`) VALUES (?,?,?,?)";
    //   $sql_prepare_user = mysqli_prepare($link, $create_user);
    //   mysqli_stmt_bind_param($sql_prepare_user, 'ssss', $user_email, $user_first_name, $user_last_name, $user_image);
    // }
    $user_query = "SELECT userId from users WHERE '$user_email' = email";
    $user_id = mysqli_query($link, $user_query);
    $id = mysqli_fetch_assoc($user_id);
    $login_id = $id['userId'];
    $sql_login = "INSERT INTO logins (userId) VALUES ($login_id)";
    mysqli_query($link, $sql_login);
    $_SESSION['user_id'] = $id['userId'];
    $response['body']= $_SESSION['user_id'];
    send($response);
  }
