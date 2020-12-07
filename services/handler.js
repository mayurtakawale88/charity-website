const serviceConstants = require('./constants');

class ServiceHandler {
	execute(data) {
		if (data && data.services) {
			data.services.forEach(service => {
				switch (service) {
					case serviceConstants.CIBIL: 
						// Call and async fucntions without await to avoid blocking of API response and execute services
						break;

					default:
						break;
				}
			});
		}
	}
}

module.exports = ServiceHandler;