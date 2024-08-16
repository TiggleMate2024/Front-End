import React,{useState} from "react";
import styled from "styled-components";
import '../Style/Radio.css';
import miniArrow from '../../assets/images/miniArrow.png';

function Satisfaction({satisRadio}){
    const [radioType,setRadioType] = useState('satisfaction');

    const RadioCheck = (type) => {
        setRadioType(type)
    }

    const RadioBar = styled.div`
        width:295px; height:44px;
        background-color:#F9F9F9;
        display:flex; 
        border-radius:8px;
    `
    const RadioPBox = styled.div`
        background-color:${props => props.backgroundColor || 'white'};
        width:143px; height:38px;
        font-family:var(--font-bold);
        border-radius:8px;
        margin:auto;
    `
    const RadioP = styled.p`
        display:flex; justify-content:center;
        align-items:center;
        font-size:14px;
        margin:10px;
        color:${props => props.color || '#46484D'}
    `
    const StyledP = styled.p`
       margin:0;
       color:#7E838D;
       font-family:var(--font-medium);
       font-size:14px;
    `
    const StyledGraph = styled.div `
        padding:10px 0px;
    ` 
    const GraphBox = styled.div`
        margin:5px 0px;
        display:flex; justify-content:space-between;
    `
    const GraphGauge = styled.div`
        background-color: ${props => props.backgroundColor || '#FFCD4E'};
        height:60px; width:${props => props.width || '151px'};
        border-radius:8px;
        margin:auto 0px;
    `
    const GraphP = styled.p`
        color: ${props => props.color || 'white'};
        font-size:14px; font-family:var(--font-bold);
        display:block;
        padding:10px; margin:10px;
    `
    const ConsumBox = styled.div`
        color:#46484D;
        font-family:var(--font-bold);
        font-size:18px;
    `
    const ConsumPBox = styled.div`
        display:flex; justify-content:space-between;
        align-items:center;
    `
    const ConsumDiv = styled.div`
        margin:10px;
    `
    console.log(satisRadio);
    return(
        <>
            <RadioBar>
                <RadioPBox>
                    <RadioP>만족도별</RadioP>
                </RadioPBox>
                <RadioPBox backgroundColor={'transparent'}>
                    <RadioP color={'#CDCED6'}>카테고리별</RadioP>
                </RadioPBox>
            </RadioBar>

            <StyledGraph>
                {
                    satisRadio.map((data,index) => {
                        return(
                        <GraphBox>
                            <GraphGauge backgroundColor={data.boxColor} width={data.boxWidth}>
                                <GraphP color={data.pColor}>{data.graph}</GraphP>
                            </GraphGauge>
                            <ConsumDiv>
                                <ConsumPBox>
                                    <StyledP>{data.consumP}</StyledP>
                                    <img src={miniArrow} style={{width:'6px', height:'10px', textAlign:'center', padding:'10px'}}></img>
                                </ConsumPBox>
                                <ConsumBox>{data.amount}</ConsumBox>
                            </ConsumDiv>
                        </GraphBox>
                        )
                    })
                }
            </StyledGraph>
        </>
    )
}
export default Satisfaction