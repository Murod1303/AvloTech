import "./rightSide.scss";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { TiSocialFacebook } from "react-icons/ti";
import { FaLinkedinIn } from "react-icons/fa";

export const RightSide = () => {
  return (
    <section className="rightContact w-[55%] pl-8 pr-4 pb-16 h-screen relative right-0 overflow-y-scroll pt-[140px]">
      <div className="rightContact__wrapper location py-10 flex items-start justify-between  mb-[4rem] gap-[10px]">
        <div className="location__content w-1/2">
          <h3 className="location__title">Location</h3>
          <address className=" flex flex-col">
            <a className="location__destination w-3/4 mb-[75px]" href="#" target="_blank">
              Г. Ташкент, Юнусабадский р-н, 13 квартал, ул Ниязбек 1А
            </a>
            <a className="location__destination w-3/4 mb-[75px]" href="#" target="_blank">
              Г. Ташкент, Юнусабадский р-н, 13 квартал, ул Ниязбек 1А
            </a>
            <a className="location__tel" href="tel:+998999333388">
              +998 (99) 933 33 88
            </a>
          </address>
        </div>
        <div className="location__social socials w-1/2">
          <h3 className="socials__title">Cоциальные сети</h3>
          <ul className="socials__list flex items-center justify-start mb-10">
            <li>
              <a className="socials__icon group" href="#">
                <FaTelegramPlane className="socials__icon-img w-5 h-5 fill-[#fff] group-hover:fill-[#000]" />
              </a>
            </li>
            <li>
              <a className="socials__icon group" href="#">
                <FaInstagram className="socials__icon-img w-6 h-6 fill-[#fff] group-hover:fill-[#000]" />
              </a>
            </li>
            <li>
              <a className="socials__icon group" href="#">
                <TiSocialFacebook className="socials__icon-img socials__icon-img--facebook w-7 h-7 fill-[#fff] group-hover:fill-[#000]" />
              </a>
            </li>
            <li>
              <a className="socials__icon group" href="#">
                <FaLinkedinIn className="socials__icon-img w-5 h-5 fill-[#fff] group-hover:fill-[#000]" />
              </a>
            </li>
          </ul>
          <a className="socials__mail " href="mailto:">
            info@novastudio.uz
          </a>
        </div>
      </div>
      <div className="socials__frame frame">
        <iframe
          className="w-full rounded-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47949.65726721285!2d69.22178045232107!3d41.31204881489659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b084eab8999%3A0xb2d2bdd029eeec98!2sXalqlar%20Do&#39;stligi!5e0!3m2!1sen!2s!4v1706297261312!5m2!1sen!2s"
          width="600"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};
