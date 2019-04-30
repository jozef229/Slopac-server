Slopac-server

Author: Jozef Varga
Aplication: Slopac

Start server
-npm i                         //install package
-sudo npm install -g knex     //instal knex console
-knex migrate:latest         //run migrate file
-knex seed:run                 //run entity

Add migration
-knex migrate:make Datastructure

Add entity
-knex seed:make 01_Users

Rollback
-knex migrate:rollback


Debian/Ubuntu
-sudo apt-get install -y libyaz5-dev

Mac
-brew install yaz
