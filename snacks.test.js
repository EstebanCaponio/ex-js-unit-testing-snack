const { getInitials,
    createSlug,
    average,
    createSlug2,
    isPalindrome,
    createSlug3
} = require('./snacks')

// snack1
test('La funzione getInitials restituisce le iniziali di un nome completo.', () => {
    expect(getInitials('Luigi Verdi')).toBe('LV');
});

// snack2
test('La funzione createSlug restituisce una stringa in lowercase.', () => {
    expect(createSlug('TEST')).toBe('test');
    expect(createSlug('tEsT TeSt2')).toBe('test test2');
});

// snack3
test('La funzione average calcola la media aritmetica di un array di numeri.', () => {
    expect(average([1, 2, 3])).toBe(2);
    expect(average([5, 10, 15])).toBe(10);
});

// snack4
test('La funzione createSlug sostituisce gli spazi con -.', () => {
    expect(createSlug2('ciao a tutti')).toBe('ciao-a-tutti');
    expect(createSlug2('test test test')).toBe('test-test-test');
});

// snack5
test('La funzione isPalindrome verifica se una stringa è un palindromo', () => {
    expect(isPalindrome('radar')).toBeTruthy();
    expect(isPalindrome('Osso ')).toBeTruthy();
    expect(isPalindrome('test')).toBeFalsy();
});

// snack6
test('La funzione createSlug lancia un errore se il titolo è vuoto o non valido.', () => {
    expect(() => createSlug3('')).toThrow('titolo non valido');
    expect(() => createSlug3(null)).toThrow('titolo non valido');
});