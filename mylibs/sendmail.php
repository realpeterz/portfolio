<?php

    
    require_once('class.phpmailer.php');
    
    $mail = new PHPMailer();  
    $mail->IsSendmail(); 
    
    $body = $_POST['message'];
    $name = $_POST['name'];
    $from = $_POST['email'];
    $to = "mail@peterzhang.us";   
    
    $mail->AddReplyTo( $from, $name );
    $mail->SetFrom( $from, $name );
    $mail->AddAddress( $to, "Peter Zhang" );
    $mail->Subject = "Message from ".$name;
    
    $mail->MsgHTML($body);    
    
    if( $mail->Send() ) {
      echo "Thanks. Your message has been sent. I will get back to you as soon as possible.";   
                
    } else {
    
       echo "Mailer Error: " . $mail->ErrorInfo;
     // echo "Your message failed being delivered. The mail server might be done. Please try again later."
    }
    
