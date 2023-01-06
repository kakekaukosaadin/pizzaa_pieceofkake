<?php

$texti = "Tilauksen tiedot:\n";


foreach ($_POST as $name => $value) {
    if (!empty($value)){
        $texti .= $name . ": " . $value . "\n";
    }
}

$email_from = 'pizzaa@sotku.com';

$email_subject = "Tilaus";

$email_body = "$texti";

$to = "pspr.vmtk@gmail.com";
$headers = "From: $email_from \r\n";
mail($to, $email_subject, $email_body, $headers);
?>

<h1>Kiitos tilauksesta, voit sulkea välilehden</h1>
