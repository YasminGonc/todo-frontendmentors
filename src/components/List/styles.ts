import styled from "styled-components";

export const ListContainer = styled.div`
    width: 90vw;
    margin: -2rem auto;

    background-color: ${props => props.theme.colors["gray-100"]};
    border-radius: 8px;
    overflow: hidden;

    @media screen and (min-width: 768px) {
        width: 70vw;
    }

    @media screen and (min-width: 1024px) {
        width: 40vw;
    }
`
export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;

    padding: 0.5rem;
    
    button {
        background: transparent;
        border: 0;
        font-size: 0.875rem;
        color: ${props => props.theme.colors["gray-500"]};

        &:hover{
            color: ${props => props.theme.colors.blue};
        }
    }
`

