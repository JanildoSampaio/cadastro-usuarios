import styled from "styled-components";

export const Button = styled.button`
    border-radius: 1rem;
    border: 1px solid #ffffff;
    background: #fe7e5d;
    width: 18.75rem;
    padding: 0.625rem;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer; 
    
    &:hover {
        background: #7f3841;
    }

    &:active {
        background: #f2f3f4
    }
`;
