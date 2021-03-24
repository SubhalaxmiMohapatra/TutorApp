// This file was generated by Mendix Studio Pro.
//
// WARNING: Code you write here will be lost the next time you deploy the project.

package myfirstmodule.proxies;

public class Student_Reg extends system.proxies.Image
{
	/**
	 * Internal name of this entity
	 */
	public static final java.lang.String entityName = "MyFirstModule.Student_Reg";

	/**
	 * Enum describing members of this entity
	 */
	public enum MemberNames
	{
		Student_ID("Student_ID"),
		Student_Name("Student_Name"),
		Student_Email("Student_Email"),
		DOB("DOB"),
		Student_Password("Student_Password"),
		Country("Country"),
		PublicThumbnailPath("PublicThumbnailPath"),
		FileID("FileID"),
		Name("Name"),
		DeleteAfterDownload("DeleteAfterDownload"),
		Contents("Contents"),
		HasContents("HasContents"),
		Size("Size");

		private java.lang.String metaName;

		MemberNames(java.lang.String s)
		{
			metaName = s;
		}

		@java.lang.Override
		public java.lang.String toString()
		{
			return metaName;
		}
	}

	public Student_Reg(com.mendix.systemwideinterfaces.core.IContext context)
	{
		this(context, com.mendix.core.Core.instantiate(context, "MyFirstModule.Student_Reg"));
	}

	protected Student_Reg(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixObject student_RegMendixObject)
	{
		super(context, student_RegMendixObject);
		if (!com.mendix.core.Core.isSubClassOf("MyFirstModule.Student_Reg", student_RegMendixObject.getType()))
			throw new java.lang.IllegalArgumentException("The given object is not a MyFirstModule.Student_Reg");
	}

	/**
	 * @deprecated Use 'Student_Reg.load(IContext, IMendixIdentifier)' instead.
	 */
	@java.lang.Deprecated
	public static myfirstmodule.proxies.Student_Reg initialize(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixIdentifier mendixIdentifier) throws com.mendix.core.CoreException
	{
		return myfirstmodule.proxies.Student_Reg.load(context, mendixIdentifier);
	}

	/**
	 * Initialize a proxy using context (recommended). This context will be used for security checking when the get- and set-methods without context parameters are called.
	 * The get- and set-methods with context parameter should be used when for instance sudo access is necessary (IContext.createSudoClone() can be used to obtain sudo access).
	 */
	public static myfirstmodule.proxies.Student_Reg initialize(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixObject mendixObject)
	{
		return new myfirstmodule.proxies.Student_Reg(context, mendixObject);
	}

	public static myfirstmodule.proxies.Student_Reg load(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixIdentifier mendixIdentifier) throws com.mendix.core.CoreException
	{
		com.mendix.systemwideinterfaces.core.IMendixObject mendixObject = com.mendix.core.Core.retrieveId(context, mendixIdentifier);
		return myfirstmodule.proxies.Student_Reg.initialize(context, mendixObject);
	}

	public static java.util.List<myfirstmodule.proxies.Student_Reg> load(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String xpathConstraint) throws com.mendix.core.CoreException
	{
		java.util.List<myfirstmodule.proxies.Student_Reg> result = new java.util.ArrayList<myfirstmodule.proxies.Student_Reg>();
		for (com.mendix.systemwideinterfaces.core.IMendixObject obj : com.mendix.core.Core.retrieveXPathQuery(context, "//MyFirstModule.Student_Reg" + xpathConstraint))
			result.add(myfirstmodule.proxies.Student_Reg.initialize(context, obj));
		return result;
	}

	/**
	 * @return value of Student_ID
	 */
	public final java.lang.Long getStudent_ID()
	{
		return getStudent_ID(getContext());
	}

