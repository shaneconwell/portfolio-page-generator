

function generateHTML(data){

    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
    
        <title> ${data.name} </title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
        <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
        <style>
            body {
                font: 20px Montserrat, sans-serif;
                line-height: 1.8;
                color: #f5f6f7;
            }
    
            p {
                font-size: 16px;
            }
    
            .margin {
                margin-bottom: 45px;
            }
    
            .bg-1 {
                background-color: white;
                color: #ffffff;
            }
    
            .bg-2 {
                background-color: grey;
                color: #ffffff;
            }
            .bg-3 {
                background-color: white;
                color: grey;
            }
    
    
            .container-fluid {
                padding-top: 20px;
                padding-bottom: 20px;
            }
    
            .navbar {
                padding-top: 15px;
                padding-bottom: 15px;
                border: 0;
                border-radius: 0;
                margin-bottom: 0;
                font-size: 12px;
                letter-spacing: 5px;
            }
    
            .navbar-nav li a:hover {
                color: #1abc9c !important;
            }
        </style>
    </head>
    
    <body>
    
        <!-- Navbar -->
        <nav class="navbar bg-1 navbar-default">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#">${data.name}</a>
                </div>
                <div class="collapse navbar-collapse" id="myNavbar">
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="#">WHO</a></li>
                        <li><a href="#">WHAT</a></li>
                        <li><a href="#">WHERE</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    
    
    
        <div class="row">
            
    
            <div class="col-sm-12  text-center" style='background-image:url("https://picsum.photos/1600/300"); background-repeat: no-repeat; background-size: cover;height:200px'>
                <div class="container-fluid " >
               
            </div>
        </div>
        <div class="row">
            
    
            <div class="col-sm-12  bg-2 text-center" >
                <div class="container-fluid" >
                <h3 class="margin">Who Am I?</h3>
                <p>My name is ${data.name}. I am from ${data.location}. </p>
                <p>${data.bio}</p>
                </div>
            </div>
        </div>
    
    
        <!-- Third Container (Grid) -->
        <div class="container-fluid bg-3 text-center">
            <h3 class="margin">Where To Find Me?</h3><br>
            <div class="row">
                <div class="col-sm-4">
                    <a href="${data.linkedIn}">LinkedIn</a>
                    <img src="https://picsum.photos/700/601" class="img-responsive margin" style="width:100%" alt="Image">
                </div>
                <div class="col-sm-4">
                    <a href="${data.github}">GitHub</a>
                    <img src="https://picsum.photos/700/602" class="img-responsive margin" style="width:100%" alt="Image">
                </div>
                <div class="col-sm-4">
                    <a href="${data.portfolio}">Portfolio</a>
                    <img src="https://picsum.photos/700/603" class="img-responsive margin" style="width:100%" alt="Image">
                </div>
            </div>
        </div>
    
        <!-- Footer -->
        <footer class="container-fluid bg-2 text-center">
    
        </footer>
    
    </body>
    
    </html>`
}
module.exports = generateHTML;
