//--------------------------------------------------------
// javascript slide show "clicker"
// v 4.2 April 2004
// created by alan levine, maricopa community colleges
// alan.levine@domail.maricopa.edu                                  
// http://www.mcli.dist.maricopa.edu/proj/jclicker/
// 
/* GNU General Public License 
Copyright (C) 2004 Alan Levine
This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details
http://www.gnu.org/licenses/gpl.html
*/

//--------------------------------------------------------
// This external .js file contains all of the editable 
// configuration data for a jClicker slide show. It is 
// the only file you should edit. Line 17 of your 
// clicker.html file should link to this file as a linked 
// Javascript source file

// Be careful of all items in single quotes; single quotes
// or apostrophes intended for display must be entered as:
//                \'
// All JavaScript command lines must end in a semi-colon


// These are data holders for your slide show; do not touch
var slides = new Array();
var menus = new Array();
var cap = new Array();    
var ic = 0;



//  Below are the 7 sections that are needed to customize
//  the slide show.

//--------------------------------------------------------
// START OF CONFIGURATION AREA
//--------------------------------------------------------

//--------------------------------------------------------
//  (1) SET UP THE SLIDES
//  The slides are set up in order with data stored in
//  arrays. The variable 'ic' is a counter that keeps
//  track of your data. You will need to enter the
//  data for your slide show in sets of 4 lines as
//  explained below. All data must be enclosed in
//  single quotes and end with a semi-colon; if you
//  need a single quote in your menu or caption, use:
//     \'

//  (a) First increase the slide counter:
//      ic++;

//  (b) Each slide needs an associated slide image
//  that is inside the "images" folder, e.g.
//      slides[ic] = 'coolphoto.jpg';
//
//  (c) The menus array holds the text  that will appear in 
//  the lower pop-up menu to identify each slide (these 
//  should be kept to a short length so the menu does not 
//  grow overly wide), e.g.
//      menus[ic] = 'My Cool Menu Name';
//
//  (d) Finally, the cap array holds the text for the image
//  caption (if the slide source is HTML, this string
//  is ignored, so assign blank values of "" to save space):
//      cap[ic] = 'This is the caption for my cool photo.';

//  This a single slide is set up by this group of code:
//      ic++;
//      slides[ic] = 'coolphoto.jpg';
//      menus[ic] = 'My Cool Menu Name';
//      cap[ic] = 'This is the caption for my cool photo.';

//  The order of the slide show is the order in which the 4
//  line data is written below; so you can re-order your slides
//  simply by cutting and pasting the 4 lines of code.

  
// --------- start the slide data ------------------------//

ic++;
slides[ic] = 'Laurel-Branch.jpg';
menus[ic] = 'Ramo de Laurel';
cap[ic] = '<p style="margin-top: 0" align="center"><b><font face="Times New Roman" color="#6699FF" size="5">Ramo de Laurel - Grinalda</font></b></p><p style="margin-top: 0" align="justify"><b><font size="3" face="Times New Roman" color="#6699FF">As folhas de loureiro no s�mbolo das Na��es Unidas s�o utilizadas pelos Ma�ons e h� 33 se��es no c�rculo. O logotipo � azul, uma cor Ma��nica, como nos Graus Azuis da Ma�onaria. O s�mbolo da Uni�o europ�ia tamb�m � azul. A inspira��o para o "arranjo" ao redor do logotipo da ONU pode ser vista facilmente no s�mbolo dos Ma�ons.</font></b></p>';

ic++;
slides[ic] = 'Rennes-le-Chateau.jpg';
menus[ic] = 'Rennes le Chateau';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Rennes le Chateau</font></b></p><p class="MsoNormal" align="justify"></p><p class="MsoNormal" align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">Voc� encontra os quadrados pretos e brancos dos Ma�ons e dos Templ�rios (e de uma infinidade  de outros grupos da Irmandade) no uniforme de for�as de pol�cia brit�nicas e americanas (e de muitos outros pa�ses), como tamb�m nos ch�os de grandes catedrais e na igreja em Rennes-le-Chateau.</span></b></font></p>';

