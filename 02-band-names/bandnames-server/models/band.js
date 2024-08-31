const { v4: uuidv4 } = require('uuid')

class Band {
    constructor(name){
        this.id    = uuidv4();
        this.name  = name;
        this.votes = 15;
    }
}

module.exports = Band;