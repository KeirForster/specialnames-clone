<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="special names app">
    <meta name="author" content="Keir Forster">

    <title>Special Names</title>

    <!-- Bootstrap core CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <!-- Custom styles for this template -->
    <link href="app/assets/css/app.css" rel="stylesheet">
</head>

<body>
<div class="wrapper">
    <!-- nav -->
    <header>
        <nav class="bg-dark justify-content-center navbar navbar-dark text-center">
            <a class="navbar-brand text-center" href="#"><strong>Special Names</strong></a>
        </nav>
    </header>

    <main>
        <section class="jumbotron text-center">
            <div class="container">
                <h1 class="jumbotron-heading">Special Names</h1>
                <p class="lead text-muted">Have you ever wanted to pick a name by selecting categories and themes? Look no further, Special Names is at your service.</p>
            </div>
        </section>
        <!-- cards -->
        <section class="bg-light">
            <div id="card-container" class="container bg-light py-5">
                <div class="row justify-content-center">
                    <div class="col">
                        <div id="boy-card" class="card no-select text-center">
                            <div class="card-header text-white">
                                <h4 class="my-0 font-weight-normal">Boy Names</h4>
                            </div>
                            <div class="card-body">
                                <img class="card-img-top img-fluid" src="app/assets/img/baby-boy.png" alt="Card image cap">
                            </div>
                            <div class="card-footer bg-transparent">
                                <button type="button" class="btn btn-lg btn-block" disabled="">Search</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div id="girl-card" class="card no-select text-center">
                            <div class="card-header text-white border-primary">
                                <h4 class="my-0 font-weight-normal">Girl Names</h4>
                            </div>
                            <div class="card-body">
                                <img class="card-img-top img-fluid" src="app/assets/img/baby-girl.png" alt="Card image cap">
                            </div>
                            <div class="card-footer bg-transparent">
                                <button type="button" class="btn btn-lg btn-block" disabled="">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <footer class="text-muted text-center">
        <div class="container">
            <p>© kforster, but please download and customize this site for yourself!</p>
        </div>
    </footer>

    <!-- my scripts -->
    
    <!-- main app -->
    <script src="app/app.module.js"></script>

    <!-- header navbar -->
<!--    <script src="app/layout/app.module.js"></script>-->

    <!-- content -->
    <!--    <script src="app/app.module.js"></script>-->
    
    <!-- angular.js -->
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular-route.min.js"></script>
    
    <!-- Bootstrap core JavaScript -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
            integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
            crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
            integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
            crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
            integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
            crossorigin="anonymous"></script>
</body>
</html>
