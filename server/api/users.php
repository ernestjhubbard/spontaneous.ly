<?php
$link = get_db_link();

if ($request['method'] === 'GET') {
    $user_session = $_SESSION['userId'];
    $query =  "SELECT firstName FROM users WHERE userId = $user_session";
    $result = mysqli_query($link, $query);
    $output = mysqli_fetch_assoc($result);
    $response['body'] = $output;
    send($response);
}

if ($request['method'] === 'POST') {
    $user_email = $request['body']['email'];
    if(!isset($user_email)){
      throw new ApiError('User email is required', 400);
    }
    $user_query = "SELECT userId from users WHERE '$user_email' = email";
    $user_id = mysqli_query($link, $user_query);
    $id = mysqli_fetch_assoc($user_id);
    $_SESSION = $id;
    $response['body']= $id;
    send($response);
  }