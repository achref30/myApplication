var express = require('express');
var router = express.Router();
var os = require("os");

router.get('/', function(req, res, next){
    try{
        const hostinfo = {
            hostname : os.hostname(),
            type : os.type(),
            platform : os.platform()
        }
        if(!hostinfo){
            //res.status(404).send('NOT FOUND');
            throw new Error('No information aboutthe os');
        };
        res.status(200).json(osInformations);
    }
    catch(err){
        res.status(500).send(err.message);
    }
});
router.get("/cpus", function(req, res, next){
    try {
      const cpus = os.cpus();
      if(!cpus){
        throw new Error ('No informations about the CPUS');
      }
      res.status(200).json(cpus);      
    }
    catch(err){      
      res.status(500).send(err.message);
    }
});

router.get("/cpus/:id", function(req,res,next){
    //const id = req.params.id; ou const {id}= req.params
    try{
        const {id} = req.params;
        //console.log(id);
        const cpus = os.cpus();
        const condition = id<0 || id> cpus.length -1;
        if(condition){
            throw new Error('you must enter a valid id');
        }
        res.status(200).json(cpus[id]);
    }
    catch(err){
      res.status(500).send(err.message);
    }
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