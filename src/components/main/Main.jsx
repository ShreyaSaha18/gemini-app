import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import "./Main.css";
import { Context } from "../../context/Context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon}></img>
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Shreya.</span>
                <p>How can I help you today?</p>
              </p>
            </div>

            <div className="cards">
              <div className="card">
                <p>Suggest Beautiful places to visit</p>
                <img src={assets.compass_icon} alt="compus"></img>
              </div>
              <div className="card">
                <p>Summarize the concept : Urban Planning</p>
                <img src={assets.bulb_icon} alt="bulb"></img>
              </div>
              <div className="card">
                <p>Brainstorm Team bonding activities for our work retreat</p>
                <img src={assets.message_icon} alt="message"></img>
              </div>
              <div className="card">
                <p>Improve the readablity of the following code</p>
                <img src={assets.code_icon} alt="code"></img>
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="user-icon"></img>
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon}></img>
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter prompt here"
            ></input>

            <div>
              <img src={assets.gallery_icon} alt="gallery_icon"></img>
              <img src={assets.mic_icon} alt="mic_icon"></img>
              {input ? (
                <img
                  onClick={() => onSent()}
                  src={assets.send_icon}
                  alt="send_icon"
                ></img>
              ) : null}
            </div>
          </div>

          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
