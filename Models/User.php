<?php

class User{
    private $Id;
    private $Firstname;
    private $Lastname;
    private $Email;
    private $Username;
    private $Password;


    function __construct($Id,$Firstname,$Lastname,$Email,$Username,$Password){
            $this->Id = $Id;
            $this->Firstname = $Firstname;
            $this->Lastname = $Lastname;
            $this->Email = $Email;
            $this->Username = $Username;
            $this->Password = $Password;
    }


    function getId(){
        return $this->Id;
    }
    function getFirstname(){
        return $this->Firstname;
    }
    function getLastname(){
        return $this->Lastname;
    }
    function getEmail(){
        return $this->Email;
    }
    function getUsername(){
        return $this->Username;
    }
    function getPassword(){
        return $this->Password;
    }
}

?>