import React from 'react';
import StyledContainer from '../components/Style/StyledContainer';
import StyledBox from '../components/Style/StyledBox';
import RegisterText from '../components/Register/RegisterText';
import RegisterInput from '../components/Register/RegisterInput';
import RegisterSelect from '../components/Register/RegisterSelect';
import RegisterBox from '../components/Register/RegisterBox';
import RegisterButton from '../components/Register/RegisterButton';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons";
 
function Register(){
    
    return(
        <StyledContainer>
            <FontAwesomeIcon icon={faChevronLeft} />
            <StyledBox>
                <RegisterText children="회원가입" fontSize="24px" fontWeight="500" 
                    margin="20px 0px 60px 0px" lineHeight="34px" fontFamily="var(--font-bold)"/>
                    <form>
                        <RegisterText children="닉네임"/>
                        <RegisterBox>
                            <RegisterInput/>
                        </RegisterBox>

                        <RegisterText children="아이디"/>
                        <RegisterBox>
                            <RegisterInput width="136px"/>
                             <RegisterText fontSize="15px" children="@" letterSpacing="0" lineHeight="132%"/>
                             <RegisterSelect/>
                        </RegisterBox>

                        <RegisterText children="비밀번호"/>
                        <RegisterBox>
                            <RegisterInput type="password"/>
                        </RegisterBox>
                        <RegisterBox>
                            <RegisterInput type="password"/>
                        </RegisterBox>
                        <RegisterButton children="가입하기"/>
                    </form>
            </StyledBox>
    </StyledContainer>
    )
}
export default Register;