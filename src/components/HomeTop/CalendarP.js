import styled from 'styled-components';

function CalendarP({color,children,price,marginright}){
    const StyledP = styled.div`
        font-size:12px;
        font-family:${(props)=>props.fontFamily || 'var(--font-regular)'};
        letter-spacing:-0.7px;
        margin-left:8px ;
        margin-right:${(props)=>props.marginright};

        color:${(props) => props.color};
    `
    return(
        <>
            <StyledP color="#46484D">총 {children} 금액</StyledP>
            <StyledP color={color} fontFamily="var(--font-semibold)" marginright={marginright}>{price}원</StyledP>
        </>
    )
}
export default CalendarP;