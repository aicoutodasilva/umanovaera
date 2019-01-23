//--------------------------------------------------------
// javascript slide show "clicker"
// v 4.1 January 2004
// created by alan levine, maricopa community colleges
// alan.levine@domail.maricopa.edu                                  
// http://www.mcli.dist.maricopa.edu/proj/jclicker/
// 
// GNU General Public License 
// Copyright (C) 2004 Alan Levine
// See URL above for license
//--------------------------------------------------------

// CLICKER FUNCTIONS
// These are all of the general routines to respond to
// slide show interaction and set up. DO not edit unless
// you know your way in and out of JavaScript.
//--------------------------------------------------------


//--------------------------------------------------------
// PRELOAD IMAGES
// Preload images that are used for button swapping.
// Do not touch. Nothing to edit here.

var imgLoaded = 0;
var slide_count = 0;

if (!my_img_path) {
	var my_img_path = 'images/';
}

// Check for undefined variables, set defaults
if (typeof close_button == 'undefined') {
	close_button = false;
}

if (typeof help_button == 'undefined') {
	help_button = true;
}

if (typeof resize_button == 'undefined') {
	resize_button = true;
}

if (typeof auto_button == 'undefined') {
	auto_button = true;
}

if (typeof auto_start == 'undefined') {
	auto_start = false;
}

if (typeof show_file == 'undefined') {
	show_file = false;
}


if (document.images) {

// left button graphics
    var leftb_on = new Image(); // for the active image
    leftb_on.src = "buttons/left.gif";
    var leftb_off = new Image(); // for the inactive image
    leftb_off.src = "buttons/left_off.gif";
    
// right button graphics    
    var rightb_on = new Image(); // for the active image
    rightb_on.src = "buttons/right.gif";
    var rightb_off = new Image(); // for the inactive image
    rightb_off.src = "buttons/right_off.gif";
 
// loading status images    
    ready_n = new Image();
	ready_n.src = "buttons/loading_blink.gif";
	ready_y = new Image();
	ready_y.src = "buttons/loading_ready.gif"
}

// set up linked style sheets and html header

if (light_mode) {
	var myHeader = '<html><head><link rel="stylesheet" type="text/css" href="light.css"></head><body>';
} else {
    var myHeader = '<html><head><link rel="stylesheet" type="text/css" href="dark.css"></head><body>';
}
			
//--------------------------------------------------------
// SET READY FLAG
// Called when both images have been loaded on main display
// and sets the graphic to indicate state (loaded=1)

function ready_state (s_flag) {
     if (s_flag == 0) {
     	imgLoaded = 0;
     } else {
     	imgLoaded+=s_flag;
     }
     
     if (document.images) {
     	if (imgLoaded > 1) {
			document.images.lstat.src = ready_y.src;
		} else {
			document.images.lstat.src = ready_n.src;
		}
	 }
}	 
 
//--------------------------------------------------------
// SLIDE ADVANCER
// Called from a click on one of the slide buttons
// wDirection is either 1 or -1

function slideClick (wDirection) {
	slide_count = slide_count + wDirection;
	if (slide_count < 0 ) {
		slide_count = 0;
	} else  {
		playSlide(0,0);
	}
}

//--------------------------------------------------------
// SLIDE MENU JUMPER
// Go to arbitrary slide from menu selection

function goSlide () {

// Update the slide counter based upon the menu item selected	
	slide_count = document.control.gomenu.selectedIndex;
		
	if (slide_count == 0) {	
// First menu item resets the show	
		setUp();	
	} else {	
// Play the selected slide	
		playSlide(0,0);
	}
}

//--------------------------------------------------------
// SLIDE PLAYER
// Called from several functions to set up the requested
// slide. Finds the appropriate display file, image
// or HTML, and displays in the top frame

