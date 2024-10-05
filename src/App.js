import "./App.css";
import BackGround from "./components/BackGround/BackGround";

import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main";
import {BrowserRouter, Route, Routes,} from "react-router-dom";
import Privacy from "./components/Privacy/Privacy";
import {useTranslation} from "react-i18next";
import LightPaper from "./components/LightPaper/LightPaper";
import Footer from "./components/Footer/Footer";
import styles from "./components/Footer/Footer.module.css";
import React, {useEffect, useState} from "react";
import Main2 from "./components/Main/Main2";
import Main3 from "./components/Main/Main3";
import About from "./pages/About/About";
import RoadMap from "./pages/RoadMap/RoadMap";
import Tokenomic from "./pages/Tokenomic/Tokenomic";
import Blog from "./pages/Blog/Blog";
import CameraStore from "./pages/CameraStore/CameraStore";

function App() {
  const { t,i18n } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [showFull,setShowFull]=useState(true)

  useEffect(() => {
    if (window.location.pathname==='/'||window.location.pathname==='/2'||window.location.pathname==='/3') {
      const timeout = setTimeout(() => {
        setIsVisible(true);
      }, 6000); // Затримка в 3 секунди
      return () => {
        clearTimeout(timeout);

      };
    }else setIsVisible(true)

  }, [window.location.pathname]);

  useEffect(() => {
    if (!isVisible&&(window.location.pathname==='/'||window.location.pathname==='/2'||window.location.pathname==='/3')) {
      document.body.style.overflow = 'hidden'; // Розблокувати прокрутку сторінки
    } else {
      document.body.style.overflow = 'auto'; // Заблокувати прокрутку сторінки
    }

  }, [isVisible,window.location.pathname]);

  return (
    <BrowserRouter>
    <div className="App">
      {/*<BackGround/>*/}
      <header className={`app-header ${isVisible?'visible':''}`}>
        <Header/>
      </header>
      <main className="app-main">

          <Routes>
            <Route exact path="/" element={<Main setVisibleHeader={setIsVisible} visibleHeader={isVisible}/>}/>
            <Route exact path="/2" element={<Main2 setVisibleHeader={setIsVisible}/>}/>
            <Route exact path="/3" element={<Main3 setVisibleHeader={setIsVisible}/>}/>
            <Route exact path="/about" element={<About />}/>
            <Route exact path="/roadmap" element={<RoadMap/>}/>
            <Route exact path="/tokenomic" element={<Tokenomic/>}/>
            <Route exact path="/blog" element={<Blog/>}/>
            <Route exact path="/cameraStore" element={<CameraStore/>}/>
            {/*<Route exact path="/lightPaper" element={<LightPaper/>}/>*/}
            <Route path="/privacy" element={<Privacy/>}/>
          </Routes>

      </main>
      <footer className={`app-footer ${isVisible?'visible':''}`}>
         <Footer/>

      </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
