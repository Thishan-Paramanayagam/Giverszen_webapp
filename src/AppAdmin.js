//import Header from "./components/Header";

//import NavAdmin from "./components/NavAdmin";

//import TopAdmin from "./components/TopAdmin";

//import NavAd from "./components/NavAd";
import { Route ,Routes,Link, BrowserRouter} from "react-router-dom";
import Dash from "./components/Dash";
import Head from "./components/Head";
import NavAd from "./components/NavAd";
import UiStructure from "./components/UiStraucture";
//import MUser from "./components/MUser";


function AppAdm(){
    return (
      <div>
   
     <BrowserRouter>
     <Routes>
      <Route exact path="/" element={<UiStructure/>}/>

     </Routes>
     </BrowserRouter>
     </div>
     

      );
}

export default AppAdm;