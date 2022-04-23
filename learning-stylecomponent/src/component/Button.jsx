import styled from 'styled-components';



const Button = styled.button`
background-color : ${(props => props.theme === 'dark' ? '#af1d1d' : '#182ab3')}  
`

export default Button