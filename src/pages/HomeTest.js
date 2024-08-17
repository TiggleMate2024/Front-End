import React,{useEffect} from 'react';
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

function HomeTest(){

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

    return(
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
    )
}
export default HomeTest;