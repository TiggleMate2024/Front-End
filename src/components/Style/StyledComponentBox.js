import React from "react";
import styled from 'styled-components';

const Box = styled.div`
    display:flex;
    justify-content:center;
    position:${(props) => props.position || 'none'};
`

function StyledComponentBox({children,position}){
    return(
        <Box position={position}>
            {children}
        </Box>
    );
}
export default StyledComponentBox;