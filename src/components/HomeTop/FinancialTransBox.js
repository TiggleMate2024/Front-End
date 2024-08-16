import styled from "styled-components";

function FinancialTransBox({img,title,amount,date}){

    const StyledP = styled.p`
        color:black;
        font-family: ${props => props.fontFamily || 'var(--font-semibold)'};
        color:${props => props.color || '#46484D'};
        margin:5px 0px;
        font-size:${props => props.fontSize || '16px'};
    `
    const StyledDiv = styled.div`
        display:flex;
        justify-content:space-between;
    `
    const StyledBox = styled.div`
        margin-left:15px;
    `

    const integer_value = Number(amount.replace(/[,원]/g, ""));
    const amount_color = integer_value > 0 ? '#7396F3' : '#F36A4C';

    return(
        <StyledDiv>
            <div style={{display:'flex'}}>
                <img src={img} style={{width:'47px', height:'47px'}}></img>
                <StyledBox>
                    <StyledP>{title}</StyledP>
                    <StyledP fontSize='14px' color={amount_color}>{amount}</StyledP>
                </StyledBox>
            </div>
            <div style={{position:'relative', width:'46px'}}>
                <StyledBox>
                    <StyledP fontSize='12px' fontFamily='var(--font-regular)' color='#7E838D'
                        style={{position:'absolute', bottom:'0px', left:'0px'}}>{date}</StyledP>
                </StyledBox>   
            </div>
        </StyledDiv>
    )
}
export default FinancialTransBox