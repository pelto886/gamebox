const fastify = require('fastify')();
const tablemanager = require('./tablemanager');
const playermanager = require('./tablemanager');
const tournament = require('./tournamentmanager');

const opts = {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    code: { type: int }
                    message: { type: string }
                }
            }
        }
    }
}

fastify.get('/', opts, async (request, reply) => {
    return { 
        code: 200,
        message: 'request recieved.'
    }
});

fastify.get('/show/tables/:table', async (request, reply) => {
    

});

const start = async () => {
    try {
        await fastify.listen(3000);
        fastify.log.info(`server listening on ${fastify.server.address().port}`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
}
start();
