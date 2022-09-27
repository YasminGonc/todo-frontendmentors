import styled, { css } from "styled-components";
import * as Checkbox from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';

export const TodoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0.5rem;
    border-bottom: 1px solid ${props => props.theme.colors["gray-200"]};

    background-color: ${props => props.theme.colors["gray-100"]};
    color: ${props => props.theme.colors["gray-500"]};
    font-size: 0.875rem;

    cursor: grab;
`
interface LabelProps {
    checked: boolean;
}

export const Label = styled.label<LabelProps>`
    text-decoration: ${props => props.checked ? 'line-through' : 'none'};
`
export const CheckboxContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`
export const CheckboxRoot = styled(Checkbox.Root)`
    width: 1rem;
    height: 1rem;

    background-image: ${props => props.theme.colors.gradient};
    border: 0;
    border-radius: 50%;
`
export const CheckIcon = styled(Check)`
    color: ${props => props.theme.colors["gray-100"]};
`
export const Button = styled.button`
    background: transparent;
    border: 0;
    color: ${props => props.theme.colors["gray-500"]};
    cursor: pointer;

    &:hover {
        color: ${props => props.theme.colors.purple};
    }
`