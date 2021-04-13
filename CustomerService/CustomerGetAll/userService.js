class UserService {

    convertMessage(message) {
        
        if(!message){
            throw new Error('invalid parameters');
        }

        return message.toUpperCase()
    }

}


module.exports = UserService;