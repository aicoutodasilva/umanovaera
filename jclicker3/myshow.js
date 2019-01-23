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
menus[ic] = 'Platô de Giza';
cap[ic] = '<p style="margin-top: 0" align="center"><b><font face="Times New Roman" color="#6699FF" size="5">Giza</font></b></p><p style="margin-top: 0" align="justify"><b><font size="3" face="Times New Roman" color="#6699FF">O design das ruas de Washington tem sido ampliado ao longo dos anos, mas isto tem sido feito de acordo com um plano que parece ter sido decidido desde o começo. A mesma coisa parece ter acontecido com algumas estruturas no mundo antigo, mais notavelmente nos arredores de Giza.</font></b></p>';

ic++;
slides[ic] = 'Jefferson-Lincoln-Memorials.jpg';
menus[ic] = 'Os Memoriais de Jefferson e Lincoln';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Os Memoriais de Jefferson e Lincoln</font></b></p><p class="MsoNormal" align="justify"></p><p class="MsoNormal" align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">Os Memoriais de Jefferson e Lincoln foram acrescentados ao plano das ruas de Washington no princípio do século XX. Historiadores acreditam que o edifício Jefferson é baseado no design do Panteão em Roma. Como todos aqueles edifícios-chave, eles são construídos ao lado de água ou "espelhos d´água". O edifício representa o Sol e a água é a Lua refletindo o Sol.</span></b></font></p>';

ic++;
slides[ic] = 'Washington-Monument.jpg';
menus[ic] = 'O Monumento de Washington';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">O Monumento de Washington</font></b></p><p class="MsoNormal" align="justify"><b><font size="3" color="#6699FF">O monumento de Washington, a 555 pés, o maior obelisco de pedra do mundo, foi completado em 1885. A base tinha sido posta pela Grande Loja Maçônica do Distrito de Columbia.</font></b></span>';

ic++;
slides[ic] = 'Jefferson-Expansion-Memorial-St-Louis.jpg';
menus[ic] = 'Memorial de Expansão Jefferson';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">São Louis<span style="mso-spacerun: yes">&nbsp;</span></font></b></p><p class="MsoNormal" align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">As localizações das cidades e dos centros da Irmandade estão relacionados a lugares onde a energia solar e outras energias cósmicas podem ser poderosamente aproveitadas.</span></b></font></p>';

ic++;
slides[ic] = 'Mount-Vernon-Jefferson-County.jpg';
menus[ic] = 'Condado Jefferson - Monte Vernon';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Os Condados Jefferson</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">Charles L. Westbrook Jr, o autor de O Talismã dos Estados Unidos, recebeu uma correspondência anônima depois que o livro dele foi publicado. Ela Consistia de um mapa dos E.U.A. e um pedaço de papel no qual foram escritas as palavras: "É maior do que você pensa." 12 Linhas desenhadas no mapa revelavam uma geometria semelhante a de Washington, mas em uma escala muito maior. Alguns dos pontos conectados pela geometria, ou realçado por ela, eram Monte Vernon, Illinois; Miami, Flórida, que era conhecida como a cidade mágica já em 1820; e um lugar chamado o Cume de Pike no Condado Jefferson, Colorado.</span></b></font>';

ic++;
slides[ic] = 'Zodiac.jpg';
menus[ic] = 'Zodíaco';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">A CRUZ E O CÍRCULO</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">O antigo símbolo do círculo e da cruz simboliza, em parte, o progresso do Sol pelos 12 meses e os 12 signos do zodíaco, a cruz e o círculo com o Sol na cruz.</span></b></font>';

ic++;
slides[ic] = 'Celtic-Cross.jpg';
menus[ic] = 'A Cruz Céltica';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">A Cruz Céltica</font></b></p><p align="center"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">A cruz e o círculo inspiraram a cruz Céltica.</span></b></font>';

ic++;
slides[ic] = 'CIA-NATO.jpg';
menus[ic] = 'CIA - OTAN';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">CIA - OTAN</font></b></p><p align="center"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">O logotipo da OTAN, o exército-mundial-em-espera, e o emblema do CIA.</span></b></font>';

ic++;
slides[ic] = 'Black-Sun.jpg';
menus[ic] = 'Sol Negro';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">O Sol Negro</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">No distrito financeiro da Cidade de Londres oposto à Catedral de St Paulo, eu também encontrei o símbolo acima. É um círculo do zodíaco com um sol negro ao centro. Este edifício foi projetado originalmente para o jornal Financial Times e a face no sol negro é a de Winston Churchill.</span></b></font>';

ic++;
slides[ic] = 'Barati-Britannia.jpg';
menus[ic] = 'Barati - Britannia';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Barati</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">Este mesmo símbolo do círculo e da cruz era usado pelos Fenícios e pode ser visto nas representações da deusa deles Barati, assim como no escudo da versão britânica dela, Britannia.</span></b></font>';

