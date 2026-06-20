import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./assets/prism.css";
import { assets } from "./assets/assets";
import SideBar from "./components/SideBar";
import ChatBox from "./components/ChatBox";
import Credits from "./pages/Credits";
import Community from "./pages/Community";
import Loading from "./pages/Loading";
import Login from "./pages/Login";
import { useAppContext } from "./context/AppContext";
import {Toaster} from 'react-hot-toast'

const App = () => {
  const { user, loadingUser } = useAppContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  if (pathname === "/loading" || loadingUser) return <Loading />;

  return (
    <>
      <Toaster />
      {!isMenuOpen && (
        <img
          src={assets.menu_icon}
          className="absolute top-3 left-3 w-8 h-8 cursor-pointer md:hidden not-dark:invert"
          onClick={() => setIsMenuOpen(true)}
        />
      )}

      {user ? (
        <div className="dark:bg-gradient-to-b from-[#242124] to-[#000000] dark:text-white">
          <div className="flex h-screen w-screen">
            <SideBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <Routes>
              <Route path="/" element={<ChatBox />} />
              <Route path="/credits" element={<Credits />} />
              <Route path="/community" element={<Community />} />
            </Routes>
          </div>
        </div>
      ) : (
        <div className="bg-gradient-to-b from-[#300964] to-purple-300 flex items-cover justify-center h-screen w-screen">
          <Login />
        </div>
      )}
    </>
  );
};

export default App;
