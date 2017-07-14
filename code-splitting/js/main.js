console.log('main.js');

// require.ensure([], function(require) {
// 	var _ = require('./lodash').default;
// 	console.log(_);
// 	console.log('require ensure');
// 	console.log(_.isObject(1));
// });

import('./lodash').then(module => {
	let _ = module.default;
	console.log(_);
	console.log('require ensure');
	console.log(_.isObject(1));
});