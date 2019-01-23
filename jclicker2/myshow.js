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
slides[ic] = 'Stonehenge-Megalith.jpg';
menus[ic] = 'Stonehenge';
cap[ic] = '<p style="margin-top: 0" align="center"><b><font face="Times New Roman" color="#6699FF" size="5">Diagrama das Ruas</font></b></p><p style="margin-top: 0" align="justify"><b><font size="3" face="Times New Roman" color="#6699FF">Os diagramas das ruas das principais cidades s�o projetados de acordo com leis de geometria sagrada, da mesma forma que as grandes catedrais, templos e c�rculos de pedra.</font></b></p>';

ic++;
slides[ic] = 'London-1845.jpg';
menus[ic] = 'Londres - 1845';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">S�mbolos, formas e �ngulos</font></b></p><p class="MsoNormal" align="justify"></p><p class="MsoNormal" align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">Da mesma forma que a Cidade de Londres depois do Grande Fogo de 1666, a nova cidade de Washington DC foi projetada de acordo com estas leis. S�mbolos, formas e �ngulos geram energias diferentes e se voc� entende estes princ�pios voc� pode vibrar o campo de energia de um lugar � freq��ncia vibracional que voc� julga mais satisfat�rio para o que voc� deseja alcan�ar. Qualquer um vivendo ou trabalhando deste campo ser� afetado por ele. Voc� tamb�m pode focalizar energias solares e outras energias astrol�gicas nesse lugar.</span></b></font></p>';

ic++;
slides[ic] = 'Washington-by-LEnfant.jpg';
menus[ic] = 'Washington - Por L�Enfant';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Washington DC</font></b></p><p class="MsoNormal" align="justify"><b><font size="3" color="#6699FF">Eu senti em Washington uma das energias mais desagrad�veis que j� encontrei fora da Square Mile na Cidade de Londres. Um Ma�om franc�s, Major Pierre Charles L�Enfant, foi engajado para criar a nova Washington, e o trabalho dele foi baseado em planos oficialmente preparados por l�deres como Thomas Jefferson e George Washington, embora outros com maior compreens�o esot�rica teriam sido os reais arquitetos.</font></b></span>';

ic++;
slides[ic] = 'Poor-Richards-Almanack.jpg';
menus[ic] = 'O Almanaque do Pobre Richard';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Conex�es esot�ricas<span style="mso-spacerun: yes">&nbsp;</span></font></b></p><p class="MsoNormal" align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">Por�m, Jefferson teve profundas conex�es esot�ricas e quando ele morreu um sistema de c�digo que era bem parecido com antigos manuscritos Rosicrucianos secretos foram encontrados entre as posses dele pelo Rosicruciano, Spencer Lewis. Alguns investigadores dizem que Jefferson era um Grande Mestre dos Rosicrucianos. Ele era um perito em astronomia e astrologia, assim como Benjamim Franklin que escreveu um best-seller sobre o assunto chamado O Almanaque do Pobre Richard.</span></b></font></p>';

ic++;
slides[ic] = 'Society-of-Cincinnati.jpg';
menus[ic] = 'A Sociedade de Cincinnati';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">A Sociedade de Cincinnati</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">L�Enfant tinha lutado na Guerra da Independ�ncia e ele, assim como Washington, era um membro do altamente reservado e exclusivo grupo chamado a Sociedade de Cincinnati. Ela era oficialmente uma sociedade secreta para os oficiais americanos e franceses na Guerra da Independ�ncia e introduziu uma filia��o heredit�ria que � passada para o filho primog�nito. Washington foi o presidente dessa sociedade durante toda a vida. As anota��es do di�rio de Washington e cartas escritas por Jefferson relativas a L�Enfant e o diagrama das ruas desapareceram. L�Enfant foi despedido depois de um ano, mas o projeto para as ruas continuaram. Em 1909 seus restos foram exumados e levados com escolta do ex�rcito para a Colina do Capit�lio (Capitol Hill) para permanecer no Estado por apenas tr�s horas. Milhares foram prestar condol�ncias e ele foi enterrado novamente no Cemit�rio Nacional Arlington. Qual foi o motivo de tudo isso?</span></b></font>';

ic++;
slides[ic] = 'Arlington-National-Cemetary.jpg';
menus[ic] = 'Cemit�rio Nacional Arlington';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Cemit�rio Arlington</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">O cemit�rio Arlington era antigamente as terras da Casa de Vernon, lar de George Washington, e a Ordem americana dos Cavaleiros Templ�rios realiza as suas cerim�nias anuais do nascer do Sol no anfiteatro de l�.</span></b></font>';

