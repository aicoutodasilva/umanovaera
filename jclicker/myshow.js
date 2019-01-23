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
menus[ic] = 'Comunicação em Código';
cap[ic] = '<p style="margin-top: 0" align="center"><b><font face="Times New Roman" color="#6699FF" size="5">Código de Comunicação</font></b></p><p style="margin-top: 0" align="justify"><b><font size="3" face="Times New Roman" color="#6699FF">Os iniciados da rede de sociedades secretas sempre tiveram um código de comunicação através de certas frases, palavras, apertos de mão engraçados e símbolos.&nbsp;<br><br>Também há uma série de assinaturas da Irmandade Babilônica que formam o seu idioma secreto e que estão diariamente ao nosso redor. Eles são obcecados com os seus rituais e símbolos por causa do cérebro réptil deles e eu não posso enfatizar mais este ponto. É uma forma pela qual eles podem ser localizados e lidos.</font></b></p>';

ic++;
slides[ic] = 'Eternal-Flame.jpg';
menus[ic] = 'Chama Eterna';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">A Chama ou Tocha Iluminada</font></b></p><p class="MsoNormal" align="justify"></p><p class="MsoNormal" align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">O símbolo mais usado deles é a tocha iluminada, que simboliza o conhecimento e o Sol. Quando um iniciado alcança um certo nível na pirâmide é dito que ele é iluminado, mais simbolismo da tocha iluminada. Um das histórias recorrentes no mundo antigo é a de um herói que toma o fogo (conhecimento) dos deuses e entrega às pessoas - às poucas pessoas escolhidas. Os Observadores (extraterrestres) chamados Azazel e Shemyaza estavam entre esses que deram conhecimento avançado aos humanos, de acordo com o Livro de Enoch.</span></b></font></p>';

ic++;
slides[ic] = 'Prometheus-Greek-God.jpg';
menus[ic] = 'Prometheus - Deus Grego';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Prometheus - Deus grego</font></b></p><p class="MsoNormal" align="justify"><b><font size="3" color="#6699FF">O símbolo mais famoso destes Observadores é o deus grego Prometheus, que era dito ter emergido das Montanhas do Cáucaso. Em muitas formas, ele era um &quot;personagem tipo Jesus&quot; que morreu pelas pessoas.<span style="mso-spacerun: yes">&nbsp;</span></font></b></p><p align="justify"><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA"><b><font size="3" color="#6699FF">No Rockefeller Center em Nova Iorque, há uma estátua de ouro de Prometheus (ouro, o metal solar dos deuses) e ele está segurando a luz, o fogo, de acordo com a lenda. Para os Rockefellers não é apenas uma estátua, é um símbolo da grande fraude em que eles estão envolvidos.</font></b></span>';

ic++;
slides[ic] = 'Statue-of-Liberty-NYC-Paris.jpg';
menus[ic] = 'Estátua da Liberdade - NY & Paris';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Estátua da Liberdade - Semiramis<span style="mso-spacerun: yes">&nbsp;</span></font></b></p><p class="MsoNormal" align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">A Estátua da Liberdade é outro símbolo da Irmandade que acentua o da tocha iluminada. A Estátua da Liberdade é de fato a Estátua de Liberdades - as liberdades perpetradas no povo americano pela Irmandade. Ela permanece lá em sua ilha na Baía de Nova Iorque segurando a sua tocha da liberdade e os americanos acreditam que ela é o símbolo da liberdade deles na &quot;Terra do Livre&quot;. Nada poderia estar mais distante da verdade. A Estátua da Liberdade foi dada à Nova Iorque por Maçons franceses e uma estátua idêntica a ela fica em uma ilha no Rio Sena em Paris. Estas estátuas da liberdade são representações da Rainha Semiramis, de Isis e de outras mais, com os raios do Sol ao redor da cabeça dela. Os antigos simbolizavam o Sol deste modo. E elas não estão segurando a tocha da liberdade, mas a tocha dos iluminados: a Elite Reptiliana. A Estátua da Liberdade é um símbolo da Irmandade que diz: Nós controlamos este país e nós estamos lhe mostrando isso, mas você é estúpido demais para ver!</span></b></font></p>';

