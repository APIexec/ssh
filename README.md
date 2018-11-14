# ssh
Tool for connection to server and execute command from json/yaml data format in some location using the API on swagger

 is it possible to create a RESTful API using SSH?

If you need direct access to the device's shell, I need a layer of abstraction, provided by an API running on the IoT device. 

## API-SWAGGER SSH
How to implement from ready, import if exist similary project

## Goal
Create a REST API with strong authentication and let Clients execute commands through it, or should I develop something on top of SSH. The goal is to let remote Clients execute certain commands on the devices safely. And wasn't SSH made for this reason? However, the clients must not see a remote shell on their smartphones, but a nice GUI

## Credentials

### How to store the secret data?

You should probably know about KeePass as a tool to manage your passwords or other secrets in an encrypted file. 
Since the default tool to edit and view your passwords is based on .NET you might not be able to use your keys everytime you need them due to missing libraries 
or a wrong platform (Mono needs to be installed on Linux systems).

### How to connect SSH and Keepass 

### [keepass.io](https://libraries.io/npm/keepass.io)

Node.js library for reading and writing KeePass databases 
Install
    
    npm install keepass.io@1.1.4 
    
### KdbxWeb Build status
https://github.com/keeweb/kdbxweb
KdbxWeb is a high-performance javascript library for reading/writing KeePass v2 databases (kdbx) in node.js or browser.

#### More ..
https://www.npmjs.com/search?q=keywords:keepass

# Service
sluzy do komunikacji z serwerem

1. Planowanie, termin, time
definicja czasu kiedy ma byc wykonane

2. Warunki, Zdarzenia
definicja w jakich okolicznosciach maja byc podjecete zadania

3. Zdarzenia, Task, Todo
definicja zdarzen jakie maja zajsc, 

4. Gdzie, definicja servers



Struktura:
    
    src:
        lib
            - biblioteki potrzebne do kontrolowania
        model:
            - modele wykorzystywane w aplikacji
        server.js
        model.js
        time.js
        event.js
        definition.js
        
        
    data, config:
        server 
            ssh
            auth - login pass
                plesk
        event
            server_name: plesk
            date, time, weekly, daily
            time: daily, night
            condition
            commands
         
        definition:
            definicje czasu, lokalizacji
            
    app.js
        
       
        
## DESCRIPTION

### ssh (SSH client)
 is a program for logging into a remote machine and for executing commands on a remote machine. ssh connects and logs into the specified hostname with user name. The user must prove his/her identity to the remote machine using the public key authentication.

The command must be specified in the mentioned format which will be executed on the remote host and the required response returned.
### SSH Public Authentication Mechanism

The scheme is based on public-key cryptography: there are cryptosystems where encryption and decryption are done using separate keys, and it is not possible to derive the decryption key from the encryption key. RSA is one such system. The idea is that each user creates a public/private key pair for authentication purposes. The server knows the public key, and only the user knows the private key. 

            