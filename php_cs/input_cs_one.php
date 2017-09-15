<?php
	header('content-type:application/json;charset=utf8');
	
	$arr1 = [
		'status'=>'ok',
		'name'=>'name_cs',
		'psw'=>'***'
	];
	
	$arr2 = [];
	
	$arr = array($arr1, $arr2);
	
	echo json_encode($arr);//编码为JSON字符串
?>