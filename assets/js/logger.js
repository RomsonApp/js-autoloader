function Logger() { }

Logger.prototype.log = function(data) {
	console.log('Logger: ', data);
}

window.Logger = new Logger();
