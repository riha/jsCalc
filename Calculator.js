class Calculator {
    constructor() {
        this.currentResult = 0;
        this.registerHandlers();
    }

    registerHandlers() {
        $("#result").text(this.currentResult);
        $("#b1").click(() =>this.add(1))
        $("#b2").click(() =>this.add(2))
        $("#b3").click(() =>this.add(3))
    }

    add(value) {
        this.currentResult = this.currentResult + value;
        $('#result').text(this.currentResult);
    }
}