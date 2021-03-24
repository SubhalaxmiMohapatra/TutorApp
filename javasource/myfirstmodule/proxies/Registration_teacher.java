// This file was generated by Mendix Studio Pro.
//
// WARNING: Code you write here will be lost the next time you deploy the project.

package myfirstmodule.proxies;

public class Registration_teacher extends system.proxies.Image
{
	/**
	 * Internal name of this entity
	 */
	public static final java.lang.String entityName = "MyFirstModule.Registration_teacher";

	/**
	 * Enum describing members of this entity
	 */
	public enum MemberNames
	{
		Instructor_Name("Instructor_Name"),
		Email("Email"),
		Password("Password"),
		Teaching_Experence("Teaching_Experence"),
		Country_Name("Country_Name"),
		Confrm_Password("Confrm_Password"),
		id_number("id_number"),
		PublicThumbnailPath("PublicThumbnailPath"),
		FileID("FileID"),
		Name("Name"),
		DeleteAfterDownload("DeleteAfterDownload"),
		Contents("Contents"),
		HasContents("HasContents"),
		Size("Size"),
		Registration_teacher_course_upload("MyFirstModule.Registration_teacher_course_upload");

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

	public Registration_teacher(com.mendix.systemwideinterfaces.core.IContext context)
	{
		this(context, com.mendix.core.Core.instantiate(context, "MyFirstModule.Registration_teacher"));
	}

	protected Registration_teacher(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixObject registration_teacherMendixObject)
	{
		super(context, registration_teacherMendixObject);
		if (!com.mendix.core.Core.isSubClassOf("MyFirstModule.Registration_teacher", registration_teacherMendixObject.getType()))
			throw new java.lang.IllegalArgumentException("The given object is not a MyFirstModule.Registration_teacher");
	}

	/**
	 * @deprecated Use 'Registration_teacher.load(IContext, IMendixIdentifier)' instead.
	 */
	@java.lang.Deprecated
	public static myfirstmodule.proxies.Registration_teacher initialize(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixIdentifier mendixIdentifier) throws com.mendix.core.CoreException
	{
		return myfirstmodule.proxies.Registration_teacher.load(context, mendixIdentifier);
	}

	/**
	 * Initialize a proxy using context (recommended). This context will be used for security checking when the get- and set-methods without context parameters are called.
	 * The get- and set-methods with context parameter should be used when for instance sudo access is necessary (IContext.createSudoClone() can be used to obtain sudo access).
	 */
	public static myfirstmodule.proxies.Registration_teacher initialize(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixObject mendixObject)
	{
		return new myfirstmodule.proxies.Registration_teacher(context, mendixObject);
	}

	public static myfirstmodule.proxies.Registration_teacher load(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixIdentifier mendixIdentifier) throws com.mendix.core.CoreException
	{
		com.mendix.systemwideinterfaces.core.IMendixObject mendixObject = com.mendix.core.Core.retrieveId(context, mendixIdentifier);
		return myfirstmodule.proxies.Registration_teacher.initialize(context, mendixObject);
	}

	public static java.util.List<myfirstmodule.proxies.Registration_teacher> load(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String xpathConstraint) throws com.mendix.core.CoreException
	{
		java.util.List<myfirstmodule.proxies.Registration_teacher> result = new java.util.ArrayList<myfirstmodule.proxies.Registration_teacher>();
		for (com.mendix.systemwideinterfaces.core.IMendixObject obj : com.mendix.core.Core.retrieveXPathQuery(context, "//MyFirstModule.Registration_teacher" + xpathConstraint))
			result.add(myfirstmodule.proxies.Registration_teacher.initialize(context, obj));
		return result;
	}

	/**
	 * @return value of Instructor_Name
	 */
	public final java.lang.String getInstructor_Name()
	{
		return getInstructor_Name(getContext());
	}

	/**
	 * @param context
	 * @return value of Instructor_Name
	 */
	public final java.lang.String getInstructor_Name(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.Instructor_Name.toString());
	}

	/**
	 * Set value of Instructor_Name
	 * @param instructor_name
	 */
	public final void setInstructor_Name(java.lang.String instructor_name)
	{
		setInstructor_Name(getContext(), instructor_name);
	}

	/**
	 * Set value of Instructor_Name
	 * @param context
	 * @param instructor_name
	 */
	public final void setInstructor_Name(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String instructor_name)
	{
		getMendixObject().setValue(context, MemberNames.Instructor_Name.toString(), instructor_name);
	}

	/**
	 * @return value of Email
	 */
	public final java.lang.String getEmail()
	{
		return getEmail(getContext());
	}

