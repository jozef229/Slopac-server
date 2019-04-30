exports.seed = function seed(knex, Promise) {
    const tableName = 'librarySublocations';
    const rows = [
        // You are free to add as many rows as you feel like in this array.
        // Make sure that they're an object containing the following fields:
        // {
        //     address_id: 1,
        //     libraryLocation_id: 1,
        //     sublocation_name: 'Z1-sub',
        //     sublocation_acronym: 'Z1-sub'
        // },
        // {
        //     address_id: 2,
        //     libraryLocation_id: 2,
        //     sublocation_name: 'Z2-sub',
        //     sublocation_acronym: 'Z2-sub'
        // },
        // {
        //     address_id: 2,
        //     libraryLocation_id: 1,
        //     sublocation_name: 'Z3-sub',
        //     sublocation_acronym: 'Z3-sub'
        // },
        // {
        //     address_id: 3,
        //     libraryLocation_id: 2,
        //     sublocation_name: 'Z4-sub',
        //     sublocation_acronym: 'Z4-sub'
        // },
        // {
        //     address_id: 3,
        //     libraryLocation_id: 1,
        //     sublocation_name: 'Z5-sub',
        //     sublocation_acronym: 'Z5-sub'
        // }
    ];


    return knex(tableName)
        .del() // Empty the table (DELETE)
        .then(function () {
            return knex.insert(rows).into(tableName);
        });
};




