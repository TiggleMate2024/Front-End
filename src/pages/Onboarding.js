import React from 'react';
import "../components/Style/OnboardingStyles.css";
import StyledContainer from '../components/Style/StyledContainer';
import OnboardingButton from '../components/Onboarding/OnboardingButton';

export default function Splash(){
    return(
        <StyledContainer>
            <div className='onboarding-text-frame'>
                <div className='onboarding-text'>내 성향에 맞는</div>
                <div className='onboarding-text'>소비습관을 통해</div>
                <div className='onboarding-text'>목표를 달성하세요!</div>
            </div>
            <h3>이미지 삽입</h3>
            <OnboardingButton children={"이메일로 가입하기"} />
            <br />
            <OnboardingButton children={"이메일로 로그인하기"} />
            <div className='onboarding-btn-frame'>
                <button className="onboarding-find-btn">아이디 찾기</button>
                <button className="onboarding-find-btn">비밀번호 찾기</button>
            </div>
            <div className='onboarding-btn-frame'>
                <button className="onboarding-social-btn">소셜</button>
                <button className="onboarding-social-btn">로그인</button>
                <button className="onboarding-social-btn">버튼</button>
            </div>
        </StyledContainer>
    )
}