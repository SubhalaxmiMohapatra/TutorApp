// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
import { Big } from "big.js";

// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * @returns {Promise.<void>}
 */
export async function disable_login_enable_logout() {
	// BEGIN USER CODE
	// Here login is disabled and logout is enabled.
	var logoutElem = document.getElementsByClassName("logout")[0];
	logoutElem.setAttribute("Style" , "pointer-events:auto;");

	var loginElem = document.getElementsByClassName("login")[0];
	loginElem.setAttribute("Style" , "pointer-events:none;");
		
	// END USER CODE
}
