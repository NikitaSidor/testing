<?php
$request_body = file_get_contents('php://input');

// Декодируем JSON строку в объект PHP
$data = json_decode($request_body);

// Теперь $data содержит объект с данными из POST запроса

// Доступ к полям объекта
$fullName = $data->fullname;
$email = $data->email;
$phone = $data->phone;
$campaign = $data->campaign;

// Формируем URL с помощью данных из POST-запроса
$url = 'https://maschbot.site/cgi-bin3/devtest.php?' . http_build_query(array(
    'fullname' => $fullName,
    'email' => $email,
    'phone' => $phone,
    'campaign' => $campaign
));

$curl = curl_init();

curl_setopt_array($curl, array(
    CURLOPT_URL => $url,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => '',
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => 'POST',
));

$response = curl_exec($curl);

if ($response === false) {
    // Записываем ошибку в файл
    $error_message = curl_error($curl);
    file_put_contents('form-log.log', "cURL Error: $error_message\n", FILE_APPEND);
} else {
    // Записываем ответ в файл
    file_put_contents('form-log.log', "fillname: $fullName\n", FILE_APPEND);
    file_put_contents('form-log.log', "email: $email\n", FILE_APPEND);
    file_put_contents('form-log.log', "phone: $phone\n", FILE_APPEND);
    file_put_contents('form-log.log', "campaign: $campaign\n", FILE_APPEND);
    file_put_contents('form-log.log', "URL: $url\n", FILE_APPEND);
    file_put_contents('form-log.log', "Response: $response\n", FILE_APPEND);
}

curl_close($curl);
echo $response;
?>
