<?php

$link = get_db_link();

if ($request['method'] === 'PUT') {
    if (isset($_SESSION['user_id'])) {
        $user_id = $_SESSION['user_id'];
            $email = $request['body']['email'];
            $password = $request['body']['password'];
            $password_hash = password_hash($user_password, PASSWORD_DEFAULT);
            $firstName = $request['body']['firstName'];
            $lastName = $request['body']['lastName'];
            $image = $request['body']['image'];
            $account_update = "UPDATE users 
                                  SET email = ?, password = ?, firstName = ?, lastName = ?, image = ?
                                WHERE userId = $user_id";
            $change_info = mysqli_prepare($link, $account_update);
            mysqli_stmt_bind_param($change_info, 'sssss', $email, $password_hash, $firstName, $lastName, $image);
            mysqli_stmt_execute($change_info);
            $response['body'] = "success";
            send($response);
    }
}
