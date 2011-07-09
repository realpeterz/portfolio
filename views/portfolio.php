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
                    <div id="browser-detect" class="browser"></div>
                </div>
        </div>
    </div>
    
    
    <div id="showcases" class="clear">
    
        <div id="gallery" class="clear">
                <?php              
                    require_once('mylibs/parse_image.php');
                    $obj_array = Image::get_images_data("./js/images.json");                   
                    $img = new Image();                    
                    foreach($obj_array as $i):
                        $img->init_rand_thumb_with_fancybox($i)->display();
                    endforeach;             
                ?>         
        </div> <!-- end of gallery -->
           
        <div id="grid-view">
            
            <?php
                $config['thumb_width'] = 249;
                $img = new Image($config);        
                foreach($obj_array as $index => $m):
                    $img->init_thumb($m);
            ?>
                   <div class="thumb-wrap threecol <?php if ( ($index+1)%4 === 0 ) echo 'last'?>">
                        <a class="magnifier ir" href="<?php echo $img->orig_src; ?>" title="<?php echo $img->title; ?>">See a bigger screenshot</a>
                            <?php $img->display(); ?>
                        <a class="external-link ir" href="<?php echo $m->url; ?>" target="_blank" title="live site"></a>
                   </div>
            
            <?php endforeach;  ?>
        </div>
        
        <div id="list-view">
            <ul>
            <?php 
                $config['thumb_width'] = 200; 
                $img = new Image($config);            
                foreach($obj_array as $index => $m):
                    $img->init_thumb($m); 
            ?>
                <li class="list-item clear">
                    <a class="fancybox-alt" title="<?php echo $m->title; ?>" href="<?php echo $img->orig_src; ?>"><?php $img->display(); ?></a>
                    <div class="list-content">
                        <h2><?php echo $img->title;  ?></h2>
                        <p class="technology"><?php echo $m->technology; ?></p>
                        <p class="description"><?php echo $m->description; ?></p>
                        <a href="<?php echo $m->url; ?>" class="livesite" target="_blank">Live Site</a>
                    </div>
                </li>
            <?php endforeach; ?>  
            </ul>      
        </div>
    </div> <!-- end of showcases -->
    
</section>
