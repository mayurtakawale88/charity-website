const ServiceHandler = require('../services/handler');

module.exports = async (request, response, next) => {
	try {
		const oldJson = response.json;

		response.json = (data, message, services = null) => {
			let newResponseData = {};
			if (!data || data.code === 'ERROR') {
				newResponseData = {
					success: false,
					error: data
				};
			} else {
				newResponseData = {
					success: true,
					message: message || '',
					data
				};
			}

			response.json = oldJson;

			// services - to be used for async calls
			const serviceHandler = new ServiceHandler();
			serviceHandler.execute(services);

			return oldJson.call(response, newResponseData);
		};
		next();
	} catch (error) {
		next(error);
	}
};
