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

// snack7
const posts = [
    {
        id: 1,
        title: 'Dragonball Z',
        slug: 'dragonball-z'
    },
    {
        id: 2,
        title: 'Demon Slayer',
        slug: 'demon-slayer'
    }, {
        id: 3,
        title: 'Death NOte',
        slug: 'death-note'
    }, {
        id: 4,
        title: 'Sakamoto Days',
        slug: 'sakamoto-days'
    }
];

function findPostById(arr, id) {
    if (isNaN(id)) {
        throw new Error('devi inserire un numero come secondo valore');
    }
    arr.forEach(obj => {
        if (
            obj.id === undefined ||
            obj.title === undefined ||
            obj.slug === undefined
        ) {
            throw new Error('devi inserire l\'array posts');
        }
    })
    return arr.find(obj => obj.id === id);
}






module.exports = { getInitials, createSlug, average, createSlug2, isPalindrome, createSlug3, posts, findPostById };