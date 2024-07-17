import React from 'react';
import "../components/Style/SplashStyles.css";
// import StyledContainer from '../components/Style/StyledContainer';
import splash from '../assets/images/splash.png';

export default function Splash(){

    return(
        // <StyledContainer>
        //     <img alt='Splash' src={splash} style={{display: "flex", margin: "0 auto"}} />
        // </StyledContainer>
        <>
            <img alt='Splash' src={splash} style={{display: "flex", margin: "0 auto", width:"100%"}} />
        </>
    )
}