ic++;
slides[ic] = 'Kennedy-Dealey-Plaza.jpg';
menus[ic] = 'Kennedy - Dealey Plaza';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">A assinatura da Irmandade</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">A tocha é a mais óbvia assinatura da Irmandade. Quando eles assassinaram o Presidente Kennedy em 1963, eles puseram uma tocha iluminada, a chama eterna que queima até hoje, na sepultura dele no Cemitério Arlington. Depois do assassinato em Dallas, os Maçons ergueram um obelisco no Dealey Plaza a algumas jardas do local onde Kennedy foi baleado. No topo eles colocaram uma representação da tocha iluminada.</span></b></font>';

ic++;
slides[ic] = 'Eternal-Flames-Memorials.jpg';
menus[ic] = 'Chama Eterna - Memoriais';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">O símbolo da Chama Eterna</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">Quando Diana, a Princesa de Gales, foi assassinada no túnel Pont de L Alma em Paris, o santuário para ela, onde as pessoas deixam flores, se tornou um grande símbolo de ouro da mesma chama eterna mantida pelas duas Estátuas da Liberdade, que fica bem em cima do túnel onde o carro dela bateu no 13º pilar. Apenas uma coincidência, nada com o que se preocupar! Na ilha onde é dito que ela foi enterrada, eles colocaram ainda outra representação de uma tocha iluminada.</span></b></font>';

ic++;
slides[ic] = 'Olympic-Torch.jpg';
menus[ic] = 'Tocha Olímpica';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Tocha Olímpica</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">A Irmandade está nos dizendo que eles mataram Kennedy e Diana, mas a menos que você entenda o idioma simbólico deles, você não saberá disso. A tocha iluminada nos Jogos Olímpicos tem o mesmo significado.</span></b></font>';

ic++;
slides[ic] = 'Great-Pyramid.jpg';
menus[ic] = 'A Pirâmide';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">A Pirâmide</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">Outro símbolo fundamental da Irmandade é a pirâmide ou a pirâmide com o topo incompleto, faltando a última pedra.</span></b></font>';

ic++;
slides[ic] = 'Dealey-Plaza-Map.jpg';
menus[ic] = 'Mapa - Dealey Plaza';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Dealey Plaza</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">A planta das ruas do Dealey Plaza onde Kennedy foi assassinado tem a forma de uma pirâmide com o topo incompleto e Dealey na verdade quer dizer Linha da Deusa como em Dea (deusa) e ley (ley line).</span></b></font>';

ic++;
slides[ic] = 'US-Note.jpg';
menus[ic] = 'Nota de 1 dólar - EUA';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Pirâmide dos Estados Unidos</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">A pirâmide com o topo incompleto, ou a pirâmide e o olho que tudo vê, é descrito mais conhecidamente no verso do Grande Selo dos Estados Unidos e na nota de um dólar. O olho que tudo vê é o olho de Hórus, Lúcifer, Satanás, qualquer nome que você queira usar.</span></b></font>';

ic++;
slides[ic] = 'US-Seal.jpg';
menus[ic] = 'Selo - EUA ';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">O Olho de Hórus</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">De acordo com a lenda egípcia, Osíris foi assassinado por Set e Set foi morto por Hórus que perdeu um olho no processo, conseqüentemente o Olho de Hórus. O Maçom de 33º grau e presidente da Nobreza Negra, Franklin Delano Roosevelt, teve este símbolo imprimido na nota de um dólar desde 1933. O Olho de Hórus era um símbolo das sociedades secretas na Europa muito antes de qualquer um ter ouvido falar dos Estados Unidos e ele está inundado de simbolismo Maçônico e de simbolismo de sociedade secreta, derivado do mundo antigo.</span></b></font>';

