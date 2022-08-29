class television {
    chanelRecent;
    volume;
    status;
    constructor(chanelRecent, volume,status) {
        this.chanelRecent = chanelRecent;
        this.volume = volume;
        this.status = status;
    }
    getChanel() {
        return this.chanelRecent;
    }
    getVolume() {
        return this.volumel;
    }
    getStatus() {
        return this.status;
    }
    setSatus(){
        this.status=!this.status;
    }
    setChanel(newChanel) {
        this.chanelRecent = newChanel;
    }
    setVolume(newVolume) {
        if (newVolume == '+') {
            this.volume++
        }
        else {
            this.volume--
        }
    }
}

class remote {
    setSatus(televison) {
        if (televison.status) {
            televison.status = false;
        }
        else {
            televison.status = true;
        }
    }

    setChanel(television,newChanel) {
        television.setChanel(newChanel)
    }
    setVolume(television,newVolume) {
            television.setVolume(newVolume)
    }
}

let TV1 = new television('VTV1', 25)
let RM = new remote;