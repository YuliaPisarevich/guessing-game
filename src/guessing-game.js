var min, max, average;

class GuessingGame {
    constructor() {}

    setRange(min, max) {
		this.min=0
		this.max=0
		this.average=0

    }

    guess() {
		this.min=min
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
