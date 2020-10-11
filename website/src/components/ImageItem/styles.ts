import styled from 'styled-components';

export const Container = styled.div`
    border-radius: 25px;
    position: relative;
    margin: 10px;

    > img {
        border-radius: 25px;
    }
    > label {
        position: absolute;
        z-index: 1;
        bottom: 7.5px;
        left: 0;
        width: 100%;

        padding: 10px;

        display: flex;
        justify-content: space-between;

        > button {
            font-size: 20px;
            background: transparent;
            border: none;
            cursor: pointer;

            display: flex;
            align-items: center;
            justify-content: center;

            > img {
                width: 45px;
            }
        }
    }
`;
