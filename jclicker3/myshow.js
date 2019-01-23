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
slides[ic] = 'Giza-Plateau.jpg';
menus[ic] = 'Plat� de Giza';
cap[ic] = '<p style="margin-top: 0" align="center"><b><font face="Times New Roman" color="#6699FF" size="5">Giza</font></b></p><p style="margin-top: 0" align="justify"><b><font size="3" face="Times New Roman" color="#6699FF">O design das ruas de Washington tem sido ampliado ao longo dos anos, mas isto tem sido feito de acordo com um plano que parece ter sido decidido desde o come�o. A mesma coisa parece ter acontecido com algumas estruturas no mundo antigo, mais notavelmente nos arredores de Giza.</font></b></p>';

ic++;
slides[ic] = 'Jefferson-Lincoln-Memorials.jpg';
menus[ic] = 'Os Memoriais de Jefferson e Lincoln';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Os Memoriais de Jefferson e Lincoln</font></b></p><p class="MsoNormal" align="justify"></p><p class="MsoNormal" align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">Os Memoriais de Jefferson e Lincoln foram acrescentados ao plano das ruas de Washington no princ�pio do s�culo XX. Historiadores acreditam que o edif�cio Jefferson � baseado no design do Pante�o em Roma. Como todos aqueles edif�cios-chave, eles s�o constru�dos ao lado de �gua ou "espelhos d��gua". O edif�cio representa o Sol e a �gua � a Lua refletindo o Sol.</span></b></font></p>';

ic++;
slides[ic] = 'Washington-Monument.jpg';
menus[ic] = 'O Monumento de Washington';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">O Monumento de Washington</font></b></p><p class="MsoNormal" align="justify"><b><font size="3" color="#6699FF">O monumento de Washington, a 555 p�s, o maior obelisco de pedra do mundo, foi completado em 1885. A base tinha sido posta pela Grande Loja Ma��nica do Distrito de Columbia.</font></b></span>';

ic++;
slides[ic] = 'Jefferson-Expansion-Memorial-St-Louis.jpg';
menus[ic] = 'Memorial de Expans�o Jefferson';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">S�o Louis<span style="mso-spacerun: yes">&nbsp;</span></font></b></p><p class="MsoNormal" align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">As localiza��es das cidades e dos centros da Irmandade est�o relacionados a lugares onde a energia solar e outras energias c�smicas podem ser poderosamente aproveitadas.</span></b></font></p>';

ic++;
slides[ic] = 'Mount-Vernon-Jefferson-County.jpg';
menus[ic] = 'Condado Jefferson - Monte Vernon';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Os Condados Jefferson</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">Charles L. Westbrook Jr, o autor de O Talism� dos Estados Unidos, recebeu uma correspond�ncia an�nima depois que o livro dele foi publicado. Ela Consistia de um mapa dos E.U.A. e um peda�o de papel no qual foram escritas as palavras: "� maior do que voc� pensa." 12 Linhas desenhadas no mapa revelavam uma geometria semelhante a de Washington, mas em uma escala muito maior. Alguns dos pontos conectados pela geometria, ou real�ado por ela, eram Monte Vernon, Illinois; Miami, Fl�rida, que era conhecida como a cidade m�gica j� em 1820; e um lugar chamado o Cume de Pike no Condado Jefferson, Colorado.</span></b></font>';

ic++;
slides[ic] = 'Zodiac.jpg';
menus[ic] = 'Zod�aco';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">A CRUZ E O C�RCULO</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">O antigo s�mbolo do c�rculo e da cruz simboliza, em parte, o progresso do Sol pelos 12 meses e os 12 signos do zod�aco, a cruz e o c�rculo com o Sol na cruz.</span></b></font>';

ic++;
slides[ic] = 'Celtic-Cross.jpg';
menus[ic] = 'A Cruz C�ltica';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">A Cruz C�ltica</font></b></p><p align="center"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">A cruz e o c�rculo inspiraram a cruz C�ltica.</span></b></font>';

