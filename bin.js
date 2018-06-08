const program = require('commander');
const client = require('./client');
const getTrendingRepos = require('./methods/getTrendingRepos');
const getStargazers = require('./methods/getStargazers');
const writeCsv = require('./helpers/writeCsv');

program
    .version('0.1.0')
    .option('-t, --token [token]', 'GitHub token')
    .option('-l, --language [language]', 'Repo language')
    .parse(process.argv);

if (program.token) {
    client.authenticate({
       type: 'token',
       token: program.token
    });

    exec();
}

async function exec() {
    try {
        let stargazersArray = [];
        const items = await getTrendingRepos(program.language);
        await Promise.all(items.map(item => {
            return getStargazers(item.owner.login, item.name).then(response => {
                response.data.forEach(user => {
                    stargazersArray.push({name: user.user.login, repo: user.user.html_url})
                });
            });
        }));
        console.log('[INFO] Most trending repo stargazers are retrieved with success');
        await writeCsv(stargazersArray);
    } catch (e) {
        console.log('\x1b[31m', `[ERROR] ${error}`)
    }
}
