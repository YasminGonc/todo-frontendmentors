import { useRef, useState } from 'react';

import * as Checkbox from '@radix-ui/react-checkbox';
import { Trash } from 'phosphor-react';
import { useDrag, useDrop } from 'react-dnd'

import { CheckboxContainer, CheckboxRoot, TodoContainer, CheckIcon, Button } from './styles';
import { toDos } from '../Form/Form';

interface toDoProps {
    data: Array<toDos> | toDos[];
}

export function ToDo({data}: toDoProps) {
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

    const [toDosT, setToDos] = useState<toDos[]>([
        {
            id: '1',
            content: 'teste 1',
            checked: false
        },
        {
            id: '2',
            content: 'teste 2',
            checked: false
        }
    ]);

    return (
        <>
            {data.map((toDo, index) => {
                return (
                    <TodoContainer ref={ref} key={toDo.id}>
                        <CheckboxContainer>
                            <CheckboxRoot>
                                <Checkbox.Indicator id={toDo.id}>
                                    <CheckIcon />
                                </Checkbox.Indicator>
                            </CheckboxRoot>
                            <label htmlFor={toDo.id}>{toDo.content}</label>
                        </CheckboxContainer>

                        <Button>
                            <Trash />
                        </Button>
                    </TodoContainer>
                )
            })}
        </>
    )
}