import React from "react";
import styled from "styled-components";
import Image from "../../assets/images/Vector.png"

const StyledSelect = styled.select`
    border:none;

    width:136px; height:40px;
    border-radius:4px;
    color:#7E838D;
    padding:10px;

    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    background:url(${Image}) no-repeat 93% 50%/15px auto, #E9E5DF;
`
const StyledOption = styled.option`
    background-color:white;
`

const RegisterSelect = ({domainArr,handleDomain,domain}) => {
    return(
        <StyledSelect onChange={handleDomain} value={domain}>
            {
                domainArr.map((data,index)=>{
                    return(
                        <StyledOption key={index} value={data}>{data}</StyledOption>
                    )
                })
            }
        </StyledSelect>
    )
}
export default RegisterSelect;