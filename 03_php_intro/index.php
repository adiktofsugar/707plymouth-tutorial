<?
$user = "...you...";
if (isset($_GET["username"])) {
    $user = $_GET["username"];
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>PHP intro page</title>
    <link rel="stylesheet" href="style.css" />
</head>
<body>
    <h1>Welcome <? echo "$user"; ?>!</h1>
</body>
</html>
