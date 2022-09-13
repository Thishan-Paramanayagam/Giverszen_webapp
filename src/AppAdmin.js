//import Header from "./components/Header";

//import NavAdmin from "./components/NavAdmin";


import { Route ,Routes,Link, BrowserRouter} from "react-router-dom";

import UiStructure from "./components/UiStraucture";
import Login from "./components/Login";



function AppAdm(){
    return (
      <div>
   
     <BrowserRouter>
     <Routes>
      <Route exact path="/UiStructure" element={<UiStructure/>}/>
      <Route exact path="/" element={<Login/>}/>
     </Routes>
     </BrowserRouter>
     </div>
     

      );
}

export default AppAdm;