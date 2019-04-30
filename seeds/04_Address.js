exports.seed = function seed(knex, Promise) {
    const tableName = 'address';
    const rows = [
        // You are free to add as many rows as you feel like in this array.
        // Make sure that they're an object containing the following fields:
        {
            city_id: 1,
            address: 'Tomáša Garrigue Masaryka 20',
            country: 'Slovensko',
            postal_code: '96102',
            latitude: 48.572660,
            longtitude: 19.121180 
        },{
            city_id: 2,
            address: 'Dúbravská cesta 14',
            country: 'Slovensko',
            postal_code: '845 23',
            latitude: 48.170460,
            longtitude: 17.071730 
        },{
            city_id: 2,
            address: 'Dúbravská cesta 9',
            country: 'Slovensko',
            postal_code: '841 04',
            latitude:  48.168300,
            longtitude: 17.073830 
        },{
            city_id: 2,
            address: 'Šancová 56',
            country: 'Slovensko',
            postal_code: '811 05',
            latitude:  48.156650,
            longtitude: 17.114520
        },{
            city_id: 2,
            address: 'Štefánikova 49',
            country: 'Slovensko',
            postal_code: '814 38',
            latitude: 48.154790,
            longtitude: 17.105880
        },
        // {
        //     city_id: 2,
        //     address: 'Dolnozemská cesta 1',
        //     country: 'Slovensko',
        //     postal_code: '852 35',
        //     latitude: 48.127890,
        //     longtitude: 17.131170
        // },
        // {
        //     city_id: 3,
        //     address: 'Námestie 1. Mája 2',
        //     country: 'Slovensko',
        //     postal_code: '903 01',
        //     latitude: 48.220550,
        //     longtitude: 17.399340
        // },
        {
            city_id: 3,
            address: 'Tajovského 40',
            country: 'Slovensko',
            postal_code: '974 01',
            latitude: 48.741840,
            longtitude: 19.122810
        },


        {
            city_id: 2,
            address: 'Zimná 1',
            country: 'Slovensko',
            postal_code: '974 01',
            latitude: 48.163448,
            longtitude: 17.163490
        },
        {
            city_id: 2,
            address: 'Na Úvrati 52',
            country: 'Slovensko',
            postal_code: '974 01',
            latitude: 48.171160,
            longtitude: 17.164100
        },
        {
            city_id: 2,
            address: 'Bachova 7',
            country: 'Slovensko',
            postal_code: '974 01',
            latitude: 48.155690,
            longtitude: 17.169700
        },
        {
            city_id: 2,
            address: 'Tomášiková 25',
            country: 'Slovensko',
            postal_code: '974 01',
            latitude: 48.164100,
            longtitude: 17.151040
        },
        {
            city_id: 2,
            address: 'Miletičova 47',
            country: 'Slovensko',
            postal_code: '974 01',
            latitude: 48.149600,
            longtitude: 17.140930
        }
    ];


    return knex(tableName)
        .del() // Empty the table (DELETE)
        .then(function () {
            return knex.insert(rows).into(tableName);
        });
};