ic++;
slides[ic] = 'Horned-God.jpg';
menus[ic] = 'Deus de Chifres';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Deus de Chifres</font></b></p><p class="MsoNormal" align="justify"><b><font size="3" color="#6699FF">Quando os presidentes americanos p�em a m�o no peito enquanto ouvem o hino nacional eles est�o executando parte do ritual Ma��nico. Americanos que op�em os Ma�ons fazem o mesmo porque eles n�o entendem o simbolismo. Outro sinal de m�o para a Irmandade � p�r seu bra�o no ar com os dois dedos exteriores apontando pra cima e os dois dedos medianos segurados pelo dedo polegar. Este � o s�mbolo do Diabo ou Baphomet, os chifres de Nimrod (os reptilianos reais), e este � o sinal que Bill Clinton fez depois do seu primeiro discurso como presidente em janeiro de 1993.</font></b></span>';

ic++;
slides[ic] = 'Baphomet.jpg';
menus[ic] = 'Baphomet';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Baphomet<span style="mso-spacerun: yes">&nbsp;</span></font></b></p><p class="MsoNormal" align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">Baphomet tamb�m � simb�lico do Observador-reptiliano, Azazel, a cabra ou cabra-dem�nio em alguns manuscritos judeus.</span></b></font></p>';

ic++;
slides[ic] = 'Double-Square.jpg';
menus[ic] = 'O Quadrado Duplo (Double Square)';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">O Quadrado Duplo (Double Square)</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">O quadrado duplo, um quadrado em cima de outro em qualquer forma, � mais simbolismo de sociedade secreta. No idioma secreto, um quadrado por si s� significa controle do que � certo e justo. Disto n�s obtemos frases como "fair and square" (justo e honesto) e "a square deal" (uma transa��o honesta). Um quadrado em cima de um outro significa controle de tudo aquilo que � certo e de tudo aquilo que � errado, de tudo que � justo e de tudo que � injusto, de tudo que � positivo e de tudo que � negativo. Em outras palavras: "n�s controlamos tudo". O quadrado duplo, ou estrela de oito pontas, pode ser visto no sal�o de entrada no cora��o do Parlamento brit�nico e uma longa lista de for�as de pol�cia mundiais cercam os seus distintivos com o mesmo s�mbolo.</span></b></font>';

ic++;
slides[ic] = 'TransNational-Companies.jpg';
menus[ic] = 'Companhias Transnacionais';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Companhias Transnacionais</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">O "chaveir�o" � outra vers�o disto e voc� precisa olhar para ele como simb�lico de duas caixas tridimensionais, uma sobre a outra, e n�o como uma imagem de uma dimens�o. Esse � o logotipo da companhia de petr�leo da Irmandade, Chevron, e as outras corpora��es transnacionais e de petr�leo s�o um labirinto de s�mbolos assinalando o idioma secreto da for�a que controla o mundo.</span></b></font>';

ic++;
slides[ic] = 'Double-Cross.jpg';
menus[ic] = 'A Cruz Dupla';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">A Cruz Dupla</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">A cruz dupla da Casa de Lorraine � a origem da frase "to double cross" algu�m, os manipular. Este mesmo s�mbolo pode ser achado na gigante do petr�leo Rockefeller-guiada, Exxon.</span></b></font>';

ic++;
slides[ic] = 'Oil-Logo.jpg';
menus[ic] = 'Companhias de Petr�leo - Logotipos';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Companhias de Petr�leo</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">A Texaco tem o pentagrama dentro de um c�rculo com o T quadrado da Ma�onaria. O s�mbolo da  Atlantic Richfield Oil (ARCO) � uma pir�mide com o topo incompleto se olhado de acima e a Amoco tem a tocha iluminada.</span></b></font>';

ic++;
slides[ic] = 'Sun-Life.jpg';
menus[ic] = 'Sun Life';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Sun Life</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">Olhe para os nomes de algumas das companhias de seguro da Irmandade: Sun Alliance, Sun Life, Britannic Assurance, Eagle Star. O edif�cio da Sun Alliance no Circo Piccadilly, Londres, � decorado com dois pilares, duas chamas, e uma est�tua de Britannia (a Barati dos Fen�cios) segurando o seu escudo com o c�rculo e a cruz, o antigo s�mbolo do Sol! Tamb�m note os nomes dados para espa�onaves, aeronaves militares, e navios como Hermes, Nimrod, Atlantis, e Columbia. Todos simb�licos para a Irmandade.</span></b></font>';

