<?php

    require_once('mylibs/phpQuery.php');

?>
<?php
  #doc
            #    classname:    Image
            #    scope:        PUBLIC
            #
            #/doc
            
            class Image 
            {
                #    internal variables 
                private $thumb_dir;
                private $orig_dir;
                private $stage_width;
                private $stage_height;
                private $img_width;
                // arguments
                public $thumb_src;
                public $orig_src;
                public $title;
                public $subtitle;
                public $html;
               
                #    Constructor
                public function __construct ( array $config = array() )
                {
                    $this->thumb_dir = array_key_exists('thumb_dir', $config) ? $config['thumb_dir']: "img/thumbshots";
                    $this->orig_dir = array_key_exists('orig_dir', $config) ? $config['orig_dir']: "img/snapshots";
                    $this->stage_width = array_key_exists('stage_width', $config) ? $config['stage_width'] : 1140;
                    $this->stage_height = array_key_exists('stage_height', $config) ? $config['stage_height'] : 400;
                    $this->thumb_width = array_key_exists('thumb_width', $config) ? $config['thumb_width'] : 200;
                    
                }
                
                public static function get_images_data($json_path)
                {
                    $str = file_get_contents($json_path);
                    $obj_array = json_decode($str);
                    return $obj_array;
                }
                
                private function _rand_style(  array $offset_x=array(40, 230), array $offset_y=array(0, 230) )
                {
                   $browser_prefixes = array('-moz-', '-webkit-', '-ms-', '-o-', '');
                   $left = rand($offset_x[0], $this->stage_width-$offset_x[1]);
                   $top = rand($offset_y[0], $this->stage_height-$offset_y[1]);
                   $rotate = rand(-40, 40);
                   $style = "width:".$this->thumb_width."px;".
                            "top:".$top."px;".
                            "left:".$left."px;";
                    
                    foreach ( $browser_prefixes as $prefix):
                        $style = $style.$prefix."transform:rotate($rotate"."deg);";
                    endforeach;
                    
                    return $style;
                }
                
                public function init_thumb($obj)
                {
                    $this->thumb_src = $this->thumb_dir.'/'.$obj->thumbFile;
                    $this->orig_src =$this->orig_dir.'/'.$obj->originalFile;
                    $this->title = $obj->title;
                    $thumb = phpQuery::newDocumentHTML("<img src='$this->thumb_src' alt='$this->title' title='$this->title' />");
                    $this->html = $thumb['img']->attr('style','width:'.$this->thumb_width.'px;')->addClass('thumb');
                    
                    return $this;
                }
                
                public function init_rand_thumb_with_fancybox( $obj )
                {
                    $style = $this->_rand_style();
                    $this->thumb_src = $this->thumb_dir.'/'.$obj->thumbFile;
                    $this->orig_src =$this->orig_dir.'/'.$obj->originalFile;
                    $this->title = $obj->title;
                    $thumb = phpQuery::newDocumentHTML("<img src='$this->thumb_src' alt='$this->title'/>");
                    $anchor =  phpQuery::newDocumentHTML("<a href='$this->orig_src' title='$this->title'></a>");
                    $thumb = $thumb['img']->attr('style', $style)->addClass('pic')->attr('data-livesite', $obj->url); 
                    $this->html = $anchor['a']->addClass('fancybox')->append($thumb);
                    
                    
                    return $this;
                }
                
                public function display()
                {
                    echo $this->html;
                }    
            
              }
            ###
            
            
            
            
            
