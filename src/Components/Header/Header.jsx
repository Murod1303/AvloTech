import "./header.scss";
import logo from "../../assets/imgs/logo.png";
import { RiMenuFoldLine } from "react-icons/ri";
import { GrMapLocation } from "react-icons/gr";
import { LuMessagesSquare } from "react-icons/lu";
import { BiHomeSmile } from "react-icons/bi";
import { Link } from "react-router-dom";

export const Header = () => {
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
          <div className="header__btn-wrapper bg-white mr-8 group">
            <div className="header__btn-inner flex item-center justify-between ml-0 group-hover:ml-8 ">
              <Link
                to="/"
                className="location__link w-0 h-0 group-hover:w-6 group-hover:h-6 mr-0 group-hover:mr-[20px]"
              >
                <BiHomeSmile className="link__media w-full h-full hover:fill-sky-500" />
              </Link>
              <Link
                to="/contacttel"
                className="location__link w-0 h-0 group-hover:w-6 group-hover:h-6 mr-0 group-hover:mr-[20px]"
              >
                <LuMessagesSquare className="link__media w-full h-full hover:fill-sky-500" />
              </Link>
              <Link
                to="/location"
                className="location__link w-0 h-0 group-hover:w-6 group-hover:h-6 mr-0 group-hover:mr-[20px]"
              >
                <GrMapLocation className="link__media w-full h-full hover:fill-sky-500" />
              </Link>
            </div>
            <button
              className="header__btn bg-[#ffffff8f] hover:bg-[#fff]"
              type="button"
            >
              <RiMenuFoldLine className="btn__menu-media w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
