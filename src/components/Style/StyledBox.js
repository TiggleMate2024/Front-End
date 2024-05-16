import React from "react";
import styled from 'styled-components';

const Box = styled.div`
    padding:15px;
    box-sizing: border-box;
    `

function StyledBox({children}){
    return(
        <Box>
            {children}
        </Box>
    );
}
export default StyledBox;