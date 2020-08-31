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

			let $buttonNameScrambling = 'Scramble Data';
			//if(layout.buttonSetName){$buttonNameScrambling = layout.buttonSetName};
			let $buttonClass = 'lui-button';
			if(layout.colorForButton){$buttonClass = layout.colorForButton};
			let $buttonNameSave = 'Save a copy of the app';

			//New App Name
			let $NewAppName = 'New Scrambled App';
			if(layout.newAppName){$NewAppName = layout.newAppName};

			//Description Text			
			let buttonScrambleDescription = 'Scramble Data of choosen fields ($Field Selector)';
			let buttonSaveDescription = 'Ok with Scrambling? Save a copy of the app (New Name : '+$NewAppName+')';
			
			//Create Buttons
			let $buttonSubmit = createElement('button', $buttonClass, '' , $buttonNameScrambling);
			let $buttonSave = createElement('button', $buttonClass, '' , $buttonNameSave);

			//Buttons Explanations
			let $buttonScrambleDescription = createElement('div','lui-text-default','margin : 5px 5px 5px 5px',buttonScrambleDescription);
			let $buttonSaveDescription = createElement('div','lui-text-default','margin : 5px 5px 5px 5px',buttonSaveDescription);

			//System Field : $Fields contains the list of app fields.
			let fieldsSource = '$Field';
			onSubmitScrambling($buttonSubmit, app, fieldsSource, qix, layout.selectionToGet);
			onSubmitSave($buttonSave, app, $NewAppName, qix, qlik);

			// Create Container
			let $buttonContainer = createElement('div');
			$buttonContainer.appendChild($buttonScrambleDescription);
			$buttonContainer.appendChild($buttonSubmit);
			$buttonContainer.appendChild($buttonSaveDescription);
			$buttonContainer.appendChild($buttonSave);	
			
			//display container
			$element.append($buttonContainer);

			return qlik.Promise.resolve();
		}
	};
} );
