import React from "react";
import styled from "styled-components";
import "../Style/ConsumRangeCss.css";
import DangerMessage from "../../assets/images/dangerMessage.png";

const StyledBox = styled.div`
    background-color:#FFFFFF;
    width:335px; height:103px;
    border-radius:16px;

    margin:auto;
    padding:10px 20px;
    box-sizing:border-box;
    position:${(props) => props.position};
`
const StyledP = styled.p`
    font-size:${(props) => props.fontSize};
    color:${(props) => props.color};
    font-family: ${(props) => props.fontFamily};
    margin:10px 0px;
    display:inline-block;
    letter-spacing: -1.2px;
`

const StyledProgress = styled.div`
    
`

function ConsumRange({max, value, current,goal,position}){
    return(
        <StyledBox position={position}>
            <StyledP color="#46484D" fontFamily="var(--font-bold)" fontSize="24px">{current}</StyledP> <StyledP color="#7E838D" fontFamily="var(--font-medium)" fontSize="15px">/ {goal}</StyledP>
            <img src={DangerMessage} width='30px' height='28.3px' className="Message"></img>
            <StyledProgress>
                <progress max={max} value={value}></progress>
            </StyledProgress>
        </StyledBox>
    )
}
export default ConsumRange;