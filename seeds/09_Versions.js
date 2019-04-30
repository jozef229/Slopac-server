exports.seed = function seed(knex, Promise) {
    const tableName = 'versions';
    const rows = [
        // You are free to add as many rows as you feel like in this array.
        // Make sure that they're an object containing the following fields:
        {
            vesrion: 'Slopac',
        },
        
    ];

    return knex(tableName)
        .del() // Empty the table (DELETE)
        .then(function () {
            return knex.insert(rows).into(tableName);
        });
};
