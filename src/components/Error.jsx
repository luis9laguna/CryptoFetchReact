import styled from 'styled-components'
import { keyframes } from 'styled-components'


const animation = keyframes`
  0% {
   transform: scale(1.1);
  }

  50% {
    transform: scale(1.0)

  }

  100%{
    transform: scale(1.1)
  }
`;

const Text = styled.div`

    background-color: var(--primary);
    color: var(--secondary);
    font-size: 1.5rem;
    margin: 2rem 0 2rem 2rem;
    height: 2rem;
    text-align: center;
    width: 17rem;
    border-radius: 15px;
    animation: ${animation} 2s linear infinite;

`

export default function Error({children}) {
    return (
        <Text>
            {children}
        </Text>
    )
}
