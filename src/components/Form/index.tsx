import { ChangeEvent, FormEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FormContainer, Input, Button } from './styles'

export interface toDos {
    id: string;
    content: string;
    checked: boolean;
}

interface FormProps {
    onNewToDo: (toDos: toDos) => void;
}

export function Form({ onNewToDo }: FormProps) {

    const [newToDos, setNewToDos] = useState('');

    function handleNewToDoChange(event: ChangeEvent<HTMLInputElement>) {
        setNewToDos(event.target.value);
    }

    function handleNewToDo(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        onNewToDo({
                id: uuidv4(),
                content: newToDos,
                checked: false
        });
        setNewToDos('');
    }

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
            </Button>
        </FormContainer>
    );
}