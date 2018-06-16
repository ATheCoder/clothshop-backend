let env = {production: 'production', development: 'development'}

const config = new function() {
  this.env =  env.development
  this.port = this.env  === env.production ? 80 : 8080
};

module.exports = config
