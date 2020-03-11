// const calculateAgeInDogYears = (ageOfPerson) => {
//     const ageInDogYears = ageOfPerson / 7
//     console.log(ageInDogYears)
// }

// calculateAgeInDogYears(33)

// const favoriteBreed = (breed) => {
//     if (breed === "meow") {
//         console.log("I like cats")
//     } else {
//         console.log(`my favorite dog breed is ${breed}`)

//     }
// }

// favoriteBreed("german shephard")

// const add = (num1, num2, num3) => {
//     return num1 + num2 + num3
// }

// console.log(add(5, 3, 10))

// const go = (speed, direction) => {
//     if (speed > 85) {
//         console.log(`Holy crap slow down!!!!! You cant go ${speed} miles an hour`)
//     } else {
//         console.log(`The car is going ${direction} at ${speed} miles an hour`)

//     }
// }

// go(90, "backwards")
// const words = [
//     "The", "killing", "complex", "houses",
//     "married", "kittens", "and", "single",
//     "soldiers", "and", "their", "kleptomaniacal",
//     "families"
// ]

// /*
//     Function to filter out `k` words
//     (Google 'javascript startswith' to get started)
//     */
// const filterOutKWords = (wordArray) => {
//     const arrayOfWords = []
//     for (const word of wordArray) {
//         if (word.startsWith('k') === false) {
//             arrayOfWords.push(word)

//         }

//     }
//     return arrayOfWords
// }
// const newArray = filterOutKWords(words)

// const sentence = (newSentence) => {
//     const fullSentence = newSentence.join(' ')
//     return fullSentence
// }
// const finalArray = (sentence(newArray))



// /*
//     Function to build a single string from the array
//     (Google 'javascript combine all items in array' to get started)
//  */


// console.log(finalArray)
/*
    Invoke the filtering function and store its return value
 */


/*
    Invoke the string building function, and pass the
    return value of the previous function as an argument
*/



const catchFish = () => {
    const result = Math.random() * 2
    if (result <= 1) {
        console.log("Sven came up empty handed. :(")
    }
    else {
        console.log("Sven hooked a tuna! :)")
    }
}
catchFish()