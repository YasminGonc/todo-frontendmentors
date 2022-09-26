import { toDos } from '../Form/Form';
import { ToDo } from '../ToDo';
import { ListContainer, ButtonContainer } from './styles';

interface ListProps {
    data: Array<toDos> | toDos[];
}

export function List({data}: ListProps) {

    return (
        <ListContainer>
            <ToDo 
                data={data}
            
            />
            
            <ButtonContainer>
                <button>Todos</button>
                <button>Ativos</button>
                <button>Completos</button>
            </ButtonContainer>

        </ListContainer>
    );
}