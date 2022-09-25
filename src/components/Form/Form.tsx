import { FormContainer, Input, Button } from './Form.styles'

export function Form() {
    return (
        <FormContainer>
            <Input
                type="text"
                required
                placeholder="Adicione uma nova tarefa"
            />
            <Button type='submit' >
                Criar
                {/* <PlusCircle size={20} /> */}
            </Button>
        </FormContainer>
    );
}