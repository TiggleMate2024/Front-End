import React from "react";
import styled from "styled-components";
import ContainerBox from "../Style/ContainerBox";
import FinancialTransBox from "../HomeTop/FinancialTransBox";

import moreBtn from '../../assets/images/moreBtn.png';

function FinancialTrans({financialtrans}){
    const FinancialBar = styled.div`

    `
    const StyledP = styled.p`
        color:${props => props.color || '#46484D'};
        font-size: ${props => props.fontSize || '18px'};
        font-family:${props => props.fontFamily || 'var(--font-bold)'};
        margin:${props => props.margin || '5px 0px'}
    `
    return(
        <>
        <FinancialBar>
            <StyledP>서용이님의</StyledP>
            <StyledP>4월 18일 금융이동</StyledP>

            <StyledP color={'#7E838D'} fontSize={'12px'} fontFamily={'var(--font-medium)'} margin={'15px 0px 35px'}>오늘 30,000원 소비했어요!</StyledP>
        </FinancialBar>

            {
                financialtrans.map((data,index)=>
                {
                    return(
                        <ContainerBox height='70px' display='flex' marginbottom={'0'}
                            backgroundColor={'transparent'} padding={'0'} width={'295px'}>
                            <FinancialTransBox img={data.img} date={data.date} title={data.title} amount={data.amount} />
                        </ContainerBox>
                    )
                }
                )
            }

        <ContainerBox padding={'0'} width={'295px'} margintop={'20px'} textAlign={'center'} display={'flex'}>
            <img src={moreBtn} style={{width:'36px'}}></img>
        </ContainerBox>
    </>
    )
}
export default FinancialTrans;