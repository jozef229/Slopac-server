exports.seed = function seed(knex, Promise) {
    const tableName = 'users';
    const rows = [
        // You are free to add as many rows as you feel like in this array.
        // Make sure that they're an object containing the following fields:
        {
            first_name: 'Jozef',
            last_name: 'Varga',
            email: 'jofy@me.com',
            password: 'password',
            guid: 'f03ede7c-b121-4112-bcc7-130a3e87988c'
        },
        {
            first_name: 'Miriama',
            last_name: 'Sabova',
            email: 'mima@me.com',
            password: 'password',
            guid: '4c8d84f1-9e41-4e78-a254-0a5680cd19d5'
        },
        {
            first_name: 'Test1-first',
            last_name: 'Test1-last',
            email: 'Test1@Test1.com',
            password: 'Test1Test1',
            guid: '4c8d84f3-9e41-4e78-a254-0a5680cd19d5'
        },
        {
            first_name: 'Test2-first',
            last_name: 'Test2-last',
            email: 'Test2@Test2.com',
            password: 'Test2Test2',
            guid: '4c2d84f3-9e41-4e78-a254-0a5680cd19d5'
        }
    ];


    return knex(tableName)
        .del() // Empty the table (DELETE)
        .then(function () {
            return knex.insert(rows).into(tableName);
        });
};