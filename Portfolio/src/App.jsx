import { Outlet } from "react-router-dom";
import Nav from "./components/NavTabs";
import "./App.css";

function App() {
  return (
    <div>
      <header className="header">
        <h1>Zawadi Brown's Portfolio</h1>
      </header>
      <Nav />
      <main>
        <Outlet />
      </main>
      <footer className="footer">
        <a href="https://github.com/Zawadiflag12?tab=repositories">
          <i class="bi bi-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/zawadi-brown-120182109/">
          <i class="bi bi-linkedin"></i>
        </a>
      </footer>
    </div>
  );
}

export default App;
