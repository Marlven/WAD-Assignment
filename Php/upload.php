<?php
$File_Name = $_FILES['File']['Name']; //get file name
$tmp_Name = $_FILES['File']['tmp_Name'] //get temp_name of file
$File_Up_Name = time().$File_Name; //making file name dynamic
move_uploaded_file($tmp_Name "files/*".$File_Up_Name); //moving file to specified folder with dynamic name
?>




