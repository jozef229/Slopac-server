exports.seed = function seed(knex, Promise) {
    const tableName = 'books';
    const rows = [
        // You are free to add as many rows as you feel like in this array.
        // Make sure that they're an object containing the following fields:
        {
            user_id: 3,
            title: 'Title real',
            author: 'Teeranai',
            isbn: '123123',
            notes: 'notes xxx',
            cover_path: 'path cover',
            language: 'Slovak',
            publication: 'publication',
            edition: 'edition',
            publisher: 'publisher',
            tags: 0,
            year: 1993,
            feedback: 1
        },
        {
            user_id: 3,
            title: 'TTT',
            author: 'CCC',
            isbn: '123123',
            notes: 'notes zzz',
            cover_path: 'zzz cover',
            language: 'Slovak',
            publication: 'publication',
            edition: 'edition',
            publisher: 'publisher',
            tags: 0,
            year: 1993,
            feedback: 1
        },
        {
            user_id: 2,
            title: 'Test1-title',
            author: 'Test1-autor',
            isbn: 'Test1-isbn',
            notes: 'test1Notes',
            cover_path: 'Test1',
            language: 'Slovak',
            publication: 'publication',
            edition: 'edition',
            publisher: 'publisher',
            tags: 0,
            year: 1993,
            feedback: 1
        },
        {
            user_id: 2,
            title: 'Test2-title',
            author: 'Test2-autor',
            isbn: 'Test2-isbn',
            notes: 'test2Notes',
            cover_path: 'Test2',
            language: 'Slovak',
            publication: 'publication',
            edition: 'edition',
            publisher: 'publisher',
            tags: 0,
            year: 1993,
            feedback: 1
        }
    ];


    return knex(tableName)
        .del() // Empty the table (DELETE)
        .then(function () {
            return knex.insert(rows).into(tableName);
        });
};