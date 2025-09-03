const { getInitials,
    createSlug,
    average,
    createSlug2,
    isPalindrome,
    createSlug3,
    findPostById,
    addPost,
    removePost,
    createSlug4
} = require('./snacks');



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
});



let posts;

beforeEach(() => {
    posts = [
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
});

afterEach(() => {
    posts = [];
});



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

    // snack8 bonus
    test('Dopo aver aggiunto un post con la funzione addPost, l\'array posts deve contenere un elemento in più.', () => {
        addPost(posts, { id: 5, title: 'One Piece', slug: 'one-piece' })
        expect(posts).toHaveLength(5);
    });

    test('Dopo aver rimosso un post con la funzione removePost, l\'array posts deve contenere un elemento in meno.', () => {
        removePost(posts, 3)
        expect(posts).toHaveLength(3);
    });

    // snack9 bonus
    test('Se si tenta di aggiungere un post con un id o uno slug già esistente, la funzione addPost deve lanciare un errore.', () => {
        expect(() => addPost(posts, { id: 3, title: 'One Piece', slug: 'one-piece' })).toThrow('id già esistente');
        expect(() => addPost(posts, { id: 5, title: 'One Piece', slug: 'dragonball-z' })).toThrow('slug già esistente');
    });
});



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

    // snack10 bonus
    test('Se viene passato un array di post come secondo argomento, la funzione createSlug incrementa di 1 se lo slug esiste già.', () => {
        expect(createSlug4('dragonball-z', posts)).toBe('dragonball-z-1');
    });
});