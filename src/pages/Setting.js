import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Radio } from "../components/RadioButton/Radio";
import { RadioGroup } from '../components/RadioButton/RadioGroup';
import "../components/Style/SettingStyles.css";
import setting_image from "../assets/images/setting_image.png"

export default function Setting(){
    const [targetAmount, setTargetAmount] = useState();

    const checkClick = (e) => {
        axios
        .post("http://ec2-13-209-10-242.ap-northeast-2.compute.amazonaws.com:8080/api/account-book/account/create", {
            targetAmount: targetAmount,
        })
        .then((response) => {
            console.log(targetAmount)
            
            if(response.status === 200){
                alert("완료");
            }
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
    }

    return(
        <div className="setting-frame">
            <div className="setting-title-text">목표 소비 금액 설정하기</div>
            <img className="setting-img" src={setting_image} alt="setting_image" />
            <div className="setting-text-frame">
                <div className="setting-text1">이달의 목표 소비 금액은?!</div>
                <div className="setting-text2">
                    아래 소비 금액을 선택해주세요.
                    <br />
                    나중에 다시 설정에서 다시 수정할 수 있어요.
                </div>
            </div>
            <form>
                <RadioGroup label="목표 소비 금액" value={targetAmount} onChange={setTargetAmount}>
                    <button className="setting-radio-btn" type="button" onClick={()=>{setTargetAmount(100000)}}>
                    <Radio name="targetAmount" value={100000}>100,000원</Radio>
                    </button>
                    <br />
                    <button className="setting-radio-btn" type="button" onClick={()=>{setTargetAmount(200000)}}>
                    <Radio name="targetAmount" value={200000}>200,000원</Radio>
                    </button>
                    <br />
                    <button className="setting-radio-btn" type="button" onClick={()=>{setTargetAmount(300000)}}>
                    <Radio name="targetAmount" value={300000}>300,000원</Radio>
                    </button>
                    <br />
                    <button className="setting-radio-btn" type="button" onClick={()=>{setTargetAmount(400000)}}>
                    <Radio name="targetAmount" value={400000}>400,000원</Radio>
                    </button>
                    <br />
                    <button className="setting-radio-btn" type="button" onClick={()=>{setTargetAmount(500000)}}>
                    <Radio name="targetAmount" value={500000}>500,000원</Radio>
                    </button>
                    <br />
                    <button className="setting-radio-btn" type="button" onClick={()=>{setTargetAmount(600000)}}>
                    <Radio name="targetAmount" value={600000}>600,000원</Radio>
                    </button>
                    <br />
                    <button className="setting-radio-btn" type="button" onClick={()=>{setTargetAmount(700000)}}>
                    <Radio name="targetAmount" value={700000}>700,000원</Radio>
                    </button>
                    <br />
                    <button className="setting-radio-btn" type="button" onClick={()=>{setTargetAmount(800000)}}>
                    <Radio name="targetAmount" value={800000}>800,000원</Radio>
                    </button>
                    <br />
                    <button className="setting-radio-btn" type="button" onClick={()=>{setTargetAmount(900000)}}>
                    <Radio name="targetAmount" value={900000}>900,000원</Radio>
                    </button>
                    <br />
                    <button className="setting-radio-btn" type="button" onClick={()=>{setTargetAmount(1000000)}}>
                    <Radio name="targetAmount" value={1000000}>1,000,000원</Radio>
                    </button>
                </RadioGroup>
            </form>
            <div className="setting-btn-frame">
                <button type="submit" className="setting-btn" onClick={checkClick}>완료</button>
            </div>
        </div>
    )
}