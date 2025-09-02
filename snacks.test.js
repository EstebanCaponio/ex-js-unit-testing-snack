const { getInitials,
    createSlug,
    average,
    createSlug2,
    isPalindrome,
    createSlug3,
    posts,
    findPostById
} = require('./snacks')


describe('manipolazione di stringhe', () => {
    // snack1
    test('La funzione getInitials restituisce le iniziali di un nome completo.', () => {
        expect(getInitials('Luigi Verdi')).toBe('LV');
    });

    // snack5
    test('La funzione isPalindrome verifica se una stringa è un palindromo', () => {
        expect(isPalindrome('radar')).toBeTruthy();
        expect(isPalindrome('Osso ')).toBeTruthy();
        expect(isPalindrome('test')).toBeFalsy();
    });
})

describe('manipolazione sugli array', () => {
    // snack3
    test('La funzione average calcola la media aritmetica di un array di numeri.', () => {
        expect(average([1, 2, 3])).toBe(2);
        expect(average([5, 10, 15])).toBe(10);
    });

    // snack7
    test('La funzione findPostById restituisce il post corretto dato l’array di post e l’id', () => {
        expect(findPostById(posts, 1)).toEqual({
            id: 1,
            title: 'Dragonball Z',
            slug: 'dragonball-z'
        });
        expect(() => findPostById(posts, 'ex')).toThrow('devi inserire un numero come secondo valore');
        expect(() => findPostById([5, 7, 12], '4')).toThrow('devi inserire l\'array posts');
    });
})

describe('generazione di slug', () => {
    // snack2
    test('La funzione createSlug restituisce una stringa in lowercase.', () => {
        expect(createSlug('TEST')).toBe('test');
        expect(createSlug('tEsT TeSt2')).toBe('test test2');
    });

    // snack4
    test('La funzione createSlug sostituisce gli spazi con -.', () => {
        expect(createSlug2('ciao a tutti')).toBe('ciao-a-tutti');
        expect(createSlug2('test test test')).toBe('test-test-test');
    });

    // snack6
    test('La funzione createSlug lancia un errore se il titolo è vuoto o non valido.', () => {
        expect(() => createSlug3('')).toThrow('titolo non valido');
        expect(() => createSlug3(null)).toThrow('titolo non valido');
    });
})