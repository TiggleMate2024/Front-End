import React, {useState} from "react";
import axios from "axios";
import moment from "moment";
import Select from "react-select";
import "../components/Style/InputIncome.css";
import { GoChevronLeft } from "react-icons/go";

import income_btn1 from "../assets/images/input/income_btn1.png";
import income_btn2 from "../assets/images/input/income_btn2.png";
import expenditure_btn1 from "../assets/images/input/expenditure_btn1.png";
import expenditure_btn2 from "../assets/images/input/expenditure_btn2.png";
import satisfaction_btn1 from "../assets/images/input/satisfaction_btn1.png";
import satisfaction_btn2 from "../assets/images/input/satisfaction_btn2.png";
import satisfaction_btn3 from "../assets/images/input/satisfaction_btn3.png";
import satisfaction_btn1_1 from "../assets/images/input/satisfaction_btn1-1.png";
import satisfaction_btn2_1 from "../assets/images/input/satisfaction_btn2-1.png";
import satisfaction_btn3_1 from "../assets/images/input/satisfaction_btn3-1.png";
import save_btn1 from "../assets/images/input/save_btn1.png";
import save_btn2 from "../assets/images/input/save_btn2.png";

let categoryOptions = [
    {value: "STORE", label: "편의점, 마트, 잡화"},
    {value: "FOOD", label: "식비"},
    {value: "CAFE", label: "카페"},
    {value: "SHOPPING", label: "쇼핑"},
    {value: "EDUCATION", label: "교육"},
    {value: "HOBBY", label: "취미"},
    {value: "BEAUTY", label: "미용"},
    {value: "ALLOWANCE", label: "용돈"},
];

