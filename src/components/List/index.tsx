import { ClipboardText } from 'phosphor-react';
import { toDos } from '../Form';
import { ToDo } from '../ToDo';
import { ListContainer, ButtonContainer, ZeroToDosContainer } from './styles';

interface ListProps {
    data: toDos[];
    onDeleteToDo: (toDoToDelete: string) => void;
    onHandleDoneToDos: (checked: boolean | 'indeterminate', toDoId: toDos['id'], toDoChecked: toDos['checked']) => void;
    onFilterToDosByCompletedOnes: () => void;
    onfilterToDosByActiveOnes: () => void;
}

export function List({ data, onDeleteToDo, onHandleDoneToDos, onFilterToDosByCompletedOnes, onfilterToDosByActiveOnes }: ListProps) {
    const zeroToDoTasks = Boolean(data.length == 0);

    return (
        <>
            <ListContainer>
                <ToDo
                    data={data}
                    onDeleteToDo={onDeleteToDo}
                    onHandleDoneToDos={onHandleDoneToDos}
                />

                {!zeroToDoTasks &&
                    <ButtonContainer>
                        <button onClick={() => data}>Todos</button>
                        <button onClick={onfilterToDosByActiveOnes}>Ativos</button>
                        <button onClick={onFilterToDosByCompletedOnes}>Completos</button>
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