import styled from "styled-components";

export const appWrapper = styled.main`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 2em 5em;
    gap: 2em;
`;

export const title = styled.h1`
    font-size: xx-large;
`

export const formWrapper = styled.div`
    background-color: #0d0d0d;
    border-radius: 1rem;
    padding: 2rem;

    form {
        display: flex;
        flex-direction: column;
        align-content: stretch;
        justify-content: space-between;
    }

    input{
        border-radius: 1em;
        margin-bottom: 1rem;
        padding: .5rem 1rem;
        border: none;
    }

    button{
        background-color: #198754;
    }
`;

export const usuarioCard = styled.div`
    background-color: #ccc;
    border-radius: 1rem;
    padding: 1rem;
    margin-bottom: 2em;
    display: grid;
    grid-template-columns: 1fr 1fr;

    p{
        color: #1a1b1c;
        margin: 0;
        padding: 0.5rem 0;
    }
`
