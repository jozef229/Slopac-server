const Database = require('./knex');
const jwt = require('jsonwebtoken');
const uuidv1 = require('uuid/v1');
const fs = require("fs");
const mkdirp = require('mkdirp');
const searchBook = require('./searchBooks');
require('dotenv').load();


module.exports.routes = [

  

  {
    path: '/test',
    method: 'GET',
    options: {
      auth: false,
    },
    handler: async (req, h) => {
      return "test"
    }
  },
  




  {
    path: '/xxx',
    method: 'POST',
    options: {
      auth: false,
      payload: {
        maxBytes: 209715200,
        output: 'stream'
      }
    },
    handler: async (req, h) => {
      const { payload } = req
      console.log(payload)
      console.log("//////////////////////")
      console.log(payload.firstName)
      console.log(payload.filename)
      console.log(payload.hapi)
      var filenameDatabase = ""
      const filename = uuidv1() + '.jpeg';
      filenameDatabase = filename
        const guid = payload.guid
        const data = payload.file._data
        
      return  new Promise((resolve, reject) => {
          mkdirp(`./file/${guid}`, function (err) {
            if (err) console.error(err)
            else {
              fs.writeFile(`./file/4c8d84f3-9e41-4e78-a254-0a5680cd19d5/${filename}`, data, err => {
                if (err) {
                  reject(err)
                }
                resolve({
                  imageName: `${filename}`,
                  // versionTime: datetime
                })
              })
            }
          });
        })




    }
  },


{
    path: '/zzz',
    method: 'POST',
    options: {
      auth: false,
    },
    handler: async (req, h) => {
      const { payload } = req
      console.log(payload)
      if(payload.aa){
        console.log("aa")
      }
      if(payload.bb === "undefined"){
        console.log("baab")
      }
      if(payload.cc){
        console.log("cc")
      }
      if(payload.dd){
        console.log("dd")
      }
      return "jea"

    }
  },

  {
    path: '/availabilityBook',
    method: 'POST',
    options: {
      auth: false,
    },
    handler: async (req, h) => {
      const { payload } = req
      console.log(payload)


      let locationAcronym = ""
      let sublocationAcronym = ""
      let available = 0
      let lent = 0
      let presence = 0
      var jsonInformation = ""

      var obj = new Object();
      var obj2 = new Object();
      var obj3 = new Object();
      var obj4 = new Object();
      var obj5 = new Object();
      

      // if(payload.libraryId && payload.bookId){
        //magic co by som mal nejako dostat na dostupnost knihy

        // locationAcronym = "XX1"
        // sublocationAcronym = "XX1"
        // available = 2
        // lent = 3
        // presence = 1

        var jsonInformation
        var cars
        if(payload.libraryId == 1){
          obj.locationAcronym = "SLDK";
          obj.sublocationAcronym  = "";
          obj.lent = 4;
          obj.presence = 2;
          obj.available = 3; 
          cars = [obj];
          jsonInformation = { availableBooks: cars }
        }
        else if(payload.libraryId == 2){
          obj.locationAcronym = "IBOT";
          obj.sublocationAcronym  = "";
          obj.lent = 1;
          obj.presence = 8;
          obj.available = 9;
          obj2.locationAcronym = "CHEM";
          obj2.sublocationAcronym  = "";
          obj2.lent = 2;
          obj2.presence = 1;
          obj2.available = 11;
          obj3.locationAcronym = "EKONOM";
          obj3.sublocationAcronym  = "";
          obj3.lent = 1;
          obj3.presence = 4;
          obj3.available = 3;
          obj4.locationAcronym = "ELU";
          obj4.sublocationAcronym  = "";
          obj4.lent = 0;
          obj4.presence = 0;
          obj4.available = 2;

          cars = [obj, obj2, obj3, obj4];
          jsonInformation = { availableBooks: cars }
        }
        // else if(payload.libraryId == 3){
        //   obj.locationAcronym = "SKEKO";
        //   obj.sublocationAcronym  = "";
        //   obj.lent = 0;
        //   obj.presence = 2;
        //   obj.available = 3; 
        //   cars = [obj];
        //   jsonInformation = { availableBooks: cars }
        // }
        // else if(payload.libraryId == 4){
        //   obj.locationAcronym = "MKSE";
        //   obj.sublocationAcronym  = "";
        //   obj.lent = 4;
        //   obj.presence = 0;
        //   obj.available = 3; 
        //   cars = [obj];
        //   jsonInformation = { availableBooks: cars }
        // }
        else if(payload.libraryId == 3){
          obj.locationAcronym = "UNMBB";
          obj.sublocationAcronym  = "";
          obj.lent = 3;
          obj.presence = 2;
          obj.available = 1; 
          cars = [obj];
          jsonInformation = { availableBooks: cars }
        }
        else {
          obj.locationAcronym = "KRZ";
          obj.sublocationAcronym  = "";
          obj.lent = 1;
          obj.presence = 3;
          obj.available = 5;
          obj2.locationAcronym = "KRN";
          obj2.sublocationAcronym  = "";
          obj2.lent = 1;
          obj2.presence = 1;
          obj2.available = 1;
          obj3.locationAcronym = "KRB";
          obj3.sublocationAcronym  = "";
          obj3.lent = 2;
          obj3.presence = 2;
          obj3.available = 2;
          obj4.locationAcronym = "KRT";
          obj4.sublocationAcronym  = "";
          obj4.lent = 2;
          obj4.presence = 3;
          obj4.available = 3;
          obj5.locationAcronym = "KRM";
          obj5.sublocationAcronym  = "";
          obj5.lent = 4;
          obj5.presence = 1;
          obj5.available = 4;

          cars = [obj, obj2, obj3, obj4, obj5];
          jsonInformation = { availableBooks: cars }
        }
        
        


        

      // }


      
      return JSON.stringify(jsonInformation);
    }
  },


//   {
//     path: '/availabilityBook',
//     method: 'POST',
//     options: {
//       auth: false,
//     },
//     handler: async (req, h) => {
//       const { payload } = req
//       console.log(payload)


//       let locationAcronym = ""
//       let sublocationAcronym = ""
//       let available = 0
//       let lent = 0
//       let presence = 0
//       // var jsonInformation = ""

//       var obj = new Object();
      

//       // if(payload.libraryId && payload.bookId){
//         //magic co by som mal nejako dostat na dostupnost knihy
//         locationAcronym = "XX1"
//         sublocationAcronym = "XX1"
//         available = 2
//         lent = 3
//         presence = 1

//         // obj.locationAcronym = "XX2";
//         // obj.sublocationAcronym  = Z2-sub;
//         // obj.lent = 1;
//         // obj.presence = 8;
//         // obj.available = false;
//         // var jsonInformation= JSON.stringify(obj)


//         var jsonInformation = `{"availableBooks":[
//   {
//     "locationAcronym": "XX2",
//     "sublocationAcronym": "Z2-sub",
//     "lent": 1,
//     "presence": 8,
//     "available": 9
//   },
//   {
//     "locationAcronym": "XX1",
//     "sublocationAcronym": "Z1-sub",
//     "lent": 4,
//     "presence": 2,
//     "available": 3
    
//   }
// ]}`;

//       // }


      
//       return JSON.stringify(jsonInformation);
//     }
//   },








  //  routes:
  // /searchBooks
  // /deleteBook
  // /deleteLibraryCard
  // /versions
  // /versionsAndUser
  // /picture
  // /uploadFile
  // /versionsDataAndUser
  // /versionsData
  // /login_user
  // /create_user

  {
    path: '/searchBooks',
    method: 'POST',
    options: {
      auth: false,
    },
    handler: async (req, h) => {
      // @or @or  @attr 1=7 @attr 5=1 8088848628 @attr 1=1003 @attr 5=1 "Barbora Drugdová" @attr 1=4 @attr 5=1 krtko
      console.log(req);
      
      const { payload } = req
      let queryAuthor = ""
      let queryTitle = ""
      let queryIsbn = ""
      let count = 0
      let query = "" 
      console.log("a je to tu");
      
      //9788022205627
      if(payload.author != "" && payload.author){
        queryAuthor = "@attr 1=1003 @attr 5=1 \"" + payload.author + "\" "
        count += 1 
      }
      if(payload.title != "" && payload.title){
        queryTitle = "@attr 1=4 @attr 5=1 \"" + payload.title + "\" "
        count += 1
      }
      // if(payload.isbn != "" && payload.isbn){
      //   queryIsbn = "@attr 1=7 @attr 5=1 \"" + payload.isbn + "\" "
      //   count += 1
      // }
      if(payload.isbn != "" && payload.isbn){
        queryIsbn = "@attr 1=7 @attr 5=1 \"" + payload.isbn + "\" "
        count += 1
      }

      
      if(count == 0){
        return "error"
      }
      switch (count) {
        case 1:
          query = ""
          break;
        case 2:
          query = "@and "
          break;
        case 3:
          query = "@and @and "
          break;
        default:
          return "error" 
      }
      
      return getData = Database( 'libraries' )
      .where( {
        id: payload.library,
        is_active_library: true
      } )
      .select( 'ip_address', 'port', 'format', 'database_name', 'library_address')
      .then( ( results ) => {
        if( !results || results.length === 0 ) {
          return( {
            error: true,
            errMessage: 'no public versions found',
          } );
        } 
        const serverLibrary={Url: results[0].ip_address , Port: results[0].port , Database: results[0].database_name , Syntax: results[0].format };
        return searchBook(serverLibrary, query + queryAuthor + queryIsbn + queryTitle, payload.from, payload.count);
      } )
      .catch( ( err ) => {
        return( 'server-side error' );
      } ); 
    }
  },


  {
    path: '/deleteBook',
    method: 'POST',
    config: { auth: 'jwt' },
    handler: ( request, reply ) => {
      const { payload } = request
      console.log("delete NEW")
      let currentdate = new Date(); 
      let month = (currentdate.getMonth()+1)
      let date = currentdate.getDate()
      let hours = currentdate.getHours()
      let minutes = currentdate.getMinutes()
      let secounds = currentdate.getSeconds()
      let milliseconds =currentdate.getMilliseconds()
      if (month < 10) { month = "0" + month }
      if (date < 10) { date = "0" + date }
      if (hours < 10) { hours = "0" + hours }
      if (minutes < 10) { minutes = "0" + minutes }
      if (secounds < 10) { secounds = "0" + secounds }
      if (milliseconds < 100) { 
        if (milliseconds < 10) { milliseconds = "00" + milliseconds }
        else { milliseconds = "0" + milliseconds }
      }
      var datetime = currentdate.getFullYear() + "-"
                + month + "-" 
                + date + "T"  
                + hours + ":"  
                + minutes + ":" 
                + secounds + "."
                + milliseconds + "Z";
      console.log(datetime)
      const promises = [];
      var promise1
      var promise2
      console.log("id a userid")
      console.log(payload.id)
      console.log(payload.user_id)

      if(payload.id && payload.user_id){
        promise1 = Database( 'books' )
          .where( {
            id: payload.id,
            user_id: payload.user_id
          } )
          .del()
          .catch( ( err ) => {
            return( 'server-side error' );
          } )

        promise2 = Database( 'users' )
          .where( {
            id: payload.user_id
          } )
          .update({ version_library_card: datetime })
          .then( ( results ) => {
            return( {
              data: results,
              versionTime: datetime
            } );
          } )
          .catch( ( err ) => {
            return( 'server-side error' );
          } )
      }
      else{
        promise1 = Promise.resolve()
        promise2 = Promise.resolve()
      }
      return Promise.all([promise1, promise2]).then(data => {
        var json={"libraryCard":data[0], "userUpdate":data[1]};
        JSON.stringify(json);
        return json;
      }).catch( ( err ) => {
        return( 'server-side error' );
      } )

    }
  },

  {
    path: '/deleteLibraryCard',
    method: 'POST',
    config: { auth: 'jwt' },
    handler: ( request, reply ) => {
      const { payload } = request
      console.log("delete NEW")
      let currentdate = new Date(); 
      let month = (currentdate.getMonth()+1)
      let date = currentdate.getDate()
      let hours = currentdate.getHours()
      let minutes = currentdate.getMinutes()
      let secounds = currentdate.getSeconds()
      let milliseconds =currentdate.getMilliseconds()
      if (month < 10) { month = "0" + month }
      if (date < 10) { date = "0" + date }
      if (hours < 10) { hours = "0" + hours }
      if (minutes < 10) { minutes = "0" + minutes }
      if (secounds < 10) { secounds = "0" + secounds }
      if (milliseconds < 100) { 
        if (milliseconds < 10) { milliseconds = "00" + milliseconds }
        else { milliseconds = "0" + milliseconds }
      }
      var datetime = currentdate.getFullYear() + "-"
                + month + "-" 
                + date + "T"  
                + hours + ":"  
                + minutes + ":" 
                + secounds + "."
                + milliseconds + "Z";
      console.log(datetime)
      const promises = [];
      var promise1
      var promise2
      console.log("id a userid")
      console.log(payload.id)
      console.log(payload.user_id)

      if(payload.id && payload.user_id){
        promise1 = Database( 'libraryCard' )
          .where( {
            id: payload.id,
            user_id: payload.user_id
          } )
          .del()
          .catch( ( err ) => {
            return( 'server-side error' );
          } )

        promise2 = Database( 'users' )
          .where( {
            id: payload.user_id
          } )
          .update({ version_library_card: datetime })
          .then( ( results ) => {
            return( {
              data: results,
              versionTime: datetime
            } );
          } )
          .catch( ( err ) => {
            return( 'server-side error' );
          } )
      }
      else{
        promise1 = Promise.resolve()
        promise2 = Promise.resolve()
      }
      return Promise.all([promise1, promise2]).then(data => {
        var json={"libraryCard":data[0], "userUpdate":data[1]};
        JSON.stringify(json);
        return json;
      }).catch( ( err ) => {
        return( 'server-side error' );
      } )

    }
  },

  {
    path: '/versions',
    method: 'GET',
    config: { auth: false },
    handler: ( request, reply ) => {
      return getData = Database( 'versions' )
      .where( {
        vesrion: 'Slopac'
      } )
      .select( 'id', 'city_version', 'sublocaion_version', 'location_version', 'library_version', 'address_version' )
      .then( ( results ) => {
        if( !results || results.length === 0 ) {
          return( {
            error: true,
            errMessage: 'no public versions found',
          } );
        }
        return( {
          dataCount: results.length,
          data: results,
        } );
      } )
      .catch( ( err ) => {
        return( 'server-side error' );
      } );
    }
  },

  {
    path: '/versionsAndUser',
    method: 'POST',
    config: { auth: 'jwt' },
    handler: ( request, reply ) => {
      const promises = [];
      var promise1
      var promise2

      if(request.payload.id){
        promise1 = Database( 'versions' )
          .where( {
            vesrion: 'Slopac'
          } )
          .select( 'id', 'city_version', 'sublocaion_version', 'location_version', 'library_version', 'address_version' )
          .then( ( results ) => {
            if( !results || results.length === 0 ) {
              return( {
                error: true,
                errMessage: 'no public versions found',
              } );
            }
            return( {
              dataCount: results.length,
              data: results,
            } );
          } )
          .catch( ( err ) => {
            return( 'server-side error' );
          } )

        promise2 = Database( 'users' )
          .where( {
            id: request.payload.id
          } )
          .select( 'version_book', 'version_library_card' )
          .then( ( results ) => {
            if( !results || results.length === 0 ) {
              return( {
                error: true,
                errMessage: 'no public versions found',
              } );
            }
            return( {
              dataCount: results.length,
              data: results,
            } );
          } )
          .catch( ( err ) => {
            return( 'server-side error' );
          } )
      }
      else{
        promise1 = Promise.resolve()
        promise2 = Promise.resolve()
      }

      return Promise.all([promise1, promise2]).then(data => {
        var json={"version":data[0], "user_version":data[1]};
        JSON.stringify(json);
        return json;
      }).catch( ( err ) => {
        return( 'server-side error' );
      } )
    }
  },
  
  {
    path: '/picture/{guid}/{file}',
    method: 'GET',
    config: { auth: false },
    handler: ( request, reply ) => {
      console.log("je to na spravnom mieste")
      // console.log(equest.params);
      if(request.params.guid && request.params.file){
        return reply.file('./file/' + request.params.guid + '/' + request.params.file);
      }
      return "false"
    }
  },






  {
    path: '/picture2',
    method: 'POST',
    config: { auth: false },
    handler: ( request, reply ) => {
      console.log("je to na spravnom mieste")
      console.log(equest.payload);
      return "jejda"
      // if(request.payload.guid && request.payload.file){
      //   return reply.file('./file/' + request.payload.guid + '/' + request.payload.file);
      // }
      // return "false"
    }
  },

  {
    path: '/uploadFile',
    method: 'POST',
    config: { auth: 'jwt' },
    handler: ( req, h ) => {
      let currentdate = new Date(); 
      let month = (currentdate.getMonth()+1)
      let date = currentdate.getDate()
      let hours = currentdate.getHours()
      let minutes = currentdate.getMinutes()
      let secounds = currentdate.getSeconds()
      let milliseconds =currentdate.getMilliseconds()
      if (month < 10) { month = "0" + month }
      if (date < 10) { date = "0" + date }
      if (hours < 10) { hours = "0" + hours }
      if (minutes < 10) { minutes = "0" + minutes }
      if (secounds < 10) { secounds = "0" + secounds }
      if (milliseconds < 100) { 
        if (milliseconds < 10) { milliseconds = "00" + milliseconds }
        else { milliseconds = "0" + milliseconds }
      }
      var datetime = currentdate.getFullYear() + "-"
                + month + "-" 
                + date + "T"  
                + hours + ":"  
                + minutes + ":" 
                + secounds + "."
                + milliseconds + "Z";

      const { payload } = req
      const promises = [];
      var promise1
      var promise2
      var filenameDatabase = ""
      const filename = uuidv1() + '.jpeg';
      console.log("send upload file without photo")
      console.log(payload)

// uploadType == 1 | books | update
// uploadType == 2 | books | insert             OK
// uploadType == 3 | books | picture | update
// uploadType == 4 | books | picture | insert
// uploadType == 5 | card  | update
// uploadType == 6 | card  | insert
// uploadType == 7 | card  | picture | update
// uploadType == 8 | card  | picture | insert
// promise 1 | picture
// promise 2 | update/insert
// promise 3 | update -> user

//treba doplnit file pri posielanie pozor
      
      if( payload.uploadType == 1 && payload.user_id){
        promise1 = Database( 'books' )
          .where( {
            id: payload.id
          } )
          .update( {
            user_id: payload.user_id,
            title: payload.title,
            author: payload.author,
            isbn: payload.isbn,
            notes: payload.notes,
            cover_path: payload.path,
            feedback: payload.feedback,
            language: payload.language,
            publication: payload.publication,
            publisher: payload.publisher,
            edition: payload.edition,
            year: payload.year,
            tags: payload.tags
          } )
          .returning('id')
          .then( ( res ) => {
            return( {
              id: res[0],
              versionTime: datetime,
            } );
          } )
          .catch( ( err ) => {
            return( 'server-side error' );   
          } )
      } 
      else if( payload.uploadType == 2 && payload.user_id){
        console.log("toto")
        promise1 = Database( 'books' )
          .insert( {
            user_id: payload.user_id,
            title: payload.title,
            author: payload.author,
            isbn: payload.isbn,
            notes: payload.notes,
            cover_path: filenameDatabase,
            feedback: payload.feedback,
            language: payload.language,
            publication: payload.publication,
            publisher: payload.publisher,
            edition: payload.edition,
            year: payload.year,
            year: payload.tags
          } )
          .returning('id')
          .then( ( res ) => {
            return( {
              id: res[0],
              versionTime: datetime,
            } );
          } )
          .catch( ( err ) => {
            return( 'server-side error' + err);   
          } )

      }
      else if( payload.uploadType == 5 && payload.user_id){
        promise1 = Database( 'libraryCard' )
          .where( {
            id: payload.id
          } )
          .update( {
            user_id: payload.user_id,
            library_id: payload.library_id,
            library_name: payload.library_name,
            code: payload.code,
            picture_path: payload.path,
            date: payload.date,
            password: payload.password
          } )
          .returning('id')
          .then( ( res ) => {
            return( {
              id: res[0],
              versionTime: datetime,
            } );
          } )
          .catch( ( err ) => {
            return( 'server-side error' );   
          } )
      } 
      else if( payload.uploadType == 6 && payload.user_id){
        console.log("xxxxxxx")
        promise1 = Database( 'libraryCard' )
          .insert( {
            user_id: payload.user_id,
            library_id: payload.library_id,
            library_name: payload.library_name,
            code: payload.code,
            picture_path: filenameDatabase,
            date: payload.date,
            password: payload.password
          } )
          .returning('id')
          .then( ( res ) => {
            return( {
              id: res[0],
              versionTime: datetime,
            } );
          } )
          .catch( ( err ) => {
            return( 'server-side error' );   
          } )
      }
      else {
        promise1 = Promise.resolve()
      }

      if( (payload.uploadType == 1 || payload.uploadType == 2 ) && payload.user_id){ //books
        promise2 = Database( 'users' )
          .where( {
            id: payload.user_id
          } )
          .update({ version_book: datetime })
          .catch( ( err ) => {
            return( 'server-side error' );
          } )
      }
      else if( (payload.uploadType == 5 || payload.uploadType == 6 ) && payload.user_id){ //card
        promise2 = Database( 'users' )
          .where( {
            id: payload.user_id
          } )
          .update({ version_library_card: datetime })
          .catch( ( err ) => {
            return( 'server-side error' );
          } )
      }
      else {
        promise2 = Promise.resolve()
      }
      return Promise.all([promise1, promise2]).then(data => {
        var json={"data":data[0], "userUpdate":data[1]};
        JSON.stringify(json);
        return json;
      }).catch( ( err ) => {
        return( 'server-side error' );
      } )
    }
  },


    {
    path: '/uploadFileWithPicture',
    method: 'POST',
    options: {
      auth: 'jwt',
      payload: {
        maxBytes: 209715200,
        output: 'stream'
      }
    },
    handler: async (req, h) => {
      let currentdate = new Date(); 
      let month = (currentdate.getMonth()+1)
      let date = currentdate.getDate()
      let hours = currentdate.getHours()
      let minutes = currentdate.getMinutes()
      let secounds = currentdate.getSeconds()
      let milliseconds =currentdate.getMilliseconds()
      if (month < 10) { month = "0" + month }
      if (date < 10) { date = "0" + date }
      if (hours < 10) { hours = "0" + hours }
      if (minutes < 10) { minutes = "0" + minutes }
      if (secounds < 10) { secounds = "0" + secounds }
      if (milliseconds < 100) { 
        if (milliseconds < 10) { milliseconds = "00" + milliseconds }
        else { milliseconds = "0" + milliseconds }
      }
      var datetime = currentdate.getFullYear() + "-"
                + month + "-" 
                + date + "T"  
                + hours + ":"  
                + minutes + ":" 
                + secounds + "."
                + milliseconds + "Z";

      const { payload } = req
      const promises = [];
      var promise1
      var promise2
      var promise3
      var filenameDatabase = ""
      const filename = uuidv1() + '.jpeg';

      console.log("send upload file with photo")
      console.log(payload)
      console.log(payload.uploadType)
      console.log(payload.user_id)
      console.log(payload.library_id)
      console.log(payload.library_name)
      console.log(payload.code)

// uploadType == 1 | books | update
// uploadType == 2 | books | insert             OK
// uploadType == 3 | books | picture | update
// uploadType == 4 | books | picture | insert
// uploadType == 5 | card  | update
// uploadType == 6 | card  | insert
// uploadType == 7 | card  | picture | update
// uploadType == 8 | card  | picture | insert
// promise 1 | picture
// promise 2 | update/insert
// promise 3 | update -> user
      

      if( (payload.uploadType == 3 || payload.uploadType == 4 || payload.uploadType == 7 || payload.uploadType == 8) && payload.user_id && payload.guid){
        filenameDatabase = filename
        const guid = payload.guid
        const data = payload.file._data
        promise1 = new Promise((resolve, reject) => {
          mkdirp(`./file/${guid}`, function (err) {
            if (err) console.error(err)
            else {
              fs.writeFile(`./file/${guid}/${filename}`, data, err => {
                if (err) {
                  reject(err)
                }
                resolve({
                  imageName: `${filename}`,
                  versionTime: datetime
                })
              })
            }
          });
        })
      }
      else {
        promise1 = Promise.resolve()
      }

      if( payload.uploadType == 3 && payload.user_id){
        promise2 = Database( 'books' )
          .where( {
            id: payload.id
          } )
          .update( {
            user_id: payload.user_id,
            title: payload.title,
            author: payload.author,
            isbn: payload.isbn,
            notes: payload.notes,
            cover_path: filenameDatabase,
            feedback: payload.feedback,
            language: payload.language,
            publication: payload.publication,
            publisher: payload.publisher,
            edition: payload.edition,
            year: payload.year,
            tags: payload.tags
          } )
          .returning('id')
          .then( ( res ) => {
            return( {
              id: res[0],
              versionTime: datetime,
            } );
          } )
          .catch( ( err ) => {
            return( 'server-side error' );   
          } )
      } 
      else if( payload.uploadType == 4 && payload.user_id){
        console.log("toto")
        promise2 = Database( 'books' )
          .insert( {
            user_id: payload.user_id,
            title: payload.title,
            author: payload.author,
            isbn: payload.isbn,
            notes: payload.notes,
            cover_path: filenameDatabase,
            feedback: payload.feedback,
            language: payload.language,
            publication: payload.publication,
            publisher: payload.publisher,
            edition: payload.edition,
            year: payload.year,
            tags: payload.tags
          } )
          .returning('id')
          .then( ( res ) => {
            return( {
              id: res[0],
              versionTime: datetime,
            } );
          } )
          .catch( ( err ) => {
            return( 'server-side error' + err);   
          } )

      }
      else if( payload.uploadType == 7 && payload.user_id){
        console.log(payload.date)
        promise2 = Database( 'libraryCard' )
          .where( {
            id: payload.id
          } )
          .update( {
            user_id: payload.user_id,
            library_id: payload.library_id,
            library_name: payload.library_name,
            code: payload.code,
            picture_path: filenameDatabase,
            date: payload.date,
            password: payload.password
          } )
          .returning('id')
          .then( ( res ) => {
            return( {
              id: res[0],
              versionTime: datetime,
            } );
          } )
          .catch( ( err ) => {
            return( 'server-side error' );   
          } )
      } 
      else if( payload.uploadType == 8 && payload.user_id){
        console.log("xxxxxxx")
        promise2 = Database( 'libraryCard' )
          .insert( {
            user_id: payload.user_id,
            library_id: payload.library_id,
            library_name: payload.library_name,
            code: payload.code,
            picture_path: filenameDatabase,
            date: payload.date,
            password: payload.password
          } )
          .returning('id')
          .then( ( res ) => {
            return( {
              id: res[0],
              versionTime: datetime,
            } );
          } )
          .catch( ( err ) => {
            return( 'server-side error' );   
          } )
      }
      else {
        promise2 = Promise.resolve()
      }

      if( (payload.uploadType == 3 || payload.uploadType == 4) && payload.user_id){ //books
        promise3 = Database( 'users' )
          .where( {
            id: payload.user_id
          } )
          .update({ version_book: datetime })
          .catch( ( err ) => {
            return( 'server-side error' );
          } )
      }
      else if( (payload.uploadType == 7 || payload.uploadType == 8) && payload.user_id){ //card
        promise3 = Database( 'users' )
          .where( {
            id: payload.user_id
          } )
          .update({ version_library_card: datetime })
          .catch( ( err ) => {
            return( 'server-side error' );
          } )
      }
      else {
        promise3 = Promise.resolve()
      }
      return Promise.all([promise1, promise2, promise3]).then(data => {
        var json={"picture":data[0], "data":data[1], "userUpdate":data[2]};
        JSON.stringify(json);
        return json;
      }).catch( ( err ) => {
        return( 'server-side error' );
      } )
    }
  },
  {
    path: '/versionsDataAndUser',
    method: 'POST',
    config: { auth: 'jwt' },
    handler: ( request, reply ) => {
      console.log("loggg")
      const promises = [];
      console.log("aaa")

      var promise1
      var promise2
      var promise3
      var promise4
      var promise5
      var promise6
      var promise7

      if(request.payload.address == true){
        promise1 = Database( 'address' )
        .where( {
          is_active_address: true
        } )
        .select( 'id', 'city_id', 'address', 'country', 'postal_code', 'latitude', 'longtitude' )
        .then( ( results ) => {
          if( !results || results.length === 0 ) {
            return( {
              error: true,
              errMessage: 'no public address found',
            } );
          }
          return( {
            dataCount: results.length,
            data: results,
          } );
        } )
        .catch( ( err ) => {
          return( 'server-side error' );
        } )
      }
      else {
        promise1 = Promise.resolve()
      }

      if(request.payload.cities == true){
        promise2 = Database( 'cities' )
        .where( {
          is_active_city: true
        } )
        .select( 'id', 'city', 'latitude', 'longtitude' )
        .then( ( results ) => {
          if( !results || results.length === 0 ) {
            return( {
              error: true,
              errMessage: 'no public cities found',
            } );
          }
          return( {
            dataCount: results.length,
            data: results,
          } );
        } )
        .catch( ( err ) => {
          return( 'server-side error' );
        } )
      }
      else {
        promise2 = Promise.resolve()
      }

      if(request.payload.libraries == true){
        promise3 = Database( 'libraries' )
        .where( {
          is_active_library: true
        } )
        .select( 'id', 'address_id', 'library_name', 'library_address'  )
        .then( ( results ) => {
          if( !results || results.length === 0 ) {
            return( {
              error: true,
              errMessage: 'no public libraries found',
            } );
          }
          return( {
            dataCount: results.length,
            data: results,
          } );
        } )
        .catch( ( err ) => {
          return( 'server-side error' );
        } )
      }
      else {
        promise3 = Promise.resolve()
      }

      if(request.payload.libraryLocations == true){
        promise4 = Database( 'libraryLocations' )
        .where( {
          is_active_libraryLocation: true
        } )
        .select( 'id', 'address_id', 'library_id', 'location_name', 'location_acronym' )
        .then( ( results ) => {
          if( !results || results.length === 0 ) {
            return( {
              error: true,
              errMessage: 'no public libraryLocations found',
            } );
          }
          return( {
            dataCount: results.length,
            data: results,
          } );
        } )
        .catch( ( err ) => {
          return( 'server-side error' );
        } )
      }
      else {
        promise4 = Promise.resolve()
      }

      if(request.payload.librarySublocations == true){
        promise5 = Database( 'librarySublocations' )
        .where( {
          is_active_librarySublocation: true
        } )
        .select( 'id', 'address_id', 'libraryLocation_id', 'sublocation_name', 'sublocation_acronym' )
        .then( ( results ) => {
          if( !results || results.length === 0 ) {
            return( {
              error: true,
              errMessage: 'no public librarySublocations found',
            } );
          }
          return( {
            dataCount: results.length,
            data: results,
          } );
        } )
        .catch( ( err ) => {
          return( 'server-side error' );
        } )
      }
      else {
        promise5 = Promise.resolve()
      }

      if(request.payload.books == true){
        promise6 = Database( 'books' )
        .where( { 
          user_id: request.payload.user_id , 
          is_active_book: true
        } )
        .select( 'id', 'user_id','title', 'author', 'isbn', 'notes', 'cover_path', 'feedback', 'language', 'publication', 'publisher', 'edition', 'year', 'tags')
        .then( ( results ) => {
          if( !results || results.length === 0 ) {
            return( {
              error: true,
              errMessage: 'no books found',
            } );
          }
          return( {
            dataCount: results.length,
            data: results,
          } );
        } )
        .catch( ( err ) => {
          return( 'server-side error' );
        } )
      }
      else {
        promise6 = Promise.resolve()
      }

      if(request.payload.libraryCard == true){
        promise7 = Database( 'libraryCard' )
        .where( {
          user_id: request.payload.user_id ,
          is_active_libraryCard: true
        } )
        .select( 'id', 'user_id', 'library_id', 'library_name', 'code', 'picture_path', 'date' )
        .then( ( results ) => {
          if( !results || results.length === 0 ) {
            return( {
              error: true,
              errMessage: 'no public libraryCard found',
            } );
          }
          return( {
            dataCount: results.length,
            data: results,
          } );
        } )
        .catch( ( err ) => {
          return( 'server-side error' );
        } )
      }
      else {
        promise7 = Promise.resolve()
      }
      console.log("bbb")

      return Promise.all([promise1, promise2, promise3, promise4, promise5, promise6, promise7]).then(data => {
        var json={"address":data[0], "cities":data[1], "libraries":data[2], "libraryLocations":data[3], "librarySublocations":data[4], "books":data[5], "libraryCard":data[6]};
        JSON.stringify(json);
        return json;
      }).catch( ( err ) => {
        return( 'server-side error' );
      } )
    }
  },


  {
    path: '/versionsData',
    method: 'POST',
    config: { auth: false },
    handler: ( request, reply ) => {
      console.log("asd")
      const promises = [];

      var promise1
      var promise2
      var promise3
      var promise4
      var promise5

      if(request.payload.address == true){
        promise1 = Database( 'address' )
        .where( {
          is_active_address: true
        } )
        .select( 'id', 'city_id', 'address', 'country', 'postal_code', 'latitude', 'longtitude' )
        .then( ( results ) => {
          if( !results || results.length === 0 ) {
            return( {
              error: true,
              errMessage: 'no public address found',
            } );
          }
          return( {
            dataCount: results.length,
            data: results,
          } );
        } )
        .catch( ( err ) => {
          return( 'server-side error' );
        } )
      }
      else {
        promise1 = Promise.resolve()
      }

      if(request.payload.cities == true){
        promise2 = Database( 'cities' )
        .where( {
          is_active_city: true
        } )
        .select( 'id', 'city', 'latitude', 'longtitude' )
        .then( ( results ) => {
          if( !results || results.length === 0 ) {
            return( {
              error: true,
              errMessage: 'no public cities found',
            } );
          }
          return( {
            dataCount: results.length,
            data: results,
          } );
        } )
        .catch( ( err ) => {
          return( 'server-side error' );
        } )
      }
      else {
        promise2 = Promise.resolve()
      }

      if(request.payload.libraries == true){
        promise3 = Database( 'libraries' )
        .where( {
          is_active_library: true
        } )
        .select( 'id', 'address_id', 'library_name', 'library_address')
        .then( ( results ) => {
          if( !results || results.length === 0 ) {
            return( {
              error: true,
              errMessage: 'no public libraries found',
            } );
          }
          return( {
            dataCount: results.length,
            data: results,
          } );
        } )
        .catch( ( err ) => {
          return( 'server-side error' );
        } )
      }
      else {
        promise3 = Promise.resolve()
      }

      if(request.payload.libraryLocations == true){
        promise4 = Database( 'libraryLocations' )
        .where( {
          is_active_libraryLocation: true
        } )
        .select( 'id', 'address_id', 'library_id', 'location_name', 'location_acronym' )
        .then( ( results ) => {
          if( !results || results.length === 0 ) {
            return( {
              error: true,
              errMessage: 'no public libraryLocations found',
            } );
          }
          return( {
            dataCount: results.length,
            data: results,
          } );
        } )
        .catch( ( err ) => {
          return( 'server-side error' );
        } )
      }
      else {
        promise4 = Promise.resolve()
      }

      if(request.payload.librarySublocations == true){
        promise5 = Database( 'librarySublocations' )
        .where( {
          is_active_librarySublocation: true
        } )
        .select( 'id', 'address_id', 'libraryLocation_id', 'sublocation_name', 'sublocation_acronym' )
        .then( ( results ) => {
          if( !results || results.length === 0 ) {
            return( {
              error: true,
              errMessage: 'no public librarySublocations found',
            } );
          }
          return( {
            dataCount: results.length,
            data: results,
          } );
        } )
        .catch( ( err ) => {
          return( 'server-side error' );
        } )
      }
      else {
        promise5 = Promise.resolve()
      }

      return Promise.all([promise1, promise2, promise3, promise4, promise5]).then(data => {
        var json={"address":data[0 ], "cities":data[1], "libraries":data[2], "libraryLocations":data[3], "librarySublocations":data[4]};
        JSON.stringify(json);
        return json;
      }).catch( ( err ) => {
        return( 'server-side error' );
      } )
    }
  },

  {
    path: '/login_user',
    method: 'POST',
    config: { auth: false },
    handler: ( request, reply ) => {
      console.log("asd")
      console.log(request.payload)
      console.log(request.payload.email)
      const { email, password } = request.payload;
      console.log(email)
      console.log(password)
      return getData = Database( 'users' )
      .where( {
        email, is_active_user: true,
      } )
      .select('id', 'first_name', 'last_name', 'email', 'password', 'guid', 'version_book', 'version_library_card' )
      .then( ( [ user ] ) => {
        console.log("aaaaaaaaaaaaa")
        console.log(email)
        if( !user ) {
          return( {
            error: true,
            errMessage: 'the specified user was not found',
          } );
          return;
        }
        if( user.password === password ) {
          const token = jwt.sign( {
            email: email,
            guid: user.guid,
          }, process.env.JWT_SECRET, {
            algorithm: process.env.JWT_ALGORITHM,
            // expiresIn: '1h',
          } );
          return( {
            guid: user.guid,
            token,
            id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            version_book: user.version_book,
            version_library_card: user.version_library_card,
          } );
        } else {
          return( {
            email: "error",
            message: "Password or email incorect"
          });
        }
      } )
      .catch( ( err ) => {
        return( 'server-side error' );
      } );
    }
  },

  {
    path: '/create_user',
    method: 'POST',
    config: { auth: false },
    handler: ( request, reply ) => {
      console.log("x")
      const { first_name, last_name, email, password } = request.payload;
      const guid = uuidv1();
      console.log("c")
      return getData = Database( 'users' )
      .where( {
        email, is_active_user: true,
      } )
      .select( 'email' )
      .then( ( [ exist_user ] ) => {
        if(exist_user){
          if(exist_user.email == email){
            return "same email"
          }
        }
        else{
          return insertData = Database( 'users' )
          .insert( {
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: password,
            guid
          } )
          .returning('id')
          .then( ( res ) => {
            console.log(res[0])
            console.log(res.id)
            const token = jwt.sign( {
              email: email,
              guid: guid,
            }, process.env.JWT_SECRET, {
              algorithm: process.env.JWT_ALGORITHM,
              // expiresIn: '1h',
            } );

            return( {
              token,
              guid: guid,
              id: res[0],
            } );
          } )
          .catch( ( err ) => {
            return( 'server-side error' );   
          } );
        }
      } )
    }
  }
]








