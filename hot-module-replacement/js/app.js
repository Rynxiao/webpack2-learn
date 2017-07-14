import '../css/style.less';

import Library from './library';

if (module.hot) {
	module.hot.accept('./library', function() {
		console.log('Accepting the updated library modules!');
		Library.log();
	})
}
document.getElementById('container').textContent = 'APP';