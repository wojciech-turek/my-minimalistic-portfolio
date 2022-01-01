import "./App.css";

import building from "../assets/giphy.gif";
import React, { useState } from "react";
import profilePic from "../assets/profpic.png";
import linkedinIcon from "../assets/linkedinIcon.png";
import githubinIcon from "../assets/GitHubIcon.png";
import favebookIcon from "../assets/facebookIcon.png";
import Scrollbars from "react-custom-scrollbars";
import { Button } from "@mui/material";
import SlideUp from "../UI/SlideUp";
import ContactForm from "../components/ContactForm";

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="App">
      <div className="container">
        <SlideUp isOpen={drawerOpen} close={() => setDrawerOpen(false)}>
          <ContactForm />
        </SlideUp>
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
                  Umm, maybe, but but if you want to talk just email me at{" "}
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
                  You know me, I love to work in Blockchain, Solidty, React
                  etc., I can self teach based on project needs
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
          <Button
            variant="contained"
            className="sendMsgBtn"
            onClick={() => setDrawerOpen(true)}
          >
            Send me a message
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
