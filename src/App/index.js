import './App.css';
import Welcome from './WelcomeMessage';
import styled, {css} from 'styled-components';
import AppLayout from './AppLayout';
import AppBar from './AppBar';
const MyButton = styled.div`
  color:green;

  ${props => props.primary && css`
    color: palevioletred;
  `}
`

function App() {
  return (
    <AppLayout >
      <AppBar/>
      <Welcome />
    </AppLayout>
  );
}

export default App;
