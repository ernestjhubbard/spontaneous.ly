<?php

$link = get_db_link();

if ($request['method'] === 'POST') {
    if (isset($_SESSION['user_id'])) {
        $user_id = $_SESSION['user_id'];
        if(isset($request['body']['password'])){
        $user_password = $request['body']['password'];
        $password_hash = password_hash($user_password, PASSWORD_DEFAULT);
        $password_update = "UPDATE users SET password = ? WHERE userId = $user_id";
        $change_password = mysqli_prepare($link, $password_update);
        mysqli_stmt_bind_param($change_password, 's', $password_hash);
        mysqli_stmt_execute($change_password);
        $response['body'] = "success";
        send($response);
        }else if(isset($request['body']['email'])){
        $user_email = $request['body']['email'];
        $email_update = "UPDATE users SET email = ? WHERE userId = $user_id";
        $change_email = mysqli_prepare($link, $email_update);
        mysqli_stmt_bind_param($change_email, 's', $user_email);
        mysqli_stmt_execute($change_email);
        $response['body'] = "success";
        send($response);
        }else if(isset($request['body']['firstName'])){
        $user_firstName = $request['body']['firstName'];
        $firstName_update = "UPDATE users SET firstName = ? WHERE userId = $user_id";
        $change_firstName = mysqli_prepare($link, $firstName_update);
        mysqli_stmt_bind_param($change_firstName, 's', $user_firstName);
        mysqli_stmt_execute($change_firstName);
        $response['body'] = "success";
        send($response);
        }else if(isset($request['body']['lastName'])){
        $user_lastName = $request['body']['lastName'];
        $lastName_update = "UPDATE users SET lastName = ? WHERE userId = $user_id";
        $change_lastName = mysqli_prepare($link, $lastName_update);
        mysqli_stmt_bind_param($change_lastName, 's', $user_lastName);
        mysqli_stmt_execute($change_lastName);
        $response['body'] = "success";
        send($response);
        }else if(isset($request['body']['image'])){
        $user_image = $request['body']['image'];
        $image_update = "UPDATE users SET image = ? WHERE userId = $user_id";
        $change_image = mysqli_prepare($link, $image_update);
        mysqli_stmt_bind_param($change_image, 's', $user_image);
        mysqli_stmt_execute($change_image);
        $response['body'] = "success";
        send($response);
        }
}
}
