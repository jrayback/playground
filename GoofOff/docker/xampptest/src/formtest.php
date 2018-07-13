<!DOCTYPE html>
<html>
<head>
    <title>My form</title>
</head>
<body>
    <?php
        $name = (isset($_POST['myname']) && 
                !empty($_POST['myname'])) ? 
                    $_POST['myname'] : 
                    "Jonathan";
    ?>
    <p><?php echo "Hiya {$name}! You are awesome...";
        ?></p>
    <form method="post" action="">
        <input type="text" name="myname" />
        <input type="submit" />
    </form>
</body>
</html>
