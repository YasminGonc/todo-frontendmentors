import { ClipboardText } from 'phosphor-react';
import { useState } from 'react';
import { toDos } from '../Form';
import { ToDo } from '../ToDo';
import { ListContainer, ButtonContainer, ZeroToDosContainer } from './styles';

interface ListProps {
    data: toDos[];
    toDoCompleted: toDos[];
    toDoActive: toDos[];
    onDeleteToDo: (toDoToDelete: string) => void;
    onHandleDoneToDos: (checked: boolean | 'indeterminate', toDoId: toDos['id'], toDoChecked: toDos['checked']) => void;
    onFilterToDosByCompletedOnes: () => void;
    onfilterToDosByActiveOnes: () => void;
}

export function List({ data, toDoCompleted, toDoActive, onDeleteToDo, onHandleDoneToDos, onFilterToDosByCompletedOnes, onfilterToDosByActiveOnes }: ListProps) {
    const zeroToDoTasks = Boolean(data.length == 0);

    const [renderCompletedToDos, setRenderCompletedToDos] = useState(false);

    const [renderActiveToDos, setRenderActiveToDos] = useState(false);

    const [renderAllToDos, setRenderAllToDos] = useState(true);

    function renderTodos(toDo: toDos[]) {
        return (
            <ToDo
                data={toDo}
                onDeleteToDo={onDeleteToDo}
                onHandleDoneToDos={onHandleDoneToDos}
            />
        )
    }

    function showCompletedToDos() {
        onFilterToDosByCompletedOnes();
        setRenderCompletedToDos(true);
        setRenderActiveToDos(false);
        setRenderAllToDos(false);
    }

    function showActiveToDos() {
        onfilterToDosByActiveOnes();
        setRenderCompletedToDos(false);
        setRenderActiveToDos(true);
        setRenderAllToDos(false);
    }

    function showAllToDos() {
        setRenderCompletedToDos(false);
        setRenderActiveToDos(false);
        setRenderAllToDos(true);
    }

    return (
        <>
            <ListContainer>
                {renderAllToDos && renderTodos(data)}
                {renderActiveToDos && renderTodos(toDoActive)}
                {renderCompletedToDos && renderTodos(toDoCompleted)}

                {!zeroToDoTasks &&
                    <ButtonContainer>
                        <button onClick={showAllToDos}>Todos</button>
                        <button onClick={showActiveToDos}>Ativos</button>
                        <button onClick={showCompletedToDos}>Completos</button>
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