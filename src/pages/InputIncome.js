import React, {useState} from "react";
import "../components/Style/InputIncome.css";
import { GoChevronLeft } from "react-icons/go";

import income_btn1 from "../assets/images/input/income_btn1.png";
import income_btn2 from "../assets/images/input/income_btn2.png";
import expenditure_btn1 from "../assets/images/input/expenditure_btn1.png";
import expenditure_btn2 from "../assets/images/input/expenditure_btn2.png";
import satisfaction_btn1 from "../assets/images/input/satisfaction_btn1.png";
import satisfaction_btn2 from "../assets/images/input/satisfaction_btn2.png";
import satisfaction_btn3 from "../assets/images/input/satisfaction_btn3.png";
import save_btn1 from "../assets/images/input/save_btn1.png";
import save_btn2 from "../assets/images/input/save_btn2.png";

export default function InputIncome(){
    const [inputDate, setInputDate] = useState();
    const [inputCost, setInputCost] = useState();
    const [inputMemo, setInputMemo] = useState();
    const [isSaveBtnClick, setIsSaveBtnClick] = useState(false);
    const [isIncomeBtnClick, setIsIncomeBtnClick] = useState(false);
    const [isExpenditureBtnClick, setIsExpenditureBtnClick] = useState(false);

    const onSaveBtnHandler = (e) => {
        setIsSaveBtnClick(!isSaveBtnClick);
    }

    const onIncomeBtnHandler = (e) => {
        setIsIncomeBtnClick(true);
        setIsExpenditureBtnClick(false);
    }

    const onExpenditureBtnHandler = (e) => {
        setIsIncomeBtnClick(false);
        setIsExpenditureBtnClick(true);
    }

    return(
        <div className="input-frame">
            <div className="input-title-frame">
                <div className="input-title">
                <GoChevronLeft size={40} />
                <div className="input-text1">가계부 입력</div>
                </div>
                <div className="input-frame2">
                    <div className="input-text2">날짜</div>
                    <input className="input-date" type="inputDate" value={inputDate} placeholder="날짜를 입력해 주세요" onChange={(e)=>{
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
                    <input className="input-cost" type="inputCost" value={inputCost} placeholder="카테고리 select Box 자리" />
                </div>
                <div className="input-frame3">
                    <div className="input-text2">만족도</div>
                    <div className="input-frame2">
                        <button className="satisfaction-btn">
                            <img src={satisfaction_btn1} alt="만족 버튼" />
                        </button>
                        <button className="satisfaction-btn">
                            <img src={satisfaction_btn2} alt="후회 버튼" />
                        </button>
                        <button className="satisfaction-btn">
                            <img src={satisfaction_btn3} alt="참음 버튼" />
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
                    <button className="income-save-btn" onClick={onSaveBtnHandler}>
                        {isSaveBtnClick? <img src={save_btn2} alt="저장 버튼" /> : <img src={save_btn1} alt="저장 버튼" />}
                    </button>
                </div>
            </div>
        </div>
    )
}