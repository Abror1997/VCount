exports.checkJSON = data => {
	try {
		let json = JSON.parse(data);
		return {
			success: true,
			result: json
		};
	} catch (error) {
		return {
			success: false,
			error
		};
	}
};
