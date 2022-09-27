import { useRef } from 'react';

import * as Checkbox from '@radix-ui/react-checkbox';
import { Trash } from 'phosphor-react';
import { useDrag, useDrop } from 'react-dnd'

import { CheckboxContainer, CheckboxRoot, TodoContainer, CheckIcon, Button, Label } from './styles';
import { toDos } from '../Form';

interface toDoProps {
    data: toDos[];
    onDeleteToDo: (toDoToDelete: string) => void;
    onHandleDoneToDos: (checked: boolean | 'indeterminate', toDoId: toDos['id'], toDoChecked: toDos['checked']) => void;
}

export function ToDo({ data, onDeleteToDo, onHandleDoneToDos }: toDoProps) {
    //funções para o Drag and Drop (colocar ref={ref} no TodoContainer)
    const ref = useRef<HTMLDivElement>(null);

    const [{ isDragging }, dragRef] = useDrag(() => ({
        type: 'TODO',
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }));

    const [, dropRef] = useDrop(() => ({
        accept: 'TODO',
        hover(item, monitor) {
            
        },

    }));

    dragRef(dropRef(ref));

    return (
        <>
            {data.map((toDo, index) => {
                return (
                    <TodoContainer key={toDo.id} ref={ref}>
                        <CheckboxContainer>
                            <CheckboxRoot onCheckedChange={(checked) => onHandleDoneToDos(checked, toDo.id, toDo.checked)}>
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