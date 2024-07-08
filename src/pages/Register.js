import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from "react-redux";
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

    const navigate = useNavigate();

    const [inputs,setInput] = useState({
        userId: "",
        userPw: "",
    });

    const {userId,userPw} = inputs;

    const onChange = (e) => {
        const {value,name} = e.target;
        setInput({
            ...inputs,
            [name]:value,
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        let body = {
            id: userId,
            password: userPw,
          };
          if (!userId || !userPw) {
            alert("필수 항목을 작성하세요!");
          } else {
            // dispatch(loginUser(body))
            //   .then((response) => {
            //     if (response.payload.loginSuccess) {
            //       window.localStorage.setItem('userId', response.payload.userId);
            //       history.push("/board");
            //     } else {
            //       alert(response.payload.message);
            //     }
            //   })
            alert("회원가입 완료!");
          }
    }

    return(
        <StyledContainer>
            <FontAwesomeIcon icon={faChevronLeft} onClick={()=>{
                navigate("/onboarding");
            }}/>
            <StyledBox>
                <RegisterText children="회원가입" fontSize="24px" fontWeight="500" 
                    margin="20px 0px 60px 0px" lineHeight="34px"/>
                    <form onSubmit={onSubmit}>
                        <RegisterText children="닉네임"/>
                        <RegisterBox>
                            <RegisterInput/>
                        </RegisterBox>

                        <RegisterText children="아이디"/>
                        <RegisterBox>
                            <RegisterInput width="136px" onChange={onChange} name="userId" value={userId}/>
                             <RegisterText fontSize="15px" children="@" letterSpacing="0" lineHeight="132%"/>
                             <RegisterSelect/>
                        </RegisterBox>

                        <RegisterText children="비밀번호"/>
                        <RegisterBox>
                            <RegisterInput type="password" onChange={onChange} name="userPw" value={userPw}/>
                        </RegisterBox>
                        <RegisterBox>
                            <RegisterInput type="password"/>
                        </RegisterBox>
                        <RegisterButton children="가입하기" type="submit"/>
                    </form>
            </StyledBox>
    </StyledContainer>
    )
}
export default Register;