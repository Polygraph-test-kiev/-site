<?php

$recepient = "hladogor@gmail.com";
$sitename = "Olmod";

$phone = trim($_POST["phone"]);
$name = trim($_POST["name"]);
// $cvet = trim($_POST["cvet"]);

$message = "Имя: $name \nТелефон: $phone \nНужен документ: $cvet";

$pagetitle = "Нова заявка з сайту \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
