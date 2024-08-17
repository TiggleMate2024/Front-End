import React,{useEffect} from "react";
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
import mission from "../assets/images/home/mission.png";
import bottom1 from "../assets/images/home/bottom1.png";
import bottom2 from "../assets/images/home/bottom2.png";
import bottom3 from "../assets/images/home/bottom3.png";
import bottom4 from "../assets/images/home/bottom4.png";
import bottom5 from "../assets/images/home/bottom5.png";

import styled from 'styled-components';
import StyledContainer from '../components/Style/StyledContainer';
import StyledComponentBox from '../components/Style/StyledComponentBox';
import FinancialTransBox from '../components/HomeTop/FinancialTransBox';

import TopBar from '../components/HomeTop/TopBar';
import ConsumMainImg from '../components/HomeTop/ConsumMainImg';
import ConsumMainText from '../components/HomeTop/ConsumMainText';
import ConsumMainP from '../components/HomeTop/ConsumMainP';
import ConsumPBox from '../components/HomeTop/ConsumPBox';
import NoticeContainer from '../components/HomeTop/NoticeContainer';
import ConsumRange from '../components/HomeTop/ConsumRange';
import ContainerBox from '../components/Style/ContainerBox';
import BookImg from '../assets/images/bookImg.png';
import FoodImg from '../assets/images/tteokImg.png';
import MoneyImg from '../assets/images/moneyImg.png';
import arrow from '../assets/images/arrow.png';

import axios from 'axios';


export default function Frame(){

  const StyledP = styled.p`
        color:#7E838D;
        font-family:var(--font-regular);
        font-size:12px;
    `
    const financialtrans = [
        {img:MoneyImg, title:'아빠 심부름 후 용돈', amount:'+10,000원', date:'04.18(목)'},
        {img:FoodImg, title:'친구들이랑 엽떡!', amount:'-12,000원', date:'04.18(목)'},
        {img:BookImg, title:'수능특강 문제집 구매', amount:'-18,000원', date:'04.18(목)'}
    ];

    const fetchData = async() => {
        try {
            const response = await axios.get('http://ec2-13-209-10-242.ap-northeast-2.compute.amazonaws.com:8080/api/account-book/account/list');
            // 성공적인 응답 처리
            console.log(response.data);
            alert('데이터 받아오기 성공');
        } catch (error) {
            // 에러 처리
            console.error(error);
        }
    }
    
    useEffect(() => {
        fetchData();
      }, []);
  return (
    <div className="out-frame">

<StyledContainer>
            <TopBar/>

            <StyledComponentBox position="relative">
                <ConsumMainImg />
                <ConsumMainText>
                    <ConsumPBox margin="0px">
                        <ConsumMainP children="서용이님의" fontSize="18px" fontFamily="var(--font-semibold)"></ConsumMainP>
                        <ConsumMainP children="2024년 4월 소비금액" fontSize="18px" fontFamily="var(--font-semibold)"></ConsumMainP>
                    </ConsumPBox>
                    <ConsumPBox margin="15px 0px">
                        <ConsumMainP fontSize="12px" fontFamily="var(--font-medium)" opacity="0.8" children="지난 달보다 53,200원 절약했네요!"></ConsumMainP>
                    </ConsumPBox>
                    <ConsumPBox margin="25px 0px">
                        <ConsumMainP children="125,300원" fontSize="26px" fontFamily="var(--font-bold)"></ConsumMainP>
                    </ConsumPBox>
                </ConsumMainText>
            </StyledComponentBox>

            <StyledComponentBox>
                <NoticeContainer />
            </StyledComponentBox>

            <ConsumPBox margin="25px 0px 10px;">
                <ConsumMainP color="#7E838D" fontSize="14px" fontFamily="var(--font-medium)" margin="3px 0px"
                                children="4월 소비금액 목표까지"/>
                <div style={{display:'flex', justifyContent:'space-between' }}>
                    <ConsumMainP color="#46484D" fontSize="20px" fontFamily="var(--font-bold)" margin="5px 0px"
                                    children="얼마 남지 않았어요 조심하세요!"/>
                    <img src={arrow} width="24px" height="24px" style={{display:'block', margin:'auto 0px'}}></img> 
                </div>              
            </ConsumPBox>                
            <StyledComponentBox>
                <ConsumRange max={100} value={80} current={'300,500'} goal={'500,000원'} position="relative"/>
            </StyledComponentBox>

            <ConsumPBox margin="25px 0px 10px;">
                <ConsumMainP color="#7E838D" fontSize="14px" fontFamily="var(--font-medium)" margin="3px 0px"
                                children="내가 작성하는"/>
                <div style={{display:'flex', justifyContent:'space-between' }}>
                    <div style={{display:'flex'}}>
                        <ConsumMainP color="#FFB801" fontSize="20px" fontFamily="var(--font-bold)" margin="5px 5px 0px 0px" children="4월 18일 "/>
                        <ConsumMainP color="#7E838D" fontSize="20px" fontFamily="var(--font-bold)" margin="5px 0px" children="금융이동"/>
                    </div>                
                    <img src={arrow} width="24px" height="24px" style={{display:'block', margin:'auto 0px'}}></img> 
                </div>              
            </ConsumPBox>
            {/* <StyledComponentBox>
                <WeeklyCalendarBox></WeeklyCalendarBox>
            </StyledComponentBox> */}
            
            <StyledP color='#7E838D'>이번주 총 3건의 금융이동이 있었어요.</StyledP>
            {
                    financialtrans.map((data,index)=>
                    {
                        return(

                            <StyledComponentBox>
                                <ContainerBox height='70px' display='flex'>
                                    <FinancialTransBox img={data.img} date={data.date} title={data.title} amount={data.amount} />
                                </ContainerBox>
                            </StyledComponentBox>
                        )
                    }
                    )
                }
        </StyledContainer>
      <div className="frame" style={{height:"150px"}}>
        <img className="mission-frame" alt="mission" src={mission}/>
      </div>
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
          <div className="div-2">
            <div className="text-wrapper-17">금융똑똑이가 되는 첫걸음!</div>
            <div className="div-11">
              <div className="text-wrapper-18">오늘의 금융지식 퀴즈</div>
            </div>
            <SlArrowRight className="img-2" />
          </div>
        </div>
        {/* <div className="frame"> */}
          <div className="bottom-component">
            <div className="bottom-overlap-group">
              <img className="bottom-frame" alt="Frame" src={bottom1} />
              <img className="bottom-frame" alt="Frame" src={bottom2} />
              <img className="bottom-frame" alt="Frame" src={bottom3} />
              <img className="bottom-frame" alt="Frame" src={bottom4} />
              <img className="bottom-frame" alt="Frame" src={bottom5} />
            </div>
          </div>
        {/* </div> */}
    </div>
  );
};
