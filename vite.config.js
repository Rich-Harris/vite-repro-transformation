export default {
	plugins: [
		{
			transform(code) {
				if (/__message__/.test(code)) {
					return code.replace('__message__', 'This content was injected by a plugin');
				}
			}
		}
	]
}