ic++;
slides[ic] = 'Capitol-Hill.jpg';
menus[ic] = 'Colina do Capit�lio';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Colina do Capit�lio (Capitol Hill)</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">Quarenta postes limite foram colocados uma milha de dist�ncia uns dos outros para marcar o limite de dez milhas quadradas de Washington e no centro foi constru�do o edif�cio do Congresso tamb�m conhecido como Colina do Capit�lio.</span></b></font>';

ic++;
slides[ic] = 'Capitoline-Hill.jpg';
menus[ic] = 'Capitoline Hill';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Capitoline Hill</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">O nome Colina do Capit�lio vem de Capitoline Hill, o lugar sagrado das sociedades secretas romanas. Ent�o, n�o foi nenhuma surpresa que a Secret�ria de Estado dos Estados Unidos, Madeleine Albright, a alta sacerdotisa da pol�tica americana, deveria fazer uma peregrina��o a Capitoline Hill na primeira visita oficial dela � Europa depois da sua nomea��o.</span></b></font>';

ic++;
slides[ic] = 'St-Pauls-Crypt.jpg';
menus[ic] = 'A Cripta de S�o Paulo';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">A Cripta de S�o Paulo</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">A Colina do Capit�lio n�o � um edif�cio pol�tico, � um templo para Irmandade Sat�nica e debaixo da c�pula de S�o Paulo existe uma cripta. Em baixo do ch�o da cripta, marcada por uma estrela de cinco pontas (pentagrama), existe uma tumba vazia.</span></b></font>';

ic++;
slides[ic] = 'St-Peters-Tomb.jpg';
menus[ic] = 'A Tumba de S�o Pedro';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">A Tumba de S�o Pedro</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">O mesmo formato de uma tumba embaixo de uma c�pula � a tumba de S�o Pedro em baixo da Bas�lica no Vaticano.</span></b></font>';

ic++;
slides[ic] = 'Temple-of-Congress.jpg';
menus[ic] = 'O Templo do Congresso';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">O Templo do Congresso</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">O edif�cio do Congresso � um templo para uma sociedade secreta que, debaixo de muitos nomes, tem sua origem no mundo antigo.</span></b></font>';

ic++;
slides[ic] = 'Star-of-Washington.jpg';
menus[ic] = 'Estrela de Washington';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">S�mbolos de Washington</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">Dentro da planta das ruas de Washington, centralizados na Colina do Capit�lio e na Casa Branca, existem s�mbolos astrol�gicos (que apontam exatamente para onde certas constela��es aparecem no c�u), hexagramas, pentagramas Sat�nicos, quadrados, uma b�ssola ma��nica, uma Lan�a do Destino, um cr�nio e ossos e muitos outros.</span></b></font>';

ic++;
slides[ic] = 'Streets-of-Washington-DC.jpg';
menus[ic] = 'As Ruas de Washington';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">As Ruas de Washington</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">Para mais informa��es e ilustra��es eu fortemente recomendo um livro excelente por Charles L. Westbrook Jr chamado "O Talism� dos Estados Unidos, a Assinatura Invis�vel da Irmandade".</span></b></font>';

ic++;
slides[ic] = 'Solar-Signs-Washington.jpg';
menus[ic] = 'Sinais Solares - Washington';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Sinais Solares - Washington</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">Estradas e edif�cios-chave em Washington est�o relacionados aos pontos onde o Sol nasce no solst�cio de inverno e ver�o, da mesma maneira que as antigas pequenas colinas, templos e c�rculos de pedra como Stonehenge foram projetados. Outras ruas se cruzam precisamente a 33 graus e outras ainda marcam a precess�o dos equin�cios, e h� um hexagrama ou Estrela de David.</span></b></font>';

ic++;
slides[ic] = 'Bohemian-Grove.jpg';
menus[ic] = 'Bohemian Grove';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Calif�rnia Grove</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">Eu descrevo em O Maior Segredo (The Biggest Secret) como a Elite da Am�rica e de outros pa�ses re�nem-se em Bohemian Grove na Calif�rnia do Norte e tomam parte em cerim�nias sob uma coruja de pedra de 12 metros. A coruja � simb�lica de Moloch ou Molech, a antiga deidade para a qual as crian�as eram, e s�o, sacrificadas. De fato, a palavra Molech ou Moloch significa literalmente sacrif�cio e pode n�o ter sido uma deidade, mas somente uma palavra.</span></b></font>';