ic++;
slides[ic] = 'Arch-of-Triumph.jpg';
menus[ic] = 'Arco do Triunfo';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Arco do Triunfo</font></b></p><p align="center"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">O plano de rua de Paris, dominado pelo Arco do Triunfo, tem o mesmo simbolismo.</span></b></font>';

ic++;
slides[ic] = 'The-Royal-Arch.jpg';
menus[ic] = 'O Arco Real';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Símbolos Maçônicos</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">O próprio arco é um símbolo da Irmandade. É o significado por trás dos nomes das lojas do Arco Reais no Rito de York da Maçonaria e está ligado em parte à pedra fundamental no topo que une e dá força ao arco.</span></b></font>';

ic++;
slides[ic] = 'House-of-the-Rising-Sun.jpg';
menus[ic] = 'A Casa do Sol Nascente';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">O Sol Nascente</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">O registro mais recente de uma loja como essa está nos anais da cidade de Fredericksburg, Virgínia, no dia 22 de dezembro em 1753. Fredericksburg era o local da Casa do Sol Nascente, que foi construída pelos irmãos de George Washington.</span></b></font>';

ic++;
slides[ic] = 'George-Washington-Masonic-Apron.jpg';
menus[ic] = 'O Avental de George Washington';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">O Avental de Washington</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">Esta casa construída pelo irmão de George Washington, que mais tarde virou uma taverna, era o lugar Maçônico de reunião onde pessoas como Benjamim Franklin, George Washington e outros "Pais Fundadores" se reuniam.</span></b></font>';

ic++;
slides[ic] = 'Jefferson-Arch.jpg';
menus[ic] = 'O Arco de Jefferson';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">O arco de St. Louis</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">O simbolismo do arco da Maçonaria também é a inspiração para um vasto arco de concreto em St Louis, Missouri.</span></b></font>';

ic++;
slides[ic] = 'Arc-de-Triomphe.jpg';
menus[ic] = 'Arc de Triomphe';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Arc de Triomphe</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">O "Arc de Triomphe" está colocado ao centro de um círculo do qual 12 estradas que cruzam Paris se originam. Na estrada circular ao redor do Arc de Triomphe existem 12 pontos que formam uma estrela de 12 pontas. E novamente o sol ao centro do círculo quebrado em 12 segmentos.</span></b></font>';

ic++;
slides[ic] = 'Arc-la-Defense.jpg';
menus[ic] = 'Arc-la-Defense';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Arc-la-Defense</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">A estrada principal que passa por este padrão é a famosa Champs Elysees e quando você segue esta linha você pode ver o quão planejado é tudo isso. Quando você estiver debaixo do Arco do Triunfo próximo à "flama eterna" do soldado desconhecido, olhe em uma direção, em linha reta, e você verá um grande e moderno arco de concreto ao longe.</span></b></font>';

ic++;
slides[ic] = 'Champ-Elysees.jpg';
menus[ic] = 'Champs Elysees';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Champs Elysees</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">Quando você se vira e olha para o outro caminho, novamente em linha reta, você olha para baixo na Champs Elysees para o obelisco egípcio de 3.200 anos de idade no Place de Concorde.</span></b></font>';

ic++;
slides[ic] = 'Glass-Pyramid.jpg';
menus[ic] = 'Pirâmide de Vidro';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Pirâmide de Vidro</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">Além desse ponto, na mesma linha reta, você encontra outro arco, semelhante ao Arco do Triunfo, mas muito menor, e que, em compensação, é visto através da grande pirâmide negra de vidro construída fora do Museu Louvre durante a presidência do Maçom de 33º grau, François Mitterrand. As pessoas ficaram espantadas que alguém pudesse construir tal estrutura ao longo da bela arquitetura do Louvre. O motivo não teve nada a ver com arquitetura e tudo a ver com acrescentar mais poder ao design geométrico da cidade.</span></b></font>';

ic++;
slides[ic] = 'Luxor-Las-Vegas.jpg';
menus[ic] = 'Luxor - Las Vegas';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Las Vegas</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">Uma imensa pirâmide negra semelhante foi construída com uma enorme Esfinge e um obelisco naquela cidade da Irmandade, Las Vegas.</span></b></font>';

ic++;
slides[ic] = 'Lion-Herald.jpg';
menus[ic] = 'Leão - Arauto';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Leo</font></b></p><p align="center"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">O leão é visto tão freqüentemente em heráldica e em bandeiras porque é um antigo símbolo do Sol.</span></b></font>';

ic++;
slides[ic] = 'Semiramis-Dagon.jpg';
menus[ic] = 'Semiramis - Dagon';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Dagon & Isis</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">O peixe simboliza o signo de Peixes e também o legendário Rei da Babilônia, Nimrod, que era descrito como um peixe. A pomba simboliza a parceira dele, a Rainha Semiramis, e isto é mais simbolismo reverso. Enquanto a pomba significa paz para a maioria das pessoas, simboliza morte e destruição para a Irmandade. Essas reversões permitem que eles usem seus símbolos em público de uma maneira que ninguém entenda. O Sinn Fein, o braço político do IRA na Irlanda do Norte, tem uma pomba como seu símbolo por esta razão.</span></b></font>';

