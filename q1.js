function reverse(str) {
    let words = str.split(' ')
    let reverseArray = []
    for(let i in words) {       
        reverseWord = ''
        for(let j=words[i].length-1; j>=0; j--) {
            reverseWord += words[i][j]
        }        
        reverseArray.push(reverseWord)
    }
    return(reverseArray.join(' '))
}

console.log(reverse('abc'))
console.log(reverse("flipped class room is important"))