function AssetsManager(){
	this.debugMode = true;

	this.scripts = [
		'assets/js/logger.js',
		'assets/js/main.js'
	];

	this.loadedScripts = [];

	this.loadAssets();	
}

AssetsManager.prototype.loadAssets = function() {
	if (this.scripts.length > 0) {
		this.scripts.forEach(function(nextScript) {
			let script = document.createElement('script')
			script.src = nextScript;
			document.head.appendChild(script);
			this.loadedScripts.push(nextScript);
		}.bind(this));
		this.scripts = [];
	}
}

AssetsManager.prototype.getLoadedScriptsList = function() {
	return this.loadedScripts;
}

AssetsManager.prototype.addScript = function(pathToScriptFile) {
	this.scripts.push(pathToScriptFile);
	this.loadAssets();
}

window.assetsManager = new AssetsManager();

if (assetsManager.debugMode) {
	console.log('Loaded Scripts:', JSON.stringify(assetsManager.getLoadedScriptsList()));
}

