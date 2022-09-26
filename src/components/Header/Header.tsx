import { Moon } from "phosphor-react";
import { Form, toDos } from "../Form/Form";

import { HeaderContainer, HeaderWrapper } from "./Header.styles";

interface HeaderProps {
    onNewToDo: (toDos: Array<toDos> | toDos[]) => void;
}

export function Header({onNewToDo}: HeaderProps) {

    function newToDo(toDos: Array<toDos> | toDos[]) {
        onNewToDo(toDos);
    }

    return(
        <HeaderContainer>
            <HeaderWrapper>
                <h1>todo</h1>
                <button>
                    <Moon weight="fill" size={20}/>
                </button>
            </HeaderWrapper>

            <Form 
                onNewToDo={newToDo}
            />
        </HeaderContainer>
    );
}