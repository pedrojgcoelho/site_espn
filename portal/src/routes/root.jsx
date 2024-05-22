//import reactLogo from "../assets/react.svg";
import { Link, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div className="flex flex-col items-stretch justify-start min-h-screen bg-gray-100">
      <header className="bg-gray-800 shadow-md">
        <nav className="container mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center">
            <img src="https://private-user-images.githubusercontent.com/98991730/332110930-92bcf1f4-7e97-4dba-88c8-8d8642ea5a9d.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTY0MDUwNTAsIm5iZiI6MTcxNjQwNDc1MCwicGF0aCI6Ii85ODk5MTczMC8zMzIxMTA5MzAtOTJiY2YxZjQtN2U5Ny00ZGJhLTg4YzgtOGQ4NjQyZWE1YTlkLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA1MjIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNTIyVDE5MDU1MFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTQyMDc5YWJlZTA4ZTU4ODgwODZjYjE5NzY1ZWJkMGMxYTBjNmMxYTdlYTU2NTI5YWJkM2I2YTIwNGQwZjI0ZTEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.bVmdsjQh5coBXGTGZLlnuHO-347zUtAy_DvXSpzcj-s" alt="React Logo" className="h-11 mr-3" />
            <Link to="/">
              <h1 className="text-xl font-bold text-red-700">EuroFootFans</h1>
            </Link>
          </div>
          <div className="flex items-left">
          <a href="#" className="mr-4 text-white hover:text-red-700">
              Categoria 1
            </a>
            <a href="#" className="mr-4 text-white hover:text-red-700">
            Categoria 2
            </a>
            <a href="#" className="mr-4 text-white hover:text-red-700">
            Categoria 3
            </a>
          </div>
          <div className="flex items-center">
            <a href="#" className="mr-4 text-white hover:text-red-700">
              Início
            </a>
            <a href="#" className="mr-4 text-white hover:text-red-700">
              Últimos Jogos
            </a>
            <a href="#" className="text-white hover:text-red-700">
              Sobre
            </a>
          </div>
        </nav>
      </header>
      <Outlet />
      <footer className="bg-gray-200 py-4">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-600">
            © 2024 EUROFOOTFANS. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
