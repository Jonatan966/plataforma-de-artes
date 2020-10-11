import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

export const ResultsContainer = styled.div`
    flex: 1;
    margin: 25px;
    width: 90%;

    display: flex;

    @media(max-width: 800px) {
        flex-direction: column;
    }
`;

export const ImageContainer = styled.div`
    box-shadow: 2px 2px 5px black;
    border-radius: 25px;

    padding: 0 50px;

    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    @media(max-width: 800px) {
        flex-direction: column;
        padding: 0;
    }
`;