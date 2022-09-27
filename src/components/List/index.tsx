import { ClipboardText } from 'phosphor-react';
import { useState } from 'react';
import { toDos } from '../Form';
import { ToDo } from '../ToDo';
import { ListContainer, ButtonContainer, ZeroToDosContainer } from './styles';

interface ListProps {
    data: toDos[];
}

export function List({ data }: ListProps) {
    const zeroToDoTasks = Boolean(data.length == 0);

    function handleCompletedToDos() {
        console.log('click');
        //posso fazer o filter no array aqui e mandar filtrado para o toDo
    }

    const [toDoData, setToDoData] = useState<toDos[]>([]);

    return (
        <>
            <ListContainer>
                <ToDo
                    data={data}
                />

                {!zeroToDoTasks &&
                    <ButtonContainer>
                        <button>Todos</button>
                        <button>Ativos</button>
                        <button onClick={handleCompletedToDos}>Completos</button>
                    </ButtonContainer>
                }

            </ListContainer>

            {zeroToDoTasks &&
                <ZeroToDosContainer>
                    <ClipboardText size={32} />
                    <strong>Você ainda não tem tarefas cadastradas</strong>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </ZeroToDosContainer>
            }
        </>
    );
}