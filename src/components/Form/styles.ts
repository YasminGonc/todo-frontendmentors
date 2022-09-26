import styled from "styled-components";

export const FormContainer = styled.form`
    width: 90vw;
    /* background: red; */

    display: flex;
    justify-content: space-between;
    gap: 0.5rem;

    @media screen and (min-width: 768px) {
        width: 70vw;
    }

    @media screen and (min-width: 1024px) {
        width: 40vw;
        gap: 1rem;
    }
`;

export const Input = styled.input`
    flex: 1;
    border-radius: 4px;
    background: ${props => props.theme.colors["gray-100"]};
    border: 0;
    padding: 0.5rem;
    font-size: 0.875rem;
`;

export const Button = styled.button`
    border-radius: 4px;
    padding: 0.5rem;
    font-size: 0.875rem;
    border: 0;
    background-image: ${props => props.theme.colors.gradient};
    color: ${props => props.theme.colors["gray-200"]};
    cursor: pointer;
`;