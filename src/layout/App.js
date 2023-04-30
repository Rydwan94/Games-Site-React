import { HashRouter } from "react-router-dom";

import Provider from "../context/AppProvider";
import Navbar from "./Navbar";
import Pages from "./Pages";
import Footer from "./Footer";

import "../css/App.css";

function App() {
  return (
    <HashRouter>
      <Provider>
        <div className="App">
          <header>
            <Navbar />
          </header>
          <main>
            <Pages />
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </Provider>
    </HashRouter>
  );
}

export default App;
