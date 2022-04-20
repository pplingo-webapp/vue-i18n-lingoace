const { execFileSync } = require('child_process');

const exec = (command, args) => {
    console.log('=> ' + [command].concat(args).join(' '));
    const options = {
        cwd: process.cwd(),
        env: process.env,
        stdio: 'pipe',
        encoding: 'utf-8',
    };
    return execFileSync(command, args, options);
};

module.exports = function execGitCmd(args) {
    return exec('git', args).trim().toString().split('\n');
};