ic++;
slides[ic] = 'US-Eagle.jpg';
menus[ic] = 'Águia - EUA';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">O Grande Selo dos EUA</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">O número de estados na América no período da independência, 13, não era nenhuma coincidência. Treze, o sagrado doze e um, é um número místico antigo como nós vimos ao longo deste livro. Nos dois lados do Grande Selo você encontra 13 estrelas sobre a cabeça da águia. O lema E Pluribus Unum tem 13 letras, assim como Annuit Coeptis. A águia segura 13 folhas com 13 frutas em sua garra direita e 13 flechas na esquerda. Há 72 pedras (outro número místico) na pirâmide organizada em 13 filas. A águia evoluiu do símbolo da fênix, o sagrado pássaro do Sol dos antigos egípcios e fenícios e a versão americana Nativa é o thunderbird (pássaro trovão). Manly P. Hall, um historiador Maçônico, diz que o selo original incluía a fênix e é conhecido que uma proposta para o design do Grande Selo submetido por William Barton em 1782 incluía uma fênix sentada em um ninho de chamas.</span></b></font>';

ic++;
slides[ic] = 'Janus-the-God.jpg';
menus[ic] = 'Janus - O Deus';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Janus - O Deus de Duas Faces</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">O símbolo do Rito Escocês da Maçonaria é a águia de duas cabeças com uma cabeça olhando em ambas as direções - o símbolo do Nimrod Babilônico - e mais tarde conhecido como Janus, o Deus de duas cabeças (duas faces).</span></b></font>';

ic++;
slides[ic] = 'Janus-Eagle.jpg';
menus[ic] = 'Janus - Águia';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">A Águia de Duas Cabeças</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">Este mesmo símbolo aparece em pelo menos dois retratos de George Washington. A águia é um símbolo da Irmandade amplamente usado e pode ser encontrado nos brasões de muitos países, inclusive no Egito, Líbia e Iraque. A águia de duas cabeças era um símbolo de grande importância para o Nazistas na Alemanha e aparece no design dos púlpitos e atris usados pela Igreja Cristã. Selos como o usado no Grande Selo dos Estados Unidos podem ser encontrados a pelo menos 4,000 AC no Egito, Babilônia, Assíria e Índia. Nossos velhos amigos, em outras palavras. O primeiro selo Real inglês foi o de Edward "O Confessor" que regeu entre 1042 e 1066. Este se tornou um modelo para todos os futuros selos britânicos e americanos.</span></b></font>';

ic++;
slides[ic] = 'New-World-Order.jpg';
menus[ic] = 'Nova Ordem Mundial';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">1776</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">As palavras latinas acima e embaixo da pirâmide no Grande Selo/Nota de 1 dólar anunciam a chegada de uma nova ordem secular. A Nova Ordem Mundial é o nome interno para a Agenda da Irmandade e George Bush usou esse termo abundantemente quando ele era o presidente. A data escrita em latim no fundo da pirâmide, 1776, é pensada, compreensivelmente, ser relacionada à Declaração Americana de Independência naquele ano. Mas algo mais aconteceu no dia 1 de maio (uma data amada pelos Satanistas) naquele mesmo ano de 1776. Uma filial muito significativa na rede da Irmandade foi lançada oficialmente, chamada de Bavarian Illuminati (Illuminati da Bavária) pelo professor alemão, Adam Weishaupt.</span></b></font>';

