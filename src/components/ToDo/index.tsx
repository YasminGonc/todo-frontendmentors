import * as Checkbox from '@radix-ui/react-checkbox';
import { Trash } from 'phosphor-react';

import { CheckboxContainer, CheckboxRoot, TodoContainer, CheckIcon, Button, Label } from './styles';
import { toDos } from '../Form';

interface toDoProps {
    data: toDos[];
    onDeleteToDo: (toDoToDelete: string) => void;
    onHandleDoneToDos: (checked: boolean | 'indeterminate', toDoId: toDos['id'], toDoChecked: toDos['checked']) => void;
}

export function ToDo({ data, onDeleteToDo, onHandleDoneToDos }: toDoProps) {
    return (
        <>
            {data.map((toDo, index) => {
                return (
                    <TodoContainer key={toDo.id} checked={toDo.checked ? true : false}>
                        <CheckboxContainer>
                            <CheckboxRoot checked={toDo.checked} onCheckedChange={(checked) => onHandleDoneToDos(checked, toDo.id, toDo.checked)}>
                                <Checkbox.Indicator id={toDo.id}>
                                    <CheckIcon />
                                </Checkbox.Indicator>
                            </CheckboxRoot>
                            <Label htmlFor={toDo.id} checked={toDo.checked ? true : false}>
                                {toDo.content}
                            </Label>
                        </CheckboxContainer>

                        <Button onClick={() => onDeleteToDo(toDo.id)}>
                            <Trash />
                        </Button>
                    </TodoContainer>
                )
            })}
        </>
    )
}