	/**
	 * @param context
	 * @return value of Student_ID
	 */
	public final java.lang.Long getStudent_ID(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.Long) getMendixObject().getValue(context, MemberNames.Student_ID.toString());
	}

	/**
	 * Set value of Student_ID
	 * @param student_id
	 */
	public final void setStudent_ID(java.lang.Long student_id)
	{
		setStudent_ID(getContext(), student_id);
	}

	/**
	 * Set value of Student_ID
	 * @param context
	 * @param student_id
	 */
	public final void setStudent_ID(com.mendix.systemwideinterfaces.core.IContext context, java.lang.Long student_id)
	{
		getMendixObject().setValue(context, MemberNames.Student_ID.toString(), student_id);
	}

	/**
	 * @return value of Student_Name
	 */
	public final java.lang.String getStudent_Name()
	{
		return getStudent_Name(getContext());
	}

	/**
	 * @param context
	 * @return value of Student_Name
	 */
	public final java.lang.String getStudent_Name(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.Student_Name.toString());
	}

	/**
	 * Set value of Student_Name
	 * @param student_name
	 */
	public final void setStudent_Name(java.lang.String student_name)
	{
		setStudent_Name(getContext(), student_name);
	}

	/**
	 * Set value of Student_Name
	 * @param context
	 * @param student_name
	 */
	public final void setStudent_Name(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String student_name)
	{
		getMendixObject().setValue(context, MemberNames.Student_Name.toString(), student_name);
	}

	/**
	 * @return value of Student_Email
	 */
	public final java.lang.String getStudent_Email()
	{
		return getStudent_Email(getContext());
	}

	/**
	 * @param context
	 * @return value of Student_Email
	 */
	public final java.lang.String getStudent_Email(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.Student_Email.toString());
	}

	/**
	 * Set value of Student_Email
	 * @param student_email
	 */
	public final void setStudent_Email(java.lang.String student_email)
	{
		setStudent_Email(getContext(), student_email);
	}

	/**
	 * Set value of Student_Email
	 * @param context
	 * @param student_email
	 */
	public final void setStudent_Email(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String student_email)
	{
		getMendixObject().setValue(context, MemberNames.Student_Email.toString(), student_email);
	}

	/**
	 * @return value of DOB
	 */
	public final java.util.Date getDOB()
	{
		return getDOB(getContext());
	}

	/**
	 * @param context
	 * @return value of DOB
	 */
	public final java.util.Date getDOB(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.util.Date) getMendixObject().getValue(context, MemberNames.DOB.toString());
	}

	/**
	 * Set value of DOB
	 * @param dob
	 */
	public final void setDOB(java.util.Date dob)
	{
		setDOB(getContext(), dob);
	}

	/**
	 * Set value of DOB
	 * @param context
	 * @param dob
	 */
	public final void setDOB(com.mendix.systemwideinterfaces.core.IContext context, java.util.Date dob)
	{
		getMendixObject().setValue(context, MemberNames.DOB.toString(), dob);
	}

	/**
	 * @return value of Student_Password
	 */
	public final java.lang.String getStudent_Password()
	{
		return getStudent_Password(getContext());
	}

	/**
	 * @param context
	 * @return value of Student_Password
	 */
	public final java.lang.String getStudent_Password(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.Student_Password.toString());
	}

	/**
	 * Set value of Student_Password
	 * @param student_password
	 */
	public final void setStudent_Password(java.lang.String student_password)
	{
		setStudent_Password(getContext(), student_password);
	}

	/**
	 * Set value of Student_Password
	 * @param context
	 * @param student_password
	 */
	public final void setStudent_Password(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String student_password)
	{
		getMendixObject().setValue(context, MemberNames.Student_Password.toString(), student_password);
	}

	/**
	 * @return value of Country
	 */
	public final java.lang.String getCountry()
	{
		return getCountry(getContext());
	}

	/**
	 * @param context
	 * @return value of Country
	 */
	public final java.lang.String getCountry(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.Country.toString());
	}

	/**
	 * Set value of Country
	 * @param country
	 */
	public final void setCountry(java.lang.String country)
	{
		setCountry(getContext(), country);
	}

	/**
	 * Set value of Country
	 * @param context
	 * @param country
	 */
	public final void setCountry(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String country)
	{
		getMendixObject().setValue(context, MemberNames.Country.toString(), country);
	}

	@java.lang.Override
	public boolean equals(Object obj)
	{
		if (obj == this)
			return true;

		if (obj != null && getClass().equals(obj.getClass()))
		{
			final myfirstmodule.proxies.Student_Reg that = (myfirstmodule.proxies.Student_Reg) obj;
			return getMendixObject().equals(that.getMendixObject());
		}
		return false;
	}

	@java.lang.Override
	public int hashCode()
	{
		return getMendixObject().hashCode();
	}

	/**
	 * @return String name of this class
	 */
	public static java.lang.String getType()
	{
		return "MyFirstModule.Student_Reg";
	}

	/**
	 * @return String GUID from this object, format: ID_0000000000
	 * @deprecated Use getMendixObject().getId().toLong() to get a unique identifier for this object.
	 */
	@java.lang.Override
	@java.lang.Deprecated
	public java.lang.String getGUID()
	{
		return "ID_" + getMendixObject().getId().toLong();
	}
}