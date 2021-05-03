
import styled,{createGlobalStyle} from 'styled-components';


//Style components for everything rendered in calculator , howeve it can be improved more with theaming settings for example
//seperate color settings for each button type , size , position etc.


export const GlobalBodyStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Antonio:wght@100&display=swap');
  body,#container {
    background-color:#000000;
    display:grid;
    grid-template-columns: 100vw;
    grid-template-rows: 100vh;
    padding: 0;
    margin: 0;    
  }
`;



// Main container styled component


//grid layout is used to position the buttons and display panel,this layout is for portrait screen for exampple
const GRID_LAYOUT=`
  "DISPLAY DISPLAY DISPLAY DISPLAY"   
  "BTN_CLEAR BTN_PLUS_MINUS BTN_PERCENT BTN_DIVISION"
  "BTN_NUM7 BTN_NUM8 BTN_NUM9 BTN_MULTIPLY"
  "BTN_NUM4 BTN_NUM5 BTN_NUM6 BTN_MINUS"
  "BTN_NUM1 BTN_NUM2 BTN_NUM3 BTN_PLUS"
  "BTN_NUM0 BTN_NUM0 BTN_DECIMAL BTN_EQUAL"`;


export const CalculatorContainer = styled.div`
min-height:100%;
width:100%;
max-width:40em;
display:grid;
justify-self: center;
font-family: 'Antonio', sans-serif;
  grid-template-rows: auto;
  grid-template-areas: ${GRID_LAYOUT};
` ;


// Styled component for display area


export const DisplayContiner = styled.div`
grid-area: DISPLAY;
color:#a9a9a9;
text-align:right;
min-height:6em;
position:relative;

& >h1 {
  font-family: 'Antonio', sans-serif;
  margin:0;
  padding:0;
  position:absolute;
  left:0;
  right:0;
  top:0;
  bottom:0;  
  font-size:6em;
}
& >i {
  padding:3px;
  font-size:90%;
  float:left;
}`;



// Styled component for buttons


type ButtonContainerProps= {
  position: string
};


export const ButtonContainer = styled.button<ButtonContainerProps>`
background-color:darkgray;
border-radius:100%;
width:8em;
height:8em;
margin:0.75em;
margin-left:0.25em;
margin-right:0.25em;
align-self: center;
justify-self: center;

border:none;
grid-area: ${props => ( props.position)};
position:relative;



& > span{ 
  font-size:3em;
  pointer-events:none;
  top:50%;
  left:0;
  right:0;
  margin-top:-0.5em;
  position:absolute;
}

&.BTN_CLEAR,&.BTN_NUM7,&.BTN_NUM4,&.BTN_NUM1,&.BTN_NUM0 {
  justify-self: left;
 
}

&.BTN_DIVISION,&.BTN_MULTIPLY,&.BTN_MINUS,&.BTN_PLUS,&.BTN_EQUAL {
  justify-self: right;
  background-color:#875f16;
  color:#a9a9a9;
}

&.BTN_NUM1,&.BTN_NUM2,&.BTN_NUM3,
&.BTN_NUM4,&.BTN_NUM5,&.BTN_NUM6,
&.BTN_NUM7,&.BTN_NUM8,&.BTN_NUM9,
&.BTN_NUM0,&.BTN_DECIMAL
 {
  background-color:#2e2d2d;
  color:#a9a9a9;
}


&.BTN_NUM0 {
  width:auto;
  border-radius:4em;
  justify-self: stretch;
  
}

&.BTN_NUM0 >span {
  text-align:left;
  left:1em;
}

@media (min-width: 768px) {
  width:10em;
  height:10em;
  margin:0.65em;

  &.BTN_NUM0 {
    border-radius:6em;    
  }

  & > span{ 
    font-size:4em;
  }
}
`;