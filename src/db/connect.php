<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $fullname = $_POST['fullname'];
        $email = $_POST['email'];
        $password = $_POST['password'];

        // Validação básica (deveria ser mais completa na prática)
        if (empty($fullname) || empty($email) || empty($password)) {
            die("Please fill all the fields.");
        }

        // Hash da senha
        $passwordHash = password_hash($password, PASSWORD_DEFAULT);

        // Conexão com o banco de dados
        $conn = new mysqli('200.195.171.122', 'grupo10', 'gopMi1PKCuJpaB29', '<grupo10>grupo10_ConnectPet');
        if ($conn->connect_error) {
            die('Connection Failed : '.$conn->connect_error);
        } else {
            $stmt = $conn->prepare("INSERT INTO systemUser(fullname, email, password) VALUES(?, ?, ?)");
            $stmt->bind_param("sss", $fullname, $email, $passwordHash);
            if ($stmt->execute()) {
                echo "Registration Successfully...";
            } else {
                echo "Error: " . $stmt->error;
            }
            $stmt->close();
            $conn->close();
        }
    }
?>