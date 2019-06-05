const functions = require('firebase-functions');
const express = require('express');
const { Nuxt } = require('nuxt');

// Use a very simplified version of the config to run the already
// build app on Firebase Functions.
const config = {
	buildDir: 'ssr',
	dev: false,
	build: {
    	extractCSS: true
    }
};

// Init Nuxt.js.
const nuxt = new Nuxt(config);
// Init express.
const app = express();
// Give nuxt middleware to express.
app.use(nuxt.render);


exports = module.exports = functions.https.onRequest(app);