<?php
include_once '../Repository/userRepository.php';
include_once '../Models/User.php';

if(isset($_POST['registerBtn'])){
    if(empty($_POST['Firstname']) || empty($_POST['Lastname']) || empty($_POST['Email']) ||
    empty($_POST['Username']) || empty($_POST['Password'])){
        echo "Fill all fields!";
    }else{
        $Firstname = $_POST['Firstname'];
        $Lastname = $_POST['Lastname'];
        $Email = $_POST['Email'];
        $Username = $_POST['Username'];
        $Password = $_POST['Password'];
        $Id = $Username.rand(100,999);
        $Roleid = $POST['Roleid'];
        $user  = new User($Id,$Firstname,$Lastname,$Email,$Username,$Password,$Roleid);
        $userRepository = new UserRepository();

        $userRepository->insertUser($user);


    }
}



?>