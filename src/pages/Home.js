import React from "react";
import "../components/Style/HomeStyles.css";
import { SlArrowRight } from "react-icons/sl";
import { BiCircle } from "react-icons/bi";
import { RiCloseLargeFill } from "react-icons/ri";

import num1Image from "../assets/images/home/num1_image.png";
import num2Image from "../assets/images/home/num2_image.png";
import num3Image from "../assets/images/home/num3_image.png";
import num1 from "../assets/images/home/num1.png";
import num2 from "../assets/images/home/num2.png";
import num3 from "../assets/images/home/num3.png";
import num4 from "../assets/images/home/num4.png";
import num5 from "../assets/images/home/num5.png";
import crown from "../assets/images/home/crown.png";
import vector from "../assets/images/home/vector.png";

export default function Frame(){
  return (
    <div className="out-frame">
      <div className="frame">
        <div className="overlap">
          <div className="div">
            <div className="rectangle" />
            <div className="rectangle-2" />
            <div className="rectangle-3" />
            <div className="overlap-wrapper">
              <div className="overlap-group">
                <div className="text-wrapper">교통</div>
                <div className="text-wrapper-2">3건</div>
                <img className="group" alt="Group" src={num3Image} />
                <div className="overlap-group-wrapper">
                  <div className="overlap-group-2">
                    <img className="star" alt="Star" src={num3} />
                  </div>
                </div>
              </div>
            </div>
            <div className="div-wrapper">
              <div className="overlap-2">
                <div className="text-wrapper-4">4건</div>
                <div className="text-wrapper-5">뷰티</div>
                <img className="img" alt="Group" src={num2Image} />
                <div className="overlap-group-wrapper-2">
                  <div className="overlap-group-3">
                    <img className="star" alt="Star" src={num2} />
                  </div>
                </div>
              </div>
            </div>
            <div className="overlap-wrapper-2">
              <div className="overlap-3">
                <div className="overlap-wrapper-3">
                  <div className="overlap-4">
                    <div className="text-wrapper-6">식비</div>
                    <div className="text-wrapper-7">8건</div>
                    <img className="group-2" alt="Group" src={num1Image} />
                    <div className="overlap-group-wrapper-3">
                      <div className="overlap-group-4">
                        <img className="star-2" alt="Star" src={num1} />
                      </div>
                    </div>
                  </div>
                </div>
                <img className="crown" alt="Crown" src={crown} />
              </div>
            </div>
          </div>
        </div>
        <div className="div-2">
          <p className="p">지난 달 가장 많은 지출분야는?</p>
          <div className="div-3">
            <p className="div-4">
              <span className="span">식비</span>
              <span className="text-wrapper-9">&nbsp;</span>
              <span className="text-wrapper-10">지출이 가장 많았어요!</span>
            </p>
          </div>
          <SlArrowRight className="img-2" />
          {/* <img className="img-2" alt="Frame" src="frame-1962.svg" /> */}
        </div>
        <div className="div-5">
          <div className="text-wrapper-12">서점 및 문구</div>
          <div className="text-wrapper-13">2건</div>
          <div className="overlap-group-wrapper-4">
            <div className="overlap-group-5">
              <img className="star-2" alt="Star" src={num4} />
            </div>
          </div>
        </div>
        <div className="div-6">
          <div className="text-wrapper-12">기타</div>
          <div className="text-wrapper-13">1건</div>
          <div className="overlap-group-wrapper-4">
            <div className="overlap-group-6">
              <img className="star-2" alt="Star" src={num5} />
            </div>
          </div>
        </div>
      </div>
      <div className="frame">
          <div className="div-7">
            <p className="q">
              Q. 만 18세 미만 미성년자는 신용점수가 <br />
              측정되지 않는다.
            </p>
            <div className="div-8">
              <div className="subtract-wrapper">
              <BiCircle className="subtract" color="#7396F3"/>
                {/* <img className="subtract" alt="Subtract" src="subtract.svg" /> */}
              </div>
              <div className="union-wrapper">
              <RiCloseLargeFill className="union" color="#F36A4C"/>
                {/* <img className="union" alt="Union" src="union.svg" /> */}
              </div>
            </div>
            <div className="group-3">
              <div className="overlap-group-3">
                <img className="vector" alt="Vector" src={vector} />
                <div className="ellipse" />
                <div className="ellipse-2" />
                <div className="ellipse-3" />
                <div className="ellipse-4" />
              </div>
            </div>
            <div className="view">
              <div className="text-wrapper-15">힌트보기</div>
            </div>
            <div className="div-9">
              <p className="p-2">딱 한번만 도전할 수 있으니, 힌트를 꼭 확인하세요!</p>
              <div className="div-wrapper-3">
                <div className="text-wrapper-16">!</div>
              </div>
            </div>
          </div>
          <div className="div-10">
            <div className="text-wrapper-17">금융똑똑이가 되는 첫걸음!</div>
            <div className="div-11">
              <div className="text-wrapper-18">오늘의 금융지식 퀴즈</div>
            </div>
            <SlArrowRight className="img-2" />
          </div>
        </div>
    </div>
  );
};
