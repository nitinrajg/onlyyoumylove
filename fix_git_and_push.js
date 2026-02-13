const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

const lockFile = path.join('.git', 'index.lock');

if (fs.existsSync(lockFile)) {
    console.log('Found index.lock, removing it...');
    try {
        fs.unlinkSync(lockFile);
        console.log('Removed index.lock');
    } catch (e) {
        console.error('Failed to remove index.lock:', e);
        process.exit(1);
    }
} else {
    console.log('No index.lock found.');
}

function run(cmd) {
    try {
        console.log(`Running: ${cmd}`);
        const output = execSync(cmd, { stdio: 'inherit' });
    } catch (e) {
        console.error(`Error running ${cmd}`);
        process.exit(1);
    }
}

run('git add .');
try {
    run('git commit -m "Add deployment config and cleanup"');
} catch (e) {
    console.log("Commit might have failed if nothing to commit/clean, continuing...");
}
run('git push');
