
/*  Example of creating running CRON jobs
    Resource: https://medium.com/@developerom/schedule-cron-jobs-in-node-js-12a6a33d6ed3   

    Extra note;
    -   Command should be node {filename}.js . Eg: node commands/cronjob.js but as already declared in bin/www means will automaticaly run when execute `npm start`
*/

const logMessage = () => {
    console.log('LogMessage cron job executed at:', new Date().toLocaleString());
}

module.exports = logMessage;