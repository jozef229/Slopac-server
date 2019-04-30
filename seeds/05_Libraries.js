exports.seed = function seed(knex, Promise) {
    const tableName = 'libraries';
    const rows = [
        // You are free to add as many rows as you feel like in this array.
        // Make sure that they're an object containing the following fields:
        {
          address_id: 1,
          library_name: 'Slovenská lesnícka a drevárska knižnica pri Technickej univerzite vo Zvolene',
          ip_address: 'arl1.library.sk',
          port: '8887',
          format: 'UNIMARC',
          database_name: 'sldk_un_cat',
          library_address: 'https://www.library.sk/arl-sldk/sk/',
        },{
          address_id: 5,
          library_name: 'Slovenská akadémia vied',
          ip_address: 'arl1.library.sk',
          port: '8887',
          format: 'UNIMARC',
          database_name: 'sav_un_cat',
          library_address: 'https://www.library.sk/arl-sav/sk/',
        },
        // {
        //   address_id: 6,
        //   library_name: 'Slovenská ekonomická knižnica Ekonomickej univerzity v Bratislave',
        //   ip_address: 'sekarl.euba.sk',
        //   port: '8888',
        //   format: 'UNIMARC',
        //   database_name: 'eu_un_cat',
        // },
        // {
        //   address_id: 7,
        //   library_name: 'Mestské kultúrne stredisko Senec - Mestská knižnica',
        //   ip_address: 'arl4.library.sk',
        //   port: '8886',
        //   format: 'UNIMARC',
        //   database_name: 'sen_un_cat',
        // },
        {
          address_id: 6,
          library_name: 'Univerzitná knižnica Univerzity Mateja Bela v Banskej Bystrici',
          ip_address: 'arl1.library.sk',
          port: '8887',
          format: 'UNIMARC',
          database_name: 'umb_un_cat',
          library_address: 'https://www.library.sk/arl-umb/sk/',
        }, 
        {
          address_id: 7,
          library_name: 'Knižnica Ružinov',
          ip_address: 'arl1.library.sk',
          port: '8887',
          format: 'UNIMARC',
          database_name: 'ruz_un_cat',
          library_address: 'https://www.library.sk/arl-ruz/sk/',
        }
    ];
    return knex(tableName)
        .del() // Empty the table (DELETE)
        .then(function () {
            return knex.insert(rows).into(tableName);
        });
};


