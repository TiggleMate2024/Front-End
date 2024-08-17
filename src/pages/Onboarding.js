import React from 'react';
import {useNavigate} from 'react-router-dom';
import "../components/Style/OnboardingStyles.css";
import onboarding from '../assets/images/onboarding.png';
import naverLogo from '../assets/images/naver_logo.png';
import kakaoLogo from '../assets/images/kakao_logo.png';
import googleLogo from '../assets/images/google_logo.png';

export default function Splash(){
    const navigate = useNavigate();

    return(
        <>
            <img alt='onboarding' src={onboarding} style={{display: "flex", margin: "0 auto", width:"100%"}} />
            <div className='onboarding-frame'>
                <button className='onboarding-btn' onClick={() => navigate('/register')}>이메일로 가입하기</button> 
                {/* 가입 페이지로 연결 */}
                <br />
                <button className='onboarding-btn' onClick={() => navigate('/login')}>이메일로 로그인하기</button>
                {/* 로그인 페이지로 연결 */}
                <br />
                <br />
                <div className='onboarding-btn-frame'>
                    <button className="onboarding-social-btn" style={{backgroundColor:"#00D037"}} onClick={() => window.location.href = "http://ec2-13-209-10-242.ap-northeast-2.compute.amazonaws.com:8080/oauth2/authorization/naver"}>
                        <img alt='naver logo' src={naverLogo} />
                    </button>
                    <button className="onboarding-social-btn" style={{backgroundColor:"#F9E007"}} onClick={() => window.location.href = "http://ec2-13-209-10-242.ap-northeast-2.compute.amazonaws.com:8080/oauth2/authorization/kakao"}>
                        <img alt='kakao logo' src={kakaoLogo} />
                    </button>
                    <button className="onboarding-social-btn" style={{backgroundColor:"#ffffff"}} onClick={() => window.location.href = "http://ec2-13-209-10-242.ap-northeast-2.compute.amazonaws.com:8080/oauth2/authorization/google"}>
                        <img alt='google logo' src={googleLogo} />
                    </button>
                </div>
            </div>
            </>
    )
}