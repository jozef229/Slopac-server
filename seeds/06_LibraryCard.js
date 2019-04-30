exports.seed = function seed(knex, Promise) {
    const tableName = 'libraryCard';
    const rows = [
        // You are free to add as many rows as you feel like in this array.
        // Make sure that they're an object containing the following fields:
        {
            user_id: 3,
            library_id: 1,
            library_name: 'library 1',
            code: '123123',
            picture_path: 'password',
            password: 'heslo',
        },
        {
            user_id: 3,
            library_id: 2,
            library_name: 'library 2',
            code: '123443',
            picture_path: 'password',
            password: 'heslo',
        },
        {
            user_id: 3,
            library_id: 3,
            library_name: 'library 3',
            code: '123123',
            picture_path: 'password',
            password: 'heslo',
        },
        {
            user_id: 4,
            library_id: 1,
            library_name: 'library 4',
            code: '5123123',
            picture_path: 'password',
            password: 'heslo',
        },
        {
            user_id: 4,
            library_id: 2,
            library_name: 'library 5',
            code: '6123123',
            picture_path: 'password',
            password: 'heslo',
        }
    ];


    return knex(tableName)
        .del() // Empty the table (DELETE)
        .then(function () {
            return knex.insert(rows).into(tableName);
        });
};


