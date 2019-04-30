exports.seed = function seed(knex, Promise) {
    const tableName = 'libraryLocations';
    const rows = [
        // You are free to add as many rows as you feel like in this array.
        // Make sure that they're an object containing the following fields:
        {
            address_id: 1,
            library_id: 1,
            location_name: 'Slovenská lesnícka a drevárska knižnica pri Technickej univerzite vo Zvolene',
            location_acronym: 'SLDK'
        },
        {
            address_id: 2,
            library_id: 2,
            location_name: 'Botanický ústav',
            location_acronym: 'IBOT'
        },
        {
            address_id: 3,
            library_id: 2,
            location_name: 'Chemický ústav',
            location_acronym: 'CHEM'
        },
        {
            address_id: 4,
            library_id: 2,
            location_name: 'Ekonomický ústav',
            location_acronym: 'EKONOM'
        },
        {
            address_id: 3,
            library_id: 2,
            location_name: 'Elektrotechnický ústav',
            location_acronym: 'ELU'
        },
        // {
        //     address_id: 6,
        //     library_id: 3,
        //     location_name: 'Slovenská ekonomická knižnica Ekonomickej univerzity v Bratislave',
        //     location_acronym: 'SKEKO'
        // },
        // {
        //     address_id: 7,
        //     library_id: 4,
        //     location_name: 'Mestské kultúrne stredisko Senec',
        //     location_acronym: 'MKSE'
        // },
        {
            address_id: 6,
            library_id: 3,
            location_name: 'Univerzitná knižnica Univerzity Mateja Bela v Banskej Bystrici',
            location_acronym: 'UNMBB'
        },
        {
            address_id: 7,
            library_id: 4,
            location_name: 'Knižnica Ružinov Zimná',
            location_acronym: 'KRZ'
        },
        {
            address_id: 8,
            library_id: 4,
            location_name: 'Knižnica Ružinov Na Úvrati',
            location_acronym: 'KRN'
        },
        {
            address_id: 9,
            library_id: 4,
            location_name: 'Knižnica Ružinov Bachova',
            location_acronym: 'KRB'
        },
        {
            address_id: 10,
            library_id: 4,
            location_name: 'Knižnica Ružinov Tomášiková',
            location_acronym: 'KRT'
        },
        {
            address_id: 11,
            library_id: 4,
            location_name: 'Knižnica Ružinov Miletičova',
            location_acronym: 'KRM'
        }
    ];


    return knex(tableName)
        .del() // Empty the table (DELETE)
        .then(function () {
            return knex.insert(rows).into(tableName);
        });
};