ic++;
slides[ic] = 'Fleur-de-lis.jpg';
menus[ic] = 'Flor-de-lis';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Flor-de-lis</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">A Flor-de-lis � outro s�mbolo antigo que � extensamente usado hoje, particularmente pela realeza, e voc� a encontra nas cercas ao redor de muitos edif�cios. Pode ser encontrada em um dos port�es para a Casa Branca.</span></b></font>';

ic++;
slides[ic] = 'Fleur-di-lis-Symbols.jpg';
menus[ic] = 'Flor-de-lis - S�mbolos';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Fran�a</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">A flor-de-lis era usada pelos Merov�ngios na Fran�a e, aparte de sua conex�o com eles, simboliza o deus babil�nico Nimrod, e Lilith - o nome que simboliza a linhagem gen�tica reptiliana.</span></b></font>';

ic++;
slides[ic] = 'Rose-Symbol.jpg';
menus[ic] = 'A Rosa';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">A Rosa</font></b></p><p align="center"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">A rosa vermelha � outra assinatura da Irmandade.</span></b></font>';

ic++;
slides[ic] = 'Rosy-Cross.jpg';
menus[ic] = 'A Cruz R�sea';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">A Cruz R�sea</font></b></p><p align="center"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">A Rosa � exibida freq�entemente com ou em uma cruz.</span></b></font>';

ic++;
slides[ic] = 'Bell-Baal.jpg';
menus[ic] = 'Bell - Baal';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Baal - Bel - Belial - Bell</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">O sino (bell), como no Sino da Liberdade Americana, � simb�lico de Bel, Bil ou Baal, o deus do Sol Ariano do mundo antigo.</span></b></font>';

ic++;
slides[ic] = 'Bell-Town.jpg';
menus[ic] = 'Cidade de Bell';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Correla��o de Bell</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">Um interessante jogo de circunst�ncias? A imagem � do Pal�cio de justi�a do Condado Bell (Baal) no Texas, situado em Belton (Baal-Town, Cidade de Baal). A c�pula ou bell tower (Torre de Baal ou Ba-bel) no pal�cio de justi�a foi restaurado recentemente pelas Ind�strias Campbellville (Camp Baal?). Perto do pal�cio de justi�a do condado Baal est� o "Bail (Baal) Bondsman", o Fiador. A Cidade de Baal � o centro de autoridade do condado e forma uma trindade com duas outras; sua cidade irm� � Templo (Templo do Condado de Baal). O outro membro do trio � Killeen (Killing - Matando?); local do infame Massacre Killeen onde um louco (mente-controlado por Baal) assassinou 24 pessoas em uma lanchonete durante uma festa. Baal Killeen � onde fica a instala��o de controle mental conhecida como Fort Hood. Esta �rea do Texas est� a aproximadamente 30 milhas de Waco (hueco - o buraco ou depress�o) que � o local de um outro massacre, executada pelo Coro do Sino da Liberdade ou ATF contra David Koresh e os seus seguidores. Tamb�m � em Waco que encontramos a Universidade de Treinamento Baylor da Illuminati. Os profetas de Baal certamente venceram Elias no Texas.</span></b></font>';

ic++;
slides[ic] = 'A-Dime.jpg';
menus[ic] = 'Moeda de dez centavos';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Moeda de dez centavos</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">O s�mbolo mais �bvio da inten��o da Irmandade � o "fasces" do qual n�s obtemos a palavra, fascismo. Voc� pode ver isto ao fundo de um s�mbolo da "liberdade" dos Estados Unidos e no Edif�cio do Congresso.</span></b></font>';

ic++;
slides[ic] = 'Fasces.jpg';
menus[ic] = 'Fasces';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Fasces</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">Fasces era um s�mbolo amplamente usado no Imp�rio romano e consiste de varas amarradas ao redor de um machado. Este machado � a origem do termo Poderes do Eixo para os pa�ses fascistas na Segunda Guerra Mundial. O simbolismo s�o as pessoas e pa�ses atados a uma ditadura centralizada, o machado. Essa � uma descri��o perfeita da Uni�o europ�ia na qual as na��es da Europa s�o subordinadas a leis decididas e impostas pelos ditadores n�o-eleitos em Bruxelas. A Uni�o europ�ia verdadeiramente � um estado fascista em concord�ncia com o seu s�mbolo fascista.</span></b></font>';

