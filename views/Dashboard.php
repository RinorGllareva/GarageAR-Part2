
<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="Dashboard.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
    <title>Login</title>
  </head>
  <div class="wrapper">
    <nav>
      <input type="checkbox" id="show-menu">
      <label for="show-menu" class="menu-icon"><i class="fas fa-bars"></i></label>
      <div class="content">
      <div class="logo"><a href="Home.html">GarageAR</a></div>
        <ul class="links">
          <li><a href="Home.html">Home</a></li>
          
          <li>
            <a href="#" class="desktop-link">Brands</a>
            <input type="checkbox" id="show-features">
            <label for="show-features">Brands</label>
            <ul>
              <li><a href="Mercedes-Benz.html">Mercedes-Benz</a></li>
              <li><a href="BMW.html">BMW</a></li>
              <li><a href="Audi.html">Audi</a></li>
              <li><a href="Tesla.html">Tesla</a></li>
            </ul>
          </li>
          <li><a href="ContactUs.html">Contacts</a></li>
          <li><a href="Login.html">Login</a></li>
        </ul>
      </div>
    </nav>
  </div>
  <body>
    <div class="container">
    <script src="Register.js"></script>
  </div>
    
    <div class="container2">

      <table border="10">
             <tr>
                 <th>ID</th>
                 <th>NAME</th>
                 <th>SURNAME</th>
                 <th>EMAIL</th>
                 <th>USERNAME</th>
                 <th>PASSWORD</th>
                 <th>Edit</th>
                 <th>Delete</th>
                 
             </tr>

             <?php 
             include_once '../Repository/userRepository.php';

             $userRepository = new UserRepository();

             $users = $userRepository->getAllUsers();

             foreach($users as $user){
                echo 
                "
                <tr>
                     <td>$user[Id]</td>
                     <td>$user[Firstname]</td>
                     <td>$user[Lastname] </td>
                     <td>$user[Email] </td>
                     <td>$user[Username] </td>
                     <td>$user[Password] </td>
                     <td><a href='Edit.php?Id=$user[Id]'>Edit</a> </td>
                     <td><a href='Delete.php?Id=$user[Id]'>Delete</a></td>
                     
                </tr>
                ";
             }

             
             
             ?>
    </table>

   <?php include_once '../Controller/userController.php';?>
    </div>
    <div class="end">

    </div>
    <div class="forma2">
      <div class="box-1">
          <h3 id="titulli">Shopping</h3>
         
          <ul id="cars">
                <li><a href="S-Class.html">2022 Mercedes-Benz S-class</a></li>
                <li><a href="G-Class.html">2020 Mercedes-Benz G-Class</a></li>
                <li><a href="CLA.html">2021 Mercedes-Benz CLA </a></li>
                <li><a href="CyberTruck.html">2023 Tesla Cybertruck</a></li>
                <li><a href="RS.html">2022 Audi e-tron GT</a></li>
                <li><a href="Model3.html">2022 Tesla Model 3</a></li>
                <li><a href="I8.html">2020 BMW i8</a></li>
                <li><a href="M5.html">2022 BMW M5</a></li>
            </ul>
      </div>
      <div class="box-2">
          <h3 id="titulli">Explore</h3>
        
          <ul id="cars">
                <li><a href="Mercedes-EQ.html">Formula 1 Mercedes-Benz EQ</a></li>
                <li><a href="Avtr.html">AVTR-Avatar Mercedes-Benz</a></li>
                <li><a href="X7.html">Horsepower of BMW X7</a></li>
                <li><a href="S7.html">Engine of Audi s7</a></li>
                <li><a href="Sales.html">Sale off</a></li>
           
              
            </ul>
      </div>
      <div class="box-3">
          <h3 id="titulli">All about cars</h3>
       
          <ul id="cars">
              <li><a href="https://www.mercedes-benz.com/en/">About Mercedes-Benz</a></li>
              <li><a href="https://www.bmw.com/en/footer/about-bmw-com.html">About BMW.com</a></li>
              <li><a href="https://www.audiusa.com/us/web/en.html">Audi.com</a></li>
              <li><a href="https://www.tesla.com/models">Tesla</a></li>
            
          </ul>
      </div>
      <div class="box-4">
          <h3 id="titulli">Visit us on</h3>
        
          <ul id="cars">
              <li><a href="https://www.facebook.com/">Facebook</a></li>
              <li><a href="https://www.instagram.com/">Instagram</a></li>
              <li><a href="https://twitter.com/?lang=en">Twitter</a></li>
              <li><a href="https://www.youtube.com/">YouTube</a></li>
            
          </ul>
      </div>
  </div>

  <div class="footer">
      <p id="text1">?? 2021 GarageAR of Kosovo. All rights reserved..</p>
      <ul id="footer-elements">
          <li><a href="">Terms of service</a></li>
          <li><a href="">Privacy statement</a></li>
          <li><a href="">Do not sell my personal information</a></li>
          <li><a href="">Cookie setting</a></li>
          <li><a href="">Contact Us</a></li>
          <li><a href="">Interest based ads</a></li>
          <li><a href="">Recalls</a></li>

      </ul>
      <p id="text2">GarageAR of Kosovo makes efforts to ensure that the information on this page is accurate.
          However, some delays in updating of sold vehicles may occur. Contact your dealer to confirm availability of any vehicle.</p>
  </div>
  </body>

</html>