// This file was generated by Mendix Studio Pro.
//
// WARNING: Code you write here will be lost the next time you deploy the project.

package aqsessiontimeout.proxies.constants;

import com.mendix.core.Core;

public class Constants
{
	// These are the constants for the AqSessionTimeout module

	/**
	* This constant will be used to to set the session timeout counter after the timeout notification pop-up is displayed to the user. Please enter time in minutes. E.g. enter '1' for 1 minute
	*/
	public static java.lang.Long getLogOutMinutesAfterTimeoutWarning()
	{
		return (java.lang.Long)Core.getConfiguration().getConstantValue("AqSessionTimeout.LogOutMinutesAfterTimeoutWarning");
	}
}