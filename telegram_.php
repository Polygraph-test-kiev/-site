<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
	if (!empty($_POST['name']) && !empty($_POST['phone'])) {
		if (isset($_POST['name'])) {
			if (!empty($_POST['name'])) {
				$name = strip_tags($_POST['name']);
				$nameFieldset = "Имя пославшего: ";
			}
		}
		if (isset($_POST['phone'])) {
			if (!empty($_POST['phone'])) {
				$phone = strip_tags($_POST['phone']);
				$phoneFieldset = "Телефон: ";
			}
		}
		if (isset($_POST['sportSection'])) {
			if (!empty($_POST['sportSection'])) {
				$sportSection = strip_tags($_POST['sportSection']);
				$sportSectionFieldset = "Секція: ";
			}
		}
		if (isset($_POST['cvet'])) {
			if (!empty($_POST['cvet'])) {
				$cvet = strip_tags($_POST['cvet']);
				$cvetFieldset = "Документ: ";
			}
		}
		if (isset($_POST['birthdate'])) {
			if (!empty($_POST['birthdate'])) {
				$birthdate = strip_tags($_POST['birthdate']);
				$birthdateFieldset = "Дата рождения: ";
			}
		}
		if (isset($_POST['workplace'])) {
			if (!empty($_POST['workplace'])) {
				$workplace = strip_tags($_POST['workplace']);
				$workplaceFieldset = "Название и адрес места работы: ";
			}
		}
		if (isset($_POST['shipaddress'])) {
			if (!empty($_POST['shipaddress'])) {
				$shipaddress = strip_tags($_POST['shipaddress']);
				$shipaddressFieldset = "Новая Почта: ";
			}
		}
		if (isset($_POST['diagnosis'])) {
			if (!empty($_POST['diagnosis'])) {
				$diagnosis = strip_tags($_POST['diagnosis']);
				$diagnosisFieldset = "Диагноз: ";
			}
		}
		if (isset($_POST['certificateperiod'])) {
			if (!empty($_POST['certificateperiod'])) {
				$certificateperiod = strip_tags($_POST['certificateperiod']);
				$certificateperiodFieldset = "Период больничного: ";
			}
		}
		if (isset($_POST['theme'])) {
			if (!empty($_POST['theme'])) {
				$theme = strip_tags($_POST['theme']);
				$themeFieldset = "Тема: ";
			}
		}
		$token = "1035410035:AAEuP84NsW5JQmqA8VdgEtJsOH49AdwittY";
		$chat_id = "-1001181017850";
		$arr = array(
			$nameFieldset => $name,
			$phoneFieldset => $phone,
			$cvetFieldset => $cvet,
			$birthdateFieldset => $birthdate,
			$workplaceFieldset => $workplace,
			$shipaddressFieldset => $shipaddress,
			$diagnosisFieldset => $diagnosis,
			$certificateperiodFieldset => $certificateperiod,
			$themeFieldset => $theme
		);
		foreach ($arr as $key => $value) {
			$txt .= "<b>" . $key . "</b> " . $value . "%0A";
		};
		$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}", "r");
		if ($sendToTelegram) {

			echo '<p class="success">Спасибо за отправку вашего сообщения!</p>';
			return true;
		} else {
			echo '<p class="fail"><b>Ошибка. Сообщение не отправлено!</b></p>';
		}
	} else {
		echo '<p class="fail">Ошибка. Вы заполнили не все обязательные поля!</p>';
	}
} else {
	header("Location: /");
}
