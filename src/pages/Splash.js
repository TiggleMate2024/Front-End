import React from 'react';
import "../components/Style/SplashStyles.css";
import StyledContainer from '../components/Style/StyledContainer';

export default function Splash(){
    return(
        <StyledContainer>
            <div className='splash-text-frame'>
                <div className='splash-text'>습관이</div>
                <div className='splash-text'>소득이 되는</div>
                <div className='splash-text'>000</div>
                <div className='splash-text'>금융 서비스</div>
            </div>
            {/* 이미지 삽입 */}
        </StyledContainer>
    )
}