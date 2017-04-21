<?php
$nameErr = $emailErr = $messageErr = " ";
$name = $email = $phone = $service = $message = " ";
$name = validate_data($_POST["name"]);
$email = $_POST["email"];
  if(filter_var($email, FILTER_VALIDATE_EMAIL)){
    $emailErr = "Email format is invalid.";
}
$message = validate_data($_POST['message']);
$phone = validate_data($_POST['phone']);
$service = $_POST['service'];
$message = validate_data($_POST['message']);


function validate_data($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

  $formcontent="From: $name \n Phone Number: $phone \n Interested in: $service \n Message: $message";
  $recipient = "danjfrank08@gmail.com";
  $subject = "DanielFrank.info Contact";
  $mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");

echo "<section class='thank-you'><h1>Thank You!</h1><br/><p>I will reach out to you as soon as possible so we can get started working on what you need! Feel free to take a look at the rest of my site! Also, don't forget to like my <a href='https://www.facebook.com/dfwebdev' target='_blank'>Facebook Page!</a></section><br/><ul class='contact-social'>
  <li id='li'><a href='https://www.linkedin.com/in/daniel-frank-598b9960' target='_blank'><i class='fa fa-linkedin-square'></i></a></li>
  <li id='fb'><a href='http://www.facebook.com/dfwebdev' target='_blank'><i class='fa fa-facebook-square' ></i></a></li>
</ul>";
?>
