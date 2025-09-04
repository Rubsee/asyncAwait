async function showThirdCharacterFromMovie2() {
    try {
        const movieResponse  = await fetch('https://swapi.dev/api/films/2/')
        const movie = await movieResponse.json()

        const personURL = movie.characters[3].split('//')[1]
        const getPersonProfile = await fetch(`https://${personURL}`)
        const person = await getPersonProfile.json()
        console.log(person.name)
        console.log(person.height)
    } catch (err) {
        console.error('Ошибка:', err)
    }
}

showThirdCharacterFromMovie2()
