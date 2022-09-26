import { Check } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FormContainer, Input, Button } from './Form.styles'

export interface toDos {
    id: string;
    content: string;
    checked: boolean;
}

interface FormProps {
    onNewToDo: (toDos: Array<toDos> | toDos[]) => void;
}

export function Form({ onNewToDo }: FormProps) {
    const [toDos, setToDos] = useState([
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

    const [newToDos, setNewToDos] = useState('');
    
    function handleNewToDoChange(event: ChangeEvent<HTMLInputElement>) {
        setNewToDos(event.target.value);
    }

    function handleNewToDo(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setToDos([...toDos,
            {
                id: uuidv4(),
                content: newToDos,
                checked: false
            }
        ]);
        setNewToDos('');
        onNewToDo(toDos);
    }

    //console.log(`newState é ${newToDos}`);
    console.log(`todos é ${toDos}`);


    return (
        <FormContainer onSubmit={handleNewToDo}>
            <Input
                type="text"
                required
                placeholder="Adicione uma nova tarefa"
                onChange={handleNewToDoChange}
                value={newToDos}
            />
            <Button type='submit'>
                Criar
                {/* <PlusCircle size={20} /> */}
            </Button>
        </FormContainer>
    );
}