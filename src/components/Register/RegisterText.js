import React from 'react';
import styled from 'styled-components';

function RegisterText({children, fontSize, fontWeight, margin, lineHeight,letterSpacing}){

    const RegisText = styled.p`
        font-weight: ${(props) => props.fontWeight || "600"};
        margin:${(props) => props.margin || "auto"};
        color:#46484D;
        letter-spacing: ${(props) => props.letterSpacing || "-0.6px"};
        line-height: ${(props) => props.lineHeight || "24px"};
        font-size: ${(props) => props.fontSize || "18px"};
    `
    return(
        <RegisText fontSize={fontSize} fontWeight={fontWeight} 
            margin={margin} lineHeight={lineHeight} letterSpacing={letterSpacing}>
            {children}
        </RegisText>
    )
}
export default RegisterText;