function playSlide (iw,ih) {	

// Check if we tried to go before the first slide
	if (slide_count == 0) {
		slide_count = 1;
		alert ('Este é o primeiro slide!');
	}  else {
	
// Check if we went past the last slide			 
		if (slide_count == slides.length) {
			slide_count = slides.length - 1;
			alert ('Este é o último slide!');
		} else {
		
// Set state of "loading..."
			ready_state(0);	
			
// Set left button image	
			if (slide_count == 1) {
				if (document.images) {
					document.images.leftb.src = leftb_off.src;
				}
            } else {
				if (document.images) {
					document.images.leftb.src = leftb_on.src;
				}
            }
            
// Set right button image	            
            if (slide_count == slides.length - 1) {
				if (document.images) {
					document.images.rightb.src = rightb_off.src;
				}
            } else {
				if (document.images) {
					document.images.rightb.src = rightb_on.src;
				}
            }

			parent.frames[0].document.open();

// Use appropriate linked style sheet for the document header
			parent.frames[0].document.write(myHeader);

// store the caption in a var, write in appopriate table cell		
		

// check for flag to display image file name			
			if (show_file) {
				my_cap = '<p class="cap"><strong>' + cap[slide_count] + '</strong><br />(image file :: ' + slides[slide_count] + ')</p>';
			} else {
				my_cap = '<p class="cap"><strong>' + cap[slide_count] + '</strong></p>';			
			}
			
			parent.frames[0].document.write('<table width="90%" border="0" align="center"><tr>\n');
		
			if (cap_align == 1) {
				parent.frames[0].document.write( '<td align=center>' + my_cap + '</td></tr><tr>');
			} else if  (cap_align == 2) {
				parent.frames[0].document.write( '<td>' + my_cap + '</td>');
			}	
// insert the current image here
			if (iw>0 && ih>0) {
				// resize has been issued to re-write slide with new image dimensions
				parent.frames[0].document.write('<td align="center"><img src ="' + my_img_path + slides[slide_count] + '" width="' + iw + '" height="' +ih + '"  onLoad="parent.frames[1].ready_state(1)" name="stage" id="foto">\n');
			} else {		
				parent.frames[0].document.write('<td align="center"><img src ="' + my_img_path + slides[slide_count] + '"  onLoad="parent.frames[1].ready_state(1)" name="stage" id="foto">\n');	
			}
			
					
			if  (cap_align == 3) {
				parent.frames[0].document.write( '<td>' + my_cap + '</td>');
			}	
		
			if  (cap_align == 4) {
				parent.frames[0].document.write( '</tr><tr><td align=center>' + my_cap + '</td></tr>');
			} else {
				parent.frames[0].document.write( '</tr>\n');
			}
		
			parent.frames[0].document.write( '</table><br><br>');

// Pre-load the next image by inserting it as a 1x1 image	
// but only if the slide does not contain HTML content and we are not on the last slide

			if (slide_count < (slides.length - 1) ) {	
				parent.frames[0].document.write('<img src ="' + my_img_path + slides[slide_count+1] + '" HEIGHT=1 WIDTH=1 onLoad="parent.frames[1].ready_state(1)">\n');	
			} else {				
				ready_state(1);
			}

			parent.frames[0].document.write('</body></html>');
			parent.frames[0].document.close();

// update the menu			
			document.control.gomenu.options.selectedIndex = slide_count;				
		}
	}
}

//--------------------------------------------------------
// AUTOMATIC SLIDE SHOW
// Turns on or off the automatic advance of slides by 
// activation of the checkbox on the jClicker

function autoShow() {
	if (document.control.auto.checked) {
		changeImage();
	} else {	
		timerID = clearTimeout(timerID);
	}
}

//--------------------------------------------------------
// AUTOMATIC SLIDE SHOW
// Controls autoadvance of slides by using Javascript timer
// functions

function changeImage() {
	if (imgLoaded > 1) {
	
// all images are loaded
// increment the counter, check for loop at last slide
		slide_count++;
		if (slide_count == slides.length) {
			slide_count = 1;
		}	
		playSlide(0,0);
		timerID=setTimeout('changeImage()',delay_time);
	} else {

// images still loading, reset timer	
		timerID=setTimeout('changeImage()',1500);
	}
}

//--------------------------------------------------------
// SETUP
// initializes variables for loading and reloading

function setUp() {
// check for starting at a desginated slide	
	if (show_start != 0) {
		slide_count = show_start; 
		show_start = 0;  // reset for next time around
		playSlide(0,0);	
	} else {
	
// set the left button to the "off" graphic
		if (document.images) {
			document.images.leftb.src = leftb_off.src;
		}
     
// reset the slide counter & menu selection        
     	document.control.gomenu.options.selectedIndex = 0;  

// rebuild the title page       
     	parent.frames[0].document.open();

// use appropriate background colors 
		parent.frames[0].document.write(myHeader);    
     		if (light_mode) {
				parent.frames[0].document.write('<div align="center"><br><IMG SRC="../inde/nova_era.gif" width=515 height=60><br><IMG SRC="torch1.gif" ALT= WIDTH=50 HEIGHT=100 onLoad="parent.frames[1].ready_state(2)"></div>\n');
			} else {
				parent.frames[0].document.write('<div align="center"><IMG SRC="buttons/title_d.gif" ALT="slide tray" WIDTH=338 HEIGHT=172 onLoad="parent.frames[1].ready_state(2)"></div>\n');
			}
     	parent.frames[0].document.write('<h1 align="center">' + showTitle + '</h1>');
     	parent.frames[0].document.write('<h2 align="center">' + showCredits + '</h2>');
    	parent.frames[0].document.write('</p></BODY></HTML>');
     	parent.frames[0].document.close(); 
     	
     	if (parent.frames[1].control.auto.value == 'on') {
     		autoShow();
     	}
     	
     }
}

//--------------------------------------------------------
// IMAGE RESIZE
// resizes image based on button click

function resize_image(scalefactor) {
	if (slide_count == 0) {
		alert('Selecione uma imagem antes!');
	} else {
		if (parent.is_nav) {
			// resizee for NetScape browsers must re-write the frame
			new_width = scalefactor * parent.frames[0].document.images[0].width;
			new_height = scalefactor * parent.frames[0].document.images[0].height;
			playSlide(new_width, new_height);
			
		} else {
			// browsers that dynamically rezise images	
			if (parent.frames[0].stage) {
				parent.frames[0].stage.width*=scalefactor;
			}
		}		
	}
}

//--------------------------------------------------------
// CLEAR MESSAGE
// wipes status on mouse leave events

function clear_msg() {
	window.status=''; 
	return true;
}