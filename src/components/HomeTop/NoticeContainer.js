import React from "react";
import styled from "styled-components"
import megaphone from "../../assets/images/megaphone.png"

function noticeContainer(){
    const StyledBox = styled.div`
        background-color:#FFFFFF;
        width:335px; height:44px;
        border-radius:12px;

        display:flex;

    `
    const StyledP = styled.p`
        font-size:14px;
        color:#7E838D;
        letter-spacing:-0.6px;

        font-family:var(--font-regular);
    `
    const StyledImg = styled.div`
        display:flex;
        align-items:center;
        justify-content:center;

        padding:0px 10px;

    `
    return(
        <StyledBox>
            <StyledImg>
                <img src={megaphone} width="24px" height="24px"></img>
            </StyledImg>
            <StyledP>지난 달 소비금액으로 치킨 10마리 구매가 가능해요!</StyledP>
        </StyledBox>    
    )
}
export default noticeContainer;