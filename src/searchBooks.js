var zoom = require('node-zoom2');

class Book {
    constructor(Id, Isbn, Language, Author, Title, Edition, Publication_date, Publication_place, Publisher, Note) {
        this.Id = Id;
        this.Isbn = Isbn;
        this.Language = Language;
        this.Author = Author;
        this.Title = Title;
        this.Edition = Edition;
        this.Publication_date = Publication_date;
        this.Publication_place = Publication_place;
        this.Publisher = Publisher;
        this.Note = Note;;
    }
}



function searchBook(server, queryText, index, count) {
    // server = {Url: 'arl1.library.sk', Port: '8887', Database: 'sldk_un_cat', Syntax: 'UNIMARC'};
    // queryText = "@attr 1=4 krtko"
    // const serverSld={Url: 'arl1.library.sk', Port: '8887', Database: 'sldk_un_cat', Syntax: 'UNIMARC'};

    console.log("--------------");
    console.log("AAAA")
    // console.log(serverSld);
    console.log(server);
    console.log(queryText);
    console.log(index);
    console.log(count); 
    console.log("--------------");
    
    return new Promise((resolve, reject) => { 
        let listRecords = {};
        listRecords = [];  
        // console.log("b");
        // console.log(queryText);
        zoom.connection(`${server['Url']}:${server['Port']}/${server['Database']}`)
        .set('preferredRecordSyntax', server['Syntax'])
        .query('prefix', queryText)
        .search(function(err, resultset) {
            // console.log("CCC");
            // console.log(resultset);
            if(resultset){ 
                // console.log(resultset.size);
                
                if (resultset.size <= 0) {
                    resolve(JSON.stringify({ books: new Book('0','0','0','0','0','0','0' )}));
                }
                if (err) return reject(err);
                let total = resultset.size; 
                resultset.getRecords(index, count, function(err, records) {
                    if (err) return reject(err);
                    // console.log(records);
                    // console.log(records.render);
                    //     console.log(records.txml);
                    //     console.log(records.xml);
                    //     console.log(records.raw);
                    //     console.log(records.json);
                    while (records && records.hasNext()) {
                        // console.log("AAA");
                        
                        var record = records.next();
                        // console.log(records);
                        // console.log(records.render);
                        // console.log(records.txml);
                        // console.log(records.xml);
                        // console.log(records.raw);
                        // console.log(records.json);
                        
                        let id = "", isbn = "", language = "", author = "";
                        let title = "", edition = "", publication_date = "";
                        let publication_place = "", publisher = "", note = "";
                        try {
                            record.json['fields'].forEach(row => {
                                let oKey = Object.keys(row)[0];

                                if(server['Syntax'] == 'UNIMARC'){ 
                                    
                                    switch(oKey) {
                                        case "001": id = row[oKey]; break; 
                                        case "010": isbn = marcToJSONWithField(row[oKey]['subfields'], "a"); break;
                                        case "102": language = marcToJSONWithField(row[oKey]['subfields'], "a"); break;
                                        case "200": {
                                                author = marcToJSONWithField(row[oKey]['subfields'], "f") + " " + marcToJSONWithField(row[oKey]['subfields'], "g"); 
                                                title = marcToJSONWithField(row[oKey]['subfields'], "a") ; 
                                                break; 
                                            }
                                        case "205": edition = marcToJSONWithField(row[oKey]['subfields'], "a"); break;
                                        case "210": {
                                                publication_place = marcToJSONWithField(row[oKey]['subfields'], "a"); 
                                                publisher = marcToJSONWithField(row[oKey]['subfields'], "c");
                                                publication_date = marcToJSONWithField(row[oKey]['subfields'], "d");
                                                break;
                                            }
                                        case "330": note = marcToJSONWithField(row[oKey]['subfields'], "a"); break;
                                    }
                                }

                                else { 
                                    switch(oKey) {
                                        // case "001": id = row[oKey]; break;
                                        // case "020": isbn = marcToJSONWithField(row[oKey]['subfields'], "a"); break;
                                        // case "245": title += (title == ""?"":"\n") + marcToJSONWithField(row[oKey]['subfields'], null); break;
                                        // case "100": author.push(marcToJSONWithField(row[oKey]['subfields'], null)); break;
                                        // case "260": year = marcToJSONWithField(row[oKey]['subfields'], "c"); break;
                                        // case "856": url.push(marcToJSONWithField(row[oKey]['subfields'], "u")); break;
                                    }
                                }
                            }, this); 
                            // console.log(record.xml);
                            // console.log("---------------------")
                            listRecords.push(new Book(id, isbn, language, author, title, edition, publication_date, publication_place, publisher, note));
                        } catch (err1) {}
                    }
                    // console.log(listRecords);
                    
                    // resolve(listRecords)
                    resolve(JSON.stringify({ books: listRecords, dataCount:total }));
                    // resolve(JSON.stringify(listRecords));

                })
            }
        });
    });
}

function marcToJSONWithField(rowInMarc, subField) {
    let rowText = "";
    rowInMarc.forEach(item => {
        Object.keys(item).forEach(key => {
            if (!subField || key == subField)
                rowText += item[key];
        })
    });
    return rowText;
}
module.exports = searchBook;