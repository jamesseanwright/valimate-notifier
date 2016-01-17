'use strict';

const VALIDATION_MODE = 'validationMode';

module.exports = function notifyValimate(isRunning) {
	if (process.argv.includes(VALIDATION_MODE)) {
		process.send(isRunning);
	}
}