ic++;
slides[ic] = 'Molech.jpg';
menus[ic] = 'Molech';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Representa��es de Moloch</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">Outro s�mbolo de Moloch � o hexagrama ou a Estrela de David que � o s�mbolo de fam�lia dos Rothschilds.</span></b></font>';

ic++;
slides[ic] = 'Lillith.jpg';
menus[ic] = 'Lillith';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Lilith - a Dama de Seios</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">A deusa Sum�ria, Lilith, conhecida como a Dama de Seios, tamb�m era simbolizada como uma coruja. Lilith � simb�lica da linhagem gen�tica Reptiliana.</span></b></font>';

ic++;
slides[ic] = 'Lillith-3-Depictions.jpg';
menus[ic] = 'Representa��es de Lillith';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Representa��es de Lillith</font></b></p><p align="center"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">As religi�es Pag�s a conheciam como a Sedutora/Feiticeira.</span></b></font>';

ic++;
slides[ic] = 'Bohemian-Owl-Grove.jpg';
menus[ic] = 'Bohemian Grove - Coruja';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Bohemian Grove</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">Neste quadro voc� ver� os "grovers" executando uma cerim�nia em Bohemian Grove perante a coruja gigante.</span></b></font>';

ic++;
slides[ic] = 'Washington-Owl.jpg';
menus[ic] = 'Coruja de Washington';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Coruja de Washington DC</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">� interessante que quando eu estava olhando para um mapa de Washington eu descobri que as ruas dentro dos limites do Edif�cio do Congresso formam claramente o s�mbolo de uma coruja!</span></b></font>';

ic++;
slides[ic] = 'Owl-on-the-Dollar.jpg';
menus[ic] = 'Coruja no D�lar';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Coruja no D�lar</font></b></p><p align="center"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">Washington D.C. - Paris</span></b></font><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">Voc� tamb�m deve ter notado que a coruja da foto anterior est� sentada em uma pir�mide. A pir�mide e o olho que tudo v�. O mesmo s�mbolo de uma coruja pode ser encontrado escondido na nota de 1 d�lar se voc� souber onde olhar e tiver uma lupa muito poderosa.</span></b></font>';

ic++;
slides[ic] = 'Capitol-Pentagram.jpg';
menus[ic] = 'Pentagrama do Capit�lio';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Pentagramas Sat�nicos</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">H� pelo menos tr�s pentagramas Sat�nicos na planta das ruas de Washington. Por Sat�nico, eu quero dizer pentagramas apontando para baixo ou com as linhas feitas de comprimentos diferentes para distorcer a forma. Estas revers�es e distor��es do pentagrama s�o assinaturas Sat�nicas da mesma forma que os Nazistas inverteram a su�stica.</span></b></font>';

ic++;
slides[ic] = 'Washington-Monument.jpg';
menus[ic] = 'O Monumento de Washington';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">O Capit�lio dos E.U.A</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">Um pentagrama aponta para baixo em dire��o da Colina do Capit�lio, um outro em dire��o � Casa Branca, e um terceiro estende-se do gigantesco obelisco chamado de o Monumento de Washington e cobre uma grande �rea da cidade interna. Ao seu centro est� o signo de �ries - o carneiro ou o cordeiro.</span></b></font>';

ic++;
slides[ic] = 'Pentagon.jpg';
menus[ic] = 'Pent�gono';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">O Pent�gono</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">Pentagramas Sat�nicos semelhantes podem ser identificados no diagrama das ruas de Roma, na  velha cidade de Jerusal�m, nas terras ao redor de Rennes-le-Chateau no Sul da Fran�a t�o amada pelos Cavaleiros Templ�rios, no local da pir�mide em Giza, e sem d�vida nenhuma em Londres e em outras cidades e locais. Do outro lado do Rio Potomac de Washington est� o quartel-general do ex�rcito dos Estados Unidos - o Pent�gono, que foi alinhado � constela��o de Touro. Um pent�gono, � claro, � o centro de um pentagrama.</span></b></font>';

