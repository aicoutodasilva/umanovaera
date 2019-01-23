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
slides[ic] = 'Masonic-Symbols.jpg';
menus[ic] = 'Comunica��o em C�digo';
cap[ic] = '<p style="margin-top: 0" align="center"><b><font face="Times New Roman" color="#6699FF" size="5">C�digo de Comunica��o</font></b></p><p style="margin-top: 0" align="justify"><b><font size="3" face="Times New Roman" color="#6699FF">Os iniciados da rede de sociedades secretas sempre tiveram um c�digo de comunica��o atrav�s de certas frases, palavras, apertos de m�o engra�ados e s�mbolos.&nbsp;<br><br>Tamb�m h� uma s�rie de assinaturas da Irmandade Babil�nica que formam o seu idioma secreto e que est�o diariamente ao nosso redor. Eles s�o obcecados com os seus rituais e s�mbolos por causa do c�rebro r�ptil deles e eu n�o posso enfatizar mais este ponto. � uma forma pela qual eles podem ser localizados e lidos.</font></b></p>';

ic++;
slides[ic] = 'Eternal-Flame.jpg';
menus[ic] = 'Chama Eterna';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">A Chama ou Tocha Iluminada</font></b></p><p class="MsoNormal" align="justify"></p><p class="MsoNormal" align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">O s�mbolo mais usado deles � a tocha iluminada, que simboliza o conhecimento e o Sol. Quando um iniciado alcan�a um certo n�vel na pir�mide � dito que ele � iluminado, mais simbolismo da tocha iluminada. Um das hist�rias recorrentes no mundo antigo � a de um her�i que toma o fogo (conhecimento) dos deuses e entrega �s pessoas - �s poucas pessoas escolhidas. Os Observadores (extraterrestres) chamados Azazel e Shemyaza estavam entre esses que deram conhecimento avan�ado aos humanos, de acordo com o Livro de Enoch.</span></b></font></p>';

ic++;
slides[ic] = 'Prometheus-Greek-God.jpg';
menus[ic] = 'Prometheus - Deus Grego';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Prometheus - Deus grego</font></b></p><p class="MsoNormal" align="justify"><b><font size="3" color="#6699FF">O s�mbolo mais famoso destes Observadores � o deus grego Prometheus, que era dito ter emergido das Montanhas do C�ucaso. Em muitas formas, ele era um &quot;personagem tipo Jesus&quot; que morreu pelas pessoas.<span style="mso-spacerun: yes">&nbsp;</span></font></b></p><p align="justify"><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA"><b><font size="3" color="#6699FF">No Rockefeller Center em Nova Iorque, h� uma est�tua de ouro de Prometheus (ouro, o metal solar dos deuses) e ele est� segurando a luz, o fogo, de acordo com a lenda. Para os Rockefellers n�o � apenas uma est�tua, � um s�mbolo da grande fraude em que eles est�o envolvidos.</font></b></span>';

ic++;
slides[ic] = 'Statue-of-Liberty-NYC-Paris.jpg';
menus[ic] = 'Est�tua da Liberdade - NY & Paris';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Est�tua da Liberdade - Semiramis<span style="mso-spacerun: yes">&nbsp;</span></font></b></p><p class="MsoNormal" align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">A Est�tua da Liberdade � outro s�mbolo da Irmandade que acentua o da tocha iluminada. A Est�tua da Liberdade � de fato a Est�tua de Liberdades - as liberdades perpetradas no povo americano pela Irmandade. Ela permanece l� em sua ilha na Ba�a de Nova Iorque segurando a sua tocha da liberdade e os americanos acreditam que ela � o s�mbolo da liberdade deles na &quot;Terra do Livre&quot;. Nada poderia estar mais distante da verdade. A Est�tua da Liberdade foi dada � Nova Iorque por Ma�ons franceses e uma est�tua id�ntica a ela fica em uma ilha no Rio Sena em Paris. Estas est�tuas da liberdade s�o representa��es da Rainha Semiramis, de Isis e de outras mais, com os raios do Sol ao redor da cabe�a dela. Os antigos simbolizavam o Sol deste modo. E elas n�o est�o segurando a tocha da liberdade, mas a tocha dos iluminados: a Elite Reptiliana. A Est�tua da Liberdade � um s�mbolo da Irmandade que diz: N�s controlamos este pa�s e n�s estamos lhe mostrando isso, mas voc� � est�pido demais para ver!</span></b></font></p>';

