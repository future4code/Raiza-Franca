import styled from 'styled-components'
import Toolbar from '@material-ui/core/Toolbar';

export const StyledToolbar = styled(Toolbar)`
display:flex;
flex-direction:row;
justify-content:space-between;
background-color: ${props => props.primary ? "palevioletred" : "#9b59b6" };;
`