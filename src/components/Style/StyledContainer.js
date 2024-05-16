import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width:100%;
    min-height: 80vh;
    padding:30px 20px;
    box-sizing: border-box;
`

function StyledContainer({children}){
    return(
        <Container>
            {children}
        </Container>
    )
}
export default StyledContainer;