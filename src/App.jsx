import { keyframes } from 'styled-components'
import styled from 'styled-components'
import Form from './components/Form'
import Result from './components/Result'
import { useState, useEffect } from "react"

const Container = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

`

const ContainerTitle = styled.div`
  display: flex;

  @media(max-width: 800px){
    flex-direction: column;
  }
`

const Title = styled.h1`
  text-align: center;
  color: var(--primary);
  margin-top: 2rem;
  letter-spacing: 2px;
  margin-bottom: 2rem;
  font-weight: light;

  @media(max-width: 800px){
    flex-direction: column;
    margin: 0px
  }
`

const animation = keyframes`
  0% {
   width: 0%
  }

  50% {
    width: 100%;
  }

  100%{
    width: 0%;
  }
`;


const Span = styled(Title)`


  color: var(--secondary);
  margin-left: .5rem;

  &::after{
    content: "";
    height: 3px;
    display: block;
    background-color: var(--primary);
    animation: ${animation} 2s linear infinite;

    @media(max-width: 800px){
      display: none;
    }
  }


  @media(max-width: 800px){
    margin: 0;
    margin-bottom: 2rem
  }

`

const ContainerData = styled.div`
  display: flex;
  
  @media(max-width: 800px){
    flex-direction: column;
  }

`

function App() {

  const [data, setData] = useState({})
  const [ resultData, setResultData ] = useState({})
  const [ loading, setLoading ] = useState(false)

  useEffect(() => {
    
    const GetDataCrypt = async() =>{

      setLoading(true)
      const {crypt, currency} = data
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypt}&tsyms=${currency}`

      const response = await fetch(url)
      const result = await response.json()

      setResultData(result.DISPLAY[crypt][currency]);
      setLoading(false)
    }

    GetDataCrypt()

  }, [data])
  
  return (
    <Container>
      <ContainerTitle>
        <Title>Check Cryptocurrencies With Your Local</Title> <Span>Currency</Span>
      </ContainerTitle>
      <ContainerData>
        <Form setData={setData}/>
        {resultData.PRICE && <Result resultData={resultData}/>}
      </ContainerData>
    </Container>
  )
}

export default App
