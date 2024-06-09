import React, { useState,useEffect } from "react";
import Navbar from "./Pages/Navbar/Navbar";
import "./App.css";
import MainMenu from "./Pages/MainPage/Main";
import Footer from "./Pages/Footer/Footer";
import Orss from './Pages/Or/ors'
import { BrowserRouter, Route, Routes, Link, useLocation  } from "react-router-dom";

import Information from "./Pages/New information/Information";
import Found_404 from "./Pages/404 found/Found_404";

import { SignedIn, SignedOut, UserButton, RedirectToSignIn } from "@clerk/clerk-react";
import Contact from "./Pages/Contact/Contact";
import Reviewes from './Pages/Reviewes/re'
import Loaderr from './Pages/Loader/Loader'
import Profisseonal from './Pages/Profisseonal/live'
import Scroll from "./Scroll ToP/Scroll";

function App() {
  const location = useLocation();

  useEffect(() => {
    const titles = {
      '/': 'Behruzbek-University',
      '/about': '',
      '/Contact': 'Contact',
      '/NewInformation': 'New Information',
      '/Reviewes': 'Reviewes  ',
      '/THE-ALTERNATIVE': 'The-Alternative',
    };

    const currentTitle = titles[location.pathname] || '404 Not Found';
    document.title = currentTitle;
  }, [location]);
  //title end

  const [Loader, setLoader] = useState(true)
  const [Out_p, setOut_p] = useState(false)
  setTimeout((error) => {
    setLoader(false)
    setOut_p(true)
  }, 3500);
  return (
    <>
      <SignedOut>
        <RedirectToSignIn></RedirectToSignIn>
      </SignedOut>
      <SignedIn>


        {Loader && <Loaderr />}
        {Out_p &&
          <>
            <Navbar />

            <div className="container">
              <Orss />
              <Scroll/>
              <Routes>
                <Route index element={<MainMenu />} />
                <Route path="NewInformation" element={<Information />} />
                <Route path="*" element={<Found_404 />} />
                <Route path="Contact" element={<Contact />} />
                <Route path="Reviewes" element={<Reviewes />} />
                <Route path="The-Alternative" element={<Profisseonal />} />
                
              </Routes>
        
              <Footer/>

            </div>

          </>
        }
      </SignedIn>
    </>
  );
}

export default App;
