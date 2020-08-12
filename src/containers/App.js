import "./App.css";

import building from "../assets/giphy.gif";
import React, { useState } from "react";
import profilePic from "../assets/profpic.png";
import linkedinIcon from "../assets/linkedinIcon.png";
import githubinIcon from "../assets/GitHubIcon.png";
import favebookIcon from "../assets/facebookIcon.png";
import Scrollbars from "react-custom-scrollbars";
import emailjs from "emailjs-com";
import Spinner from "../UI/Spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  let confirmed = (
    <FontAwesomeIcon className="delivered" icon={faCheckCircle} />
  );
  let emailsArray = message.match(
    /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi
  );

  function sendEmail(e) {
    e.preventDefault();

    if (emailsArray != null && emailsArray.length) {
      setSending(true);
      emailjs
        .sendForm(
          "smtp_server",
          "template_6pL0MhU6",
          e.target,
          "user_GtDfjyoxLr4JYwgOTanbi"
        )
        .then(
          (result) => {
            setMessage("Sent!");
            setTimeout(() => {
              setMessage("");
            }, 1000);
            setSending(false);
            setSent(true);
            setTimeout(() => {
              setSent(false);
            }, 1000);
          },
          (error) => {
            setSending(false);
          }
        );
    } else {
      setMessage("Not Sent! No email :(");
      setTimeout(() => {
        setMessage("");
      }, 1000);
    }
  }

  return (
    <div className="App">
      <div className="container">
        <Scrollbars autoHide autoHideTimeout={1000}>
          <div className="chat">
            <div className="sender">
              <img src={profilePic} alt="sender profile" className="profile" />
              <div className="msgBox incoming">
                <p>
                  I told you to make yourself a minimalistic portfolio but don't
                  you think this is too much?
                </p>
              </div>
            </div>
            <div className="receiver">
              <div className="gif">
                <img src={building} alt="dance builder" className="gif" />
              </div>
              <div className="msgBox outgoing">
                <p>
                  Umm, it's quite original, but you can always email me at{" "}
                  <a href="mailto:contact@wojciechturek.com">
                    contact@wojciechturek.com
                  </a>
                </p>
              </div>
            </div>
            <div className="sender">
              <img src={profilePic} alt="sender profile" className="profile" />
              <div className="msgBox incoming">
                <p>Yeah, but how do I know what you're good at?</p>
              </div>
            </div>
            <div className="receiver">
              <div className="msgBox outgoing">
                <p>
                  You know me, I love JS, React, Angular etc., I can self teach
                  based on project needs
                </p>
              </div>
            </div>
            <div className="receiver">
              <div className="msgBox outgoing">
                <p>
                  anyway, I'd be more than happy to chat, you can find me
                  socially active here:
                </p>
              </div>
            </div>
            <div className="social">
              <div className="socialIcon">
                <a
                  href="https://www.linkedin.com/in/wojciech-turek"
                  target="blank"
                >
                  <img src={linkedinIcon} alt="linkedin profile link" />
                </a>
              </div>
              <div className="socialIcon">
                <a href="https://github.com/wojciech-turek" target="blank">
                  <img src={githubinIcon} alt="github profile link" />
                </a>
              </div>
              <div className="socialIcon">
                <a
                  href="https://www.facebook.com/wojtek.turek.7"
                  target="blank"
                >
                  <img src={favebookIcon} alt="facebook profile link" />
                </a>
              </div>
            </div>
          </div>
        </Scrollbars>
        <div className="textInput">
          <div className="divider"></div>
          <form className="contact-form" onSubmit={sendEmail}>
            <input
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              className="write"
              placeholder="Type your email and message"
            />
            {sending ? <Spinner /> : sent ? confirmed : null}
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
