import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width:100%;
    height: 100%;
    padding:${props => props.padding || '20px'};
    box-sizing: border-box;
    background-color:#F5F5F5;
`

function StyledContainer({children,padding}){
    return(
        <Container padding={padding}>
            {children}
        </Container>
    )
}
export default StyledContainer;