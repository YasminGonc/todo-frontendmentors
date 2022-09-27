import { Moon } from "phosphor-react";
import { Form, toDos } from "../Form";

import { HeaderContainer, HeaderWrapper } from "./styles";

interface HeaderProps {
    onNewToDo: (toDos: toDos) => void;
    onToggleTheme: () => void;
}

export function Header({ onNewToDo, onToggleTheme }: HeaderProps) {

    function newToDo(toDos: toDos) {
        onNewToDo(toDos);
    }

    return(
        <HeaderContainer>
            <HeaderWrapper>
                <h1>todo</h1>
                <button onClick={onToggleTheme} />
            </HeaderWrapper>

            <Form 
                onNewToDo={newToDo}
            />
        </HeaderContainer>
    );
}