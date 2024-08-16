import React from "react";
import styled from "styled-components";
import notice from "../../assets/images/notice.png"
import logo from "../../assets/images/logo.png"
import profile from "../../assets/images/profile.png"

const StyledBox = styled.div`
    display:flex;
    justify-content:space-between;
`

function RegisterBox(){
    return(
        <StyledBox>
            <StyledBox>
                <img src={logo} width='38.55px' height='30px'></img>
            </StyledBox>
            <StyledBox>
                <img src={notice} width='28px' height='28px'></img>
                <img src={profile} width='28px' height='28px' style={{marginLeft:'5px'}}></img>
            </StyledBox>
        </StyledBox>
    )
}
export default RegisterBox