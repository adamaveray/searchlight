(function(){
	var shortcutCharacter	= 'f',
		keyCode				= shortcutCharacter.charCodeAt(0);
	
	var selectors = [
		'form#search input[type="search"]',
		'form#search input[type="text"]',
		'form#search input:not([type])',
		'form[action*="search"] input[type="search"]',
		'form[action*="search"] input[type="text"]',
		'form[action*="search"] input:not([type])',
		'input[type="search"]',
		'input[name="q"]',
		'input[name="search"]',
		'input[name*="search"]',
	];
		
	document.addEventListener('keypress', function(event){
		if(!event.ctrlKey || event.keyCode !== 6){
			// Unknown keystroke - ignore
			return;
		}
	
		for(var i = 0; i < selectors.length; i++){
			var elements	= document.querySelectorAll(selectors[i]);
			if(elements.length === 0){
				continue;
			}

			// Found search input - focus
			elements[0].focus();
			elements[0].select();
			break;
		}
	});
}());
