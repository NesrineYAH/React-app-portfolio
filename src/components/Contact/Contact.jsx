import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
//import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";
import Boutton from "../Bouttons/Boutton";
//const [name, setName] = useState("");

const Contact = () => {
  const lang = localStorage.getItem("i18nextLang");
  const { t } = useTranslation();
  const form =useRef();


  const SendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm("service_qb61wt1", "template_uvl35a8", form.current,"fDUMt5JDlc0iHfBWb")
    .then(
      (result) => {
        alert(`${form.current.user_name.value} ${t("email_envoyer")}`);
        console.log(result.text);
         // delet  inputs
        form.current.user_name.value = "";
          form.current.user_name.value = "";
        form.current.user_email.value = "";
        form.current.message.value = "";
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  useEffect(() => {
    AOS.init({ duration: 6000 });
  }, []);



 /* const nameValidation =() => {
   const regexName = new RegExp(/^[a-zA-ZÀ-ÿ]{2,35}([-' ,][a-zA-ZÀ-ÿ]+)*$/i);
  if (regexName.test(lastName)) {
   setName("Nom est valide");
  } else if (!regexName.test(lastName)){;
  setName("Nom est n'est pas valide");
  } else {
    setName("");
  }
};
*/
  return (
    <section id={t("contact_id")}  className= "contact" itemScope itemType="http://schema.org/Person">
      <h1 className='titleContact'>{t("contact_title")}</h1>
      <div
        style={{ flexDirection: lang === "ar" ? "row" : "row-reverse" }}
        className=" contact-wrapper"
      >
      <form ref={form} onSubmit={SendEmail} 
      className="form-horizontal" 
      data-aos= "zoom-in-up"
      style={{ direction: lang === "ar" ? "rtl": "ltr" }}
      >
        <lable htmlFor="lastName">{t("Nom")}</lable>
        <input style={{ direction : lang === "ar" ? "rtl" : "ltr" }}
        type="text" name="user_name" className="form-control" placeholder={t("Name")}
        id="name"
        required
       />
        <lable htmlFor="FirstName">{t("Prénom")}</lable>
        <input style={{ direction : lang === "ar" ? "rtl" : "ltr" }}
        type="text" name="user_name" className="form-control" placeholder={t("prénom")}
        id="name"
        required
       />
       <label htmlFor="email">{t("Email")}</label>
       <input 
       style={{ direction: lang === "ar" ?  "rtl": "ltr" }}
       type="email" id="email" name="user_email" className="form-control" 
       placeholder={t("Email")}
       required
       />
       <lable htmlFor="message">{t("Message")}</lable>
       <textarea style={{ direction: lang === "ar" ?  "rtl": "ltr" }}
       name="message" id="message" className="form-control" placeholder={t("Message")} rows="10"
       required
       >
       </textarea>
      <input type="submit" value={t("Send")} className="send-text" />
      </form>  
      <div className='direct-contact-conatiner' data-aos="zoom-in-up">
        <ul className="contact-list">
          <li className="list-item">
            <i className="fa fa-map-marker fa-2x"></i>
              <span itemProp="location" className="contatc-text place">P
                 aris, ile de France
              </span>
          </li>
          <li className="liste-item">
          <i className="fa fa-phone fa-2x"></i>
          <span className="contact-text phone">
          <a itemProp="telephone" href="00769551422">
            (33) 7 69 55 14 22
          </a>
          </span>
          </li>
          <li className="list-item">  
          <i className="fa fa-envelope fa-2x"></i>
          <span className="contact-text gmail">
          <a itemProp="email" href="mailto:nesrineyahoum@gmail.com">
          nesrineyahoum@gmail.com
          </a>
          </span>
          </li>
        </ul>

      </div>
      </div>
    <div>

  
    </div>
    </section>
  );
};

export default Contact;
