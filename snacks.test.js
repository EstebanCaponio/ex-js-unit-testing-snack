const { getInitials, createSlug, average, createSlug2 } = require('./snacks')

// snack1
test('La funzione getInitials restituisce le iniziali di un nome completo.', () => {
    expect(getInitials('Luigi Verdi')).toBe('LV');
});

// snack2
test('La funzione createSlug restituisce una stringa in lowercase.', () => {
    expect(createSlug('TEST')).toBe('test');
    expect(createSlug('TEST TEST2')).toBe('test test2');
});

// snack3
test('La funzione average calcola la media aritmetica di un array di numeri.', () => {
    expect(average([1, 2, 3])).toBe(2);
    expect(average([5, 10, 15])).toBe(10);
});

// snack3
test('La funzione createSlug sostituisce gli spazi con -.', () => {
    expect(createSlug2('ciao a tutti')).toBe('ciao-a-tutti');
    expect(createSlug2('test test test')).toBe('test-test-test');
});