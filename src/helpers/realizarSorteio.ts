import shuffle from 'just-shuffle'

function realizarSorteio(participants: string[]) {
  const random = shuffle(participants)
  const result = new Map<string, string>()
  for (let index = 0; index < participants.length; index++) {
    const friendIndex = index === participants.length - 1 ? 0 : index + 1
    result.set(random[index], random[friendIndex])
  }
  return result
}

export default realizarSorteio
