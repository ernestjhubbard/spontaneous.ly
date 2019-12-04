<?php
$link = get_db_link();

if ($request['method'] === 'GET') {
    $sql_login = "SELECT userId FROM `logins`
                            ORDER BY `logins`.`loginId` DESC";
    $login_query = mysqli_query($link, $sql_login);
    $user_fetch = mysqli_fetch_assoc($login_query);
    $user_id = $user_fetch['userId'];
    $user_query =  "SELECT * FROM users AS u
                            WHERE $user_id = u.`userId`";
    $user_result = mysqli_query($link, $user_query);
    $output = mysqli_fetch_assoc($user_result);
    $response['body'] = $output;
    send($response);
  }
if ($request['method'] === 'POST') {

    $user_email = $request['body']['email'];
    $user_password = $request['body']['password'];
    if(!isset($user_email)){
      throw new ApiError('User email is required', 400);
    }
    if(isset($request['body']['firstName'])){
      $user_first_name = $request['body']['firstName'];
      $user_last_name = $request['body']['lastName'];
      $user_image = $request['body']['image'];
      $create_user = "INSERT INTO users (`email`, `firstName`, `lastName`, `image`, `password`)
                           VALUES (?,?,?,?,?)";
      $sql_prepare_user = mysqli_prepare($link, $create_user);
      mysqli_stmt_bind_param($sql_prepare_user, 'sssss', $user_email, $user_first_name, $user_last_name, $user_image, $user_password);
      mysqli_stmt_execute($sql_prepare_user);
      $insert = mysqli_insert_id($link);
      $response['body'] = $request['body'];
      send($response);
    }
    else{
    $login_password = $request['body']['password'];
    $user_query = "SELECT `userId`
                     FROM users
                    WHERE '$user_email' = email
                      AND '$login_password' = `password`";
    $user_id = mysqli_query($link, $user_query);
    $id = mysqli_fetch_assoc($user_id);
    $login_id = $id['userId'];
      if(!isset($id)){
        throw new ApiError('Invalid Login Credentials', 400);
      }
    $sql_login = "INSERT INTO logins (userId)
                       VALUES ($login_id)";
    mysqli_query($link, $sql_login);
    $_SESSION['user_id'] = $id['userId'];
    $response['body']= $_SESSION['user_id'];
    send($response);
    }
  }
