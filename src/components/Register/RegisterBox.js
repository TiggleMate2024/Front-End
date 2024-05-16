import React from "react";
import styled from "styled-components";

const StyledBox = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    margin: ${(props)=>props.margin || "10px 0px 20px 0px"};
`
function RegisterBox({children,margin}){
    return(
        <StyledBox margin={margin}>
            {children}
        </StyledBox>
    )
}
export default RegisterBox