ic++;
slides[ic] = 'Kennedy-Dealey-Plaza.jpg';
menus[ic] = 'Kennedy - Dealey Plaza';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">A assinatura da Irmandade</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">A tocha � a mais �bvia assinatura da Irmandade. Quando eles assassinaram o Presidente Kennedy em 1963, eles puseram uma tocha iluminada, a chama eterna que queima at� hoje, na sepultura dele no Cemit�rio Arlington. Depois do assassinato em Dallas, os Ma�ons ergueram um obelisco no Dealey Plaza a algumas jardas do local onde Kennedy foi baleado. No topo eles colocaram uma representa��o da tocha iluminada.</span></b></font>';

ic++;
slides[ic] = 'Eternal-Flames-Memorials.jpg';
menus[ic] = 'Chama Eterna - Memoriais';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">O s�mbolo da Chama Eterna</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">Quando Diana, a Princesa de Gales, foi assassinada no t�nel Pont de L Alma em Paris, o santu�rio para ela, onde as pessoas deixam flores, se tornou um grande s�mbolo de ouro da mesma chama eterna mantida pelas duas Est�tuas da Liberdade, que fica bem em cima do t�nel onde o carro dela bateu no 13� pilar. Apenas uma coincid�ncia, nada com o que se preocupar! Na ilha onde � dito que ela foi enterrada, eles colocaram ainda outra representa��o de uma tocha iluminada.</span></b></font>';

ic++;
slides[ic] = 'Olympic-Torch.jpg';
menus[ic] = 'Tocha Ol�mpica';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Tocha Ol�mpica</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">A Irmandade est� nos dizendo que eles mataram Kennedy e Diana, mas a menos que voc� entenda o idioma simb�lico deles, voc� n�o saber� disso. A tocha iluminada nos Jogos Ol�mpicos tem o mesmo significado.</span></b></font>';

ic++;
slides[ic] = 'Great-Pyramid.jpg';
menus[ic] = 'A Pir�mide';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">A Pir�mide</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">Outro s�mbolo fundamental da Irmandade � a pir�mide ou a pir�mide com o topo incompleto, faltando a �ltima pedra.</span></b></font>';

ic++;
slides[ic] = 'Dealey-Plaza-Map.jpg';
menus[ic] = 'Mapa - Dealey Plaza';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Dealey Plaza</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">A planta das ruas do Dealey Plaza onde Kennedy foi assassinado tem a forma de uma pir�mide com o topo incompleto e Dealey na verdade quer dizer Linha da Deusa como em Dea (deusa) e ley (ley line).</span></b></font>';

ic++;
slides[ic] = 'US-Note.jpg';
menus[ic] = 'Nota de 1 d�lar - EUA';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Pir�mide dos Estados Unidos</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">A pir�mide com o topo incompleto, ou a pir�mide e o olho que tudo v�, � descrito mais conhecidamente no verso do Grande Selo dos Estados Unidos e na nota de um d�lar. O olho que tudo v� � o olho de H�rus, L�cifer, Satan�s, qualquer nome que voc� queira usar.</span></b></font>';

ic++;
slides[ic] = 'US-Seal.jpg';
menus[ic] = 'Selo - EUA ';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">O Olho de H�rus</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">De acordo com a lenda eg�pcia, Os�ris foi assassinado por Set e Set foi morto por H�rus que perdeu um olho no processo, conseq�entemente o Olho de H�rus. O Ma�om de 33� grau e presidente da Nobreza Negra, Franklin Delano Roosevelt, teve este s�mbolo imprimido na nota de um d�lar desde 1933. O Olho de H�rus era um s�mbolo das sociedades secretas na Europa muito antes de qualquer um ter ouvido falar dos Estados Unidos e ele est� inundado de simbolismo Ma��nico e de simbolismo de sociedade secreta, derivado do mundo antigo.</span></b></font>';

