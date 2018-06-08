const createCsvWriter = require('csv-writer').createObjectCsvWriter;

/**
 * Write all stargazers in CSV
 *
 * @param stargazersArray
 */
function writeCsv (stargazersArray) {
    const csvWriter = createCsvWriter({
        path: './output/stargazers.csv',
        header: [
            {id: 'name', title: 'NAME'},
            {id: 'repo', title: 'REPO'},
        ]
    });

    csvWriter.writeRecords(stargazersArray).then(() => {
        console.log('[INFO] CSV create with success');
    })
}

module.exports = writeCsv;