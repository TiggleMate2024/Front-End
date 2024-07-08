import React from "react";
import styled from "styled-components";

const StyledSelect = styled.input`
    border:none;
    background-color: #E9E5DF;
    width:136px; height:40px;
    border-radius:4px;
    appearance: none;
    color:#7E838D;
`

function RegisterSelect(){
    return(
        <StyledSelect/>
    )
}
export default RegisterSelect;