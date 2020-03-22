'use strict'
const passport = require('passport');
const config = require('../config');
const facebookStrategy = require('passport-facebook').Strategy;

module.exports = () => {
  let authenticator = (accessToken, refreshToken, profile, done) => {
      
  } 

  passport.use(new facebookStrategy(config.fb, authenticator => {

  }))
}