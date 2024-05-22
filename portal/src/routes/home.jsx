import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="container mx-auto min-h-screen px-4 py-8 flex">
      <div className="w-1/6 bg-gray-200 p-4 mx-4 rounded min-w-fit">
        {/* Sidebar */}
        <h2 className="text-xl font-bold mb-4">Todas as Ligas</h2>
        <ul className="space-y-2">
        <li className="flex">
            <img className="w-4 h-4 mb-4 " src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/UEFA_Champions_League.svg/800px-UEFA_Champions_League.svg.png"/>
            <a  href="#" className="text-gray-600 hover:text-gray-800">
              <span>Champions League</span>
            </a>
          </li>
          <li className="flex">
            <img className="w-4 h-4 mb-4 " src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Europa_League_2021.svg/640px-Europa_League_2021.svg.png"/>
            <a  href="#" className="text-gray-600 hover:text-gray-800">
              <span>Europa League</span>
            </a>
          </li>
          <li className="flex">
            <img className="w-4 h-4 mb-4 " src="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/UEFA_Europa_Conference_League.svg/1200px-UEFA_Europa_Conference_League.svg.png"/>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Conference League
            </a>
          </li>
          <li className="flex">
            <img className="w-4 h-4 mb-4 " src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/LaLiga_EA_Sports_2023_Vertical_Logo.svg/800px-LaLiga_EA_Sports_2023_Vertical_Logo.svg.png"/>
            <a  href="#" className="text-gray-600 hover:text-gray-800">
              <span>La Liga</span>
            </a>
          </li>
          <li className="flex">
            <img className="w-4 h-4 mb-4 " src="https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Bundesliga_logo_%282017%29.svg/800px-Bundesliga_logo_%282017%29.svg.png"/>
            <a  href="#" className="text-gray-600 hover:text-gray-800">
              <span>BundesLiga</span>
            </a>
          </li>
          <li className="flex">
            <img className="w-4 h-4 mb-4 " src="https://seeklogo.com/images/P/premier-league-new-logo-D22A0CE87E-seeklogo.com.png"/>
            <a  href="#" className="text-gray-600 hover:text-gray-800">
              <span>Premier League</span>
            </a>
          </li>
          <li className="flex">
            <img className="w-4 h-4 mb-4 " src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/S%C3%BCper_Lig_logo.svg/1200px-S%C3%BCper_Lig_logo.svg.png"/>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Super Liga Turca
            </a>
          </li>
          <li className="flex">
            <img className="w-4 h-4 mb-4 " src="https://upload.wikimedia.org/wikipedia/pt/3/30/Logo_for_Austrian_Football_Bundesliga.png"/>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Bundesliga Áustria
            </a>
          </li>
          <li className="flex">
            <img className="w-4 h-4 mb-4 " src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Ligue1_Uber_Eats_logo.png/800px-Ligue1_Uber_Eats_logo.png"/>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Ligue 1
            </a>
          </li>
          <li className="flex">
            <img className="w-4 h-4 mb-4 " src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Serie_A_logo_2022.svg/800px-Serie_A_logo_2022.svg.png"/>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Serie A Italiana
            </a>
          </li>
          <li className="flex">
            <img className="w-4 h-4 mb-4 " src="https://upload.wikimedia.org/wikipedia/commons/5/5a/S%C3%ADmbolo_da_Liga_Portuguesa_de_Futebol_Profissional.png"/>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Liga Potuguesa
            </a>
          </li>
        </ul>
      </div>

      <div className="flex-1">
        {/* News Section */}
        <h2 className="text-2xl font-bold mb-4">Principais Notícias</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* News Cards */}
          <div className="bg-white shadow-md p-4">
            <Link to={`news/1`}>
              <img
                src="https://s2-ge.glbimg.com/17RHHdKbV9j1J2do2VoWFka0aUA=/0x367:4000x2617/810x456/smart/filters:max_age(3600)/https://i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2024/O/o/aSSQQRSe2wlBAbI3fz7Q/gettyimages-2152732355.jpg"
                alt="News Image 1"
                className="w-full h-60 w-50 hover:scale-[1.05] mb-2  object-cover hover:transition-all duration-500 ease-in-out transform bg-center bg-cover "
              />
            </Link>
            <h3 className="text-lg font-bold mb-2 text-center">Convocados para a Euro 2024: veja as listas das seleções</h3>
            <p className="text-gray-600 text-center">
            Equipes contarão com até 26 jogadores na disputa do torneio na Alemanha, entre os dias 14 de junho e 14 de julho
            </p>
          </div>
          <div className="bg-white  shadow-md p-4">
            <Link to={`news/2`}>
              <img
                src="https://s2-ge.glbimg.com/8PynN8GYfloPaSuSwX4R_HQm3sk=/810x456/top/smart/https://i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/B/U/CFJPBQRVG0ESm7FxJmCQ/2022-09-26t160256z-854914046-up1ei9q18ku95-rtrmadp-3-soccer-uefanations-hun-ita-report.jpg"
                alt="News Image 2"
                className="w-full h-60 w-50 hover:scale-[1.05] mb-2  object-cover hover:transition-all duration-500 ease-in-out transform bg-center bg-cover "
              />
            </Link>
            <h3 className="text-lg font-bold mb-2 text-center">Uefa define local das finais da Champions League de 2026 e 2027</h3>
            <p className="text-gray-600 text-center">
            Arena Puskás, em Budapeste, e San Siro, em Milão, são escolhidos, mas confirmação do estádio italiano depende de plano de reforma
            </p>
          </div>
          <div className="bg-white shadow-md p-4">
            <Link to={`news/3`}>
              <img
                src="https://s2-ge.glbimg.com/HVktTEgM10MWTzR6Cm1u3PV7umc=/0x0:1261x841/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2024/A/J/hiuTztSbSKW4Oa0FFzKg/0079764e0908b34b6bae1ed708e973977c076de1.jpg"
                alt="News Image 3"
                className="w-full h-60 w-50 hover:scale-[1.05] mb-2  object-cover hover:transition-all duration-500 ease-in-out transform bg-center bg-cover "
              />
            </Link>

            <h3 className="text-lg font-bold mb-2 text-center">Inter de Milão muda de dono por causa de calote</h3>
            <p className="text-gray-600 text-center">
            Grupo Suning, da China, não quita empréstimo, e clube italiano passa a ser controlado por Oaktree Capital Management, dos Estados Unidos
            </p>
          </div>
          <div className="bg-white shadow-md p-4">
            <Link to={`news/4`}>
              <img
                src="https://s2-ge.glbimg.com/_GFbvi27In1051iO-QT8-6AhFIs=/0x0:3773x2515/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2024/5/h/AgkG5CQL2Pb1ASnhaJHA/gettyimages-1888325275.jpg"
                alt="News Image 4"
                className="w-full h-60 w-50 hover:scale-[1.05] mb-2  object-cover hover:transition-all duration-500 ease-in-out transform bg-center bg-cover "
              />
            </Link>

            <h3 className="text-lg font-bold mb-2 text-center">Real Madrid mira Kimmich e Rodri para a vaga de Kroos</h3>
            <p className="text-gray-600 text-center">
            Volante alemão tem contrato com o Bayern até 2025, enquanto espanhol possui vínculo com o Manchester City até 2027
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
