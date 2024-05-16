import React from "react";
import styled from "styled-components";

const StyledButton = styled.div`
    background-color: #7E838D;
    color:white;
    position:fixed;
    bottom:0; left:0; right:0;
    width:100vw;
    height:20vw;

    border-radius: 25px 25px 0px 0px;
    text-align: center;
    padding:20px 0px 0px 0px;

    font-weight: 600;
    letter-spacing: -0.6px;
`

function RegisterButton({children}){
    return(
        <StyledButton>
            {children}
        </StyledButton>
    )
}
export default RegisterButton;