ic++;
slides[ic] = 'Adam-Weishaupt.jpg';
menus[ic] = 'Adam Weishaupt';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Bavarian Illuminati (Illuminati da Bavária)</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">Adam Weishaupt usou a sua Illuminati para se infiltrar ainda mais na Maçonaria. Weishaupt foi treinado como um Jesuíta, a Sociedade de Jesus. O fundador dos Jesuítas, o espanhol Ignatius Loyola, formou uma sociedade secreta dentro desta aparentemente ordem católica e os iniciados eram chamados de os Alumbrados, os iluminados. Weishaupt criou 13 graus de iniciação na Illuminati dele (igual ao número de níveis na pirâmide do Grande Selo) e o pessoal chave seria encontrado nos nove maiores graus. Muitas pessoas confundem a Illuminati (a rede que existe  há milhares de anos) com a Bavarian Illuminati, que é somente uma importante sociedade secreta dentro da rede.</span></b></font>';

ic++;
slides[ic] = 'MI-5.jpg';
menus[ic] = 'MI-5';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">A Inteligência Britânica</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">A Pirâmide e o Olho que Tudo Vê também é usado como o símbolo de MI5, parte da Inteligência britânica. Isso não me surpreende pois a Inteligência britânica é um centro da rede de inteligência da Illuminati.</span></b></font>';

ic++;
slides[ic] = 'Paris-Obelisk-&-Denver-Dome.jpg';
menus[ic] = 'Obelisco-Paris & Domo-Denver';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">O OBELISCO E A CÚPULA</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">O obelisco e a cúpula são visões comuns nos monumentos e edifícios da Irmandade. O obelisco é um símbolo fálico antigo da energia masculina e da energia solar e a cúpula representa a fêmea ou a energia da Lua. Freqüentemente eles são colocados juntos ou perto um do outro. No Egito antigo, o obelisco, cúpula, e a estrela de cinco pontas juntas eram o símbolo deles para a estrela, Sírius.</span></b></font>';

ic++;
slides[ic] = 'Cleopatras-Needle.jpg';
menus[ic] = 'A Agulha de Cleópatra';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">A Agulha de Cleópatra</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">O obelisco também simboliza o pênis do deus Sol egípcio, Osíris. De acordo com a lenda, depois que Osiris foi cortado em pedaços pelo o seu rival, Set, a Rainha Ísis achou todos os pedaços exceto o pênis dele. O Shaman Zulu e historiador oficial, Credo Mutwa, detalha uma história similar   presente em lendas africanas relacionada ao pênis do chefe dos Chitauri Reptilianos. Um obelisco   que é alegado ter vindo de Alexandria no Egito permanece no Central Park, Nova Iorque, e seu gêmeo foi erguido no século 19, durante o reinado da Rainha Victoria, nas antigas terras dos Templários ao longo do Rio Thames não muito longe das Casas do Parlamento. É conhecido como a Agulha de Cleópatra e originalmente estava em Heliópolis, a Cidade egípcia do Sol, desde pelo menos 1500 AC, até ser movido para Alexandria.</span></b></font>';

ic++;
slides[ic] = 'Sphinx-London.jpg';
menus[ic] = 'Esfinges - Londres';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Esfinges em Londres</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">Esfinges foram colocadas em ambos os lados da Agulha de Cleópatra em sua localização em Londres.</span></b></font>';

ic++;
slides[ic] = 'Obelisks.jpg';
menus[ic] = 'Obeliscos';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Obeliscos</font></b></p><p align="center"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">Washington D.C. - Paris</span></b></font><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">Um obelisco egípcio que foi construído em Luxor 3.200 anos atrás agora se encontra no Place de Concorde em Paris, apenas a alguns minutos de carro do local do assassinato da Princesa Diana. No outro lado do local do "acidente" está a Torre Eiffel, outro obelisco gigantesco disfarçado. O Monumento de Washington, em Washington DC, é um obelisco colossal.</span></b></font>';

