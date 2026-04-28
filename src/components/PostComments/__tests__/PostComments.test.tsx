import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '..';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    })

    

    test('Dever renderizar os dois comentários', () => {
        render(<PostComment />)

        const campoTexto = screen.getByTestId('textarea')
        const botao = screen.getByTestId('btn-submittest')


        fireEvent.change(campoTexto, {
            target: {
                value: 'Muito legal!'
            }
        })
        fireEvent.click(botao)
        expect(screen.getByText('Muito legal!')).toBeInTheDocument()

        fireEvent.change(campoTexto, {
            target: {
                value: 'Dahora!'
            }
        })
        fireEvent.click(botao)
        expect(screen.getByText('Dahora!')).toBeInTheDocument()

        const comentariosTotais = screen.getAllByTestId('comment')

        expect(comentariosTotais).toHaveLength(2)
    })
});