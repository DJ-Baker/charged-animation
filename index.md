<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  
  <!-- disable zooming -->
  <meta name="viewport" content="initial-scale=1.0, user-scalable=0" />
  
  <title>Example For A1, part three</title>

  <link rel="stylesheet" href="includes/style.css" media="screen" />
    
  <style media="screen">
    .container {
      width: 75%;
      height: 500px;
      margin: 0 auto 60px;
      border: solid grey;
      position: relative;
      overflow: visible;
      transform-style: preserve-3d;
    }

    .panel {
      width: 200px;
      height: 200px;
      position: absolute;
      opacity: 0.7;
      font-size: 24px;
      font-weight: bold;
      color: white;
      text-align: center;
      background: red;
      transform-style: preserve-3d;      
    }

    .panel2 {
      width: 500px;
      height: 500px;
      position: absolute;
      background-size: 75%;
      background-repeat: no-repeat;
      background-color: transparent;
      background-position: center;
      opacity: 1.0;
      transform-style: preserve-3d;      
    }


    .image {
      background-color: transparent;
      background-size: cover;
      opacity: 1.0;
    }

    .effect {
      background-color: transparent;
      background-size: cover;
      opacity: .5;
    }
  </style>

</head>
<body>

  <h1><center>Simple Character for A1, part two</center></h1>

  <div id="my-character" class="container">
  </div>

  <h1><center>A13 Scene: Hello, Grader!</center></h1>

  <div id="my-scene" class="container">
  </div>

  <script type="module" src="js/app.js"></script>

</body>
</html>
