import { render, screen } from '@testing-library/react'
import React from 'react';

import Main from '.'

describe('<Main />', () =>{
    it('shold render the heading', () =>{
        //renderiza o component
        const { container } = render(<Main />)

        //busca o elemento e verifica sua existência
        expect(screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
    })
})