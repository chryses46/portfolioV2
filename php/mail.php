<?php
    $response = array( 'success' => false );
    $formData = file_get_contents( 'php://input' );
    $data = json_decode($formData);
    #if ( $data->submit ) {
        $name = $data->name;
        $email = $data->email;
        $phone = $data->phone;
        $service = $data->service;
        $message = $data->message;

        #if ( $name != '' && $email != '') {
            $mailTo = 'danjfrank08@gmail.com';
            $subject = 'New website form submission';
            $body  = 'From: ' . $name . "\n";
            $body .= 'Email: ' . $email . "\n";
            $body .= 'Phone: ' . $phone . "\n";
            $body .= 'Interested in: ' . $service . "\n";
            $body .= 'Message: ' . "\n" . $message;

            $success = mail( $mailTo, $subject, $body );
            mail( $mailTo, $subject, $body );
            if ( $success ) {
                $response[ 'success' ] = true;
            }
        #}
    #}

    echo json_encode( $response );
?>
