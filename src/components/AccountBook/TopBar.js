import React from "react";
import styled from "styled-components";
import right from '../../assets/images/rightVector.png';
import left from '../../assets/images/leftVector.png';
import calendar from '../../assets/images/calendar.png';
function TopBar(){
    const StyledBox = styled.div`

    `
    const StyledDiv = styled.div`
        display:flex;
        justify-content:${props => props.justifyContent || 'space-between'};
        margin: 10px 0px;
    `
    const StyledP = styled.p`
        color:${props => props.color || '#46484D'};
        font-size:${props => props.fontSize || '18px'};
        font-family:${props => props.fontFamily || 'var(--font-medium)'};
        margin: ${props => props.margin || '0px'};
    `
    const CalendarBtn = styled.div`
        width:71px; height:33px;
        display:flex; justify-content:space-between;
        background-color:#FFFFFF;
        border-radius:4px;
        padding:5px;
        box-sizing:border-box;
    `
    return(
        <>
            <StyledDiv justifyContent='flex-start'>
                <img src={left} style={{width:'24px', height:'24px'}}></img>
                <StyledP color='#7E838D' fontSize='18px' margin='0px 10px'>4월</StyledP>
                <img src={right} style={{width:'24px', height:'24px'}}></img>
            </StyledDiv>
            <StyledDiv>
                <StyledP fontSize='28px' fontFamily='var(--font-bold)' >125,300 원</StyledP>
                <CalendarBtn>
                    <img src={calendar} style={{width:'19px', height:'20px', margin:'auto'}}></img>
                    <StyledP color='#7E838D' fontSize='12px' margin='auto' fontFamily='var(--font-regular)'>캘린더</StyledP>
                </CalendarBtn>
            </StyledDiv>

        </>
    )
}
export default TopBar;