ic++;
slides[ic] = 'US-Eagle.jpg';
menus[ic] = '�guia - EUA';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">O Grande Selo dos EUA</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">O n�mero de estados na Am�rica no per�odo da independ�ncia, 13, n�o era nenhuma coincid�ncia. Treze, o sagrado doze e um, � um n�mero m�stico antigo como n�s vimos ao longo deste livro. Nos dois lados do Grande Selo voc� encontra 13 estrelas sobre a cabe�a da �guia. O lema E Pluribus Unum tem 13 letras, assim como Annuit Coeptis. A �guia segura 13 folhas com 13 frutas em sua garra direita e 13 flechas na esquerda. H� 72 pedras (outro n�mero m�stico) na pir�mide organizada em 13 filas. A �guia evoluiu do s�mbolo da f�nix, o sagrado p�ssaro do Sol dos antigos eg�pcios e fen�cios e a vers�o americana Nativa � o thunderbird (p�ssaro trov�o). Manly P. Hall, um historiador Ma��nico, diz que o selo original inclu�a a f�nix e � conhecido que uma proposta para o design do Grande Selo submetido por William Barton em 1782 inclu�a uma f�nix sentada em um ninho de chamas.</span></b></font>';

ic++;
slides[ic] = 'Janus-the-God.jpg';
menus[ic] = 'Janus - O Deus';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Janus - O Deus de Duas Faces</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">O s�mbolo do Rito Escoc�s da Ma�onaria � a �guia de duas cabe�as com uma cabe�a olhando em ambas as dire��es - o s�mbolo do Nimrod Babil�nico - e mais tarde conhecido como Janus, o Deus de duas cabe�as (duas faces).</span></b></font>';

ic++;
slides[ic] = 'Janus-Eagle.jpg';
menus[ic] = 'Janus - �guia';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">A �guia de Duas Cabe�as</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">Este mesmo s�mbolo aparece em pelo menos dois retratos de George Washington. A �guia � um s�mbolo da Irmandade amplamente usado e pode ser encontrado nos bras�es de muitos pa�ses, inclusive no Egito, L�bia e Iraque. A �guia de duas cabe�as era um s�mbolo de grande import�ncia para o Nazistas na Alemanha e aparece no design dos p�lpitos e atris usados pela Igreja Crist�. Selos como o usado no Grande Selo dos Estados Unidos podem ser encontrados a pelo menos 4,000 AC no Egito, Babil�nia, Ass�ria e �ndia. Nossos velhos amigos, em outras palavras. O primeiro selo Real ingl�s foi o de Edward "O Confessor" que regeu entre 1042 e 1066. Este se tornou um modelo para todos os futuros selos brit�nicos e americanos.</span></b></font>';

ic++;
slides[ic] = 'New-World-Order.jpg';
menus[ic] = 'Nova Ordem Mundial';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">1776</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">As palavras latinas acima e embaixo da pir�mide no Grande Selo/Nota de 1 d�lar anunciam a chegada de uma nova ordem secular. A Nova Ordem Mundial � o nome interno para a Agenda da Irmandade e George Bush usou esse termo abundantemente quando ele era o presidente. A data escrita em latim no fundo da pir�mide, 1776, � pensada, compreensivelmente, ser relacionada � Declara��o Americana de Independ�ncia naquele ano. Mas algo mais aconteceu no dia 1 de maio (uma data amada pelos Satanistas) naquele mesmo ano de 1776. Uma filial muito significativa na rede da Irmandade foi lan�ada oficialmente, chamada de Bavarian Illuminati (Illuminati da Bav�ria) pelo professor alem�o, Adam Weishaupt.</span></b></font>';

