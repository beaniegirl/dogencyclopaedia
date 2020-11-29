<?php


$name = filter_input(INPUT_POST, 'name');
$email = filter_input(INPUT_POST, 'email');
$num = filter_input(INPUT_POST, 'num');
$host = "localhost:3306";
$dbusername = "root";
$dbpassword = "root";
$dbname = "feedback";
// Create connection
$conn = new mysqli ($host, $dbusername, $dbpassword, $dbname);
if (mysqli_connect_error()){
die('Connect Error ('. mysqli_connect_errno() .') '
. mysqli_connect_error());
}
else{
$sql = "INSERT INTO details (name, email,num)
values ('$name','$email','$num')";
if ($conn->query($sql)){
echo "New record is inserted sucessfully";
}
else{
echo "Error: ". $sql ."
". $conn->error;
}
$conn->close();
}
if($_SERVER['REQUEST_METHOD'] == 'POST') {
    echo '<script>alert("Thank You!")</script>';
    header('Location: contact.html');
    exit();
}

?>

