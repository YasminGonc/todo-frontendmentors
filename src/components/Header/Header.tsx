import { Moon } from "phosphor-react";
import { Form } from "../Form/Form";

import { HeaderContainer, HeaderWrapper } from "./Header.styles";

export function Header() {
    return(
        <HeaderContainer>
            <HeaderWrapper>
                <h1>todo</h1>
                <button>
                    <Moon weight="fill" size={20}/>
                </button>
            </HeaderWrapper>

            <Form />
        </HeaderContainer>
    );
}