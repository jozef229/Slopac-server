exports.up = function(knex, Promise) {


    return knex
        .schema
        .createTable( 'users', function( usersTable ) {
	        // Primary Key
	        usersTable.increments('id');

	        //foreign key

	        // Data
	        usersTable.string('first_name', 100).notNullable();
	        usersTable.string('last_name', 100).notNullable();
	        usersTable.string('email', 250).notNullable().unique();
	        usersTable.string('password', 128).notNullable();
	        usersTable.boolean('state').notNullable().defaultTo( false );
            usersTable.string('guid', 50).notNullable();
	        usersTable.timestamp('version_book').notNullable().defaultTo(knex.raw('now()'));
	        usersTable.timestamp('version_library_card').notNullable().defaultTo(knex.raw('now()'));
            usersTable.boolean( 'is_active_user' ).notNullable().defaultTo( true );
	        usersTable.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
	        usersTable.timestamp('updated_at').notNullable().defaultTo(knex.raw('now()'));
        } )

        .createTable( 'books', function( booksTable ) {
            // Primary Key
            booksTable.increments('id');

            //foreign key
            booksTable.integer('user_id').notNullable().unsigned().references('users.id');

            // Data
            booksTable.string('title', 200);
            booksTable.string('author', 200);
            booksTable.string('isbn', 20);
            booksTable.string('language', 20);
            booksTable.string('publication', 100);
            booksTable.string('publisher', 100);
            booksTable.string('edition', 50);
            booksTable.integer('year');
            booksTable.integer('tags');
            booksTable.text('notes');
            booksTable.text('cover_path');
            booksTable.integer('feedback');
            booksTable.boolean( 'is_active_book' ).notNullable().defaultTo( true );
        	booksTable.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
        	booksTable.timestamp('updated_at').notNullable().defaultTo(knex.raw('now()'));
        } )

        // .createTable( 'userHasBooks', function( userHasBooksTable ) {
        //     // Primary Key
        //     userHasBooksTable.increments('id');

        //     //foreign key
        //     userHasBooksTable.integer('user_id').notNullable().unsigned().references('users.id');
        //     userHasBooksTable.integer('book_id').notNullable().unsigned().references('books.id');

        //     // Data
        //     userHasBooksTable.boolean('state').notNullable().defaultTo( true );
        //     userHasBooksTable.boolean( 'is_active_userHasBook' ).notNullable().defaultTo( true );
        // 	userHasBooksTable.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
        // 	userHasBooksTable.timestamp('updated_at').notNullable().defaultTo(knex.raw('now()'));
        // } )

        .createTable( 'cities', function( citiesTable ) {
            // Primary Key
            citiesTable.increments('id');

            //foreign key

            // Data
            citiesTable.string('city', 200).notNullable();
            citiesTable.decimal('latitude', 12, 6).notNullable();
            citiesTable.decimal('longtitude', 12, 6).notNullable();
            citiesTable.boolean( 'is_active_city' ).notNullable().defaultTo( true );
        	citiesTable.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
        	citiesTable.timestamp('updated_at').notNullable().defaultTo(knex.raw('now()'));
        } )

        .createTable( 'address', function( addressTable ) {
            // Primary Key
            addressTable.increments('id');

            //foreign key
            addressTable.integer('city_id').notNullable().unsigned().references('cities.id');

            // Data
            addressTable.string('address', 200).notNullable();
            addressTable.string('country', 100).notNullable();
            addressTable.string('postal_code', 11).notNullable();
            addressTable.decimal('latitude', 12, 6).notNullable();
            addressTable.decimal('longtitude', 12, 6).notNullable();
            addressTable.boolean( 'is_active_address' ).notNullable().defaultTo( true );
        	addressTable.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
        	addressTable.timestamp('updated_at').notNullable().defaultTo(knex.raw('now()'));
        } )

        .createTable( 'libraries', function( librariesTable ) {
            // Primary Key
            librariesTable.increments('id');

            //foreign key
            librariesTable.integer('address_id').notNullable().unsigned().references('address.id');

            // Data
            librariesTable.string('library_name', 200).notNullable();
            librariesTable.string('library_address', 200).notNullable();
            librariesTable.string('ip_address', 200).notNullable();
            librariesTable.string('port', 10).notNullable();
            librariesTable.string('format', 200).notNullable();
            librariesTable.string('database_name', 200).notNullable();
            librariesTable.boolean( 'is_active_library' ).notNullable().defaultTo( true );
        	librariesTable.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
        	librariesTable.timestamp('updated_at').notNullable().defaultTo(knex.raw('now()'));
        } )

        .createTable( 'libraryCard', function( libraryCardTable ) {
            // Primary Key
            libraryCardTable.increments('id');

            //foreign key
            libraryCardTable.integer('user_id').notNullable().unsigned().references('users.id');
            libraryCardTable.integer('library_id').notNullable().unsigned().references('libraries.id');

            // Data
            libraryCardTable.string('library_name', 200).notNullable();
            libraryCardTable.string('code', 200).notNullable();
	        libraryCardTable.string('password', 128).notNullable();
            libraryCardTable.timestamp('date').notNullable().defaultTo(knex.raw('now()'));
            libraryCardTable.text('picture_path').notNullable();
            libraryCardTable.boolean( 'is_active_libraryCard' ).notNullable().defaultTo( true );
         	libraryCardTable.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
         	libraryCardTable.timestamp('updated_at').notNullable().defaultTo(knex.raw('now()'));
        } )

        .createTable( 'libraryLocations', function( libraryLocationsTable ) {
            // Primary Key
            libraryLocationsTable.increments('id');

            //foreign key
            libraryLocationsTable.integer('address_id').notNullable().unsigned().references('address.id');
            libraryLocationsTable.integer('library_id').notNullable().unsigned().references('libraries.id');

            // Data
            libraryLocationsTable.string('location_name', 200).notNullable();
            libraryLocationsTable.string('location_acronym', 50).notNullable();
            libraryLocationsTable.boolean( 'is_active_libraryLocation' ).notNullable().defaultTo( true );
         	libraryLocationsTable.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
         	libraryLocationsTable.timestamp('updated_at').notNullable().defaultTo(knex.raw('now()'));

        } )

        .createTable( 'librarySublocations', function( librarySublocationsTable ) {
            // Primary Key
            librarySublocationsTable.increments('id');

            //foreign key
            librarySublocationsTable.integer('address_id').notNullable().unsigned().references('address.id');
            librarySublocationsTable.integer('libraryLocation_id').notNullable().unsigned().references('libraryLocations.id');

            // Data
            librarySublocationsTable.string('sublocation_name', 200).notNullable();
            librarySublocationsTable.string('sublocation_acronym', 50).notNullable();
            librarySublocationsTable.boolean( 'is_active_librarySublocation' ).notNullable().defaultTo( true );
         	librarySublocationsTable.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
         	librarySublocationsTable.timestamp('updated_at').notNullable().defaultTo(knex.raw('now()'));

        } )

        .createTable( 'versions', function( versionsTable ) {
            // Primary Key
            versionsTable.increments('id');

            //foreign key

            // Data
            versionsTable.string('vesrion', 10).notNullable();
            versionsTable.timestamp('city_version').notNullable().defaultTo(knex.raw('now()'));
            versionsTable.timestamp('sublocaion_version').notNullable().defaultTo(knex.raw('now()'));
            versionsTable.timestamp('location_version').notNullable().defaultTo(knex.raw('now()'));
            versionsTable.timestamp('library_version').notNullable().defaultTo(knex.raw('now()'));
            versionsTable.timestamp('address_version').notNullable().defaultTo(knex.raw('now()'));
            versionsTable.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
            versionsTable.timestamp('updated_at').notNullable().defaultTo(knex.raw('now()'));

        } );
};





