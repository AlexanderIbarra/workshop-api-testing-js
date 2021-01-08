const axios = require('axios');

const urlBase = 'http://localhost:8080/job/Predictive-Test';

auth = {
    username: 'AlexanderIbarra',
    password: `${process.env.ACCESS_PASSWORD}`
}

async function asyncFunc() {
    let responseBuild = await axios.get(`${urlBase}/lastBuild/api/json`, {
        auth: auth
    });
    
    let responseConsole = await axios.get(`${urlBase}/${process.env.BUILD_NUMBER}/consoleText`, {
    auth: auth
    });
    
}
asyncFunc()
