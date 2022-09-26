import { ChangeEvent, FormEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FormContainer, Input, Button } from './styles'

export interface toDos {
    id: string;
    content: string;
    checked: boolean;
}

interface FormProps {
    onNewToDo: (toDos: Array<toDos> | toDos[]) => void;
}

export function Form({ onNewToDo }: FormProps) {
    const [toDos, setToDos] = useState<toDos[]>([]);

    onNewToDo(toDos); //quando coloco esse código aparece o alerta de que não é possível atualizar o App enquanto outro componente é renderizado. Se eu tirar esse código tenho problemas na renderização do dado na tela, ele aparece com um "delay"

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