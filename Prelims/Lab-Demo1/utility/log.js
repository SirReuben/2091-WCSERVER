var log = {
  info: function (info) {
    console.log('Info: ' + info);
  },
  warning: function (warning) {
    console.log('Warning: ' + warning);
  },
  warning: function (error) {
    console.log('Info: ' + error);
  },
};
module.exports = log;
