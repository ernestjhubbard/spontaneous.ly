<?php
$link = get_db_link();

if ($request['method'] === 'GET') {
    $query =   "SELECT * FROM users";
    $result = mysqli_query($link, $query);
    $output = [];
    while($row = mysqli_fetch_assoc($result)){
      $output[] = $row;
    }
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