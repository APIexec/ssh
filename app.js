// https://code.i-harness.com/de/q/683f2e
// https://www.dev2qa.com/node-js-read-write-file-examples/
// https://www.npmjs.com/package/simple-ssh

var ssh = require('./ssh');

// Create Object for Ssh Client Connection
var ssh_client = require('simple-ssh');
var auth_default = require('./auth/default');
var server = new ssh_client(auth_default.ssh);

function plesco(cmds) {
    ssh.sshExecute(server, cmds, console.log.bind(console));
}

function plescodom(cmds, domain) {
    var domains_cmds = plesk.getCommandsOnDomain(cmds, domain);
    console.log(domains_cmds);
    ssh.sshExecute(server, domains_cmds, console.log.bind(console));
}

plescodom([
        'ls /etc/apache2/plesk.conf.d/webmails/',
        'rm /etc/apache2/plesk.conf.d/webmails/{domain}_webmail.conf',
        'rm /etc/apache2/plesk.conf.d/webmails/{domain}_webmail.conf',
        'rm /etc/apache2/plesk.conf.d/vhosts/{domain}.conf',
        'rm /etc/nginx/plesk.conf.d/vhosts/{domain}.conf',
        'plesk repair web {domain} -y'
    ],
    'domain1.pl');