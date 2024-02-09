import "./header.scss";
import logo from "../../assets/imgs/logo.png";
import { Link } from "react-router-dom";
import { GrMap } from "react-icons/gr";
import { LuMessagesSquare } from "react-icons/lu";
import { BiHomeSmile } from "react-icons/bi";
import { GoQuote } from "react-icons/go";
import { useState } from "react";

export const Header = () => {
  const [menu, setMenu]=useState(false)
  const handleOpen = ()=> {
    setMenu(true)
  }
  const handleClose = ()=> {
    setMenu(false)
  }
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Link
            to="/"
            className="header__logo rounded-lg overflow-hidden hover:opacity-80"
          >
            <img src={logo} alt="Site logo" />
          </Link>
          <button className="openMenu mr-4" onClick={handleOpen} type="button">
          <GoQuote className="fill-slate-200 w-6 h-6"/>
          </button>
          <div className={menu ? "overlayMenu overlayMenuOpen":"overlayMenu"}>
              <div className={menu ===true ? "menu__wrapper openHeaderMenu" : "menu__wrapper"} >
              <Link
                  to="/"
                  onClick={()=>handleClose()}
                  className="location__link w-full   flex items-center justify-center gap-3 group"
                >
                  <BiHomeSmile className="link__media w-6 h-6 group-hover:fill-sky-600" />
                  <strong className="group-hover:text-sky-600">Home</strong>
                </Link>
                <Link
                  to="/contacttel"
                  onClick={()=>handleClose()}
                  className="location__link w-full   flex items-center justify-center gap-3 group"
                >
                  <LuMessagesSquare className="link__media w-6 h-6 group-hover:fill-sky-600" />
                  <strong className="group-hover:text-sky-600">Messages</strong>
                </Link>
                <Link
                  to="/location"
                  onClick={()=>handleClose()}
                  className="location__link w-full   flex items-center justify-center gap-3 group"
                >
                  <GrMap className="link__media w-6 h-6 group-hover:stroke-sky-600" />
                  <strong className="group-hover:text-sky-600">Contact</strong>
                </Link>
                <button onClick={handleClose} className="hideMenu w-[200px] p-3 bg-orange-500 rounded-xl m-auto flex items-center justify-center hover:opacity-85" type="button">
                  <strong className="mb-[2.5px]">close</strong>
                </button>
              </div>
          </div>
        </div>
      </div>
    </header>
  );
};
