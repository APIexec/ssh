// Example

// As mentioned above, keepass.io is really easy to use. The following example code opens a database, outputs its name, changes the name to 'KeePass.IO rocks!' and saves the database with new credentials. More examples are available within the examples folder.

var path = require('path');
var kpio = require('../lib');

var db = new kpio.Database();
db.addCredential(new kpio.Credentials.Password('thematrix'));
db.addCredential(new kpio.Credentials.Keyfile('apoc.key'));
db.loadFile(databasePath, function (err) {
    if (err) throw err;

    var rawDatabase = db.getRawApi().get();
    console.log('Database name: ' + rawDatabase.KeePassFile.Meta.DatabaseName);
    rawDatabase.KeePassFile.Meta.DatabaseName = 'KeePass.IO rocks!';

    db.resetCredentials();
    db.addCredential(new kpio.Credentials.Password('morpheus'));
    db.addCredential(new kpio.Credentials.Keyfile('trinity.key'));

    db.getRawApi().set(rawDatabase);
    db.saveFile(newDatabasePath, function (err) {
        if (err) throw err;
    });
});