import { useRef, useState } from 'react';

import * as Checkbox from '@radix-ui/react-checkbox';
import { Trash } from 'phosphor-react';
import { useDrag, useDrop } from 'react-dnd'

import { CheckboxContainer, CheckboxRoot, TodoContainer, CheckIcon, Button } from './styles';
import { toDos } from '../Form';

interface toDoProps {
    data: Array<toDos> | toDos[];
}

export function ToDo({data}: toDoProps) {
    // funções para o Drag and Drop (colocar ref={ref} no TodoContainer)
    // const ref = useRef<HTMLDivElement>(null);

    // const [{ isDragging }, dragRef] = useDrag(() => ({
    //     type: 'TODO',
    //     collect: (monitor) => ({
    //         isDragging: monitor.isDragging(),
    //     }),
    // }));

    // const [, dropRef] = useDrop(() => ({
    //     accept: 'TODO',
    //     hover(item, monitor) {
            
    //     },

    // }));

    // dragRef(dropRef(ref));

    const [toDoData, setToDoData] = useState<toDos[]>([]);

    //useState(data) --> isso dá loop de renderização

    function handleDoneToDos(checked: boolean | 'indeterminate', toDoId: toDos['id'], toDoChecked: toDos['checked']) {
        if(checked) {
            const doneToDos = data.map(toDo => {return toDo.id == toDoId ? {...toDo, checked: !toDo.checked} : {...toDo, checked: toDo.checked}});

            setToDoData(doneToDos);
        }
    }

    return (
        <>
            {data.map((toDo, index) => {
                return (
                    <TodoContainer key={toDo.id}>
                        <CheckboxContainer>
                            <CheckboxRoot onCheckedChange={(checked) => handleDoneToDos(checked, toDo.id, toDo.checked)}>
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