ic++;
slides[ic] = 'White-House-Pentagram.jpg';
menus[ic] = 'Casa Branca - Pentagrama';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">A Casa Branca</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">Se voc� dirigir pelo centro do pentagrama da Casa Branca chegar� a um not�vel edif�cio na 16� Rua n�mero 1733. Note o n�mero: 1733. O n�mero 17 aparece diversas e diversas vezes na hist�ria de Rennes-le-Chateau, e o 33 � o n�mero oficial de graus no Rito Escoc�s da Ma�onaria.</span></b></font>';

ic++;
slides[ic] = 'Supreme-Headquarters-Building.jpg';
menus[ic] = 'Sede Suprema';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">A Sede Suprema</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">Este estranho edif�cio � a Sede Suprema do 33� grau do Rito Escoc�s da Ma�onaria.</span></b></font>';

ic++;
slides[ic] = 'Supreme-Headquarters-Entrance.jpg';
menus[ic] = 'Sede Suprema - Entrada';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Sol Nascente</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">Este edif�cio tem a apar�ncia de um templo eg�pcio com as suas duas representa��es da Esfinge do lado de fora e uma enorme imagem do sol nascente (H�rus). O 33� grau � conhecido como o Grau Revolucion�rio e a maioria dos chefes de governo s�o Ma�ons de 33� grau, � claro que se algu�m perguntar eles negar�o isso veementemente. O 33� � um grau honor�rio e ao receb�-lo eles fazem um juramento de lealdade � Ma�onaria que anula o juramento deles �s suas respectivas na��es.</span></b></font>';

ic++;
slides[ic] = 'Worshipful-Master.jpg';
menus[ic] = 'George Washington';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">O Ma�om George Washington</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">No jardim por tr�s do edif�cio da foto anterior eu vi atrav�s de uma cerca de arbustos um busto de George Washington que o celebra como o primeiro Presidente Ma�om dos Estados Unidos.</span></b></font>';

ic++;
slides[ic] = 'Supreme-Headquarters-Sphinx.jpg';
menus[ic] = 'Sede Suprema - Esfinge';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Esfinge</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">A Sede Suprema do Rito Escoc�s da Ma�onaria abriga a maior cole��o de rel�quias Ma�ons do mundo.</span></b></font>';

ic++;
slides[ic] = 'Future-Washington.jpg';
menus[ic] = 'Washington Futuramente';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Washington DC Futuramente</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">Este � um mapa que n�s descobrimos que foi proposto ao Congresso em 1996 para um novo projeto em Washington DC. Um outro Domo do Mil�nio em Washington?</span></b></font>';

ic++;
slides[ic] = 'Astrological-Symbols.jpg';
menus[ic] = 'S�mbolos Astrol�gicos';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">S�mbolos Astrol�gicos</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">Voc� pode facilmente ver o simbolismo astrol�gico nesta imagem e mais simbologia como esta ser� vista na pr�xima s�rie. Lembre-se onde e quando voc� viu esta proposta! Voc� a viu primeiro em www.davidicke.com. Esse Domo ser� constru�do, n�o importa se com algumas altera��es ou exatamente como a proposta inicial.</span></b></font>';

ic++;
slides[ic] = '../../inde/nova_era2.gif';
menus[ic] = 'Final da Parte 2';
cap[ic] = '<IMG SRC="torch1.gif" width=50 height=100><br><br><p class="MsoNormal" align="center"><b><font color="#6699FF" size="6">Fim da Parte 2</font></b></p><br><br><p style="text-indent: 15px; margin-left: 10; margin-right: 10; margin-top: 0" align="center"><a href="../jclicker3/index.html" target="_parent"><b><font size="4">A LINGUAGEM SECRETA DA ILLUMINATI - PARTE 3</font></b></a></p><p style="text-indent: 15px; margin-left: 10; margin-right: 10; margin-top: 0" align="center"><a href="../simbolismo.htm" target="_parent"><b><font size="4">Menu de Artigos da Se��o Simbolismo</font></b></a></p>';

// --------- end the slide data --------------------------//


//--------------------------------------------------------
//  (2) SET UP THE TITLE PAGE
//  Enter a name for the slide show and a line for the
//  credits. Avoid funky HTML here, they go in h1, h2 tags
//  and are formatted in style sheets

var showTitle = 'SIMBOLISMO';
var showCredits = '<p style="margin-bottom: 0">A LINGUAGEM SECRETA DA ILLUMINATI</p><p style="margin-top: 0; margin-bottom: 0">PARTE 2</p><br><p style="margin-top: 0">Por David Icke</p>';

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
