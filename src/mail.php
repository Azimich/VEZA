<?php 
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require ('PHPMailer/Exception.php');
require ('PHPMailer/PHPMailer.php');

$mail = new PHPMailer(true);
$mail->CharSet = 'utf-8';

$name = $_POST['name'];
$email = $_POST['email'];
$tel = $_POST['tel'];
$message = ($_POST["message"]);
$userfile = ($_POST["file"]);

$body.= '<h1>Обратная связь</h1>';

if (trim(!empty($name))) {
    $body.="<p>Имя: <strong> $name </strong></p>";
}

if (trim(!empty($email))) {
    $body.="<p>Email: <strong> $email </strong></p>";
}

if (trim(!empty($message))) {
    $body.="<p>Телефон: <strong> $tel </strong></p>";
}

if (trim(!empty($message))) {
    $body.="<p>Сообщение: <strong> $message </strong></p>";
}

if (!empty($_FILES["file"]["tmp_name"])) {
    $filePath = __DIR__ . '/files/' . $_FILES["file"]["name"];
    if (copy($_FILES["file"]["tmp_name"], $filePath)) {
        $fileAttach = $filePath;
        $body.="<p><strong>Резюме</strong> $userfile </p>";
        $mail->addAttachment($fileAttach);
    }
};

$mail->Body = $body;
$mail->setFrom($email); // от кого будет уходить письмо?
$mail->addAddress('mrazim99@mail.ru'); // Кому будет уходить письмо 
$mail->isHTML(true);

if(!$mail->send()) {
    echo 'Error';
} else {
    echo json_encode(['status' => 'ok']);
}
?>