ic++;
slides[ic] = 'Dome-of-the-Rock.jpg';
menus[ic] = 'O Domo da Pedra';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">A Cúpula - Lugar dos Deuses</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">A cúpula (de uma palavra Grega que significa Lugar dos Deuses) atrai e aproveita energia, assim como a pirâmide. Tão freqüentemente você descobre que as grandes catedrais são construídas ao redor de uma cúpula volumosa porque os construtores e projetistas delas entendiam o poder da geometria para focalizar energia em um local. A vasta cúpula dourada do santuário islâmico no Monte do Templo em Jerusalém, a cúpula de São Pedro no Vaticano em Roma, e a Igreja de Santa Maria que domina o horizonte de Florença, são exemplos óbvios disto.</span></b></font>';

ic++;
slides[ic] = 'St-Pauls--The-Pantheon.jpg';
menus[ic] = 'São Paulo - O Panteão';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">Sir Christopher Wren</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">Dê uma olhada ao redor das principais cidades da Irmandade e você descobrirá que eles têm pelo menos um edifício importante em forma de cúpula. Na Cidade de Londres você tem a Catedral de  São Paulo projetada pelo o iniciado Sir Christopher Wren depois de o Grande Fogo de Londres ter destruído a cidade original. Uma Catedral idêntica à de São Paulo encontra-se em Paris e é conhecida como o Panteão.</span></b></font>';

ic++;
slides[ic] = 'Capitol-Building-Washington-DC.jpg';
menus[ic] = 'O Capitólio - Washington DC';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">O Capitólio - Washington DC</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">Olhe para o edifício do Congresso em Washington DC e você descobrirá que é uma outra São Paulo.</span></b></font>';

ic++;
slides[ic] = 'St-Peters--St.Pauls.jpg';
menus[ic] = 'São Pedro - São Paulo';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">O Vaticano</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">Em Roma há a cúpula no Vaticano, aquele antigo local de adoração à Mitra (Sol), e ao lado da cúpula você encontra obeliscos na praça de São Pedro.</span></b></font>';

ic++;
slides[ic] = 'Millennium-Dome.jpg';
menus[ic] = 'O Domo do Milênio';
cap[ic] = '<p class="MsoNormal" align="center"><b><font color="#6699FF" size="5">O Domo do Milênio</font></b></p><p align="justify"><font color="#6699FF" size="3"><b><span style="font-family: Times New Roman; mso-fareast-font-family: Times New Roman; mso-ansi-language: PT-BR; mso-fareast-language: PT-BR; mso-bidi-language: AR-SA">Em Londres o Domo/Cúpula do Milênio foi construído próximo a longitude zero da linha de tempo Greenwich que traspassa o Observatório Greenwich, que também foi, incidentalmente, projetado por Sir Christopher Wren. É a este ponto no mundo que todos os relógios e zonas de tempo/fusos-horários (e então a mente coletiva humana) estão sintonizados e nós vemos o universo da mesma perspectiva de tempo. A medida usada no sistema de tempo-coordenadas de Greenwich é o tempo solar. No outro lado do Rio Thames, oposto ao Domo do Milênio, está o maior edifício e obelisco da Europa, o edifício Canary Wharf (Cais do Canário). Novamente nas cidades da Irmandade você invariavelmente achará um arranha-céu em forma de um obelisco por causa do efeito que ele tem no campo de energia.</span></b></font>';

ic++;
slides[ic] = '../../inde/nova_era2.gif';
menus[ic] = 'Final da Parte 1';
cap[ic] = '<br><br><p class="MsoNormal" align="center"><b><font color="#6699FF" size="6">Fim da Parte 1</font></b></p><br><br><p style="text-indent: 15px; margin-left: 10; margin-right: 10; margin-top: 0" align="center"><a href="../jclicker2/index.html" target="_parent"><b><font size="4">A LINGUAGEM SECRETA DA ILLUMINATI - PARTE 2</font></b></a></p><p style="text-indent: 15px; margin-left: 10; margin-right: 10; margin-top: 0" align="center"><a href="../simbolismo.htm" target="_parent"><b><font size="4">Menu de Artigos da Seção Simbolismo</font></b></a></p>';

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
