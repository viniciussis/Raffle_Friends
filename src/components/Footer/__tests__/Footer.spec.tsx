import { fireEvent, render, screen } from '@testing-library/react'
import { RecoilRoot } from 'recoil'

import { useParticipants } from '../../../hooks/useParticipants'
import Footer from '..'

jest.mock('../../../hooks/useParticipants', () => {
  return {
    useParticipants: jest.fn(),
  }
})

const mockNavigate = jest.fn()

jest.mock('react-router-dom', () => {
  return {
    useNavigate: () => mockNavigate,
  }
})

describe('when there are not enough participants', () => {
  beforeEach(() => {
    ;(useParticipants as jest.Mock).mockReturnValue([])
  })
  it('should not be able to start the game', () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>,
    )
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
  })
})

describe('when there are enough participants', () => {
  beforeEach(() => {
    ;(useParticipants as jest.Mock).mockReturnValue([
      'Ana',
      'Edimilson',
      'Erbert',
    ])
  })
  it('should be able to start the game', () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>,
    )
    const button = screen.getByRole('button')
    expect(button).not.toBeDisabled()
  })

  it('should the game be started', () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>,
    )
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(mockNavigate).toBeCalledTimes(1)
    expect(mockNavigate).toBeCalledWith('/sorteio')
  })
})
