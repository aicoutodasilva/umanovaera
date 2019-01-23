//--------------------------------------------------------
// javascript slide show "clicker"
// v 4.0 January 2004
// created by alan levine, maricopa community colleges
// alan.levine@domail.maricopa.edu                                  
// http://www.mcli.dist.maricopa.edu/proj/jclicker/
// 
// GNU General Public License 
// Copyright (C) 2004 Alan Levine
// See URL above for license
//--------------------------------------------------------

// CLICKER CONTROL
// This code is called to dynamically construct the jClicker 
// controller frame and is dependent on variable settings in
// the myshow.js file
//--------------------------------------------------------


// all enclosed by a single row table
document.write('<table border="0" cellpadding="0" cellspacing="6" align="center"><tr>');

// Create blank space on the left side to balance extra buttons on the right
// based on button settings in the myshow.js file

leftw =  24*close_button + 24*help_button + 48*resize_button + 24*auto_button;
if (leftw > 0) document.write('<td width="' + leftw  + '">&nbsp;</td>');

/*
	Note- you can customize the left to write order of the slide buttons
	by cutting/pasting each section below noted by (*). You may run into
	JavaScript issues if you are not careful! And if your text editor inserts
	RETURN characters where they do not belong.
	
	Default order is:
	  1. previous slide
	  2. drop down menu
	  3. auto play check box (#)
	  4. next slide
	  5. image resize  (#)
	  6. close window  (#)
	  7. pop up help   (#)
	 
	     
   (#) buttons visibility is controlled by settings in the myshow.js file
*/

// (*) previous slide button
document.write('<td valign="top"><a href="#" onClick="slideClick(-1); return false" onMouseOver="window.status=\'Slide anterior\'; return true" OnMouseOut="clear_msg()"><img src="buttons/left.gif" alt="Voltar" width="50" height="50" border=0 name="leftb"></a></td>\n');




// (*) drop down menu for slide selection
document.write('<td valign="bottom" align="center"><select name="gomenu" onChange="goSlide()">');
document.write('<option>Simbolismo Parte I - Introdução...</option>');
for (i=1; i<menus.length; i++) {	
	document.write('<option>' + i + '. ' + menus[i] + '</option>');
}
document.write('</select><br><img src="buttons/loading_blink.gif" alt="carregando..." align="left" width="60" height="12" name="lstat"><span class="copy"><a href="http://www.mcli.dist.maricopa.edu/proj/jclicker/" target="_new">jclicker &copy;2004</a></span></td>\n');

// (*) check box for the auto play 
if (auto_button) {

// (*) start show in auto play mode
	if (auto_start) {
		document.write('<td valign="bottom" bgcolor="#333333" class="label"><input type="checkbox" name="auto" VALUE="on" onClick="autoShow()" checked="checked"><br>auto</td>\n');
	} else {
		document.write('<td valign="bottom" bgcolor="#333333" class="label"><input type="checkbox" name="auto" VALUE="0" onClick="autoShow()"><br>auto</td>\n');
	}
}



// (*) next slide button
document.write('<td valign="top"><a href="#" onClick="slideClick(1); return false" onMouseOver="window.status=\'Próximo slide\'; return true" OnMouseOut="clear_msg()"><img src="buttons/right.gif" alt="Avançar" width="50" height="50" border=0 name="rightb"></a></td>\n');



// (*) image sizing buttons (hide from NetScape which cannot do this)
if (resize_button)  {
	document.write('<td valign="bottom" class="label" align="center" nowrap><a href="#" onClick="resize_image(1.25); return false" onMouseOver="window.status=\'Aumentar imagem\'; return true" OnMouseOut="clear_msg()"><img src="buttons/bigger.gif" alt="+ Zoom" width="32" height="24" border="0" hspace="3"></a><a href="#" onClick="resize_image(0.8); return false" onMouseOver="window.status=\'Diminuir imagem\'; return true" OnMouseOut="clear_msg()"><img src="buttons/smaller.gif" alt="- Zoom" width="32" height="24" border="0" hspace="3"></a><br>+Zoom -Zoom</td>');
	}


//  (*) close window button
if (close_button) {
	document.write('<td valign="bottom" class="label" align="center"><a href="#" onClick="parent.self.close(); return false" onMouseOver="window.status=\'Encerrar a apresentação de slides\'; return true" OnMouseOut="clear_msg()"><img src="buttons/close.gif" alt="Fechar Janela" width="24" height="24" border=0 name="close" vspace="2"></a><br>Fechar</td>');
}

//  help button
if (help_button) {
document.write('<td valign="bottom" class="label" align="center"><a href="#" onClick="window.open(\'help.html\', \'helper\', \'scrollbars,status,width=620, height=500\');return false" onMouseOver="window.status=\'help for slide show controls\'; return true" OnMouseOut="clear_msg()"><img src="buttons/help.gif" alt="Ajuda (em Inglês)" width="24" height="24" border="0"  vspace="2"></a><br>help</td>\n');
}



// close the table
document.write('</tr></table>\n');

