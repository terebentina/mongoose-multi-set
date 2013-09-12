/*!
 * Mongoose Multi Set
 * Copyright(c) 2013 Dan Caragea <dancaragea@gmail.com>
 * MIT Licensed
 */

//var BinaryParser = require('bson').BinaryParser;

function multiSetPlugin(schema, options) {
	schema.methods.multiSet = function(obj, allowedFields) {
		if (!allowedFields) {
			return;
		}
		var i = allowedFields.indexOf('id');
		if (i !== -1) {
			allowedFields.splice(i, 1);
		}
		i = allowedFields.indexOf('_id');
		if (i !== -1) {
			allowedFields.splice(i, 1);
		}
		for (i in allowedFields) {
			if (allowedFields.hasProperty(i) && typeof obj[i] !== 'undefined') {
				this[i] = obj[i];
			}
		}
	}
}

module.exports = multiSetPlugin;