import React from "react";
import { useParams } from "react-router-dom";

export default function News() {
  const { id } = useParams();

    if (id==1){
      return (
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold my-4">
            Convocados para a Euro 2024: veja as listas das seleções
          </h1>
          <img
            className="w-1/2 h-auto mb-8"
            src="https://s2-ge.glbimg.com/D8VTiUf_HyTl3VC6tV1rzGrHKfg=/0x0:4000x2667/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2024/O/o/aSSQQRSe2wlBAbI3fz7Q/gettyimages-2152732355.jpg"
            alt="Front Cover"
          />
          <div className="max-w-screen-xl px-4 pb-8">
            <p>
              Os times que decidiram anunciar convocações com mais do que 26 atletas
              foram Alemanha, Suíça, Croácia, Eslovênia, Sérvia, Inglaterra, Holanda
              e França. Optaram por anunciar diretamente a lista final para a
              Eurocopa Hungria, Ucrânia e Portugal.{" "}
            </p>
            <p>&nbsp;</p>
            <p>
              O debate pelo aumento na lista se iniciou após a Uefa afirmar, em
              outubro do ano passado, que as seleções só poderiam convocar 23
              jogadores para a fase de grupos da Euro. Diversos treinadores se
              pronunciaram de maneira negativa sobre a posição da confederação. Na
              última edição do torneio, disputada em 2021, as equipes puderam
              convocar 26 jogadores para a disputa, em uma medida preventiva diante
              dos muitos casos de Covid-19 em meio à pandemia.
            </p>
            <p>&nbsp;</p>
            <h3>
              <strong>Convocados da Alemanha para a Euro 2024:</strong>
            </h3>
            <ul className="content-unordered-list">
              <li>
                <strong>Goleiros:</strong> Baumann (Hoffenheim), Neuer (Bayern de
                Munique), Nübel (Stuttgart) e Ter Stegen (Barcelona);
              </li>
              <li>
                <strong>Defensores:</strong> Anton (Stuttgart), Henrichs (RB
                Leipzig), Kimmich (Bayern de Munique), Koch (Eintracht Frankfurt),
                Mittelstädt (Stuttgart), Raum (RB Leipzig), Rüdiger (Real Madrid),
                Schlotterbeck (Borussia Dortmund) e Tah (Bayer Leverkusen);
              </li>
              <li>
                <strong>Meio-campistas: </strong>Andrich (Bayer Leverkusen), Führich
                (Stuttgart), Pascal Gross (Brighton), Gündogan (Barcelona), Kroos
                (Real Madrid), Musiala (Bayern de Munique), Pavlovic (Bayern de
                Munique), Sané (Bayern de Munique) e Wirtz (Bayer Leverkusen);
              </li>
              <li>
                <strong>Atacantes: </strong>Beier (Hoffenheim), Füllkrug (Borussia
                Dortmund), Havertz (Arsenal), Müller (Bayern de Munique) e Undav
                (Stuttgart).
              </li>
            </ul>
    
            <p>&nbsp;</p>
    
            <h3>
              <strong>Convocados dos Países Baixos para a Euro 2024:</strong>
            </h3>
            <ul className="content-unordered-list">
              <li>
                <strong>Goleiros:</strong> Justin Bijlow (Feyenoord), Mark Flekken
                (Brentford), Bart Verbruggen (Brighton) e Nick Olij (Sparta
                Rotterdam);
              </li>
              <li>
                <strong>Defensores:</strong> Nathan Ake (Manchester City), Daley
                Blind (Girona FC), Virgil van Dijk (Liverpool), Denzel Dumfries
                (Inter de Milão), Jeremie Frimpong (Bayer Leverkusen), Lutsharel
                Geertruida (Feyenoord), Matthijs de Ligt (Bayern de Munique), Ian
                Maatsen (Borussia Dortmund), Micky van de Ven (Tottenham) e Stefan
                de Vrij (Inter de Milão);
              </li>
              <li>
                <strong>Meio-campistas: </strong>Ryan Gravenberch (Liverpool),
                Frenkie de Jong (Barcelona), Teun Koopmeiners (Atalanta), Tijjani
                Reijnders (Milan), Marten de Roon (Atalanta), Jerdy Schouten (PSV),
                Xavi Simons (RB Leipzig), Quinten Timber (Feyenoord), Joey Veerman
                (PSV) e Georginio Wijnaldum (Al Ettifaq);
              </li>
              <li>
                <strong>Atacantes: </strong>Steven Bergwijn (Ajax), Brian Brobbey
                (Ajax), Memphis Depay (Atlético de Madrid), Cody Gakpo (Liverpool),
                Donyell Malen (Borussia Dortmund) e Wout Weghorst (Hoffenheim).
              </li>
            </ul>
    
            <p>&nbsp;</p>
    
            <h3>
              <strong>Convocados da França para a Euro 2024:</strong>
            </h3>
            <ul className="content-unordered-list">
              <li>
                <strong>Goleiros:</strong> Aréola (West Ham), Maignan (Milan) e
                Samba (Lens);
              </li>
              <li>
                <strong>Defensores:</strong> Koundé (Barcelona), Clauss (Olympique
                de Marselha), Pavard (Inter de Milão), Konaté (Liverpool), Upamecano
                (Bayern de Munique), Saliba (Arsenal) e Theo Hernandez (Milan),
                Mendy (Real Madrid);
              </li>
              <li>
                <strong>Meio-campistas: </strong>Camavinga (Real Madrid), Youssouf
                Fofana (Monaco), Kanté (Al-Ittihad), Rabiot (Juventus), Zäire-Emery
                (PSG), Tchouaméni (Real Madrid) e Griezmann (Atlético de Madrid);
              </li>
              <li>
                <strong>Atacantes: </strong>Dembélé (PSG), Giroud (Los Angeles FC),
                Kolo Muani (PSG), Mbappé (PSG), Thuram (Inter de Milão), Coman
                (Bayern de Munique) e Barcola (PSG).
              </li>
            </ul>
    
            <p>&nbsp;</p>
    
            <h3>
              <strong>Convocados da Croácia para a Euro 2024:</strong>
            </h3>
            <ul className="content-unordered-list">
              <li>
                <strong>Goleiros:</strong> Dominik Livakovic (Fenerbahce), Ivica
                Ivusic (Pafos) e Nediljko Labrovic (Rijeka);
              </li>
              <li>
                <strong>Defensores:</strong> Domagoj Vida (AEK Atenas), Josip
                Juranovic (Union Berlin), Josko Gvardiol (Manchester City), Borna
                Sosa (Ajax), Josip Stanisic (Bayer Leverkusen), Josip Sutalo (Ajax),
                Martin Erlic (Sassuolo) e Marin Pongracic (Lecce);
              </li>
              <li>
                <strong>Meio-campistas: </strong>Luka Modric (Real Madrid), Mateo
                Kovacic (Manchester City), Marcelo Brozovic (Al-Nassr), Mario
                Pasalic (Atalanta), Nikola Vlasic (Torino), Lovro Majer (Wolsfburg),
                Luka Ivanusec (Feyenoord), Luka Sucic (RB Salzburg) e Martin
                Baturina (Dínamo Zagreb);
              </li>
              <li>
                <strong>Atacantes: </strong>Ivan Perisic (Hajduk Split), Andrej
                Kramaric (Hoffenheim), Bruno Petkovic (Dínamo Zagreb), Marko Pjaca
                (Rijeka), Ante Budimir (Osasuna) e Marco Pasalic (Rijeka).
              </li>
            </ul>
    
            <p>&nbsp;</p>
    
            <h3>
              <strong>Convocados de Portugal para a Euro 2024:</strong>
            </h3>
            <ul className="content-unordered-list">
              <li>
                <strong>Goleiros:</strong> Diogo Costa (Porto), José Sá
                (Wolverhampton) e Rui Patrício (Roma);
              </li>
              <li>
                <strong>Defensores:</strong> António Silva (Benfica), Danilo Pereira
                (PSG), Diogo Dalot (Manchester United), Gonçalo Inácio (Sporting),
                João Cancelo (Barcelona), Nélson Semedo (Wolverhampton), Nuno Mendes
                (PSG), Pepe (Porto) e Rúben Dias (Manchester City);
              </li>
              <li>
                <strong>Meio-campistas: </strong>Bruno Fernandes (Manchester
                United), João Neves (Benfica), João Palhinha (Fulham), Otávio
                (Al-Nassr), Rúben Neves (Al-Hilal) e Vitinha (PSG);
              </li>
              <li>
                <strong>Atacantes: </strong>Bernardo Silva (Manchester City),
                Cristiano Ronaldo (Al-Nassr), Diogo Jota (Liverpool), Francisco
                Conceição (Porto), Gonçalo Ramos (PSG), João Félix (Barcelona),
                Pedro Neto (Wolverhampton) e Rafael Leão (Milan).
              </li>
            </ul>
    
            <p>&nbsp;</p>
    
            <h3>
              <strong>Convocados da Inglaterra para a Euro 2024:</strong>
            </h3>
            <ul className="content-unordered-list">
              <li>
                <strong>Goleiros:</strong> Dean Henderson (Crystal Palace), Jordan
                Pickford (Everton), Aaron Ramsdale (Arsenal) e James Trafford
                (Burnley);
              </li>
              <li>
                <strong>Defensores:</strong> Jarrad Branthwaite (Everton), Lewis
                Dunk (Brighton), Joe Gomez (Liverpool), Marc Guehi (Crystal Palace),
                Ezri Konsa (Aston Villa), Harry Maguire (Manchester United), Jarell
                Quansah (Liverpool), Luke Shaw (Manchester United), John Stones
                (Manchester City), Kieran Trippier (Newcastle United) e Kyle Walker
                (Manchester City);
              </li>
              <li>
                <strong>Meio-campistas: </strong>Trent Alexander-Arnold (Liverpool),
                Jude Bellingham (Real Madrid), Conor Gallagher (Chelsea), Curtis
                Jones (Liverpool), Kobbie Mainoo (Manchester United), Declan Rice
                (Arsenal) e Adam Wharton (Crystal Palace);
              </li>
              <li>
                <strong>Atacantes: </strong> Jarrod Bowen (West Ham United),
                Eberechi Eze (Crystal Palace), Phil Foden (Manchester City), Anthony
                Gordon (Newcastle United), Jack Grealish (Manchester City), Harry
                Kane (Bayern Munich), James Maddison (Tottenham), Cole Palmer
                (Chelsea), Bukayo Saka (Arsenal), Ivan Toney (Brentford) e Ollie
                Watkins (Aston Villa).
              </li>
            </ul>
    
            <p>&nbsp;</p>
    
            <h3>
              <strong>Convocados da Eslovênia para a Euro 2024:</strong>
            </h3>
            <ul className="content-unordered-list">
              <li>
                <strong>Goleiros:</strong> Jan Oblak (Atlético de Madrid), Vid Belec
                (Apoel), Igor Vekic (Vejle Boldklub) e Matevj Vidovsek (Olimpija);
              </li>
              <li>
                <strong>Defensores:</strong>Zan Karnicnik (NK Celje), Miha Blazic
                (Lech Poznan), Jure Balkovec (Alanyaspor), Jaka Bijol (Udinese),
                Erik Janza (Górnik Zabrze), Petar Stojanovic (Sampdoria), Vanja
                Drkusic (FK Sochi), David Brekalo (Orlando City) e Zan Zaletel
                (Viborg);
              </li>
              <li>
                <strong>Meio-campistas: </strong> Timi Elsnik (Olimpija), Sandi
                Lovric (Udinese), Tomi Horvat (Sturm Graz), Jon Gorenc-Stankovic
                (Sturm Graz), Jasmin Kurtic (Südtirol), Adam Cerin (Panathinaikos),
                Benjamin Verbic (Panathinaikos), Nino Zugelj (Bodo Glimt), Miha
                Zeiss (Fenerbahce) e Adrian Zelkovich (Spartak Trnava);
              </li>
              <li>
                <strong>Atacantes: </strong> Jan Mlakar (Pisa), Zan Vipotnik
                (Bordeaux), Benjamin Sesko (RB Leipzig), Andraz Sporar
                (Panathinaikos), Zan Celar (Lugano), Luka Zahovic (Pogon Szczecin) e
                Josip Ilicic (Maribor).
              </li>
            </ul>
    
            <p>&nbsp;</p>
    
            <h3>
              <strong>Convocados da Hungria para a Euro 2024:</strong>
            </h3>
            <ul className="content-unordered-list">
              <li>
                <strong>Goleiros:</strong> Denes Dibusz (Ferencvaros), Peter Gulacsi
                (RB Leipzig) e Peter Szappanos (Paks)
              </li>
              <li>
                <strong>Defensores:</strong> Botond Balogh (Parma), Endre Botka
                (Ferencvaros), Marton Dardai (Hertha Berlin), Attila Fiola
                (Fehervar), Adam Lang (Omonia Nicosia), Willi Orban (RB Leipzig) e
                Attila Szalai (Freiburg);
              </li>
              <li>
                <strong>Meio-campistas: </strong> Bendeguz Bolla (Servette), Mihaly
                Kata (MTK Budapeste), Milos Kerkez (Bournemouth), Laszlo
                Kleinheisler (Hajduk Split), Adam Nagy (Spezia), Zsolt Nagy (Puskas
                Akademia), Loic Nego (Le Havre), Andras Schafer (Union Berlin) e
                Callum Styles (Sunderland);
              </li>
              <li>
                <strong>Atacantes: </strong> Martin Adam (Ulsan Hyundai), Kevin
                Csoboth (Ujpest), Daniel Gazdag (Philadelphia Union), Krisztofer
                Horvath (Kecskemet), Roland Sallai (Freiburg), Dominik Szoboszlai
                (Liverpool), e Barnabas Varga (Ferencvaros).
              </li>
            </ul>
    
            <p>&nbsp;</p>
    
            <h3>
              <strong>Convocados da Suíça para a Euro 2024:</strong>
            </h3>
            <ul className="content-unordered-list">
              <li>
                <strong>Goleiros:</strong> Yann Sommer (Inter de Milão), Yvon Mvogo
                (Lorient), Gregor Kobel (Borussia Dortmund), Marvin Keller
                (Winterthur) e Pascal Loretz (Luzern);
              </li>
              <li>
                <strong>Defensores:</strong> Ricardo Rodriguez (Torino), Fabian
                Schar (Newcastle), Manuel Akanji (Manchester City), Nico Elvedi
                (Borussia Monchengladbach), Silvan Widmer (Mainz 05), Kevin Mbadu
                (Augsburg), Ulisses Garcia (Olympique de Marselha), Cedric Zesigner
                (Wolfsburg), Leonidas Stergiou (Stuttgart), Aurele Amenda (Young
                Boys), Albuan Hajdari (Lugano) e Bryan Okoh (RB Salzburg).
              </li>
              <li>
                <strong>Meio-campistas: </strong> Granit Xhaka (Bayer Leverkusen),
                Xherdan Shaqiri (Chicago Fire), Remo Freuler (Bologna), Denis
                Zakaria (Monaco), Michel Aebischer (Bologna), Fabian Rieder
                (Rennes), Uran Bislimi (Lugano), Ardon Jashari (Luzern), Filip
                Ugrinic (Young Boys) e Vincent Sierro (Toulouse).
              </li>
              <li>
                <strong>Atacantes: </strong> Breel Embolo (Monaco), Steven Zuber
                (AEK), Ruben Vargas (Augsburg), Renato Steffen (Lugano), Noah Okafor
                (Milan), Zeki Amdouni (Burnley), Andi Zeqiri (Genk), Dan Ndoye
                (Bologna), Kwadwo Duah (Ludogorets) e Joel Monteiro (Young Boys).
              </li>
            </ul>
    
            <p>&nbsp;</p>
    
            <h3>
              <strong>Convocados da Sérvia para a Euro 2024:</strong>
            </h3>
            <ul className="content-unordered-list">
              <li>
                <strong>Goleiros:</strong> Vanja Milinkovic Savic (Turin), Predrag
                Rajkovic (Mallorca), Dorde Petrovic (Chelsea) e Aleksandar Jovanovic
                (Partizan);
              </li>
              <li>
                <strong>Defensores:</strong> Strahinja Pavlovic (RB Salzburg),
                Nikola Milenkovic (Fiorentina), Milos Veljkovic (Werder Bremen),
                Srdan Babic (Spartak Moscou), Uros Spajic (Estrela Vermelha),
                Strahinja Erakovic (Zenit), Nemanja Stojic (TSC Backa Topola) e Jan
                Karlo Simic (Milan);
              </li>
              <li>
                <strong>Meio-campistas: </strong> Sasa Lukic (Fulham), Nemanja
                Gudelj (Sevilla), Nemanja Maksimovic (Getafe), Ivan Ilic (Torino),
                Sasa Zdjelar (CSKA Moscou), Srdjan Mijailovic (Estrela Vermelha),
                Sergej Milinkovic Savic (Al-Hilal), Dusan Tadic (Fenerbahçe), Samed
                Bazdar (Partizan), Aleksandar Cirkovic (TSC Backa Topola), Lazar
                Samardzic (Udinese), Veljko Birmancevic (Sparta Praga), Filip Kostic
                (Juventus), Filip Mladenovic (Panathinaikos), Matija Glusceviz
                (Radnicki), Andrija Zivkovic (PAOK), Mijat Gacinovic (AEK) e Nemanja
                Radonjic (Mallorca);
              </li>
              <li>
                <strong>Atacantes: </strong> Aleksandar Mitrovic (Al-Hilal), Dusan
                Vlahovic (Juventus), Luka Jovic (Milan), Petar Ratkov (RB Salzburg)
                e Mihailo Ivanovic (Vojvodina).
              </li>
            </ul>
    
            <p>&nbsp;</p>
    
            <h3>
              <strong>Convocados da Ucrânia para a Euro 2024:</strong>
            </h3>
            <ul className="content-unordered-list">
              <li>
                <strong>Goleiros:</strong> Andriy Lunin (Real Madrid), Anatoliy
                Trubin (Benfica) e Heorhiy Bushchan (Dínamo de Kiev);
              </li>
              <li>
                <strong>Defensores:</strong> Yukhym Konoplia, Valeriy Bondar, Mykola
                Matvienko (Shakhtar Donetsk), Oleksandr Tymchyk (Dínamo de Kiev),
                Vitaliy Mykolenko (Everton), Maksym Taloverov (LASK), Illia Zabarnyi
                (Bournemouth) e Oleksandr Svatok (Dnipro-1);
              </li>
              <li>
                <strong>Meio-campistas: </strong> Taras Stepanenko, Oleksandr
                Zubkov, Heorhiy Sudakov (Shakhtar Donetsk), Andriy Yarmolenko,
                Volodymyr Brazhko, Mykola Shaparenko (Dínamo de Kiev), Serhiy
                Sydorchuk (Westerlo), Ruslan Malinovskyi (Genoa), Mykhailo Mudryk
                (Chelsea), Viktor Tsyhankov (Girona) e Oleksandr Zinchenko
                (Arsenal).
              </li>
              <li>
                <strong>Atacantes: </strong> Artem Dovbyk (Girona), Roman Yaremchuk
                (Valencia) e Vladyslav Vanat (Dínamo de Kiev).
              </li>
            </ul>
    
            <p>&nbsp;</p>
    
            <h3>
              <strong>Convocados da Escócia para a Euro 2024:</strong>
            </h3>
            <ul className="content-unordered-list">
              <li>
                <strong>Goleiros:</strong> Zander Clark , Craig Gordon (Heart of
                Midlothian), Angus Gunn (Norwich City) e Liam Kelly (Motherwell);
              </li>
              <li>
                <strong>Defensores:</strong> Liam Cooper (Leeds United), Grant
                Hanley (Norwich City), Jack Hendry (Al-Ettifaq), Ross McCrorie
                (Bristol City), Scott McKenna (FC Kobenhavn), Ryan Porteous
                (Watford), Anthony Ralston (Celtic), Andy Robertson (Liverpool),
                John Souttar (Rangers), Greg Taylor (Celtic) e Kieran Tierney (Real
                Sociedad);
              </li>
              <li>
                <strong>Meio-campistas: </strong> Stuart Armstrong (Southampton),
                Ryan Christie (Bournemouth), Billy Gilmour (Brighton & Hove Albion),
                Ryan Jack (Rangers), John McGinn (Aston Villa), Callum McGregor (
                Celtic), Kenny McLean (Norwich City) e Scott McTominay (Manchester
                United);
              </li>
              <li>
                <strong>Atacantes: </strong> Ché Adams (Southampton), Ben Doak
                (Liverpool), Lyndon Dykes (QPR), James Forrest (Celtic) e Lawrence
                Shankland (Hearts).
              </li>
            </ul>
    
            <p>&nbsp;</p>
    
            <h3>
              <strong>Convocados da Geórgia para a Euro 2024:</strong>
            </h3>
            <ul className="content-unordered-list">
              <li>
                <strong>Goleiros:</strong> Mamardashvili (Valencia), Loria (Dinamo
                Tbilisi) e Gugeshashvili (Qarabag).
              </li>
              <li>
                <strong>Defensores:</strong> Kverkvelia (Al-Akhdoud), Gvelesiani
                (Persépolis), Kashia (Slovan Bratislava), Tabidze (Panetolikos),
                Dvali (Apoel), Lochoshvili (Cremonese), Kakabadze (Cracovie) e
                Gocholeishvili (Shakhtar Donetsk).
              </li>
              <li>
                <strong>Meio-campistas: </strong> Chakvetadze (Watford),
                Mekvabishvili (Craiova), Kankava (Slovan Bratislava), Kiteishvili
                (Sturm), Kvekveskiri (Lekh), Kochorashvili (Levante), Altunashvili
                (Wolfsberger), Shengelia (Panetolikos), Tsitaishvili (Dinamo
                Batumi), Lobzhanidze (Atlanta United) e Davitashvili (Bordeaux).
              </li>
              <li>
                <strong>Atacantes: </strong> Kvaratskhelia (Napoli), Mikautadze
                (Metz), Zivzivadze (Karlsruhe) e Kvilitaia (Apoel).
              </li>
            </ul>
          </div>
        </div>
      );
    }
    if (id==2){
      return (
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold my-4">
          Uefa define local das finais da Champions League de 2026 e 2027
          </h1>
          <h2 className="my-4">Arena Puskás, em Budapeste, e San Siro, em Milão, são escolhidos, mas confirmação do estádio italiano depende de plano de reforma</h2>
          <img
            className="w-1/2 h-auto mb-8"
            src="https://s2-ge.glbimg.com/KSoIi-b0cUDXRpdVn86KmRHRDUM=/0x0:5472x3648/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2024/u/6/SEBqoKTCAebOug2hDAog/gettyimages-2149709163.jpg"
            alt="Front Cover"
          />
          <div className="max-w-screen-xl px-4 pb-8">
            <p>
              A final da Champions League de 2026 será disputada na Arena Puskás, em Budapeste, na Hungria. E a final da Liga dos Campeões de 2027 está inicialmente prevista para o San Siro, em Milão, na Itália. O anúncio foi feito nesta quarta-feira, por decisão do Comitê Executivo da Uefa em reunião em Dublin, na Irlanda.
            </p>
            <p>&nbsp;</p>
            <p>
              A Arena Puskás voltará a receber uma final europeia depois de ter sido palco da decisão da Liga Europa de 2023, em que o Sevilla superou a Roma para faturar o título da competição pela sétima vez. Inaugurado em 2019, o estádio também recebeu jogos da Eurocopa de 2020 e sediou a Supercopa da Europa de 2020, vencida pelo Bayern de Munique.
            </p>
            <p>&nbsp;</p>
            <p>
              A confirmação do San Siro está suspensa até setembro, dependendo de a Federação Italiana de Futebol (FIGC, na sigla em italiano) apresentar informações dos planos de reforma do estádio. A prefeitura de Milão está trabalhando em um projeto de modernização do San Siro enquanto Milan e Inter de Milão, clubes que mandam seus jogos no estádio, estão à procura de uma nova casa.
            </p>
            <p>&nbsp;</p>
            <p>O San Siro foi construído em 1926, recebeu jogos da Copa do Mundo de 1934 e da Eurocopa de 1984, e foi modernizado para a Copa do Mundo de 1990. Tem quatro finais de Champions League na conta (1965, 1970, 2001 e 2016).</p>
            <p>&nbsp;</p>
            <p>A final da Champions de 2024, entre Real Madrid e Borussia Dortmund, será em Wembley, na Inglaterra, no dia 1º de junho. A decisão de 2025 será na Arena de Munique, casa do Bayern de Munique.</p>
            <p>&nbsp;</p>
            <h3><strong>
            Confira outras decisões do Comitê Executivo da Uefa:
            </strong></h3>
            <ul className="content-unordered-list">
              <li>Final da Liga Europa de 2026 no Besiktas Park, em Istambul, na Turquia</li>
              <li>Final da Liga Europa de 2027 no Stadion Frankfurt, em Frankfurt, na Alemanha</li>
              <li>Final da Liga Conferência de 2026 na RB Arena, em Leipzig, na Alemanha</li>
              <li>Final da Liga Conferência de 2027 no Besiktas Park, em Istambul, na Turquia</li>
              <li>Final da Champions League Feminina de 2026 no Ullevaal Stadion, em Oslo, na Noruega</li>
              </ul>
          </div>
        </div>
      );
    }
    if (id==3){
      return (
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold my-4">
          Inter de Milão muda de dono por causa de calote
          </h1>
          <h2 className="my-4">Grupo Suning, da China, não quita empréstimo, e clube italiano passa a ser controlado por Oaktree Capital Management, dos Estados Unidos</h2>
          <img
            className="w-1/2 h-auto mb-8"
            src="https://s2-ge.glbimg.com/HVktTEgM10MWTzR6Cm1u3PV7umc=/0x0:1261x841/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2024/A/J/hiuTztSbSKW4Oa0FFzKg/0079764e0908b34b6bae1ed708e973977c076de1.jpg"
            alt="Front Cover"
          />
          <div className="max-w-screen-xl px-4 pb-8">
            <p>
              A Inter de Milão está sob nova direção. A empresa americana Oaktree Capital Management comunicou, nesta quarta-feira, que assumiu o controle do clube italiano devido a um calote do Grupo Suning, do empresário chinês Zhang Jindong. A firma sediada na Califórnia não recebeu os 395 milhões de euros (R$ 2,2 bilhões) que eram precisos ser pagos até esta terça.
            </p>
            <p>&nbsp;</p>
            <p>
              A dívida é fruto de um empréstimo de €275 milhões (R$ 1,5 bilhão) que o Grupo Suning tomou da Oaktree três anos atrás, durante a pandemia de Covid-19. A Inter de Milão havia reportado perdas de €245,6 milhões (R$ 1,4 bilhão) na temporada 2020/21, muito devido aos estádios fechados
            </p>
            <p>&nbsp;</p>
            <p>
              A Oaktree está empenhada em alcançar o melhor resultado para a prosperidade a longo prazo da Inter de Milão, com foco inicial na estabilidade operacional e financeira do clube. (...) Para garantir que o clube esteja posicionado para o sucesso dentro e fora de campo, focando em gestão, operações e governança robustas com uma visão de crescimento sustentável e sucesso - ressaltou a empresa americana.
            </p>
            <p>&nbsp;</p>
            <p>
              O Grupo Suning comprou 68,7% da Inter de Milão em 2016, e a presidência do clube italiano passou para o empresário chinês Steven Zhang.
              </p>
            <p>&nbsp;</p>
            <p>
              Os títulos vieram depois o empréstimo da Oaktree. Foram sete taças levantadas: dois Campeonatos Italianos (2020/21 e 2023/24), duas Copas da Itália (2021/22 e 2022/23) e três Supercopas da Itália (2021/22, 2022/23 e 2023/24). E o time também foi vice-campeão da Champions League em 2022/23.
              </p>
          </div>
        </div>
      );
    }
    if (id==4){
      return (
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold my-4">
          Real Madrid mira Kimmich e Rodri para a vaga de Kroos
          </h1>
          <h2 className="my-4">Volante alemão tem contrato com o Bayern até 2025, enquanto espanhol possui vínculo com o Manchester City até 2027</h2>
          <img
            className="w-1/2 h-auto mb-8"
            src="https://s2-ge.glbimg.com/_GFbvi27In1051iO-QT8-6AhFIs=/0x0:3773x2515/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2024/5/h/AgkG5CQL2Pb1ASnhaJHA/gettyimages-1888325275.jpg"
            alt="Front Cover"
          />
          <div className="max-w-screen-xl px-4 pb-8">
            <p>
              Com o anuncio da aposentadoria de Toni Kroos, o Real Madrid começa a olhar o mercado para repor a grande perda do elenco para a próxima temporada. Kimmich, do Bayern de Munique, e Rodrigo, do City, entraram no radar do clube espanhol. A informação é do jornal espanhol "AS".
            </p>
            <p>&nbsp;</p>
            <p>
              Kimmich, de 29 anos, tem contrato com o clube bávaro até o junho de 2025 e uma renovação ainda não foi proposta pelo clube alemão. No Bayern desde 2015, o camisa 6 deixou seu futuro em aberto, em entrevista ao jornal AS.
            </p>
            <p>&nbsp;</p>
            <p>
              A outra opção do Real é o volante Rodri, do Manchester City. Homem de confiança de Guardiola, o espanhol vive uma grande fase, sendo decisivo em jogos importantes na temporada. Sua saída do clube de Manchester, com qual tem contrato até 2027, é considerada difícil pela sua importância no time titular da equipe.
            </p>
            <p>&nbsp;</p>
            <p>
              Considerado o melhor volante do mundo, Rodrigo fez o gol do título na conquista da primeira Liga dos Campeões do City, na temporada passada. Além disso, o camisa 8 ficou na quinta colocação da última edição da Bola de Ouro, conquistada por Messi.
              </p>
          </div>
        </div>
      );
    }
    return (
      <h1><strong>NOTÍCIA NÃO ENCONTRADA</strong></h1>
    )
}