ic++;
slides[ic] = 'Illuminati-Symbols.jpg';
menus[ic] = 'S�mbolos da Illuminati';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">S�mbolos da Illuminati</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">Estes s�o apenas alguns exemplos do simbolismo da Illuminati ao redor de n�s. Mas eu quero enfatizar que simbolismo n�o tem que ser negativo. Simplesmente � uma forma de comunica��o e tamb�m foi usado para manter o conhecimento vivo por aqueles que t�m uma inten��o positiva para com a humanidade. Conhecimento � neutro; � o uso dele que � positivo ou negativo.</span></b></font>';

ic++;
slides[ic] = '../../inde/nova_era2.gif';
menus[ic] = 'Final da Parte 4';
cap[ic] = '<IMG SRC="torch1.gif" width=50 height=100><br><br><p class="MsoNormal" align="center"><b><font color="#6699FF" size="6">Fim da Parte 4</font></b></p><p class="MsoNormal" align="center"><b><font color="#6699FF" size="4">Este � o fim da s�rie - Obrigado pela visita!</font></b></p><p style="text-indent: 15px; margin-left: 10; margin-right: 10; margin-top: 0" align="center"><a href="../simbolismo.htm" target="_parent"><b><font size="4">Menu de Artigos da Se��o Simbolismo</font></b></a></p><p style="text-indent: 15px; margin-left: 10; margin-right: 10; margin-top: 0" align="center"><a href="../index.html" target="_top"><b><font size="4">P�gina Principal</font></b></a></p>';

// --------- end the slide data --------------------------//


//--------------------------------------------------------
//  (2) SET UP THE TITLE PAGE
//  Enter a name for the slide show and a line for the
//  credits. Avoid funky HTML here, they go in h1, h2 tags
//  and are formatted in style sheets

var showTitle = 'SIMBOLISMO';
var showCredits = '<p style="margin-bottom: 0">A LINGUAGEM SECRETA DA ILLUMINATI</p><p style="margin-top: 0; margin-bottom: 0">PARTE 4</p><br><p style="margin-top: 0">Por David Icke</p>';

//--------------------------------------------------------
//  (3) SET THE AUTOSHOW DELAY TIME    


// To set the default that a slide show automatically starts
// in auto show mode, set auto_start = true

var auto_start = false;

//  This is the minimum amount of time between changing of 
//  slides when we are in automatic mode. Values are in 
//  milliseconds, multiple the number of seconds desired
//  by 1000. If you are unsure, try a value of 8000.

var delay_time = 8000;


//--------------------------------------------------------
//  (4) SET THE BACKGROUND MODE   
//  This variable indicates whether to use a light background
//  for the slide screen (light_mode = true;) or a dark
//  background (light_mode = false;)

var light_mode = true;

//--------------------------------------------------------
//  (5) SET THE CAPTION LOCATION  
//  This variable controls the placement of the caption
//  relative to the picture. Valid values are

//    1   above the picture  
//    2   left of the picture
//    3   right of the picture
//    4   below the picture

var cap_align = 4;

//--------------------------------------------------------
//  (6) SET THE STARTING SLIDE 
//  This variable can indicate which is the first slide
//  to show. the default is 0 which starts with the title
//  page

var show_start = 0;

//--------------------------------------------------------
//  (7) OPTIONAL BUTTONS
//  Set the following variables to control the display
//  of the buttons in the clicker control bar. Values of
//  "true" will display the button; 'false' will hide

//  CLOSE button is for allowing closing of the browser
//  window- use only if the link to the slide show opens
//  in a new window
var close_button = true;

// HELP button displays a pop-up help window that explains
// the jCLicker buttons
var help_button = true;

// RESIZE buttons allow users to enlarge or reduce the size
// of a displayed image
var resize_button = true;

// AUTOSHOW button allows user to set the slide show to
// automatically advance
var auto_button = true;

//--------------------------------------------------------
//  (8) SHOW IMAGE FILE NAME
//  Use while reviewing images to display the file name
//  appended to the captions. A value of
//  "true" will display the filename; 'false' will hide
//  (for normal show mode, use false)

var show_file = false;

//--------------------------------------------------------
// END OF CONFIGURATION AREA
//--------------------------------------------------------
