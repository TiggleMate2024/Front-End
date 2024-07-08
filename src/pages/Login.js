import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
import StyledContainer from '../components/Style/StyledContainer';
import StyledBox from '../components/Style/StyledBox';
import RegisterText from '../components/Register/RegisterText';
import RegisterInput from '../components/Register/RegisterInput';
import RegisterSelect from '../components/Register/RegisterSelect';
import RegisterBox from '../components/Register/RegisterBox';
import RegisterButton from '../components/Register/RegisterButton';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons";

function Login(){

    const navigate = useNavigate();
    
    return(
        <StyledContainer>
            <FontAwesomeIcon icon={faChevronLeft} onClick={()=>{
                navigate("/onboarding");
            }}/>
            <StyledBox>
                <RegisterText children="로그인" fontSize="24px" fontWeight="500" 
                    margin="20px 0px 60px 0px" lineHeight="34px"/>
                    <form>
                        
                        <RegisterText children="아이디"/>
                        <RegisterBox>
                            <RegisterInput width="136px" name="userId"/>
                             <RegisterText fontSize="15px" children="@" letterSpacing="0" lineHeight="132%"/>
                             <RegisterSelect/>
                        </RegisterBox>

                        <RegisterText children="비밀번호"/>
                        <RegisterBox>
                            <RegisterInput type="password" name="userPw"/>
                        </RegisterBox>
                    
                        <RegisterButton children="로그인하기" type="submit"/>
                    </form>
            </StyledBox>
    </StyledContainer>
    )
}
export default Login;