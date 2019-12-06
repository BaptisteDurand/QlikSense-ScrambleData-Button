'use strict';

define( [ 
	'jquery',
	'qlik',
	'./lib/js/common',
	'./lib/js/actions',
	'./lib/js/properties'
],
function ( $, qlik, common, actions, properties) {
	//'use strict';
	
	return {

		initialProperties: properties,
		definition : properties,

		paint: function ( $element,layout ) {

			// re-init de l'élément HTML
			$element.empty();

			// Get current app
			let app = qlik.currApp(this);
			// Get Current Engines Session
			let qix = this.backendApi.model;

			let $buttonName = ' (Apple Pie) Scramble';
			if(layout.buttonSetName){$buttonName = layout.buttonSetName};
			let $buttonClass = 'lui-button';
			if(layout.colorForButton){$buttonClass = layout.colorForButton};

			//Create Button
			let $buttonSubmit = createElement('button', $buttonClass, '' , $buttonName);

			//System Field : $Fields contains the list of app fields.
			let fieldsSource = '$Field';
			let fieldToScramble = app.field(fieldsSource).getData();

			onSubmit($buttonSubmit, fieldToScramble, qix, layout.selectionToGet);
			// Create Container
			let $buttonContainer = createElement('div');
			$buttonContainer.appendChild($buttonSubmit);	
			
			//display container
			$element.append($buttonContainer);

			return qlik.Promise.resolve();
		}
	};
} );
