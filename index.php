<!doctype html>
<!-- paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/ -->
<!--[if lt IE 7 ]> <html class="no-js ie6" lang="en"> <![endif]-->
<!--[if IE 7 ]>    <html class="no-js ie7" lang="en"> <![endif]-->
<!--[if IE 8 ]>    <html class="no-js ie8" lang="en"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>
  <meta charset="utf-8">
  <!-- Always force latest IE rendering engine (even in intranet) & Chrome Frame
       Remove this if you use the .htaccess -->
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

  <title>Austin Web Deveoler/UX designer - Peter Zhang</title>
  <meta name="description" content="">
  <meta name="author" content="">


  <!-- Mobile viewport optimized: j.mp/bplateviewport -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Place favicon.ico & apple-touch-icon.png in the root of your domain and delete these references -->
  <link rel="shortcut icon" href="/favicon.ico">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">

  <!-- The 1140px Grid - http://cssgrid.net/ -->
  <link rel="stylesheet" href="css/1140.css" type="text/css" media="screen" />
  
  <!-- 1140px Grid styles for IE -->
  <!--[if lte IE 9]><link rel="stylesheet" href="css/1140_ie.css" type="text/css" media="screen" /><![endif]-->
  
  <!-- CSS: implied media="all" -->
  <link rel="stylesheet" href="css/css/style.css?v=2">
  <link href='http://fonts.googleapis.com/css?family=Special+Elite' rel='stylesheet' type='text/css'>
  
  <!-- Blueprint IE compatibility served for legacy versions of IE -->
  <!--[if lt IE 8]><link rel="stylesheet" href="css/stylesheets/ie.css" type="text/css" media="screen, projection"><![endif]-->

  <!-- All JavaScript at the bottom, except for Modernizr which enables HTML5 elements & feature detects -->

  <script src="js/libs/modernizr-1.7.min.js"></script>

	<!--css3-mediaqueries-js - http://code.google.com/p/css3-mediaqueries-js/ - Enables media queries in some unsupported browsers-->
  <script type="text/javascript" src="js/libs/css3-mediaqueries.js"></script>

</head>
<body>

    <header class="container">
          <div class="row">
            <div class="sixcol">
                <h1 id="logo" class="ir sprite-logo">Peter Zhang :: Austin Web Developer/UX designer</h1>
                <div class="sprite-dialog" id="dialog">Howdy!</div>
            </div>
            <nav class="sixcol last">
                <ul id="nav">
                  <li><div class="sprite-home"></div>Home</li>
                  <li><div class="sprite-portfolio"></div>Portfolio</li>
                  <li><div class="sprite-resume"></div>Resume</li>
                  <li><div class="sprite-contact"></div>Contact</li>
                </ul>
            </nav>
          </div>
    </header>
	  
	 <div id="content">
	   <section class="anchor" id="home">
	        <div class="sprite-ribbon">Web developer/UX designer</div> 
	   </section>
	   <section class="anchor" id="portfolio">
	        <div class="sprite-ribbon">Portfolio</div>
	   </section>
	   <section class="anchor" id="resume">
	        <div class="sprite-ribbon">Resume</div>
	   </section>
	 </div>

	 
	 <footer class="anchor" id="contact">
	   <div id="footer-wrap" class="row"></div>
	 </footer>

<!-- <footer class="container">
	<div class="row">
		<div class="threecol">
			<p>Three columns</p>
		</div>
		<div class="sixcol">
			<p>Six columns</p>
		</div>
		<div class="threecol last">
			<p>Three columns</p>
		</div>
	</div>
</footer> -->


</body>




  <!-- JavaScript at the bottom for fast page loading -->

  <!-- Grab Google CDN's jQuery, with a protocol relative URL; fall back to local if necessary -->
  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js"></script>
  <script>window.jQuery || document.write("<script src='js/libs/jquery.min.js'>\x3C/script>")</script>


  <!-- scripts concatenated and minified via ant build script-->
  <script src="js/plugins.js"></script>
  <script src="js/script.js"></script>
  <!-- end scripts-->


  <!--[if lt IE 7 ]>
    <script src="js/libs/dd_belatedpng.js"></script>
    <script>DD_belatedPNG.fix("img, .png_bg"); // Fix any <img> or .png_bg bg-images. Also, please read goo.gl/mZiyb </script>
  <![endif]-->


  <!-- mathiasbynens.be/notes/async-analytics-snippet Change UA-XXXXX-X to be your site's ID -->
  <script>
    var _gaq=[["_setAccount","UA-XXXXX-X"],["_trackPageview"]];
    (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];g.async=1;
    g.src=("https:"==location.protocol?"//ssl":"//www")+".google-analytics.com/ga.js";
    s.parentNode.insertBefore(g,s)}(document,"script"));
  </script>

</body>
</html>

