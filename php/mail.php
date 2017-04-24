<?php
$response = array( 'success' => false );
$formData = file_get_contents( 'php://input' );
$data = json_decode($formData);

$name = $data->name;
$emailaddy = $data->email;
$phone = $data->phone;
$service = $data->service;
$message = $data->message;
$mailTo = 'danjfrank08@gmail.com';
$subject = 'New website form submission';
$headers = 'From: ' . $emailaddy . "\r\n".
'Reply-To: ' . $emailaddy . "\r\n" .
'X-Mailer: PHP/' . phpversion();
$body  = 'From: ' . $name . "\n" .
'Email: ' . $email . "\n" .
'Phone: ' . $phone . "\n" .
'Interested in: ' . $service . "\n" .
'Message: ' . "\n" . $message;

$success = mail( $mailTo, $subject, $body, $headers );
mail( $mailTo, $subject, $body, $headers );
if ( $success ) {
    $response[ 'success' ] = true;
}

echo json_encode( $response );
?>
