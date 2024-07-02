import React from "react";
import styled from "styled-components";

const StyledButton = styled.div`
    background-color: #7E838D;
    color:white;
    position: relative;
    width: 65%;
    height: 50%;

    border-radius: 25px 25px 25px 25px;
    justify-content: center;
    padding:20px;
    display: flex;
    margin : 0 auto;
`

export default function RegisterButton({children}){
    return(
        <StyledButton>
            {children}
        </StyledButton>
    )
}