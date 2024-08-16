import { text } from "@fortawesome/fontawesome-svg-core";
import styled from "styled-components";

function ContainerBox({height,children,padding,margintop,marginbottom, borderRadius,backgroundColor,width,margin,textAlign}){
    const StyledBox = styled.div`
        background-color:${props => props.backgroundColor || '#FFFFFF'};
        width:${props => props.width || '335px'};
        height:${(props) => props.height};
        border-radius:${props => props.borderRadius || '16px'};

        margin:${props => props.margin || 'margin'};
        margin-bottom:${props => props.marginbottom || '10px'};
        margin-top:${props => props.margintop};
        padding:${(props)=> props.padding || '10px 20px'};
        box-sizing:border-box;
        position:${(props) => props.position};
        display:${props => props.display};
        
        text-align:${props => props.textAlign};
    `
    return(
        <StyledBox height={height} padding={padding} margintop={margintop} 
            marginbottom={marginbottom} borderRadius={borderRadius} 
            backgroundColor={backgroundColor} width={width} margin={margin} textAlign={textAlign}>{children}</StyledBox>
    )
}
export default ContainerBox;