exports.down = function(knex, Promise) {

    // We use `...ifExists` because we're not sure if the table's there. Honestly, this is just a safety measure. 
    return knex
        .schema
            // knex.schema.table('userHasBooks', function(t) {
            //     t.integer('user_id')
            //         .unsigned()
            //         .references('users.id')
            //         .onDelete('cascade');
            //     t.integer('book_id')
            //         .unsigned()
            //         .references('books.id')
            //         .onDelete('cascade');
            // })

            knex.schema.table('books', function(t) {
                t.integer('user_id')
                    .unsigned()
                    .references('users.id')
                    .onDelete('cascade');
            })
            knex.schema.table('address', function(t) {
                t.integer('city_id')
                    .unsigned()
                    .references('cities.id')
                    .onDelete('cascade');
            })
            knex.schema.table('libraries', function(t) {
                t.integer('address_id')
                    .unsigned()
                    .references('address.id')
                    .onDelete('cascade');
            })
            knex.schema.table('libraryCard', function(t) {
                t.integer('user_id')
                    .unsigned()
                    .references('users.id')
                    .onDelete('cascade');
                t.integer('library_id')
                    .unsigned()
                    .references('libraries.id')
                    .onDelete('cascade');
            })
            knex.schema.table('libraryLocations', function(t) {
                t.integer('address_id')
                    .unsigned()
                    .references('address.id')
                    .onDelete('cascade');
                t.integer('library_id')
                    .unsigned()
                    .references('libraries.id')
                    .onDelete('cascade');
            })
            knex.schema.table('librarySublocations', function(t) {
                t.integer('address_id')
                    .unsigned()
                    .references('address.id')
                    .onDelete('cascade');
                t.integer('libraryLocation_id')
                    .unsigned()
                    .references('libraryLocations.id')
                    .onDelete('cascade');
            })

            .dropTableIfExists( 'users' )
            .dropTableIfExists( 'books' )
            // .dropTableIfExists( 'userHasBooks' )
            .dropTableIfExists( 'cities' )
            .dropTableIfExists( 'address' )
            .dropTableIfExists( 'libraries' )
            .dropTableIfExists( 'libraryCard' )
            .dropTableIfExists( 'libraryLocations' )
            .dropTableIfExists( 'librarySublocations' )
            .dropTableIfExists( 'versions' );
};