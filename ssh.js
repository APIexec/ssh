// https://code.i-harness.com/de/q/683f2e
// https://www.dev2qa.com/node-js-read-write-file-examples/


exports.getDomains = function (filepath) {
    fs = require('fs');
    var encoding = 'utf8';
    // var filepath = './domains.txt';
    var domains = fs.readFileSync(filepath, encoding).toString().split("\r\n");
    return domains;
};

exports.getCommands = function (domains, cmd) {
    var line = [];
    for (i in domains) {
        var domain = domains[i].trim();
        var new_line = cmd.replace(/{domain}/g, domain);
        line.push(new_line);
    }
    return line;
};


exports.getCommandsOnDomain = function (cmds, domain) {
    var line = [];
    for (i in cmds) {
        domain = domain.trim();
        var cmd = cmds[i];
        var new_line = cmd.replace(/{domain}/g, domain);
        line.push(new_line);
    }
    return line;
};

exports.getCommandsOnDomains = function (cmds, domains) {
    var line = [];
    domains.forEach(function (domain) {
        cmds.forEach(function (cmd) {
            var _domain = domain.trim();
            var _cmd = cmd.trim();
            var _line = _cmd.replace(/{domain}/g, _domain);
            line.push(_line);
        });
    });
    return line;
};


exports.CmdsOnDoms = function (ssh, cmds, domains) {
    var domains_cmds = exports.getCommandsOnDomains(cmds, domains);
    console.log(domains_cmds);
    exports.sshExecute(ssh, domains_cmds, console.log.bind(console));
};

exports.sshExecute = function (ssh, cmds, func) {
    // var result = [];
    cmds.forEach(function (item) {
        console.log(item);
        ssh
            .exec(item, {
                // out: console.log.bind(console)
                out: func
            })
    });
    ssh.start();
    // return result
};

//
// function plesco(cmd) {
//     plesk.sshExecute(ssh, cmd, console.log.bind(console));
// }
// function plescodom(cmds, domain) {
//     var domains_cmds = plesk.getCommandsOnDomain(cmds, domain);
//     console.log(domains_cmds);
//     plesk.sshExecute(ssh, domains_cmds, console.log.bind(console));
// }
/*
var fileContent = '';
var length = line.length;
for(var i=0;i<length; i++)
{
    fileContent += line[i] + '\n';
}

fs.writeFile("./plesk.script.txt", fileContent, (err) => {
    if (err) {
        console.error(err);
        return;
    };
    console.log("File has been created");
});

*/
/*
try {


    const file = fs.readFileSync(filepath, encoding);
    console.log(file);

    for (const row of file) {
        console.log(row);
    }

    // console.log(flow)

} catch (e) {
    console.log(e);
}
*/