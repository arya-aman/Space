import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import { ThemeContext } from "../../context";
import axios from 'axios'

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const [feedback, setFeedback] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  })


  const handleCchange = e => {
    const { name, value } = e.target
    setFeedback({
      ...feedback,
      [name]: value
    })
    console.log(feedback);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, subject, email, message } = feedback;
    if (name && subject && email && message) {
      axios.post(`${process.env.REACT_APP_SERVER_URL}/feedback`, feedback)
        .then(res => {
          if (res.data.done === 1)
            setDone(true);
        })
    }
  };

  return (
    <>
    </>
  );
};

export default Contact;
