<?php
	$name = $email = $phone = $message = "";		

	function format_input($data){
		$data = trim($data);
		$data = stripslashes($data);
		$data = htmlspecialchars($data);
		return $data;
	}

	if ($_SERVER["REQUEST_METHOD"] == "POST"){
		$name = format_input($_POST["name"]);
		$email = format_input($_POST["email"]);
		$phone = format_input($_POST["phone"]);
		$message = format_input($_POST["message"]);
	}

	$to = "abc@company.com";
	$subject = "Contact Us";
	$content = "Name: ".$name;
	$content .= "\nEmail: ".$email;
	$content .= "\nPhone: ".$phone;
	$content .= "\n\n".$message;
	$header = "From: ".$email;

	mail($to,$subject,$content,$header);
?>