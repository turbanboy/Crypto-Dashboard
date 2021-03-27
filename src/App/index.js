import './App.css';
import Welcome from './WelcomeMessage';
import styled, {css} from 'styled-components';

const MyButton = styled.div`
  color:green;

  ${props => props.primary && css`
    color: palevioletred;
  `}
`

function App() {
  return (
    <div >
      <Welcome />
    </div>
  );
}

export default App;
