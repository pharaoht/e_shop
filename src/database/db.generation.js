const fs = require('fs');

const db = require('./db.connection');

const path = require('path');

const scriptsDirectory = path.join(__dirname, 'scripts');

async function runScripts(){

    const connection = await db.getConnection();

    try {
        
        await connection.beginTransaction();
    
        // Get a list of all SQL files in the scripts directory
        const files = fs.readdirSync(scriptsDirectory).filter(file => file.endsWith('.sql'));

        // Sort files to ensure they run in a specific order if needed
        files.sort();

        // Execute each SQL file
        for (const file of files) {
        
            const filePath = path.join(scriptsDirectory, file);

            const sql = fs.readFileSync(filePath, 'utf8');

            if(file === 'triggers.script.sql'){

                console.log('\n Executing statement:', sql);

                await connection.query(sql);
            }
            else {

                const statements = sql.split(';').map(s => s.trim()).filter(s => s.length);

                for (const statement of statements) {

                    if (statement) {

                        console.log(' \n Executing statement: \n', statement);

                        await connection.query(statement);
                    }
                }
            }

            console.log(`\n *** ${file} executed successfully *** \n`);

            await connection.commit();
        }

        console.log('\n All scripts executed successfully \n');

    } catch (error) {

        await connection.rollback();

        console.error('Error executing scripts:', error);

    } finally {

        // Close the pool
        await connection.release();

        await db.end()
    }
};

runScripts();