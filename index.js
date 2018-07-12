let logger = require('winston');

let _invoker = require('./poolOfMethods')
	_invoker.pipe().then(function(response){
		logger.info("Response from Chained/Piped methods", response)
		return response;
	})
