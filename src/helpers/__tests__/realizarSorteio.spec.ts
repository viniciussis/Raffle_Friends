import realizarSorteio from '../realizarSorteio'

describe('given a secret santa drawing', () => {
  it('should not be possible to draw your own name', () => {
    const participants = ['Ana', 'João', 'Juan', 'Colin', 'Guiller', 'Bob']
    const sorteio = realizarSorteio(participants)
    participants.forEach((participant) => {
      const secretFriend = sorteio.get(participant)
      expect(secretFriend).not.toEqual(participant)
    })
  })
})
