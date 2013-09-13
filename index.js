/*!
 * Mongoose Multi Set
 * Copyright(c) 2013 Dan Caragea <dancaragea@gmail.com>
 * MIT Licensed
 */

function multiSetPlugin(schema, options) {
	schema.methods.multiSet = function(obj, allowedFields) {
		if (!allowedFields) {
			return;
		}

		if (Object.prototype.toString.call(allowedFields) !== '[object Array]') {
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
		var self = this;
		allowedFields.forEach(function(field) {
			if (typeof obj[field] !== 'undefined') {
				self[field] = obj[field];
			}
		});
	}
}

module.exports = multiSetPlugin;
