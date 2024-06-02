import { render, screen } from '@testing-library/react'
import { RecoilRoot } from 'recoil'

import { useParticipants } from '../../../hooks/useParticipants'
import ParticipantsList from '..'

jest.mock('../../../hooks/useParticipants', () => {
  return {
    useParticipants: jest.fn(),
  }
})

describe('an empty list of participants', () => {
  beforeEach(() => {
    ;(useParticipants as jest.Mock).mockReturnValue([])
  })
  it('should be rendered without elements', () => {
    render(
      <RecoilRoot>
        <ParticipantsList />
      </RecoilRoot>,
    )
    const participantsList = screen.queryAllByRole('listitem')
    expect(participantsList).toHaveLength(0)
  })
})

describe('a full list of participants', () => {
  beforeEach(() => {
    ;(useParticipants as jest.Mock).mockReturnValue(['Ana', 'Erbert', 'Ed'])
  })
  it('should be rendered with elements', () => {
    render(
      <RecoilRoot>
        <ParticipantsList />
      </RecoilRoot>,
    )
    const participantsList = screen.getAllByRole('listitem')
    expect(participantsList).toHaveLength(3)
  })
})
