// snack1
function getInitials(fullName) {
    const [name, surname] = fullName.split(' ').filter(str => str !== '');
    return `${name.charAt(0).toUpperCase()}${surname.charAt(0).toUpperCase()}`;
};

// snack2
function createSlug(str) {
    return str.toLowerCase();
};

// snack3
function average(arr) {
    const sum = arr.reduce((acc, curr) => {
        return acc + curr;
    }, 0);

    return sum / arr.length;
}

// snack4
function createSlug2(str) {
    return str.replace(/\s/g, '-');
}

// snack5
function isPalindrome(wrd) {
    const reverseWrd = wrd.split('').reverse().join('');
    return reverseWrd.trim().toLowerCase() === wrd.trim().toLowerCase();
}

// snack6
function createSlug3(title) {
    if (!title) {
        throw new Error('titolo non valido');
    }
}






module.exports = { getInitials, createSlug, average, createSlug2, isPalindrome, createSlug3 };