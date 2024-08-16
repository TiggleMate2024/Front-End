import React from "react";
import styled from "styled-components";
import GraphDot from '../../assets/images/GraphDot.png';
import BarChartBox from '../AccountBook/BarChartBox';
import { Bar } from "react-chartjs-2";

function DailyConsumGraph(){

    const date =['1일','2일','3일','4일','5일','6일','7일','8일'];
    const GraphBack = styled.div`
        background-image : url(${GraphDot});
        width:335px; height:257px;
        background-size:295px 180px;
        background-repeat:no-repeat;

        overflow:hidden;
    `
    const StyledDiv = styled.div`
        display:flex; justify-content:space-between;
    `
    const StyledP = styled.p`
        font-size:14px; font-family:var(--font-medium);
        color:#7E838D;
    `
    return(
        <GraphBack>
            <BarChartBox></BarChartBox>
            <StyledDiv> 
                {
                    date.map((data,index) => {
                        return(
                            <StyledP>{data}</StyledP>
                        )
                    })
                }
            </StyledDiv>
        </GraphBack>
    )
}
export default DailyConsumGraph