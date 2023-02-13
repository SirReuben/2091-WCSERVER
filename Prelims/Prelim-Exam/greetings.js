module.exports = function (fname, lname) {
  this.fname = fname;
  this.lname = lname;
  this.greeting = function () {
    return 'Hello' + this.fname + this.lname;
  };
  this.greetings = function () {
    return 'Congrats' + this.fname + this.lname;
  };
  this.greetingss = function () {
    return 'Goodbye' + this.fname + this.lname;
  };
};