ic++;
slides[ic] = 'The-Dove.jpg';
menus[ic] = 'A Pomba';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">A Pomba</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">É este simbolismo da pomba que nos dá o nome fictício de Christopher Columbus (Cristóvão Colombo) que na realidade costumava assinar o nome Colon. O nome Columbus foi inventado como ainda mais simbolismo da Irmandade. Os romanos adoravam uma deidade que eles chamavam de Vênus Columba, Vênus a Pomba. Vênus e pomba são associados com a Rainha Semiramis na Babilônia. A palavra pomba em francês ainda hoje é Colombe. Columba também é uma deusa "Aphrodite" que simboliza o negativo, morte e destruição, aspectos da energia feminina.</span></b></font>';

ic++;
slides[ic] = 'Columbia.jpg';
menus[ic] = 'Columbia';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Columbia</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">Conseqüentemente nós temos British Columbia, Columbia Pictures, Universidade de Columbia, Columbia Broadcasting (CBS), a nave espacial Columbia e o Distrito de Columbia no qual eles colocaram Washington DC.</span></b></font><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">Você só tem que dar uma olhada em alguns dos nomes de lugares ao redor de Washington para ver onde de onde eles se originam. O lugar mais óbvio é Alexandria na fronteira do Distrito de Columbia, em Virgínia (a rainha virgem - Isis, Semiramis). E, a propósito, olhe para os logotipos dessas organizações Columbia. A Columbia Pictures têm a dama segurando a tocha iluminada, a Universidade de Columbia tem a tocha iluminada, e a Columbia Broadcasting (CBS) tem o olho, o olho que tudo vê.</span></b></font>';

ic++;
slides[ic] = 'Royal-Sceptres.jpg';
menus[ic] = 'Cetros Reais';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Cetros Reais</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">Pombas podem ser vistas em cima de cruzes Maltesas nos cetros da Rainha da Inglaterra nas cerimônias dela. Cetros e cajados eram símbolos de poder no Egito antigo.</span></b></font>';

ic++;
slides[ic] = 'Crown.jpg';
menus[ic] = 'Coroas';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Coroas</font></b></p><p align="center"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">Há cruzes maltesas na coroa da monarca britânica.</span></b></font>';

ic++;
slides[ic] = 'Maltese-Cross.jpg';
menus[ic] = 'A Cruz Maltesa';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">A Cruz Maltesa</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">A cruz alargada ou Maltesa foi achada em cavernas nas antigas terras Fenícias da Cappadocia, agora Turquia, datando pelo menos muitos milhares de anos antes da ocupação Fenícia e se tornou a cruz dos Cavaleiros Hospitaller de St John de Jerusalém (Cavaleiros de Malta), dos Cavaleiros Templários, e dos Nazistas.</span></b></font>';

ic++;
slides[ic] = 'German-Soldier.jpg';
menus[ic] = 'Soldado Alemão';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">A Insígnia Alemã</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">Se você olhar nesta imagem para o soldado Nazista verá que ele tem de tudo - a Cruz Maltesa, a suástica invertida, o crânio e ossos e a águia!</span></b></font>';

ic++;
slides[ic] = 'Party-Logos.jpg';
menus[ic] = 'Logotipos de Partidos';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Logotipos de Partidos</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">Três símbolos principais da Irmandade são a tocha iluminada, a rosa vermelha e a pomba. Os símbolos dos três principais partidos políticos do Reino Unido que servem à estrutura encabeçada pela Rainha são a tocha iluminada (Conservadores), a rosa vermelha (Trabalhadores) e a pomba (os Liberais Democratas)! Apenas uma coincidência, nada com o que se preocupar.</span></b></font>';

ic++;
slides[ic] = '../../inde/nova_era2.gif';
menus[ic] = 'Final da Parte 3';
cap[ic] = '<IMG SRC="torch1.gif" width=50 height=100><br><br><p class="MsoNormal" align="center"><b><font color="#6699FF" size="6">Fim da Parte 3</font></b></p><br><br><p style="text-indent: 15px; margin-left: 10; margin-right: 10; margin-top: 0" align="center"><a href="../jclicker4/index.html" target="_parent"><b><font size="4">A LINGUAGEM SECRETA DA ILLUMINATI - PARTE 4</font></b></a></p><p style="text-indent: 15px; margin-left: 10; margin-right: 10; margin-top: 0" align="center"><a href="../simbolismo.htm" target="_parent"><b><font size="4">Menu de Artigos da Seção Simbolismo</font></b></a></p>';

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
