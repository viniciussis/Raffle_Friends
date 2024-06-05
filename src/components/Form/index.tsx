import { useRef, useState } from 'react'

import { useAddParticipant } from '../../hooks/useAddParticipant'
import { useErrorMessage } from '../../hooks/useErrorMessage'
import './Form.scss'

const Form = () => {
  const [name, setName] = useState('')
  const addParticipant = useAddParticipant()
  const errorMessage = useErrorMessage()
  const inputRef = useRef<HTMLInputElement>(null)

  function createParticipant(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    addParticipant(name)
    setName('')
    inputRef.current?.focus()
  }

  return (
    <form onSubmit={createParticipant}>
      <div className="formGroup">
        <input
          name='Participante'
          value={name}
          placeholder="Insira o nome dos participantes"
          onChange={(e) => setName(e.target.value)}
          type="text"
          ref={inputRef}
        />
        <button disabled={!name ? true : false} type="submit">
          Adicionar
        </button>
      </div>
      {errorMessage && <p className='alert error' role="alert">{errorMessage}</p>}
    </form>
  )
}

export default Form
