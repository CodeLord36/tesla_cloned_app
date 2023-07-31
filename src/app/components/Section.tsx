"use client"
import Header from '../components/Header'
import "./Section.css";

import Button from './Button';
import Arrow from './Arrow';
import Fade from "react-reveal/Fade";


export default function Section({ title='', backgroungImg='', description='', leftBtnText='', rightBtnText=''}) {
 console.log(backgroungImg);
  return (
    <div
      className={
        `sectionWrapper ` + backgroungImg + ` bg-cover bg-no-repeat bg-center`
      }
    >
      {/* <Header /> */}
      <div className="sectionText">
        <Fade bottom>
          <div className="sectionHeaderText">{title}</div>
          <div className="sectionItemText">{description}</div>
        </Fade>
      </div>

      <div className="bottomItems">
        <Button leftBtnText={leftBtnText} rightBtnText={rightBtnText} />

        <Arrow />
      </div>
    </div>
  );
}
