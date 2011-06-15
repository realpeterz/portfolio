<?php

    if (!ini_get('display_errors')) {
        ini_set('display_errors', 1);
    }

    
    $partials= array( 'header', 'nav', 'intro', 'portfolio', 'resume', 'contact', 'footer' );
    foreach ( $partials as $partial )
    {
        require_once( 'views/'.$partial.'.php' );
    }
?>
