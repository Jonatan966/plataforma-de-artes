import styled from 'styled-components';

export const Container = styled.label`
    display: flex;
    align-items: center;

    border-radius: 15px;
    box-shadow: 2px 2px 5px black;
    width: 50%;

    padding: 5px;

    margin: 10px;

    >img {
        width: 25px;
        margin: 2.5px;
    }
    > input {
        border: none;
        flex: 1;
        margin: 0 7.5px;
        background: transparent;
        padding: 2.5px;
    }

    @media(max-width: 800px) {
        width: 100%;
        margin: 0;
    }
`;
