<?php

if (!empty($_REQUEST['name']) || !empty($_REQUEST['email']) || !empty($_REQUEST['message'])) {
    $name = $_REQUEST['name'];
    $email = $_REQUEST['email'];
    $message = $_REQUEST['message'];


};

$from = 'From: michalwozniak.ca';
$to = 'michalwozniak@live.ca';
$subject ='Email Inquiry';

$body = "From: $name\n E-mail: $email\n Message:\n $message";

//send email
mail ($to, $subject, $body, $from);
return false;


