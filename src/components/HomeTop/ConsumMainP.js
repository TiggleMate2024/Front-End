import React from "react";
import styled from "styled-components";


function ConsumMainP({children,fontSize, fontFamily,opacity,color,margin}){
    const StyledP = styled.p`
    margin:${(props) => props.margin || '0px'};
    color:${(props) => props.color || 'white'};
    font-size:${(props) => props.fontSize};
    font-family:${(props) => props.fontFamily };
    opacity:${(props) => props.opacity || 1};
    display:${(props) => props.display};
`

    return(
        <>
            <StyledP fontSize={fontSize} fontFamily={fontFamily} opacity={opacity} color={color} margin={margin}>{children}</StyledP>
        </>
        )
}
export default ConsumMainP;