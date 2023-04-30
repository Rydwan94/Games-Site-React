import { Routes,Route } from "react-router-dom";

import TopGame from "../pages/TopGame";
import Games from "../pages/Games";
import Contact from "../pages/Contact";
import Home from "../pages/Home";

const Pages = () => {
    return ( 
        <div className="pages">
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/games" element={<Games/>}/>
                <Route path="/topgame" element={<TopGame/>}/>
                <Route path="/contact" element={<Contact />}/>
            </Routes>
        </div>
     );
}
 
export default Pages;
