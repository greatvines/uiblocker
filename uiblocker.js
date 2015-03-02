var $ = require('jquery');
require('blockui');
var _ = require('underscore');

var UIBlocker = {};
UIBlocker.transitionDelay = 250;

UIBlocker.blockWith = function(fn) {
	var deferred = $.Deferred();
	var context = this;
	var args = _(arguments).rest();
	var event = _(args).first();
	if (event && event.preventDefault) {
		event.preventDefault();
	}
	$.blockUI({ message: null });

	setTimeout(function() {
		var result = fn.apply(context, args);
		if (_(result).isObject() && _(result.always).isFunction()) {
			result.always(function() {
				$.unblockUI();
			}).then(deferred.resolve, deferred.reject);
		} else {
			$.unblockUI();
		}
	}, UIBlocker.transitionDelay);
	return deferred.promise();
};

UIBlocker.makeBlocked = function(fn) {
	return _.wrap(fn, UIBlocker.blockWith);
};

module.exports = UIBlocker;
