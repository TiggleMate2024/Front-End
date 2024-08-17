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
import axios from 'axios';
 
function Register(){

    const navigate = useNavigate();

    const DOMAIN_ARR = [
        "gmail.com",
        "naver.com",
        "nate.com",
        "daum.com",
        "hanmail.net"
      ];
    
    
    const [formData,setFormData] = useState({
        nickname:'',
        username:'',
        password:'',
        checkPassword:''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        console.log(e.target);
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // 폼의 기본 제출 동작을 막음
        if (formData.password !== formData.checkPassword) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }

        try {
            const response = await axios.post('http://ec2-13-209-10-242.ap-northeast-2.compute.amazonaws.com:8080/join', formData);
            // 성공적인 응답 처리
            console.log('사용자 등록:', response.data);
            alert("회원가입이 완료되었습니다.");
            navigate("/setting");
        } catch (error) {
            // 에러 처리
            console.error('사용자 등록 에러:', error);
            alert("회원가입 중 에러가 발생했습니다.");
        }

        console.log(formData);
    };


    return(
        <StyledContainer>
            <FontAwesomeIcon icon={faChevronLeft} onClick={()=>{
                navigate("/onboarding");
            }}/>
            <StyledBox>
                <RegisterText children="회원가입" fontSize="24px" fontWeight="500" 
                    margin="20px 0px 60px 0px" lineHeight="34px"/>
                    <form onSubmit={handleSubmit}>
                        <RegisterText children="닉네임"/>
                        <RegisterBox>
                            <RegisterInput name='nickname' value={formData.nickname} onChange={handleChange}/>
                        </RegisterBox>

                        <RegisterText children="아이디"/>
                        <RegisterBox>
                            <RegisterInput width="299px" onChange={handleChange} name="username" value={formData.username}/>
                             {/* <RegisterText fontSize="15px" children="@" letterSpacing="0" lineHeight="132%"/>
                             <RegisterSelect
                                    domainArr={DOMAIN_ARR}
                                    handleDomain={handleDomain}
                                    domain={domain} /> */}
                        </RegisterBox>

                        <RegisterText children="비밀번호"/>
                        <RegisterBox>
                            <RegisterInput type="password" onChange={handleChange} name="password" value={formData.password}/>
                        </RegisterBox>
                        <RegisterBox>
                            <RegisterInput type="password" name="checkPassword" value={formData.checkPassword} onChange={handleChange}/>
                        </RegisterBox>
                        <RegisterButton children="가입하기" type="submit"/>

                    </form>
            </StyledBox>
    </StyledContainer>
    )
}
export default Register;