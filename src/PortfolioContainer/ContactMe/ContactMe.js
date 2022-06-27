import emailjs from 'emailjs-com';
import React, { useState } from "react";
import Typical from "react-typical";
import axios from "axios";
import { toast } from "react-toastify";

import imgBack from "../../../src/images/mailz1.jpeg";
import load1 from "../../../src/images/load.png";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import Footer from "../../PortfolioContainer/Footer/Footer";
import "./ContactMe.css";

const initialValues={
  name:"",
  email:"",
  message:"",
}

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const[values,setValues]=React.useState(initialValues);
  const handleInputChanage=(e)=>{
    const {name,value} = e.target;
    setValues({
      ...values,
    [name]:value
    })
  }
  // const handleName = (e) => {
  //   setName(e.target.value);
  // };
  // const handleEmail = (e) => {
  //   setEmail(e.target.value);
  // };
  // const handleMessage = (e) => {
  //   setMessage(e.target.value);
  // };
  // console.log(values);
  const submitForm = async (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_tdgmrm6",
      "template_m9391b5",
      e.target,
      '1lC0SrW-_zA-VWTne'
      )
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
     }, function(error) {
        console.log('FAILED...', error);
     });
    try {
      let data = {
        name:values.name,
        email:values.email,
        message:values.message
      };
      setBool(true);
      const res = (`/contact`, data);
      if (values.name.length === 0 || values.email.length === 0 || values.message.length === 0) {
        setBanner(res.data.msg);
        toast.error(res.data.msg);
        setBool(false);
      } else if (res.status === 200) {
        setBanner(res.data.msg);
        toast.success(res.data.msg);
        setBool(false);

        setValues(initialValues);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main-container fade-in" id={props.id || ""}>
      <ScreenHeading subHeading={"Lets Keep In Touch"} title={"Contact Me"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            <Typical loop={Infinity} steps={["Get In Touch 📧", 1000]} />
          </h2>{" "}
          <a href="https://github.com/MariyahLuz">
                <i className="fa fa-github"></i>
              </a>
              <a href="https://www.instagram.com/mariyah.luz/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/luzinda-maria-002414222/">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="https://twitter.com/LuzindaMariyah">
                <i className="fa fa-twitter"></i>
              </a>
        </div>
        <div className="back-form">
          <div className="img-back">
            <h4>Send Your Email Here!</h4>
            <img src={imgBack} alt="image not found" />
          </div>
          <form onSubmit={submitForm}>
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input type="text" onChange={handleInputChanage} value={values.name} name="name" className="form-control"/>

            <label htmlFor="email">Email</label>
            <input type="email" onChange={handleInputChanage} value={values.email} name="email" className="form-control"/>

            <label htmlFor="message">Message</label>
            <textarea type="text" onChange={handleInputChanage} value={values.message} name="message" className="form-control"/>

            <div className="send-btn">
              <button type="submit">
                send
                <i className="fa fa-paper-plane" />
                {bool ? (
                  <b className="load">
                    <img src={load1} alt="image not responding" />
                  </b>
                ) : (
                  ""
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
