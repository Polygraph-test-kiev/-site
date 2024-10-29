<?php

/* https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXXXX/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

//Переменная $name,$phone, $mail получает данные при помощи метода POST из формы
$ip = $_SERVER['REMOTE_ADDR'];
$name = $_POST['name'];
$phone = $_POST['phone'];
$cvet = $_POST['cvet'];
// $birthdate = $_POST['birthdate'];
// $workplace = $_POST['workplace'];
// $shipaddress = $_POST['shipaddress'];
// $diagnosis = $_POST['diagnosis'];
// $certificateperiod = $_POST['certificateperiod'];
// $country = $_POST['country'];
// $dateDone = $_POST['dateDone'];
// $instance = $_POST['instance'];
// $pregnancyPeriod = $_POST['pregnancyPeriod'];
// $residenceAddress = $_POST['residenceAddress'];
// $sportSection = $_POST['sportSection'];
// $workPosition = $_POST['workPosition'];
// $sanatorium = $_POST['sanatorium'];
// $school = $_POST['school'];
// $birthPlace = $_POST['birthPlace'];
// $bloodType = $_POST['bloodType'];
// $drivingСategories = $_POST['drivingСategories'];



//в переменную $token нужно вставить токен, который нам прислал @botFather
$token = "7219437104:AAHEs1NvfWdRFy6Yl_xHZh0YyQmicc_9Oj4";

//нужна вставить chat_id (Как получить chad id, читайте ниже)
$chat_id = "-1002438098254";


//Далее создаем переменную, в которую помещаем PHP массив
$arr = array(
	'Послуга: ' => $cvet,
	'Телефон: ' => $phone,
	'ПІБ: ' => $name,
	'IP-адрес: ' => $ip,
);

//При помощи цикла перебираем массив и помещаем переменную $txt текст из массива $arr
foreach ($arr as $key => $value) {
	$txt .= "<b>" . $key . "</b> " . $value . "%0A";
};

//Осуществляется отправка данных в переменной $sendToTelegram
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}", "r");

//Если сообщение отправлено, напишет "Thank you", если нет - "Error"
if ($sendToTelegram) {
	echo "Thank you";
} else {
	echo "Error";
}
