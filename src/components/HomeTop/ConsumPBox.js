import React from "react";
import styled from "styled-components";


function ConsumPBox({children,margin}){
const StyledText = styled.div`
       margin:${(props) => props.margin}
`
    return(
        <StyledText margin={margin}>
            {children}
        </StyledText>
    )
}
export default ConsumPBox;