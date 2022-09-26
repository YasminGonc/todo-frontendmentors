import { toDos } from '../Form';
import { ToDo } from '../ToDo';
import { ListContainer, ButtonContainer } from './styles';

interface ListProps {
    data: Array<toDos> | toDos[];
}

export function List({ data }: ListProps) {
    const zeroToDoTasks = Boolean(data.length == 0);

    function handleCompletedToDos() {
        console.log('click');
        //posso fazer o filter no array aqui e mandar filtrado para o toDo
    }

    return (
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
    );
}