define([], function () {

    /**
     * Properties Panel
     * 
     */
    
    var prop = 
        {

			type: "items",
			component: "accordion",
			items: {
                //Extension Settings
                customSettings:{
                    component: "expandable-items",
                    label: "Settings",
    
                    items: {  
                        //Variables Settings : filter variables to delete
                       customSettings : {
                            type :"items",
                            label: "Variables Settings",
                            items:{
								buttonSetName:{
									ref: 		"buttonSetName",
									label:  	"Button name",
									type: 		"string"
								},
								selectionToGet: {
									type: "string",
									component: "dropdown",
									label: "Selection",
									ref: "selectionToGet",
									options: [{
										value: "S",
										label: "Selected"
									}, {
										value: "O",
										label: "Option"
									},
									{
										value: "A",
										label: "Alternative"
									},
									{
										value: "X",
										label: "Excluded"
									},
									{
										value: "XS",
										label: "Excluded selected"
									},
									{
										value: "XL",
										label: "Excluded locked"
									},
									{
										value: "L",
										label: "Locked"
									},
									{
										value: "D",
										label: "Deselected"
									}],
									defaultValue: "S"
								},
								colorForButton: {
									type: "string",
									component: "dropdown",
									label: "Color",
									ref: "colorForButton",
									options: [{
										value: "lui-button",
										label: "Default"
									}, {
										value: "lui-button  lui-button--info",
										label: "Blue"
									},
									{
										value: "lui-button  lui-button--danger",
										label: "Red"
									},
									{
										value: "lui-button  lui-button--warning",
										label: "Orange"
									},
									{
										value: "lui-button  lui-button--success",
										label: "Green"
									}],
									defaultValue: "lui-button"
								}
							}
                            
                        }
                    }
                },
				settings: {
					uses: "settings"
				}
			}
        }
        // ,
		// support : {
		// 	snapshot: true,
		// 	export: true,
        // 	exportData : false
        // };
    
    return prop;
});