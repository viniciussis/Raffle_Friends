import { fireEvent, render, screen } from '@testing-library/react'
import { RecoilRoot } from 'recoil'
import { act } from 'react-dom/test-utils'

import { useParticipants } from '../../../hooks/useParticipants'
import { useResult } from '../../../hooks/useResult'
import Sorteio from '..'

jest.mock('../../../hooks/useParticipants', () => ({
  useParticipants: jest.fn(),
}))
jest.mock('../../../hooks/useResult', () => ({
  useResult: jest.fn(),
}))

describe('a secret santa draw page', () => {
  const participants = ['John', 'Chris', 'Thomas', 'Linda', 'Zelda']
  const result = new Map([
    ['John', 'Chris'],
    ['Chris', 'Thomas'],
    ['Linda', 'Zelda'],
    ['Zelda', 'John'],
    ['Thomas', 'Linda'],
  ])

  beforeEach(() => {
    ;(useParticipants as jest.Mock).mockReturnValue(participants)
    ;(useResult as jest.Mock).mockReturnValue(result)
  })

  it("should be able to see all participants' draw", () => {
    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>,
    )
    const options = screen.queryAllByRole('option')
    expect(options).toHaveLength(participants.length + 1)
  })

  it('should be shown when the button is clicked', () => {
    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>,
    )
    const select = screen.getByPlaceholderText('Selecione seu nome...')
    fireEvent.change(select, {
      target: {
        value: participants[0],
      },
    })
    const button = screen.getByRole('button')
    fireEvent.click(button)
    const secretFriend = screen.getByRole('alert')
    expect(secretFriend).toBeInTheDocument()
  })

  it('should disappear after a few seconds', () => {
    jest.useFakeTimers()
    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>,
    )
    const select = screen.getByPlaceholderText('Selecione seu nome...')
    fireEvent.change(select, {
      target: {
        value: participants[0],
      },
    })
    const button = screen.getByRole('button')
    fireEvent.click(button)
    let secretFriend = screen.queryByRole('alert')
    expect(secretFriend).toBeInTheDocument()
    act(() => {
      jest.runAllTimers()
    })
    secretFriend = screen.queryByRole('alert')
    expect(secretFriend).toBeNull()
    jest.clearAllTimers()
  })
})