ic++;
slides[ic] = 'CIA-NATO.jpg';
menus[ic] = 'CIA - OTAN';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">CIA - OTAN</font></b></p><p align="center"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">O logotipo da OTAN, o ex�rcito-mundial-em-espera, e o emblema do CIA.</span></b></font>';

ic++;
slides[ic] = 'Black-Sun.jpg';
menus[ic] = 'Sol Negro';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">O Sol Negro</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">No distrito financeiro da Cidade de Londres oposto � Catedral de St Paulo, eu tamb�m encontrei o s�mbolo acima. � um c�rculo do zod�aco com um sol negro ao centro. Este edif�cio foi projetado originalmente para o jornal Financial Times e a face no sol negro � a de Winston Churchill.</span></b></font>';

ic++;
slides[ic] = 'Barati-Britannia.jpg';
menus[ic] = 'Barati - Britannia';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Barati</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">Este mesmo s�mbolo do c�rculo e da cruz era usado pelos Fen�cios e pode ser visto nas representa��es da deusa deles Barati, assim como no escudo da vers�o brit�nica dela, Britannia.</span></b></font>';

ic++;
slides[ic] = 'Arch-of-Triumph.jpg';
menus[ic] = 'Arco do Triunfo';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Arco do Triunfo</font></b></p><p align="center"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">O plano de rua de Paris, dominado pelo Arco do Triunfo, tem o mesmo simbolismo.</span></b></font>';

ic++;
slides[ic] = 'The-Royal-Arch.jpg';
menus[ic] = 'O Arco Real';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">S�mbolos Ma��nicos</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">O pr�prio arco � um s�mbolo da Irmandade. � o significado por tr�s dos nomes das lojas do Arco Reais no Rito de York da Ma�onaria e est� ligado em parte � pedra fundamental no topo que une e d� for�a ao arco.</span></b></font>';

ic++;
slides[ic] = 'House-of-the-Rising-Sun.jpg';
menus[ic] = 'A Casa do Sol Nascente';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">O Sol Nascente</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">O registro mais recente de uma loja como essa est� nos anais da cidade de Fredericksburg, Virg�nia, no dia 22 de dezembro em 1753. Fredericksburg era o local da Casa do Sol Nascente, que foi constru�da pelos irm�os de George Washington.</span></b></font>';

ic++;
slides[ic] = 'George-Washington-Masonic-Apron.jpg';
menus[ic] = 'O Avental de George Washington';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">O Avental de Washington</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">Esta casa constru�da pelo irm�o de George Washington, que mais tarde virou uma taverna, era o lugar Ma��nico de reuni�o onde pessoas como Benjamim Franklin, George Washington e outros "Pais Fundadores" se reuniam.</span></b></font>';

ic++;
slides[ic] = 'Jefferson-Arch.jpg';
menus[ic] = 'O Arco de Jefferson';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">O arco de St. Louis</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">O simbolismo do arco da Ma�onaria tamb�m � a inspira��o para um vasto arco de concreto em St Louis, Missouri.</span></b></font>';

ic++;
slides[ic] = 'Arc-de-Triomphe.jpg';
menus[ic] = 'Arc de Triomphe';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Arc de Triomphe</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">O "Arc de Triomphe" est� colocado ao centro de um c�rculo do qual 12 estradas que cruzam Paris se originam. Na estrada circular ao redor do Arc de Triomphe existem 12 pontos que formam uma estrela de 12 pontas. E novamente o sol ao centro do c�rculo quebrado em 12 segmentos.</span></b></font>';

ic++;
slides[ic] = 'Arc-la-Defense.jpg';
menus[ic] = 'Arc-la-Defense';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Arc-la-Defense</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">A estrada principal que passa por este padr�o � a famosa Champs Elysees e quando voc� segue esta linha voc� pode ver o qu�o planejado � tudo isso. Quando voc� estiver debaixo do Arco do Triunfo pr�ximo � "flama eterna" do soldado desconhecido, olhe em uma dire��o, em linha reta, e voc� ver� um grande e moderno arco de concreto ao longe.</span></b></font>';

