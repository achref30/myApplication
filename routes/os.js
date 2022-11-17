var express = require('express');
var router = express.Router();
var os = require("os");

router.get('/', function(req, res, next){
    res.json({
        hostname : os.hostname(),
        type : os.type(),
        platform : os.platform()
    });
});
module.exports = router;


/*
SET DEBUG=myapp:* & npm start
// Endianness
console.log('endianness : ' + os.endianness());

// OS type
console.log('type : ' + os.type());

// OS platform
console.log('platform : ' + os.platform());

// Total system memory
console.log('total memory : ' + os.totalmem() + " bytes.");

// Total free memory
console.log('free memory : ' + os.freemem() + " bytes.");

//Returns the operating system's default directory for temp files.
console.log('os.tmpdir() : '+os.tmpdir());

//Returns the endianness of the CPU. Possible values are "BE" or "LE".
console.log('os.endianness() : '+os.endianness());


//Returns the hostname of the operating system.
console.log('os.hostname() : '+os.hostname());

//Returns the operating system name.
console.log('os.type() : '+os.type());

//Returns the system uptime in seconds.
console.log('os.uptime() : '+os.uptime());

//Returns an array of objects containing information about each CPU/core 
//installed: model, speed (in MHz), and times (an object containing the number 
//of milliseconds the CPU/core spent in: user, nice, sys, idle, and irq).
console.log('os.cpus() : '+os.cpus());

*/