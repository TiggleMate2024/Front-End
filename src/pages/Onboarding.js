import React from 'react';
import "../components/Style/OnboardingStyles.css";
import StyledContainer from '../components/Style/StyledContainer';
import OnboardingButton from '../components/Onboarding/OnboardingButton';
import onboarding from '../assets/images/onboarding.png';
import naverLogo from '../assets/images/naver_logo.png';
import kakaoLogo from '../assets/images/kakao_logo.png';
import appleLogo from '../assets/images/apple_logo.png';

export default function Splash(){
    return(
        // <StyledContainer>
        <>
            <img alt='onboarding' src={onboarding} style={{display: "flex", margin: "0 auto", width:"100%"}} />
            <div className='onboarding-frame'>
                <button className='onboarding-btn'>이메일로 가입하기</button>
                {/* <OnboardingButton children={"이메일로 가입하기"} /> */}
                <br />
                <button className='onboarding-btn'>이메일로 가입하기</button>
                {/* <OnboardingButton children={"이메일로 로그인하기"} /> */}
                <div className='onboarding-btn-frame'>
                    <button className="onboarding-find-btn">아이디 찾기</button>
                    <button className="onboarding-find-btn">비밀번호 찾기</button>
                </div>
                <div className='onboarding-btn-frame'>
                    <button className="onboarding-social-btn" style={{backgroundColor:"#00D037"}}>
                        <img alt='naver logo' src={naverLogo} />
                    </button>
                    <button className="onboarding-social-btn" style={{backgroundColor:"#F9E007"}}>
                        <img alt='kakao logo' src={kakaoLogo} />
                    </button>
                    <button className="onboarding-social-btn" style={{backgroundColor:"#231F20"}}>
                        <img alt='apple logo' src={appleLogo} />
                    </button>
                </div>
            </div>
            </>
        // </StyledContainer>
    )
}