import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import StyledContainer from "../components/Style/StyledContainer";
import ContainerBox from "../components/Style/ContainerBox";
import StyledComponentBox from "../components/Style/StyledComponentBox";
import NoticeContainer from '../components/HomeTop/NoticeContainer';
import TopBar from "../components/AccountBook/TopBar";
import Satisfaction from "../components/AccountBook/Satisfaction";
import FinancialTrans from "../components/AccountBook/FinancialTrans";
import DailyConsumGraph from "../components/AccountBook/DailyConsumGraph";

import BookImg from '../assets/images/bookImg.png';
import FoodImg from '../assets/images/tteokImg.png';
import MoneyImg from '../assets/images/moneyImg.png';

import bottom1 from "../assets/images/home-2.png";
import bottom2 from "../assets/images/activeAccount.png";
import bottom3 from "../assets/images/home/bottom3.png";
import bottom4 from "../assets/images/home/bottom4.png";
import bottom5 from "../assets/images/home/bottom5.png";



function AccountBook(){

    const navigate = useNavigate();

    const satisRadio = [
        {graph:'만족해요', consumP:'만족한 소비', amount:'538,400원'},
        {graph:'후회해요', consumP:'후회한 소비', amount:'287,400원', boxColor:'#E9E5DF', pColor:'#7E838D', boxWidth:'90px'},
        {graph:'참았어요', consumP:'저축한 금액', amount:'236,900원', boxColor:'#FFEEC3', pColor:'#7E838D', boxWidth:'116px'}
    ];

    const financialtrans = [
        {img:MoneyImg, title:'아빠 심부름 후 용돈', amount:'+10,000원', date:'04.18(목)'},
        {img:FoodImg, title:'친구들이랑 엽떡!', amount:'-12,000원', date:'04.18(목)'},
        {img:BookImg, title:'수능특강 문제집 구매', amount:'-18,000원', date:'04.18(목)'}
    ];

    const InputIncomBtn = styled.div`
        width:50px; height:50px;
        background-color:#FFB801;
        border-radius: 50%;
        display:flex; justify-content:center;
    `
    const PlusBtn = styled.p`
        color:white;
        margin:0;
        font-size:30px;
        font-weight:bold;
    `
    
    return(
        <>
        <StyledContainer padding='40px 20px'>
            <TopBar />

            <StyledComponentBox>
                <NoticeContainer />
            </StyledComponentBox>

            <StyledComponentBox>
                <ContainerBox margintop={'15px'} padding={'20px 20px 0px'}>
                    <DailyConsumGraph></DailyConsumGraph>
                </ContainerBox>
            </StyledComponentBox>

            <StyledComponentBox>
                <ContainerBox margintop={'10px'} padding={'20px'}>
                    <Satisfaction satisRadio={satisRadio}/>   
                </ContainerBox>
            </StyledComponentBox>

            <StyledComponentBox>
                <ContainerBox padding={'20px'} margintop={'15px'}>
                    <FinancialTrans financialtrans={financialtrans}></FinancialTrans>
                </ContainerBox>
            </StyledComponentBox>

            <InputIncomBtn onClick={()=>navigate('/InputIncome')}>
                <PlusBtn>+</PlusBtn>
            </InputIncomBtn>

        </StyledContainer>

        <div className="bottom-component">
        <div className="bottom-overlap-group">
        <img className="bottom-frame" alt="Frame" src={bottom1} onClick={() => navigate('/home')}/>
        <img className="bottom-frame" alt="Frame" src={bottom2} onClick={() => navigate('/accountbook')}/>
        <img className="bottom-frame" alt="Frame" src={bottom3} />
        <img className="bottom-frame" alt="Frame" src={bottom4} />
        <img className="bottom-frame" alt="Frame" src={bottom5} />
        </div>
        </div>

</>
    )
}
export default AccountBook;