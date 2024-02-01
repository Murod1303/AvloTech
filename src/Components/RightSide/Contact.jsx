import "./contact.scss";
import { MdSecurity } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import { FaTelegramPlane } from "react-icons/fa";
import { BiLogoZoom } from "react-icons/bi";
import { BsFillPeopleFill } from "react-icons/bs";
import * as Yup from "yup"
import { ErrorMessage, Field, Form, Formik } from "formik";

export const Contact = () => {
  return (
    <>
      <section className="rightContact contact w-[55%] pl-8 pr-4 pb-16 h-screen relative right-0 overflow-y-scroll pt-[140px]">
        <Formik className="contact__wrapper py-20 flex items-center justify-center"
        initialValues={{
          name:"",
          phoneNumber:"",
          CompName:"",
          email:"",
        }}
        validationSchema={Yup.object({
          name:Yup.string().min(2, "so short").max(20, "so long").required("Required"),
          CompName:Yup.string().min(2, "so short").max(20, "so long").required("Required"),
          email:Yup.string().min(2, "so short").max(20, "so long").required("Required"),
          phoneNumber:Yup.string().min(13, "please enter number example").max(13, "please enter number example").required("Required"),
        })}
        onSubmit={(values)=> {
          console.log(values);
        }}
        >
          <Form className="contact__form p-10">
            <h3 className="contact__title-form">Контактные данные</h3>
            <div className="contact__inputs">
              <label className="contact__label relative">
                <Field
                  className="contact__input name w-full"
                  name="name"
                  placeholder="Your name"
                  aria-label="Your naem"
                  type="text"
                />
                <span className="absolute font-bold right-[5px] bottom-[-20px] text-red-600">
                <ErrorMessage  name="name"/>
                </span>
              </label>
              <label className="contact__label relative">
                <Field
                  className="contact__input number w-full"
                  name="phoneNumber"
                  placeholder="+998998887766"
                  aria-label="Enter your number"
                  type="tel"
                />
                <span className="absolute font-bold right-[5px] bottom-[-20px] text-red-600">
                <ErrorMessage name="phoneNumber" />
                </span>
              </label>
              <label className="contact__label relative">
                <Field
                  className="contact__input nameCompany w-full"
                  name="CompName"
                  placeholder="Enter your Company name"
                  aria-label="Enter your company name"
                  type="text"
                />
                <span className="absolute font-bold right-[5px] bottom-[-20px] text-red-600">
                <ErrorMessage name="CompName" />
                </span>
              </label>
              <label className="contact__label relative">
                <Field
                  name="email"
                  className="contact__input email w-full"
                  placeholder="Enter your email"
                  aria-label="Enter your email"
                  type="text"
                />
                <span className="absolute font-bold right-[5px] bottom-[-20px] text-red-600">
                <ErrorMessage name="email" />
                </span>
              </label>
            </div>
            <div className="contact__check-big mb-10">
              <h4 className="contact__title-checkbox">
                Предпочитаемый способ связи?
              </h4>
              <div className="contact__checkbox-wrapper flex items-center justify-center flex-wrap gap-6">
                <Field type="checkbox" checked name="meeting" id="calling" />
                <label
                  className="contact__checkbox-label flex items-center justify-center gap-2"
                  htmlFor="calling"
                >
                  <BiPhoneCall /> <span>Calling</span>
                </label>
                <input type="checkbox" name="meeting" id="telegram" />
                <label
                  className="contact__checkbox-label flex items-center justify-center gap-2"
                  htmlFor="telegram"
                >
                  <FaTelegramPlane /> <span>Telegram</span>
                </label>
                <input type="checkbox" name="meeting" id="zoom" />
                <label
                  className="contact__checkbox-label flex items-center justify-center gap-2"
                  htmlFor="zoom"
                >
                  <BiLogoZoom /> <span>Zoom</span>
                </label>
                <input type="checkbox" name="meeting" id="place" />
                <label
                  className="contact__checkbox-label flex items-center justify-center gap-2"
                  htmlFor="place"
                >
                  <BsFillPeopleFill />
                  <span>Place</span>
                </label>
              </div>
            </div>
            <p className="contact__secur flex items-center gap-2 mb-12 font-medium text-slate-300 hover:text-[#fff]">
              <MdSecurity /> Ваши данные надежно защищены и не будут переданы
              третьим лицам
            </p>
            <button className="contact__btn bg-[#fff]" type="submit">
              Submit
            </button>
          </Form>
        </Formik>
      </section>
    </>
  );
};
