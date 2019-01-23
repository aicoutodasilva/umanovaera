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
cap[ic] = '<p style="margin-top: 0" align="center"><b><font face="Times New Roman" color="#6699FF" size="5">Ramo de Laurel - Grinalda</font></b></p><p style="margin-top: 0" align="justify"><b><font size="3" face="Times New Roman" color="#6699FF">As folhas de loureiro no símbolo das Nações Unidas são utilizadas pelos Maçons e há 33 seções no círculo. O logotipo é azul, uma cor Maçônica, como nos Graus Azuis da Maçonaria. O símbolo da União européia também é azul. A inspiração para o "arranjo" ao redor do logotipo da ONU pode ser vista facilmente no símbolo dos Maçons.</font></b></p>';

ic++;
slides[ic] = 'Rennes-le-Chateau.jpg';
menus[ic] = 'Rennes le Chateau';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Rennes le Chateau</font></b></p><p class="MsoNormal" align="justify"></p><p class="MsoNormal" align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">Você encontra os quadrados pretos e brancos dos Maçons e dos Templários (e de uma infinidade  de outros grupos da Irmandade) no uniforme de forças de polícia britânicas e americanas (e de muitos outros países), como também nos chãos de grandes catedrais e na igreja em Rennes-le-Chateau.</span></b></font></p>';

ic++;
slides[ic] = 'Horned-God.jpg';
menus[ic] = 'Deus de Chifres';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Deus de Chifres</font></b></p><p class="MsoNormal" align="justify"><b><font size="3" color="#6699FF">Quando os presidentes americanos põem a mão no peito enquanto ouvem o hino nacional eles estão executando parte do ritual Maçônico. Americanos que opõem os Maçons fazem o mesmo porque eles não entendem o simbolismo. Outro sinal de mão para a Irmandade é pôr seu braço no ar com os dois dedos exteriores apontando pra cima e os dois dedos medianos segurados pelo dedo polegar. Este é o símbolo do Diabo ou Baphomet, os chifres de Nimrod (os reptilianos reais), e este é o sinal que Bill Clinton fez depois do seu primeiro discurso como presidente em janeiro de 1993.</font></b></span>';

ic++;
slides[ic] = 'Baphomet.jpg';
menus[ic] = 'Baphomet';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Baphomet<span style="mso-spacerun: yes">&nbsp;</span></font></b></p><p class="MsoNormal" align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">Baphomet também é simbólico do Observador-reptiliano, Azazel, a cabra ou cabra-demônio em alguns manuscritos judeus.</span></b></font></p>';

ic++;
slides[ic] = 'Double-Square.jpg';
menus[ic] = 'O Quadrado Duplo (Double Square)';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">O Quadrado Duplo (Double Square)</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">O quadrado duplo, um quadrado em cima de outro em qualquer forma, é mais simbolismo de sociedade secreta. No idioma secreto, um quadrado por si só significa controle do que é certo e justo. Disto nós obtemos frases como "fair and square" (justo e honesto) e "a square deal" (uma transação honesta). Um quadrado em cima de um outro significa controle de tudo aquilo que é certo e de tudo aquilo que é errado, de tudo que é justo e de tudo que é injusto, de tudo que é positivo e de tudo que é negativo. Em outras palavras: "nós controlamos tudo". O quadrado duplo, ou estrela de oito pontas, pode ser visto no salão de entrada no coração do Parlamento britânico e uma longa lista de forças de polícia mundiais cercam os seus distintivos com o mesmo símbolo.</span></b></font>';

ic++;
slides[ic] = 'TransNational-Companies.jpg';
menus[ic] = 'Companhias Transnacionais';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Companhias Transnacionais</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">O "chaveirão" é outra versão disto e você precisa olhar para ele como simbólico de duas caixas tridimensionais, uma sobre a outra, e não como uma imagem de uma dimensão. Esse é o logotipo da companhia de petróleo da Irmandade, Chevron, e as outras corporações transnacionais e de petróleo são um labirinto de símbolos assinalando o idioma secreto da força que controla o mundo.</span></b></font>';

ic++;
slides[ic] = 'Double-Cross.jpg';
menus[ic] = 'A Cruz Dupla';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">A Cruz Dupla</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">A cruz dupla da Casa de Lorraine é a origem da frase "to double cross" alguém, os manipular. Este mesmo símbolo pode ser achado na gigante do petróleo Rockefeller-guiada, Exxon.</span></b></font>';

ic++;
slides[ic] = 'Oil-Logo.jpg';
menus[ic] = 'Companhias de Petróleo - Logotipos';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Companhias de Petróleo</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">A Texaco tem o pentagrama dentro de um círculo com o T quadrado da Maçonaria. O símbolo da  Atlantic Richfield Oil (ARCO) é uma pirâmide com o topo incompleto se olhado de acima e a Amoco tem a tocha iluminada.</span></b></font>';

ic++;
slides[ic] = 'Sun-Life.jpg';
menus[ic] = 'Sun Life';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Sun Life</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">Olhe para os nomes de algumas das companhias de seguro da Irmandade: Sun Alliance, Sun Life, Britannic Assurance, Eagle Star. O edifício da Sun Alliance no Circo Piccadilly, Londres, é decorado com dois pilares, duas chamas, e uma estátua de Britannia (a Barati dos Fenícios) segurando o seu escudo com o círculo e a cruz, o antigo símbolo do Sol! Também note os nomes dados para espaçonaves, aeronaves militares, e navios como Hermes, Nimrod, Atlantis, e Columbia. Todos simbólicos para a Irmandade.</span></b></font>';

