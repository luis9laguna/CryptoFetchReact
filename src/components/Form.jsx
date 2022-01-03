import { useState, useEffect } from 'react'
import styled from 'styled-components';
import { currencies } from '../data/data'
import useInput from '../Hooks/useInput'
import Error from './Error'


const Container = styled.div`
    display:flex;
    flex-direction: column;
`

const FormData = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    padding: 2rem;
    background-color: var(--primary);
    
`

const InputSubmit = styled.input`
    border: none;
    margin-top: 3rem; 
    width: 70%;
    height: 3rem;
    border-radius: 3rem;
    background-color: var(--secondary);
    color: var(--primary);
    font-weight: bold;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    &:hover{
        transform: scale(1.05);
    }

`


export default function Form({setData})  {

    const [crypts, setCrypts] = useState([])
    const [error, setError] = useState(false)


    const [ crypt, SelectCurrency ] = useInput('Select your Currency', crypts);
    const [ currency, SelectCrypto ] = useInput('Select your Crypto', currencies);


        useEffect(() => {
            const fetchCrypto = async () =>  {
                const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"
                const response = await fetch(url)
                const result = await response.json()
                
                const arrayResult = result.Data.map(crypt => {
                    const object = {
                        id: crypt.CoinInfo.Name,
                        name: crypt.CoinInfo.FullName
                    }
                    return object
                })

                setCrypts(arrayResult)
            }
            fetchCrypto();
        }, [])

        const handleSubmit = (e) =>{
            e.preventDefault();

            if([crypt, currency].includes('')){
                setError(true)
                return
            }
            setError(false)
            setData({crypt, currency})
        }
        return (
            <Container>

                {error && <Error>All fields are required</Error>}
                <FormData
                onSubmit={handleSubmit}
                href="#data"
                >
                    
                    <SelectCurrency />
                    <SelectCrypto />
                    <InputSubmit
                    type="submit"
                    value="Fetch Data"
                    />
                </FormData>
            </Container>
        )
    

}
