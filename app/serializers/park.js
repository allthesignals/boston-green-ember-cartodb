import DS from 'ember-data';

export default DS.RESTSerializer.extend({
	// normalizeHash: {
	// normalizePayload: function(payload) {
	// 	var normalizedArray = [],
	// 		toproot = { "parks" : normalizedArray };

	// 	for (var key in payload) {
	// 		if (payload.hasOwnProperty(key)) {
	// 			var combined = payload[key]['name'].dasherize() + '-' + payload[key]['id'];				
	// 			combined = combined.dasherize();
	// 			payload[key]["id"] = combined;
	// 			normalizedArray.push(payload[key]);
	// 		}
	// 	}

	// 	return toproot; 
	// },
	

	normalizeSingleResponse: function (payload) {
		console.log(payload);
	}
});
