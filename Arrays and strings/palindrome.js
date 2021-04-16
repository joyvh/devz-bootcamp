function palindrome(phrase) {
    const cleanPhrase = phrase.toLowerCase()
        .replace(/[\W\s]/g, '')
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

    for (let i = 0; i <= cleanPhrase.length / 2; i++) {
        if (cleanPhrase[i] !== cleanPhrase[cleanPhrase.length - i - 1]) {
            return false;
        }
    }
    return true;
}

let result = palindrome("La ruta, nos aportó: otro paso natural");
console.log(result);