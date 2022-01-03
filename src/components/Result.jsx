import { keyframes } from 'styled-components'
import styled from 'styled-components';


const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 3rem;
    align-items: center;

    @media(max-width: 450px){
        margin: 0;
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

const PriceContainer = styled.div`
    display: flex;

    @media(max-width: 450px){
        flex-direction: column;
    }
`

const Price = styled.span`
    color: var(--primary);
    font-size: 2rem;
    margin: 1.5rem 0;
    @media(max-width: 450px){
        margin: 1rem 0;
    }
`
const PriceNumber = styled(Price)`

    color: var(--secondary);
    font-weight: bold;
    text-align: center;

    &::after{
        content: "";
        height: 3px;
        display: block;
        background-color: var(--primary);
        animation: ${animation} 2s linear infinite;
    }
`

const Image = styled.img`
    width: 10rem;
    height: 10rem;
    margin: 2rem 2rem;
`

const ContainerInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media(max-width: 450px){
        flex-direction: column
    }
`

const Text = styled.span`
     color: var(--secondary);
     font-size: 1.3rem;
     display: flex;

    span{
        color: var(--primary);
    }

    @media(max-width: 450px){
        flex-direction: column;
    }
`

export default function Result({resultData}) {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultData

    return (
        <Container>
            <PriceContainer>
                <Price>The actual price is: </Price>
                <PriceNumber>{PRICE}</PriceNumber>
            </PriceContainer>
                <ContainerInfo>
                    <Text>The lowest price of the day: <span>{LOWDAY}</span></Text>
                    <Text>The highest price of the day: <span>{HIGHDAY}</span></Text>
                    <Text>Variation in the last 24 hour: <span>{CHANGEPCT24HOUR}</span></Text>
                    <Text>The last update: <span>{LASTUPDATE}</span></Text>
                    <Image src={`https://cryptocompare.com/${IMAGEURL}`}  />
                </ContainerInfo>
        </Container>
    )
}