ic++;
slides[ic] = 'Fleur-de-lis.jpg';
menus[ic] = 'Flor-de-lis';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Flor-de-lis</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">A Flor-de-lis é outro símbolo antigo que é extensamente usado hoje, particularmente pela realeza, e você a encontra nas cercas ao redor de muitos edifícios. Pode ser encontrada em um dos portões para a Casa Branca.</span></b></font>';

ic++;
slides[ic] = 'Fleur-di-lis-Symbols.jpg';
menus[ic] = 'Flor-de-lis - Símbolos';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">França</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">A flor-de-lis era usada pelos Merovíngios na França e, aparte de sua conexão com eles, simboliza o deus babilônico Nimrod, e Lilith - o nome que simboliza a linhagem genética reptiliana.</span></b></font>';

ic++;
slides[ic] = 'Rose-Symbol.jpg';
menus[ic] = 'A Rosa';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">A Rosa</font></b></p><p align="center"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">A rosa vermelha é outra assinatura da Irmandade.</span></b></font>';

ic++;
slides[ic] = 'Rosy-Cross.jpg';
menus[ic] = 'A Cruz Rósea';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">A Cruz Rósea</font></b></p><p align="center"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">A Rosa é exibida freqüentemente com ou em uma cruz.</span></b></font>';

ic++;
slides[ic] = 'Bell-Baal.jpg';
menus[ic] = 'Bell - Baal';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Baal - Bel - Belial - Bell</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">O sino (bell), como no Sino da Liberdade Americana, é simbólico de Bel, Bil ou Baal, o deus do Sol Ariano do mundo antigo.</span></b></font>';

ic++;
slides[ic] = 'Bell-Town.jpg';
menus[ic] = 'Cidade de Bell';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Correlação de Bell</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">Um interessante jogo de circunstâncias? A imagem é do Palácio de justiça do Condado Bell (Baal) no Texas, situado em Belton (Baal-Town, Cidade de Baal). A cúpula ou bell tower (Torre de Baal ou Ba-bel) no palácio de justiça foi restaurado recentemente pelas Indústrias Campbellville (Camp Baal?). Perto do palácio de justiça do condado Baal está o "Bail (Baal) Bondsman", o Fiador. A Cidade de Baal é o centro de autoridade do condado e forma uma trindade com duas outras; sua cidade irmã é Templo (Templo do Condado de Baal). O outro membro do trio é Killeen (Killing - Matando?); local do infame Massacre Killeen onde um louco (mente-controlado por Baal) assassinou 24 pessoas em uma lanchonete durante uma festa. Baal Killeen é onde fica a instalação de controle mental conhecida como Fort Hood. Esta área do Texas está a aproximadamente 30 milhas de Waco (hueco - o buraco ou depressão) que é o local de um outro massacre, executada pelo Coro do Sino da Liberdade ou ATF contra David Koresh e os seus seguidores. Também é em Waco que encontramos a Universidade de Treinamento Baylor da Illuminati. Os profetas de Baal certamente venceram Elias no Texas.</span></b></font>';

ic++;
slides[ic] = 'A-Dime.jpg';
menus[ic] = 'Moeda de dez centavos';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Moeda de dez centavos</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">O símbolo mais óbvio da intenção da Irmandade é o "fasces" do qual nós obtemos a palavra, fascismo. Você pode ver isto ao fundo de um símbolo da "liberdade" dos Estados Unidos e no Edifício do Congresso.</span></b></font>';

ic++;
slides[ic] = 'Fasces.jpg';
menus[ic] = 'Fasces';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Fasces</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">Fasces era um símbolo amplamente usado no Império romano e consiste de varas amarradas ao redor de um machado. Este machado é a origem do termo Poderes do Eixo para os países fascistas na Segunda Guerra Mundial. O simbolismo são as pessoas e países atados a uma ditadura centralizada, o machado. Essa é uma descrição perfeita da União européia na qual as nações da Europa são subordinadas a leis decididas e impostas pelos ditadores não-eleitos em Bruxelas. A União européia verdadeiramente é um estado fascista em concordância com o seu símbolo fascista.</span></b></font>';

ic++;
slides[ic] = 'Illuminati-Symbols.jpg';
menus[ic] = 'Símbolos da Illuminati';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Símbolos da Illuminati</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">Estes são apenas alguns exemplos do simbolismo da Illuminati ao redor de nós. Mas eu quero enfatizar que simbolismo não tem que ser negativo. Simplesmente é uma forma de comunicação e também foi usado para manter o conhecimento vivo por aqueles que têm uma intenção positiva para com a humanidade. Conhecimento é neutro; é o uso dele que é positivo ou negativo.</span></b></font>';

ic++;
slides[ic] = '../../inde/nova_era2.gif';
menus[ic] = 'Final da Parte 4';
cap[ic] = '<IMG SRC="torch1.gif" width=50 height=100><br><br><p class="MsoNormal" align="center"><b><font color="#6699FF" size="6">Fim da Parte 4</font></b></p><p class="MsoNormal" align="center"><b><font color="#6699FF" size="4">Este é o fim da série - Obrigado pela visita!</font></b></p><p style="text-indent: 15px; margin-left: 10; margin-right: 10; margin-top: 0" align="center"><a href="../simbolismo.htm" target="_parent"><b><font size="4">Menu de Artigos da Seção Simbolismo</font></b></a></p><p style="text-indent: 15px; margin-left: 10; margin-right: 10; margin-top: 0" align="center"><a href="../index.html" target="_top"><b><font size="4">Página Principal</font></b></a></p>';

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
