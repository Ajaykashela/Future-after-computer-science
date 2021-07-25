<?php  
$fp = fopen('serverfile.txt', 'a');//opens file in append mode  
$txt = "apped data \n";
fwrite($fp, $txt);  
fclose($fp);  
echo "File appended successfully";  
?>  