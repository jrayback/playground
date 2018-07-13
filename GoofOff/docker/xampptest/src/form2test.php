<!doctype html />
<head>
    <title>Second form</title>
</head>
<body>
    <?php
        $db = mysqli_connect(
            "localhost",
            "root",
            "",
            "php");
        $name = (isset($_POST['name']) && !empty($_POST['name'])) ? htmlspecialchars($_POST['name']) : "";
        $ideas = (isset($_POST['ideas']) && !empty($_POST['ideas'])) ? htmlspecialchars($_POST['ideas']) : "";
        $goals = (isset($_POST['goals']) && !empty($_POST['goals'])) ? htmlspecialchars($_POST['goals']) : "";
        $gender = 'm';
        $color = 'BLU';
        if (isset($_POST['submit'])) {
            printf("Name: %s
            <br>Ideas: %s
            <br>Goals: %s", 
                $name, $ideas, $goals);
        }
        $sql = sprintf(
            "INSERT INTO users (name, gender) 
            VALUES ('%s', '%s')",
            mysqli_real_escape_string($db, $name),
            mysqli_real_escape_string($db, $gender)
        );
        mysqli_query($db, $sql);
        mysqli_close($db);
    ?>
    <form method="post" action="">
        Name : <input type = "text" name="name" value="<?php
            echo $name;
            ?>" />
        <br>
        Ideas: <input type = "text" name="ideas" value="<?php
            echo $ideas;
            ?>" />
        <br>
        Goals: <input type = "text" name="goals" value="<?php
            echo $goals;
            ?>" />
        <br>
        <input type = "submit" name="submit" />
    </form>
</body>