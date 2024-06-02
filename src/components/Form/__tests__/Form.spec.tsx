import { act, fireEvent, render, screen } from '@testing-library/react'
import { RecoilRoot } from 'recoil'

import Form from '..'

describe('form tests', () => {
  it('should not create a new participant when the input is empty', () => {
    // Render the form and its dependencies to be tested
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>,
    )
    // Get the form components to be tested
    const input = screen.getByPlaceholderText('Insira o nome dos participantes')
    const button = screen.getByRole('button')
    // Test whether the input is in the document
    expect(input).toBeInTheDocument()
    // Test whether the button is disabled
    expect(button).toBeDisabled()
  })
  it('should create a new participant, clean the input and continue focusing on it', () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>,
    )
    const input = screen.getByPlaceholderText('Insira o nome dos participantes')
    const button = screen.getByRole('button')
    // Insert a name on the input
    fireEvent.change(input, {
      target: {
        value: 'Edimilson',
      },
    })
    // Click on the button 'Adicionar'
    fireEvent.click(button)
    // Test whether the input is focused
    expect(input).toHaveFocus()
    // Test whether the input is clean
    expect(input).toHaveValue('')
  })
  it('should not create a repeated participant', () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>,
    )
    const input = screen.getByPlaceholderText('Insira o nome dos participantes')
    const button = screen.getByRole('button')
    // Insert the same name and click the button, twice times
    fireEvent.change(input, {
      target: {
        value: 'Edimilson',
      },
    })
    fireEvent.click(button)
    fireEvent.change(input, {
      target: {
        value: 'Edimilson',
      },
    })
    fireEvent.click(button)
    // Test whether the error message is displayed
    const alert = screen.getByRole('alert')
    expect(alert).toHaveTextContent('Esse participante já existe!')
  })
  it('the error message should disappear after some time', () => {
    jest.useFakeTimers()
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>,
    )
    const input = screen.getByPlaceholderText('Insira o nome dos participantes')
    const button = screen.getByRole('button')
    fireEvent.change(input, {
      target: {
        value: 'Edimilson',
      },
    })
    fireEvent.click(button)
    fireEvent.change(input, {
      target: {
        value: 'Edimilson',
      },
    })
    fireEvent.click(button)
    let errorMessage = screen.queryByRole('alert')
    expect(errorMessage).toHaveTextContent('Esse participante já existe!')
    // Test whether the errorMessage disappears after some time
    act(() => {
      jest.runAllTimers()
    })
    errorMessage = screen.queryByRole('alert')
    expect(errorMessage).toBeNull()
  })
})
