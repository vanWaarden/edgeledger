<?php
    // checks of the email field is filled in. 'email' pertains to the form input name="email". $_POST is actually called the super global and its looking for name="email". If email is filled in its going to proceed and going to create the variables below:
  if (isset($_POST['email']))  { 

  
    //Email information
    $admin_email = "mvanwaarden@gmail.com"; // email that we want to submit to
    // the rest of the variables point to whatever is filled in the form fields:
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];
    
    // then the php function called mail will run:
    //send email.
    mail($admin_email, "New Form Submission", $message . ' - ' . $phone, "From:" . $email);
    
    // mail($admin_email (= emailadress where its going to submit to), "New Form Submission" (=subject of the email), $message . ' - ' . $phone (= the body is going to be the message and the phone number), "From:" . $email);
    // Once it sends, we going to redirect using the header function. This wil redirect to a file called success.html  
    header('Location: http://localhost:5501/edgeledger_website_final/success.html');
  }