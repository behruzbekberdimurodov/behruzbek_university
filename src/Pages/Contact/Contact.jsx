import React, { useState } from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Button from "@mui/material/Button";

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Contact() {
    const [name_error, setname_error] = useState(false);
    const [email_error, setemail_error] = useState(false);
    const [phone_error, setphone_error] = useState(false);
    const [message_error, setmessage_error] = useState(false);
    const [captchaValue, setCaptchaValue] = useState("");
    const [captchaInput, setCaptchaInput] = useState("");
    const [open, setOpen] = useState(false);
    const [notification, setNotification] = useState({
        message: "",
        severity: "success",
    });

    const generateCaptcha = () => {
        const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let captcha = "";
        for (let i = 0; i < 6; i++) {
            captcha += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return captcha;
    };

    const [captcha, setCaptcha] = useState(generateCaptcha());

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpen(false);
    };

    const name_check = (event) => {
        const value = event.target.value;
        setname_error(value.length <= 6);
    };

    const phone_check = (event) => {
        const value = event.target.value;
        let phone_regex = /^\+\d{7,}$/;
        setphone_error(!phone_regex.test(value));
    };

    const email_check = (event) => {
        const value = event.target.value;
        let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        setemail_error(!emailRegex.test(value));
    };

    const message_check = (event) => {
        const value = event.target.value;
        setmessage_error(value.length < 10);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (captchaInput !== captcha) {
            setNotification({
                message: "Please complete the CAPTCHA correctly.",
                severity: "error",
            });
            setOpen(true);
            return;
        }

        if (name_error || email_error || phone_error || message_error) {
            setNotification({
                message: "Error Form !",
                severity: "error",
            });
            setOpen(true);
            return;
        }

        // Form submission logic here
        let phone = document.getElementById('phone').value;
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let message = document.getElementById('message').value;
        
        let messageText = `Ism Familiya: ${ name }\nEmail: ${ email }\nTelefon: ${ phone }\nXabar: ${ message }`    ;
        let token = '7209727155:AAGS-7BaO54xB_FUaZrJcdc6ph7Q0aVX6Aw';
        let chatId = '6611665943';
        let url = 'https://api.telegram.org/bot' + token + '/sendMessage?chat_id=' + chatId + '&text=' + encodeURIComponent(messageText);

        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();
        setNotification({
            message: "Form submitted successfully!",
            severity: "success",
        });
        setOpen(true);
    };

    const refreshCaptcha = () => {
        setCaptcha(generateCaptcha());
    };

    return (
        <div className="contacts">
            <div className="contact-in-all">
                <form onSubmit={handleSubmit} className="contact-one">
                    <h1>Biz bilan bog'laning</h1>
                    <h2>
                        Agar sizda biron bir savol bo'lsa, qo'ng'iroq qiling yoki shaklni
                        to'ldiring. Biz sizga qisqa vaqt ichida javob beramiz.
                    </h2>

                    <input
                        required
                        id="name"
                        onChange={name_check}
                        type="text"
                        className="style_input"
                        placeholder="F.I.O*"
                    />
                    {name_error && <p>Ism va familiya kamida 6 harfdan iborat!</p>}

                    <input
                        id="email"
                        onChange={email_check}
                        type="email"
                        className="style_input"
                        placeholder="Emailingizni manzilingiz*"
                    />
                    {email_error && <p>Elektron pochtada xatolik!</p>}
                    <input
                        required
                        id="phone"
                        onChange={phone_check}
                        type="text"
                        className="style_input"
                        placeholder="Telefon raqamingiz*"
                    />
                    {phone_error && <p>Telefon raqamida xato!</p>}


                    <input
                        required
                        id="message"
                        onChange={message_check}
                        type="text"
                        className="style_input style_input_two"
                        placeholder="Xabaringiz*"
                    />
                    {message_error && <p>Xabar kamida 10 ta harfdan iborat!</p>}

                    <div className="form-group captcha-container">
                        <div className="captcha-box">
                            <span className="captcha">{captcha}</span>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={refreshCaptcha}
                                className="refresh-captcha-button"
                            >
                                Refresh
                            </Button>
                        </div>
                        <input
                            required
                            id="captchaInput"
                            onChange={(e) => setCaptchaInput(e.target.value)}
                            type="text"
                            className="style_input captcha-input"
                            placeholder="Enter CAPTCHA*"
                        />
                    </div>


                    <button className='ado-bro'>
                        <div className="svg-wrapper-1">
                            <div className="svg-wrapper">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width={24}
                                    height={24}
                                >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path
                                        fill="currentColor"
                                        d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                    />
                                </svg>
                            </div>
                        </div>
                        <span>Send</span>
                    </button>

                </form>

                <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
                    <Alert
                        onClose={handleClose}
                        severity={notification.severity}
                        sx={{ width: "100%" }}
                    >
                        {notification.message}
                    </Alert>
                </Snackbar>
            </div>
        </div>
    );
}

export default Contact;