	/**
	 * @param context
	 * @return value of Email
	 */
	public final java.lang.String getEmail(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.Email.toString());
	}

	/**
	 * Set value of Email
	 * @param email
	 */
	public final void setEmail(java.lang.String email)
	{
		setEmail(getContext(), email);
	}

	/**
	 * Set value of Email
	 * @param context
	 * @param email
	 */
	public final void setEmail(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String email)
	{
		getMendixObject().setValue(context, MemberNames.Email.toString(), email);
	}

	/**
	 * @return value of Password
	 */
	public final java.lang.String getPassword()
	{
		return getPassword(getContext());
	}

	/**
	 * @param context
	 * @return value of Password
	 */
	public final java.lang.String getPassword(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.Password.toString());
	}

	/**
	 * Set value of Password
	 * @param password
	 */
	public final void setPassword(java.lang.String password)
	{
		setPassword(getContext(), password);
	}

	/**
	 * Set value of Password
	 * @param context
	 * @param password
	 */
	public final void setPassword(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String password)
	{
		getMendixObject().setValue(context, MemberNames.Password.toString(), password);
	}

	/**
	 * @return value of Teaching_Experence
	 */
	public final java.lang.String getTeaching_Experence()
	{
		return getTeaching_Experence(getContext());
	}

	/**
	 * @param context
	 * @return value of Teaching_Experence
	 */
	public final java.lang.String getTeaching_Experence(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.Teaching_Experence.toString());
	}

	/**
	 * Set value of Teaching_Experence
	 * @param teaching_experence
	 */
	public final void setTeaching_Experence(java.lang.String teaching_experence)
	{
		setTeaching_Experence(getContext(), teaching_experence);
	}

	/**
	 * Set value of Teaching_Experence
	 * @param context
	 * @param teaching_experence
	 */
	public final void setTeaching_Experence(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String teaching_experence)
	{
		getMendixObject().setValue(context, MemberNames.Teaching_Experence.toString(), teaching_experence);
	}

	/**
	 * @return value of Country_Name
	 */
	public final java.lang.String getCountry_Name()
	{
		return getCountry_Name(getContext());
	}

	/**
	 * @param context
	 * @return value of Country_Name
	 */
	public final java.lang.String getCountry_Name(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.Country_Name.toString());
	}

	/**
	 * Set value of Country_Name
	 * @param country_name
	 */
	public final void setCountry_Name(java.lang.String country_name)
	{
		setCountry_Name(getContext(), country_name);
	}

	/**
	 * Set value of Country_Name
	 * @param context
	 * @param country_name
	 */
	public final void setCountry_Name(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String country_name)
	{
		getMendixObject().setValue(context, MemberNames.Country_Name.toString(), country_name);
	}

	/**
	 * @return value of Confrm_Password
	 */
	public final java.lang.String getConfrm_Password()
	{
		return getConfrm_Password(getContext());
	}

	/**
	 * @param context
	 * @return value of Confrm_Password
	 */
	public final java.lang.String getConfrm_Password(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.Confrm_Password.toString());
	}

	/**
	 * Set value of Confrm_Password
	 * @param confrm_password
	 */
	public final void setConfrm_Password(java.lang.String confrm_password)
	{
		setConfrm_Password(getContext(), confrm_password);
	}

	/**
	 * Set value of Confrm_Password
	 * @param context
	 * @param confrm_password
	 */
	public final void setConfrm_Password(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String confrm_password)
	{
		getMendixObject().setValue(context, MemberNames.Confrm_Password.toString(), confrm_password);
	}

	/**
	 * @return value of id_number
	 */
	public final java.lang.Integer getid_number()
	{
		return getid_number(getContext());
	}

	/**
	 * @param context
	 * @return value of id_number
	 */
	public final java.lang.Integer getid_number(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.Integer) getMendixObject().getValue(context, MemberNames.id_number.toString());
	}

	/**
	 * Set value of id_number
	 * @param id_number
	 */
	public final void setid_number(java.lang.Integer id_number)
	{
		setid_number(getContext(), id_number);
	}

	/**
	 * Set value of id_number
	 * @param context
	 * @param id_number
	 */
	public final void setid_number(com.mendix.systemwideinterfaces.core.IContext context, java.lang.Integer id_number)
	{
		getMendixObject().setValue(context, MemberNames.id_number.toString(), id_number);
	}

	/**
	 * @return value of Registration_teacher_course_upload
	 */
	public final myfirstmodule.proxies.course_upload getRegistration_teacher_course_upload() throws com.mendix.core.CoreException
	{
		return getRegistration_teacher_course_upload(getContext());
	}

	/**
	 * @param context
	 * @return value of Registration_teacher_course_upload
	 */
	public final myfirstmodule.proxies.course_upload getRegistration_teacher_course_upload(com.mendix.systemwideinterfaces.core.IContext context) throws com.mendix.core.CoreException
	{
		myfirstmodule.proxies.course_upload result = null;
		com.mendix.systemwideinterfaces.core.IMendixIdentifier identifier = getMendixObject().getValue(context, MemberNames.Registration_teacher_course_upload.toString());
		if (identifier != null)
			result = myfirstmodule.proxies.course_upload.load(context, identifier);
		return result;
	}

	/**
	 * Set value of Registration_teacher_course_upload
	 * @param registration_teacher_course_upload
	 */
	public final void setRegistration_teacher_course_upload(myfirstmodule.proxies.course_upload registration_teacher_course_upload)
	{
		setRegistration_teacher_course_upload(getContext(), registration_teacher_course_upload);
	}

	/**
	 * Set value of Registration_teacher_course_upload
	 * @param context
	 * @param registration_teacher_course_upload
	 */
	public final void setRegistration_teacher_course_upload(com.mendix.systemwideinterfaces.core.IContext context, myfirstmodule.proxies.course_upload registration_teacher_course_upload)
	{
		if (registration_teacher_course_upload == null)
			getMendixObject().setValue(context, MemberNames.Registration_teacher_course_upload.toString(), null);
		else
			getMendixObject().setValue(context, MemberNames.Registration_teacher_course_upload.toString(), registration_teacher_course_upload.getMendixObject().getId());
	}

	@java.lang.Override
	public boolean equals(Object obj)
	{
		if (obj == this)
			return true;

		if (obj != null && getClass().equals(obj.getClass()))
		{
			final myfirstmodule.proxies.Registration_teacher that = (myfirstmodule.proxies.Registration_teacher) obj;
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
		return "MyFirstModule.Registration_teacher";
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
