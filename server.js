const Hapi = require('hapi');

const HapiAuthJwt2 = require('hapi-auth-jwt2')
const Inert = require('inert')
const dotenv = require('dotenv').load();
const routes = require('./src/routes');
const Database = require('./src/knex');

 
 
// bring your own validation function
const validate = async function (decoded, request) {
  let email = decoded.email
  return getData = Database( 'users' ).where( {
      email,
    } ).select( 'is_active_user' ).then( ( [ user ] ) => {
      if(user){
        if(user.is_active_user){

          console.log("valid")
          return {isValid: true}

        }
        else{
          console.log("nonvalid")
          return {isValid: false}
        }
      }
      else{
        console.log("nonvalid")
        return {isValid: false}
      } 
    } ).catch( ( err ) => {
      console.log("nonvalid")
      return {isValid: false}
    } );
};

const init = async () => {

  const server = new Hapi.Server({ 
    port: process.env.SERVER_PORT, 
    host: process.env.SERVER_HOST
  });


  // include our module here ↓↓
  await server.register(HapiAuthJwt2);
  await server.register(Inert);
 
  server.auth.strategy('jwt', 'jwt',
  { key: process.env.JWT_SECRET,//'NeverShareYourSecret',          // Never Share your secret key
    validate: validate,            // validate function defined above
    verifyOptions: { algorithms: [ process.env.JWT_ALGORITHM ] } // pick a strong algorithm
  });
  
  server.events.on('response', function (request) {
    // you can use request.log or server.log it's depends
    server.log(request.info.remoteAddress + ': ' + request.method.toUpperCase() + ' ' + request.url.path + ' --> ' + request.response.statusCode);
});

  server.auth.default('jwt'); 
  server.route(routes.routes);
  await server.start();
  return server;
};
 
 
init().then(server => {
  console.log('Server running at:', server.info.uri);
})
.catch(error => {
  console.log(error);
});