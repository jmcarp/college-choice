var config = require('./wdio.sauce').config;

var job = process.env.CIRCLE_BUILD_NUM;
if (job) {
  var jobID = "18f-cs-"+job;
  console.log("Looking for tunnel ID: "+jobID);
  config.capabilities.forEach(function(caps) {
    caps['tunnel-identifier'] = jobID;
  });
  config.build = jobID;
}

exports.config = config;
