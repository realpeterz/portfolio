<section class="anchor row" id="portfolio">
    <div class="sprite-ribbon"><h2>Portfolio</h2></div>
    <div class="twelvecol" id="controls">
        <div id="view-switch">
                <ul>
                    <li><a title="Polaroid View" href="#" class="sprite-gallery-view view-active"></a></li>
                    <li><a title="Grid View" href="#" class="sprite-grid-view"></a></li>
                    <li><a title="List View" href="#" class="sprite-list-view"></a></li>
                </ul>
            </div>
        <div id="dropin" title="Drop in here to open live site">
                <div id="dropin-bt">
                    <div id="dropin-ins"><p>DROP TO OPEN</p><p>LIVE SITE</p></div>
                    <div id="browser-detect" class="browser-generic"></div>
                </div>
        </div>
    </div>
    
    
    <div id="showcases" class="clear">
    
            <div id="gallery" class="clear">
            
                <?php
                
                    require_once('mylibs/parse_image.php');

                    $img = new Image();
                    
                    $obj_array = Image::get_images_data("./js/images.json");
                    
                    foreach($obj_array as $i):
                        //$img->init_thumb($i->thumbFile, $i->title)->display();
                        $img->init_thumb_with_fancybox($i)->display();
                        
                    endforeach;
                    
                    
                
                ?>
            
<!--         <?php
    
    
  
      
    $thumb_dir = 'img/thumbshots';
    $orig_dir = 'img/original';
    $stage_width = 1140;
    $stage_height = 400;
    $img_width = 200;
    
    $allowed_types = array('jpg', 'jpeg', 'gif', 'png');
    $file_parts = array();
    $ext = '';
    $title = '';
    $i = 0;
    
    $dir_handle = @opendir($thumb_dir) or die('Something with the image directory!');
    $i = 1;
    
    while ($file = readdir($dir_handle)):

       if($file == "." || $file == "..") continue;
       
       $file_parts = explode('.', $file);
       $ext = strtolower(array_pop($file_parts));
       
       $title = implode('.', $file_parts);
       $title = htmlspecialchars($title);
       
       if (in_array($ext, $allowed_types)):
           $left = rand(40, $stage_width-230);
           $top = rand(0, $stage_height-230);
           $rotate = rand(-40, 40);
       endif;
       
       
           
  ?>     
        <image id="pic-<?php echo $i++; ?>" class="pic"
            src="<?php echo $thumb_dir.'/'.$file; ?>"
            style="
                width: <?php echo $img_width; ?>px;
                top:<?php echo $top;?>px;
                left:<?php echo $left;?>px;
                -moz-transform:rotate(<?php echo $rotate;?>deg); 
                -webkit-transform:rotate(<?php echo $rotate;?>deg);
                -o-transform:rotate(<?php echo $rotate;?>deg);
                -ms-transform:rotate(<?php echo $rotate;?>deg)
                transform:rotate(<?php echo $rotate;?>deg);"
            title="<?php echo $title;?>"
        
        />
        
  <?php         
  
    endwhile;
    
    closedir($dir_handle);
       
   ?> -->
            
        </div> <!-- end of gallery -->
    
    <!--  div#list-view>div.threecol*8>img[src="http://placehold.it/249x200"].thumb -->
           
        <div id="grid-view">
            <div class="threecol"><img src="http://placehold.it/249x200" alt="" class="thumb" /></div>
            <div class="threecol"><img src="http://placehold.it/249x200" alt="" class="thumb" /></div>
            <div class="threecol"><img src="http://placehold.it/249x200" alt="" class="thumb" /></div>
            <div class="threecol last"><img src="http://placehold.it/249x200" alt="" class="thumb" /></div>
            <div class="threecol"><img src="http://placehold.it/249x200" alt="" class="thumb" /></div>
            <div class="threecol"><img src="http://placehold.it/249x200" alt="" class="thumb" /></div>
            <div class="threecol"><img src="http://placehold.it/249x200" alt="" class="thumb" /></div>
            <div class="threecol last"><img src="http://placehold.it/249x200" alt="" class="thumb" /></div>
        </div>
        

        
    </div> <!-- end of showcases -->
    
   
    

    

</section>
