module.exports = function (aperson, bperson) {
    this.aperson = aperson;
    this.bperson = bperson;
    this.greetings = function(){
    return 'Hello' + this.aperson + '&' +this.bperson;
    }
}
    