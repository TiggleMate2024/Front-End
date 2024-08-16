import React from "react";
import styled from "styled-components";

const StyledTextBox = styled.div`
    position:absolute;
    color:white;
    top:14%; left:5%;
    padding:20px 0px;
`

function ConsumMainText({children}){
    return(
        <StyledTextBox>
           {children}
        </StyledTextBox>
    )
}
export default ConsumMainText;