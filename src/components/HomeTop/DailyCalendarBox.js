import styled from 'styled-components';
import PieChart from './PieChart';

function DailyCalendarBox({day,date,gauge}){
//     const TodayBox = styled.div`
//     background-color: ${props => '#FFEEC3'};
//     width: 47px;
//     height: 74px;
//     border-radius: 8px;
//     box-sizing: border-box;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
// `;
    const StyledBox = styled.div`
        width:30px; height:54px;
        box-sizing:border-box;
        position:relative;

    `
    const StyledP = styled.p`
        margin:5px;
        font-size:12px;
        font-family:var(--font-medium);
        text-align:center;
        color:#7E838D;
    `
    const DateP = styled.p`
        position:absolute;
        bottom:8px; left:8px;
        margin:0px;
        color:#46484D;
        font-family:var(--font-semibold);
        font-size:12px;
    `
    return(
            <StyledBox>
                <StyledP>{day}</StyledP>
                <PieChart rest={gauge[0]} consumed={gauge[1]}/>
                <DateP>{date}</DateP>
            </StyledBox>
    )
}
export default DailyCalendarBox;