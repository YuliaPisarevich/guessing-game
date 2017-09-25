var min, max, average;

class GuessingGame {
    constructor() {
		this.min=0
		this.max=0
		this.average=0
	}

    setRange(min, max) {
		this.min=min
		this.max=max	

    }

    guess() {
		
		this.average= Math.ceil(this.min + (this.max - this.min) / 2)
		return this.average

    }

    lower() {
		this.max=this.average

    }

    greater() {
		this.min=this.average

    }
}

module.exports = GuessingGame;
