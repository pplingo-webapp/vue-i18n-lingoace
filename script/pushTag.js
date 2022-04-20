const execGitCmd = require('./execGitCmd');
const env = require('./getNpmEnv');

function pushVersion() {
    execGitCmd(['push']);
    execGitCmd(['push', '--tags']);
    console.log(`推送 version:${env.version} 到 GitHub！`);
}

pushVersion();