ic++;
slides[ic] = 'Adam-Weishaupt.jpg';
menus[ic] = 'Adam Weishaupt';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Bavarian Illuminati (Illuminati da Bav�ria)</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">Adam Weishaupt usou a sua Illuminati para se infiltrar ainda mais na Ma�onaria. Weishaupt foi treinado como um Jesu�ta, a Sociedade de Jesus. O fundador dos Jesu�tas, o espanhol Ignatius Loyola, formou uma sociedade secreta dentro desta aparentemente ordem cat�lica e os iniciados eram chamados de os Alumbrados, os iluminados. Weishaupt criou 13 graus de inicia��o na Illuminati dele (igual ao n�mero de n�veis na pir�mide do Grande Selo) e o pessoal chave seria encontrado nos nove maiores graus. Muitas pessoas confundem a Illuminati (a rede que existe  h� milhares de anos) com a Bavarian Illuminati, que � somente uma importante sociedade secreta dentro da rede.</span></b></font>';

ic++;
slides[ic] = 'MI-5.jpg';
menus[ic] = 'MI-5';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">A Intelig�ncia Brit�nica</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">A Pir�mide e o Olho que Tudo V� tamb�m � usado como o s�mbolo de MI5, parte da Intelig�ncia brit�nica. Isso n�o me surpreende pois a Intelig�ncia brit�nica � um centro da rede de intelig�ncia da Illuminati.</span></b></font>';

ic++;
slides[ic] = 'Paris-Obelisk-&-Denver-Dome.jpg';
menus[ic] = 'Obelisco-Paris & Domo-Denver';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">O OBELISCO E A C�PULA</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">O obelisco e a c�pula s�o vis�es comuns nos monumentos e edif�cios da Irmandade. O obelisco � um s�mbolo f�lico antigo da energia masculina e da energia solar e a c�pula representa a f�mea ou a energia da Lua. Freq�entemente eles s�o colocados juntos ou perto um do outro. No Egito antigo, o obelisco, c�pula, e a estrela de cinco pontas juntas eram o s�mbolo deles para a estrela, S�rius.</span></b></font>';

ic++;
slides[ic] = 'Cleopatras-Needle.jpg';
menus[ic] = 'A Agulha de Cle�patra';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">A Agulha de Cle�patra</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">O obelisco tamb�m simboliza o p�nis do deus Sol eg�pcio, Os�ris. De acordo com a lenda, depois que Osiris foi cortado em peda�os pelo o seu rival, Set, a Rainha �sis achou todos os peda�os exceto o p�nis dele. O Shaman Zulu e historiador oficial, Credo Mutwa, detalha uma hist�ria similar   presente em lendas africanas relacionada ao p�nis do chefe dos Chitauri Reptilianos. Um obelisco   que � alegado ter vindo de Alexandria no Egito permanece no Central Park, Nova Iorque, e seu g�meo foi erguido no s�culo 19, durante o reinado da Rainha Victoria, nas antigas terras dos Templ�rios ao longo do Rio Thames n�o muito longe das Casas do Parlamento. � conhecido como a Agulha de Cle�patra e originalmente estava em Heli�polis, a Cidade eg�pcia do Sol, desde pelo menos 1500 AC, at� ser movido para Alexandria.</span></b></font>';

ic++;
slides[ic] = 'Sphinx-London.jpg';
menus[ic] = 'Esfinges - Londres';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Esfinges em Londres</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">Esfinges foram colocadas em ambos os lados da Agulha de Cle�patra em sua localiza��o em Londres.</span></b></font>';

ic++;
slides[ic] = 'Obelisks.jpg';
menus[ic] = 'Obeliscos';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Obeliscos</font></b></p><p align="center"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">Washington D.C. - Paris</span></b></font><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">Um obelisco eg�pcio que foi constru�do em Luxor 3.200 anos atr�s agora se encontra no Place de Concorde em Paris, apenas a alguns minutos de carro do local do assassinato da Princesa Diana. No outro lado do local do "acidente" est� a Torre Eiffel, outro obelisco gigantesco disfar�ado. O Monumento de Washington, em Washington DC, � um obelisco colossal.</span></b></font>';

ic++;
slides[ic] = 'Dome-of-the-Rock.jpg';
menus[ic] = 'O Domo da Pedra';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">A C�pula - Lugar dos Deuses</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">A c�pula (de uma palavra Grega que significa Lugar dos Deuses) atrai e aproveita energia, assim como a pir�mide. T�o freq�entemente voc� descobre que as grandes catedrais s�o constru�das ao redor de uma c�pula volumosa porque os construtores e projetistas delas entendiam o poder da geometria para focalizar energia em um local. A vasta c�pula dourada do santu�rio isl�mico no Monte do Templo em Jerusal�m, a c�pula de S�o Pedro no Vaticano em Roma, e a Igreja de Santa Maria que domina o horizonte de Floren�a, s�o exemplos �bvios disto.</span></b></font>';

