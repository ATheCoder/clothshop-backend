let env = {production: 'production', development: 'development'}

const config = new function() {
  this.env =  env.development
  this.port = this.env  === env.production ? 80 : 8585
  this.databaseURL = 'mongodb://arasharbabi.com/test'
};

module.exports = config
