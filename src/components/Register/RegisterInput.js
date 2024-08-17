import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
    display:inline-block;
    border:none;
    background-color: #E9E5DF;
    width:${(props) => props.width || "100%"}; height:40px;
    border-radius:4px;
    color:#7E838D;
    type:${(props)=> props.type || "text"}
`

function RegisterInput({width,type,value,onChange,name}){
    return(
            <StyledInput width={width} type={type} value={value} onChange={onChange} name={name}/>
    )
}
export default RegisterInput;