export default function InputIncome(){
    const [inputDetails, setInputDetails] = useState("");
    const [inputDate, setInputDate] = useState();
    const [inputCost, setInputCost] = useState();
    const [inputMemo, setInputMemo] = useState("");
    const [inputType, setInputType] = useState("");
    const [inputCategory, setInputCategory] = useState("");
    const [inputSatisfaction, setInputSatisfaction] = useState("");
    const [isSaveBtnClick, setIsSaveBtnClick] = useState(false);
    const [isIncomeBtnClick, setIsIncomeBtnClick] = useState(false);
    const [isExpenditureBtnClick, setIsExpenditureBtnClick] = useState(false);
    const [isSatisfactionBtnClick, setIsSatisfactionBtnClick] = useState(false);
    const [isRegretBtnClick, setIsRegretBtnClick] = useState(false);
    const [isHoldBtnClick, setIsHoldBtnClick] = useState(false);

    const onIncomeBtnHandler = (e) => {
        setIsIncomeBtnClick(true);
        setIsExpenditureBtnClick(false);
        setInputType("INCOME");
    }

    const onExpenditureBtnHandler = (e) => {
        setIsIncomeBtnClick(false);
        setIsExpenditureBtnClick(true);
        setInputType("EXPENSE");
    }

    const onSatisfactionBtnHandler = (e) => {
        setIsSatisfactionBtnClick(true);
        setIsRegretBtnClick(false);
        setIsHoldBtnClick(false);
        setInputSatisfaction("SATISFY")
    }

    const onRegretBtnHandler = (e) => {
        setIsSatisfactionBtnClick(false);
        setIsRegretBtnClick(true);
        setIsHoldBtnClick(false);
        setInputSatisfaction("REGRET")
    }

    const onHoldBtnHandler = (e) => {
        setIsSatisfactionBtnClick(false);
        setIsRegretBtnClick(false);
        setIsHoldBtnClick(true);
        setInputSatisfaction("HOLD")
    }

    const checkClick = (e) => {
        e.preventDefault();
        if(!inputDetails){
            return alert("내역을 입력하세요.");
        }
        else if(!inputDate){
            return alert("날짜를 입력하세요.");
        }
        else if(!inputType){
            return alert("수입, 지출 여부를 선택하세요.");
        }
        else if(!inputCost){
            return alert("금액을 입력하세요.");
        }
        else if(!inputSatisfaction){
            return alert("만족도를 선택하세요.");
        }
        else if(!inputMemo){
            return alert("메모를 입력하세요.");
        }
        else{
            setIsSaveBtnClick(!isSaveBtnClick);

            let body = {
                type: inputType,
                category: inputCategory,
                details: inputDetails,
                amount: parseInt(inputCost),
                memo: inputMemo,
                satisfaction: inputSatisfaction,
                createDate: moment(inputDate).format("YYYY-MM-DD")
            }

            console.log(body);

            axios
            .post("http://ec2-13-209-10-242.ap-northeast-2.compute.amazonaws.com:8080/api/account-book/account/create", body)
            .then((response) => {
                console.log(response)
                alert("작성이 완료되었습니다.");
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
        };
    }

    return(
        <div className="input-frame">
            <div className="input-title-frame">
                <div className="input-title">
                <GoChevronLeft size={40} />
                <div className="input-text1">가계부 입력</div>
                </div>
                <div className="input-frame2">
                    <div className="input-text2">내역</div>
                    <input className="input-date" type="inputDetails" value={inputDetails} placeholder="내역을 입력해 주세요" onChange={(e)=>{
                        setInputDetails(e.target.value);
                    }} />
                </div>
                <div className="input-frame2">
                    <div className="input-text2">날짜</div>
                    <input className="input-date" type="inputDate" value={inputDate} placeholder="YYYYMMDD" onChange={(e)=>{
                        setInputDate(e.target.value);
                    }} />
                </div>
                <div className="input-frame2">
                    <div className="input-text2">수입/지출</div>
                    <button className="income-btn" onClick={onIncomeBtnHandler}>
                        {isIncomeBtnClick ? <img src={income_btn2} alt="수입 버튼" /> : <img src={income_btn1} alt="수입 버튼" />}
                    </button>
                    <button className="income-btn" onClick={onExpenditureBtnHandler}>
                        {isExpenditureBtnClick ? <img src={expenditure_btn2} alt="지출 버튼" /> : <img src={expenditure_btn1} alt="지출 버튼" />}
                    </button>
                </div>
                <div className="input-frame3">
                    <div className="input-text2">금액</div>
                    <input className="input-cost" type="inputCost" value={inputCost} placeholder="원" onChange={(e)=>{
                        setInputCost(e.target.value);
                    }} />
                </div>
                <div className="input-frame3">
                    <div className="input-text2">카테고리</div>
                    <Select
                        className="input-category"
                        onChange={(e) => setInputCategory(e.value)}
                        options={categoryOptions}
                        placeholder="유형 선택"
                        value={categoryOptions.filter(function (option) {
                            return option.value === inputCategory;
                        })}
                    />
                    {/* <input className="input-cost" type="inputCost" value={inputCost} placeholder="카테고리 select Box 자리" /> */}
                </div>
                <div className="input-frame3">
                    <div className="input-text2">만족도</div>
                    <div className="input-frame2">
                        <button className="satisfaction-btn" onClick={onSatisfactionBtnHandler}>
                            {isSatisfactionBtnClick ? <img src={satisfaction_btn1_1} alt="만족 버튼" /> : <img src={satisfaction_btn1} alt="만족 버튼" />}
                        </button>
                        <button className="satisfaction-btn" onClick={onRegretBtnHandler}>
                            {isRegretBtnClick ? <img src={satisfaction_btn2_1} alt="후회 버튼" /> : <img src={satisfaction_btn2} alt="후회 버튼" />}
                        </button>
                        <button className="satisfaction-btn" onClick={onHoldBtnHandler}>
                            {isHoldBtnClick ? <img src={satisfaction_btn3_1} alt="참음 버튼" /> : <img src={satisfaction_btn3} alt="참음 버튼" />}
                        </button>
                    </div>
                </div>
                <div className="input-frame3">
                    <div className="input-text2">메모</div>
                    <textarea className="input-memo" type="inputMemo" value={inputMemo} placeholder="메모를 입력해주세요" onChange={(e)=>{
                        setInputMemo(e.target.value);
                    }} />
                </div>
                <div className="input-frame2">
                    <button className="income-save-btn" onClick={checkClick}>
                        {isSaveBtnClick? <img src={save_btn2} alt="저장 버튼" /> : <img src={save_btn1} alt="저장 버튼" />}
                    </button>
                </div>
            </div>
        </div>
    )
}