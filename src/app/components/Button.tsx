import "./Button.css";
import Fade from "react-reveal/Fade";

export default function Button({ leftBtnText, rightBtnText }) {
  return (
    <div className="buttonGroup">
      <Fade bottom>
        <div className="leftButton">{leftBtnText}</div>
        {rightBtnText && <div className="rightButton">{rightBtnText}</div>}
      </Fade>
    </div>
  );
}
