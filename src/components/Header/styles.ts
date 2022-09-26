import styled from "styled-components";

export const HeaderContainer = styled.header`
    background-color: ${props => props.theme.colors.blue};
    background-image: url(${props => props.theme.colors.backgroundImageMobile});
    background-repeat: no-repeat;
    background-size: cover;

    height: 30vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    @media screen and (min-width: 768px) {
        background-image: url(${props => props.theme.colors.backgroundImageDesktop});
    }

`;

export const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    /* background: red; */
    width: 90vw;
    
    > h1 {
        color: ${props => props.theme.colors["gray-200"]};
        text-transform: uppercase;
        font-size: 1.5rem;
    }

    > button {
        background-color: transparent;
        border: 0;
        color: ${props => props.theme.colors["gray-200"]};
    }

    @media screen and (min-width: 768px) {
        width: 70vw;
    }

    @media screen and (min-width: 1024px) {
        width: 40vw;
    }

`;