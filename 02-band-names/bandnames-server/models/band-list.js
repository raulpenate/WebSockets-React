const Band = require("./band");

class BandList {
    constructor(){
        this.bands = [
            new Band('Metallica'),
            new Band('Héroes del Silencio'),
            new Band('Bon Jovi'),
            new Band('Breaking Benjamin'),
        ];
    }

    addBand(name){
        const newBand = new Band( name )
        this.bands.push(newBand)
        return this.bands
    }

    removeBand(id){
        this.bands = this.bands.filter( band => id !== band.id )
    }

    getBands(){
        return this.bands
    }

    increaseVotes(id){
        this.bands = this.bands.map( band => {
            if(band.id ===  id){
                band.vote +=1
            }
            return band
        })
    }

    changeBandName(id, newName){
        this.bands = this.bands.map( band => {
            if(band.id ===  id){
                band.name = newName
            }
            return band
        })
    }
}

module.exports = BandList