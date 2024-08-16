import styled from 'styled-components';
import MainBox from '../Style/ContainerBox';
import DailyCalendarBox from './DailyCalendarBox';
import CalendarP from './CalendarP';

function WeeklyCalendarBox(){
    const DOW = ['일','월','화','수','목','금','토'];
    const Date = [14,15,16,17,18,19,20];
    const ConsumGauge = [
        [0,100],[10,90],[60,40],[10,90],[40,60],[100,0],[100,0]
    ];
    
    const StyledBox = styled.div`
        display:flex;
        justify-content:flex-end;
    `
    const DailyList = styled.div`
        display:flex; justify-content:space-between;
        margin-bottom:20px;
    `
    return(
        <MainBox height='140px' padding='30px 20px 20px 20px'>
            <DailyList>
            {
                DOW.map((data,index)=>{
                    return(
                        <DailyCalendarBox key={index} day={DOW[index]} date={Date[index]} gauge={ConsumGauge[index]}></DailyCalendarBox>
                    )
                })
            }
            </DailyList>
            <StyledBox>
                <CalendarP color="#7396F3" children="저축" price="50,000" marginright="10px"/>
                <CalendarP color="#F36A4C" children="소비" price="30,000"/>
            </StyledBox>
        </MainBox>
    )
}
export default WeeklyCalendarBox;