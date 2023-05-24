import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    background: none;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.34);
    border-radius: 30px;
`;

export const InputBox = styled.input`
    color: #4c4c4c;

    width: 295px;
    height: 40px;
    margin-right: -50px;
    border: none;
    font-size: 1.2rem;

    background: white;
    padding: 5px 25px;
    border-radius: 30px 30px 30px 30px;
    &:focus {
        outline: none !important;
        border-color: #78ebc7;
        box-shadow: 0 0 10px #78ebc7;
    }
`;

export const Button = styled.button`
    width: 45px;
    height: 45px;

    font-size: 30px;

    background: white;

    border: none;

    color: #20c997;
    border-radius: 0 30px 30px 0;
    /* box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.34); */

    cursor: pointer;
`;
