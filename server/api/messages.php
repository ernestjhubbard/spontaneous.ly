<?php
$link = get_db_link();
if ($request['method'] === 'GET') {
    $sql_sender = "SELECT userId FROM `logins` 
                             ORDER BY `logins`.`loginId` DESC";
    $login_query = mysqli_query($link, $sql_login);
    $user_fetch = mysqli_fetch_assoc($login_query);
    $user_id = $user_fetch['userId'];
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