ic++;
slides[ic] = 'Champ-Elysees.jpg';
menus[ic] = 'Champs Elysees';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Champs Elysees</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">Quando voc� se vira e olha para o outro caminho, novamente em linha reta, voc� olha para baixo na Champs Elysees para o obelisco eg�pcio de 3.200 anos de idade no Place de Concorde.</span></b></font>';

ic++;
slides[ic] = 'Glass-Pyramid.jpg';
menus[ic] = 'Pir�mide de Vidro';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Pir�mide de Vidro</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">Al�m desse ponto, na mesma linha reta, voc� encontra outro arco, semelhante ao Arco do Triunfo, mas muito menor, e que, em compensa��o, � visto atrav�s da grande pir�mide negra de vidro constru�da fora do Museu Louvre durante a presid�ncia do Ma�om de 33� grau, Fran�ois Mitterrand. As pessoas ficaram espantadas que algu�m pudesse construir tal estrutura ao longo da bela arquitetura do Louvre. O motivo n�o teve nada a ver com arquitetura e tudo a ver com acrescentar mais poder ao design geom�trico da cidade.</span></b></font>';

ic++;
slides[ic] = 'Luxor-Las-Vegas.jpg';
menus[ic] = 'Luxor - Las Vegas';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Las Vegas</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">Uma imensa pir�mide negra semelhante foi constru�da com uma enorme Esfinge e um obelisco naquela cidade da Irmandade, Las Vegas.</span></b></font>';

ic++;
slides[ic] = 'Lion-Herald.jpg';
menus[ic] = 'Le�o - Arauto';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Leo</font></b></p><p align="center"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">O le�o � visto t�o freq�entemente em her�ldica e em bandeiras porque � um antigo s�mbolo do Sol.</span></b></font>';

ic++;
slides[ic] = 'Semiramis-Dagon.jpg';
menus[ic] = 'Semiramis - Dagon';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Dagon & Isis</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">O peixe simboliza o signo de Peixes e tamb�m o legend�rio Rei da Babil�nia, Nimrod, que era descrito como um peixe. A pomba simboliza a parceira dele, a Rainha Semiramis, e isto � mais simbolismo reverso. Enquanto a pomba significa paz para a maioria das pessoas, simboliza morte e destrui��o para a Irmandade. Essas revers�es permitem que eles usem seus s�mbolos em p�blico de uma maneira que ningu�m entenda. O Sinn Fein, o bra�o pol�tico do IRA na Irlanda do Norte, tem uma pomba como seu s�mbolo por esta raz�o.</span></b></font>';

ic++;
slides[ic] = 'The-Dove.jpg';
menus[ic] = 'A Pomba';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">A Pomba</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">� este simbolismo da pomba que nos d� o nome fict�cio de Christopher Columbus (Crist�v�o Colombo) que na realidade costumava assinar o nome Colon. O nome Columbus foi inventado como ainda mais simbolismo da Irmandade. Os romanos adoravam uma deidade que eles chamavam de V�nus Columba, V�nus a Pomba. V�nus e pomba s�o associados com a Rainha Semiramis na Babil�nia. A palavra pomba em franc�s ainda hoje � Colombe. Columba tamb�m � uma deusa "Aphrodite" que simboliza o negativo, morte e destrui��o, aspectos da energia feminina.</span></b></font>';

ic++;
slides[ic] = 'Columbia.jpg';
menus[ic] = 'Columbia';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Columbia</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">Conseq�entemente n�s temos British Columbia, Columbia Pictures, Universidade de Columbia, Columbia Broadcasting (CBS), a nave espacial Columbia e o Distrito de Columbia no qual eles colocaram Washington DC.</span></b></font><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">Voc� s� tem que dar uma olhada em alguns dos nomes de lugares ao redor de Washington para ver onde de onde eles se originam. O lugar mais �bvio � Alexandria na fronteira do Distrito de Columbia, em Virg�nia (a rainha virgem - Isis, Semiramis). E, a prop�sito, olhe para os logotipos dessas organiza��es Columbia. A Columbia Pictures t�m a dama segurando a tocha iluminada, a Universidade de Columbia tem a tocha iluminada, e a Columbia Broadcasting (CBS) tem o olho, o olho que tudo v�.</span></b></font>';

