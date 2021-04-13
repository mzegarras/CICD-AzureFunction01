const UserService = require('./UserService');

module.exports = async function (context, req) {
    
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query && req.query.name);
    
    if(!name){
        handleError(context,new Error('Invalid params'));
        return;
    }

    const responseMessage = `Hello, ${name}.`;

    let userServicex = new UserService();
    
    context.res = {
        status: 200,
        body: {
            message: userServicex.convertMessage(responseMessage)
        },
        headers: {
            'Content-Type': 'application/json'
        }
    };

}

function handleError(context, err) {
    if (err instanceof Error) {
        context.res = {
            status: 400,
            body: {
                code: 987,
                message: err.message
            },
            headers: {
                'Content-Type': 'application/json'
            }
        };

        
    }
}