ic++;
slides[ic] = 'St-Pauls--The-Pantheon.jpg';
menus[ic] = 'S�o Paulo - O Pante�o';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Sir Christopher Wren</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">D� uma olhada ao redor das principais cidades da Irmandade e voc� descobrir� que eles t�m pelo menos um edif�cio importante em forma de c�pula. Na Cidade de Londres voc� tem a Catedral de  S�o Paulo projetada pelo o iniciado Sir Christopher Wren depois de o Grande Fogo de Londres ter destru�do a cidade original. Uma Catedral id�ntica � de S�o Paulo encontra-se em Paris e � conhecida como o Pante�o.</span></b></font>';

ic++;
slides[ic] = 'Capitol-Building-Washington-DC.jpg';
menus[ic] = 'O Capit�lio - Washington DC';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">O Capit�lio - Washington DC</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">Olhe para o edif�cio do Congresso em Washington DC e voc� descobrir� que � uma outra S�o Paulo.</span></b></font>';

ic++;
slides[ic] = 'St-Peters--St.Pauls.jpg';
menus[ic] = 'S�o Pedro - S�o Paulo';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">O Vaticano</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">Em Roma h� a c�pula no Vaticano, aquele antigo local de adora��o � Mitra (Sol), e ao lado da c�pula voc� encontra obeliscos na pra�a de S�o Pedro.</span></b></font>';

ic++;
slides[ic] = 'Millennium-Dome.jpg';
menus[ic] = 'O Domo do Mil�nio';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">O Domo do Mil�nio</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">Em Londres o Domo/C�pula do Mil�nio foi constru�do pr�ximo a longitude zero da linha de tempo Greenwich que traspassa o Observat�rio Greenwich, que tamb�m foi, incidentalmente, projetado por Sir Christopher Wren. � a este ponto no mundo que todos os rel�gios e zonas de tempo/fusos-hor�rios (e ent�o a mente coletiva humana) est�o sintonizados e n�s vemos o universo da mesma perspectiva de tempo. A medida usada no sistema de tempo-coordenadas de Greenwich � o tempo solar. No outro lado do Rio Thames, oposto ao Domo do Mil�nio, est� o maior edif�cio e obelisco da Europa, o edif�cio Canary Wharf (Cais do Can�rio). Novamente nas cidades da Irmandade voc� invariavelmente achar� um arranha-c�u em forma de um obelisco por causa do efeito que ele tem no campo de energia.</span></b></font>';

ic++;
slides[ic] = '../../inde/nova_era2.gif';
menus[ic] = 'Final da Parte 1';
cap[ic] = '<br><br><p class="MsoNormal" align="center"><b><font color="#6699FF" size="6">Fim da Parte 1</font></b></p><br><br><p style="text-indent: 15px; margin-left: 10; margin-right: 10; margin-top: 0" align="center"><a href="../jclicker2/index.html" target="_parent"><b><font size="4">A LINGUAGEM SECRETA DA ILLUMINATI - PARTE 2</font></b></a></p><p style="text-indent: 15px; margin-left: 10; margin-right: 10; margin-top: 0" align="center"><a href="../simbolismo.htm" target="_parent"><b><font size="4">Menu de Artigos da Se��o Simbolismo</font></b></a></p>';

// --------- end the slide data --------------------------//


//--------------------------------------------------------
//  (2) SET UP THE TITLE PAGE
//  Enter a name for the slide show and a line for the
//  credits. Avoid funky HTML here, they go in h1, h2 tags
//  and are formatted in style sheets

var showTitle = 'SIMBOLISMO';
var showCredits = '<p style="margin-bottom: 0">A LINGUAGEM SECRETA DA ILLUMINATI</p><p style="margin-top: 0; margin-bottom: 0">PARTE 1</p><br><p style="margin-top: 0">Por David Icke</p>';

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
