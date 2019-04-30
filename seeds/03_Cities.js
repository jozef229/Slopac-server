exports.seed = function seed(knex, Promise) {
    const tableName = 'cities';
    const rows = [
        // You are free to add as many rows as you feel like in this array.
        // Make sure that they're an object containing the following fields:
        
        {
            city: 'Zvolen',
            latitude: '48.575859',
            longtitude: '19.125629'
        },
        {
            city: 'Bratislava',
            latitude: '48.148598',
            longtitude: '17.107748'

        },
        // {
        //     city: 'Senec',
        //     latitude: '48.220910',
        //     longtitude: '17.398710'
        // },
        {
            city: 'Banska Bistrica',
            latitude: '48.736279',
            longtitude: '19.146193'
        }
    ];




    // ,
    // {
    //     city: 'Košice',
    //     latitude: '48.716385',
    //     longtitude: '21.261074'
    // },
    // {
    //     city: 'Prešov',
    //     latitude: '49.001831',
    //     longtitude: '21.239311'
    // },
    // {
    //     city: 'Poprad',
    //     latitude: '49.054001',
    //     longtitude: '20.295059'
    // },
    // {
    //     city: 'Test1-city',
    //     latitude: '47.054001',
    //     longtitude: '20.295059'
    // }


    return knex(tableName)
        .del() // Empty the table (DELETE)
        .then(function () {
            return knex.insert(rows).into(tableName);
        });
};