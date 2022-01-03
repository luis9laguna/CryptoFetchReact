import { useState } from "react"
import styled from 'styled-components';


const Container = styled.div`
    margin-top: 1.5rem;
`

const Label = styled.label`
    color: var(--secondary);
    font-size: 2rem;

    &::after{
        content: "";
        height: 3px;
        width: 100%;
        display: block;
        border-radius: 5px;
        background-color: var(--secondary);
        margin-bottom: .5rem;
    }

    @media(max-width: 450px){
        font-size: 1.5rem;
  }
`

const Select = styled.select`
    border: none;
    width: 100%;
    border-radius: 8rem;
    height: 2.5rem;
    font-size: 1rem;
    text-align: center;
    color: var(--primary);

`


export default function useInput(label, dataOptions) {

    const [state, setstate] = useState('');
    

    const SelectCurrency = () => (
        <Container>
            <Label>{label}</Label>
            <Select
                value={state}
                onChange={e => setstate(e.target.value)}
            >
                <option value="" >Select</option>
                {dataOptions.map(option => (
                    <option
                        key={option.id}
                        value={option.id}
                    >
                        {option.name}
                    </option>
                ))}

            </Select>
            
        
        </Container>
    )

    return [ state, SelectCurrency]
}