ic++;
slides[ic] = 'Royal-Sceptres.jpg';
menus[ic] = 'Cetros Reais';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Cetros Reais</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">Pombas podem ser vistas em cima de cruzes Maltesas nos cetros da Rainha da Inglaterra nas cerim�nias dela. Cetros e cajados eram s�mbolos de poder no Egito antigo.</span></b></font>';

ic++;
slides[ic] = 'Crown.jpg';
menus[ic] = 'Coroas';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Coroas</font></b></p><p align="center"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">H� cruzes maltesas na coroa da monarca brit�nica.</span></b></font>';

ic++;
slides[ic] = 'Maltese-Cross.jpg';
menus[ic] = 'A Cruz Maltesa';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">A Cruz Maltesa</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">A cruz alargada ou Maltesa foi achada em cavernas nas antigas terras Fen�cias da Cappadocia, agora Turquia, datando pelo menos muitos milhares de anos antes da ocupa��o Fen�cia e se tornou a cruz dos Cavaleiros Hospitaller de St John de Jerusal�m (Cavaleiros de Malta), dos Cavaleiros Templ�rios, e dos Nazistas.</span></b></font>';

ic++;
slides[ic] = 'German-Soldier.jpg';
menus[ic] = 'Soldado Alem�o';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">A Ins�gnia Alem�</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">Se voc� olhar nesta imagem para o soldado Nazista ver� que ele tem de tudo - a Cruz Maltesa, a su�stica invertida, o cr�nio e ossos e a �guia!</span></b></font>';

ic++;
slides[ic] = 'Party-Logos.jpg';
menus[ic] = 'Logotipos de Partidos';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Logotipos de Partidos</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">Tr�s s�mbolos principais da Irmandade s�o a tocha iluminada, a rosa vermelha e a pomba. Os s�mbolos dos tr�s principais partidos pol�ticos do Reino Unido que servem � estrutura encabe�ada pela Rainha s�o a tocha iluminada (Conservadores), a rosa vermelha (Trabalhadores) e a pomba (os Liberais Democratas)! Apenas uma coincid�ncia, nada com o que se preocupar.</span></b></font>';

ic++;
slides[ic] = '../../inde/nova_era2.gif';
menus[ic] = 'Final da Parte 3';
cap[ic] = '<IMG SRC="torch1.gif" width=50 height=100><br><br><p class="MsoNormal" align="center"><b><font color="#6699FF" size="6">Fim da Parte 3</font></b></p><br><br><p style="text-indent: 15px; margin-left: 10; margin-right: 10; margin-top: 0" align="center"><a href="../jclicker4/index.html" target="_parent"><b><font size="4">A LINGUAGEM SECRETA DA ILLUMINATI - PARTE 4</font></b></a></p><p style="text-indent: 15px; margin-left: 10; margin-right: 10; margin-top: 0" align="center"><a href="../simbolismo.htm" target="_parent"><b><font size="4">Menu de Artigos da Se��o Simbolismo</font></b></a></p>';

// --------- end the slide data --------------------------//


//--------------------------------------------------------
//  (2) SET UP THE TITLE PAGE
//  Enter a name for the slide show and a line for the
//  credits. Avoid funky HTML here, they go in h1, h2 tags
//  and are formatted in style sheets

var showTitle = 'SIMBOLISMO';
var showCredits = '<p style="margin-bottom: 0">A LINGUAGEM SECRETA DA ILLUMINATI</p><p style="margin-top: 0; margin-bottom: 0">PARTE 3</p><br><p style="margin-top: 0">Por David Icke</p>';

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
