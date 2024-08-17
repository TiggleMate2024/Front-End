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

function Login(){

    const navigate = useNavigate();
    const [formData,setFormData] = useState({
        username:'',
        password:'',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // 폼의 기본 제출 동작을 막음

        try {
            const response = await axios.post('http://ec2-13-209-10-242.ap-northeast-2.compute.amazonaws.com:8080/login', formData);
            // 성공적인 응답 처리
            console.log('사용자 등록:', response.data);
            alert("로그인이 완료되었습니다.");
            const token = response.login.headers['login'];
            const accessToken = token ? JSON.parse(token).access : null;
            if (accessToken) {
                // Axios의 기본 헤더에 Authorization 추가
                axios.defaults.headers.common['Authorization'] = `${token}`;
                // 홈 페이지로 이동
                navigate("/home");
                
            } else {
                alert("토큰을 가져오지 못했습니다.");
            }
        } catch (error) {
            // 에러 처리
            console.error('사용자 등록 에러:', error);
            alert("로그인 중 에러가 발생했습니다.");
        }
        console.log(formData);
    };
    
    return(
        <StyledContainer>
            <FontAwesomeIcon icon={faChevronLeft} onClick={()=>{
                navigate("/onboarding");
            }}/>
            <StyledBox>
                <RegisterText children="로그인" fontSize="24px" fontWeight="500" 
                    margin="20px 0px 60px 0px" lineHeight="34px"/>
                    <form onSubmit={handleSubmit}>   
                        <RegisterText children="아이디"/>
                        <RegisterBox>
                            <RegisterInput width="299px" name="username" onChange={handleChange}/>
                             {/* <RegisterText fontSize="15px" children="@" letterSpacing="0" lineHeight="132%"/>
                             <RegisterSelect/> */}
                        </RegisterBox>
                         
                        <RegisterText children="비밀번호"/>
                        <RegisterBox>
                            <RegisterInput onChange={handleChange} type="password" name="password"/>
                        </RegisterBox>
                        <RegisterButton children="로그인하기" type="submit"/>
                    </form>
            </StyledBox>
    </StyledContainer>
    )
}
export default Login;