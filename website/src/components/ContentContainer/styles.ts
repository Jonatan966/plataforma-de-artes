import styled from 'styled-components';

export const Container = styled.div`
    background: white;
    margin: 5px;
    padding: 2.5px;

    border-radius: 15px;
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: center;

    @media(min-width: 800px) {
        margin: 5px 20px 20px 20px;
    }
`;
