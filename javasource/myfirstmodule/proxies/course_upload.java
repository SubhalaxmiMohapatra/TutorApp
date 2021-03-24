// This file was generated by Mendix Studio Pro.
//
// WARNING: Code you write here will be lost the next time you deploy the project.

package myfirstmodule.proxies;

public class course_upload extends system.proxies.FileDocument
{
	/**
	 * Internal name of this entity
	 */
	public static final java.lang.String entityName = "MyFirstModule.course_upload";

	/**
	 * Enum describing members of this entity
	 */
	public enum MemberNames
	{
		CourseName("CourseName"),
		InstructorName("InstructorName"),
		CourseDescription("CourseDescription"),
		Video("Video"),
		IsWishlisted("IsWishlisted"),
		id_number("id_number"),
		FileID("FileID"),
		Name("Name"),
		DeleteAfterDownload("DeleteAfterDownload"),
		Contents("Contents"),
		HasContents("HasContents"),
		Size("Size"),
		course_upload_Image("MyFirstModule.course_upload_Image");

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

	public course_upload(com.mendix.systemwideinterfaces.core.IContext context)
	{
		this(context, com.mendix.core.Core.instantiate(context, "MyFirstModule.course_upload"));
	}

	protected course_upload(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixObject course_uploadMendixObject)
	{
		super(context, course_uploadMendixObject);
		if (!com.mendix.core.Core.isSubClassOf("MyFirstModule.course_upload", course_uploadMendixObject.getType()))
			throw new java.lang.IllegalArgumentException("The given object is not a MyFirstModule.course_upload");
	}

	/**
	 * @deprecated Use 'course_upload.load(IContext, IMendixIdentifier)' instead.
	 */
	@java.lang.Deprecated
	public static myfirstmodule.proxies.course_upload initialize(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixIdentifier mendixIdentifier) throws com.mendix.core.CoreException
	{
		return myfirstmodule.proxies.course_upload.load(context, mendixIdentifier);
	}

	/**
	 * Initialize a proxy using context (recommended). This context will be used for security checking when the get- and set-methods without context parameters are called.
	 * The get- and set-methods with context parameter should be used when for instance sudo access is necessary (IContext.createSudoClone() can be used to obtain sudo access).
	 */
	public static myfirstmodule.proxies.course_upload initialize(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixObject mendixObject)
	{
		return new myfirstmodule.proxies.course_upload(context, mendixObject);
	}

	public static myfirstmodule.proxies.course_upload load(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixIdentifier mendixIdentifier) throws com.mendix.core.CoreException
	{
		com.mendix.systemwideinterfaces.core.IMendixObject mendixObject = com.mendix.core.Core.retrieveId(context, mendixIdentifier);
		return myfirstmodule.proxies.course_upload.initialize(context, mendixObject);
	}

	public static java.util.List<myfirstmodule.proxies.course_upload> load(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String xpathConstraint) throws com.mendix.core.CoreException
	{
		java.util.List<myfirstmodule.proxies.course_upload> result = new java.util.ArrayList<myfirstmodule.proxies.course_upload>();
		for (com.mendix.systemwideinterfaces.core.IMendixObject obj : com.mendix.core.Core.retrieveXPathQuery(context, "//MyFirstModule.course_upload" + xpathConstraint))
			result.add(myfirstmodule.proxies.course_upload.initialize(context, obj));
		return result;
	}

	/**
	 * @return value of CourseName
	 */
	public final java.lang.String getCourseName()
	{
		return getCourseName(getContext());
	}

	/**
	 * @param context
	 * @return value of CourseName
	 */
	public final java.lang.String getCourseName(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.CourseName.toString());
	}

	/**
	 * Set value of CourseName
	 * @param coursename
	 */
	public final void setCourseName(java.lang.String coursename)
	{
		setCourseName(getContext(), coursename);
	}

	/**
	 * Set value of CourseName
	 * @param context
	 * @param coursename
	 */
	public final void setCourseName(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String coursename)
	{
		getMendixObject().setValue(context, MemberNames.CourseName.toString(), coursename);
	}

	/**
	 * @return value of InstructorName
	 */
	public final java.lang.String getInstructorName()
	{
		return getInstructorName(getContext());
	}

	/**
	 * @param context
	 * @return value of InstructorName
	 */
	public final java.lang.String getInstructorName(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.InstructorName.toString());
	}

	/**
	 * Set value of InstructorName
	 * @param instructorname
	 */
	public final void setInstructorName(java.lang.String instructorname)
	{
		setInstructorName(getContext(), instructorname);
	}

	/**
	 * Set value of InstructorName
	 * @param context
	 * @param instructorname
	 */
	public final void setInstructorName(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String instructorname)
	{
		getMendixObject().setValue(context, MemberNames.InstructorName.toString(), instructorname);
	}

	/**
	 * @return value of CourseDescription
	 */
	public final java.lang.String getCourseDescription()
	{
		return getCourseDescription(getContext());
	}

	/**
	 * @param context
	 * @return value of CourseDescription
	 */
	public final java.lang.String getCourseDescription(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.CourseDescription.toString());
	}

	/**
	 * Set value of CourseDescription
	 * @param coursedescription
	 */
	public final void setCourseDescription(java.lang.String coursedescription)
	{
		setCourseDescription(getContext(), coursedescription);
	}

	/**
	 * Set value of CourseDescription
	 * @param context
	 * @param coursedescription
	 */
	public final void setCourseDescription(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String coursedescription)
	{
		getMendixObject().setValue(context, MemberNames.CourseDescription.toString(), coursedescription);
	}

	/**
	 * @return value of Video
	 */
	public final java.lang.String getVideo()
	{
		return getVideo(getContext());
	}

	/**
	 * @param context
	 * @return value of Video
	 */
	public final java.lang.String getVideo(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.Video.toString());
	}

	/**
	 * Set value of Video
	 * @param video
	 */
	public final void setVideo(java.lang.String video)
	{
		setVideo(getContext(), video);
	}

	/**
	 * Set value of Video
	 * @param context
	 * @param video
	 */
	public final void setVideo(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String video)
	{
		getMendixObject().setValue(context, MemberNames.Video.toString(), video);
	}

	/**
	 * @return value of IsWishlisted
	 */
	public final java.lang.Boolean getIsWishlisted()
	{
		return getIsWishlisted(getContext());
	}

	/**
	 * @param context
	 * @return value of IsWishlisted
	 */
	public final java.lang.Boolean getIsWishlisted(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.Boolean) getMendixObject().getValue(context, MemberNames.IsWishlisted.toString());
	}

	/**
	 * Set value of IsWishlisted
	 * @param iswishlisted
	 */
	public final void setIsWishlisted(java.lang.Boolean iswishlisted)
	{
		setIsWishlisted(getContext(), iswishlisted);
	}

	/**
	 * Set value of IsWishlisted
	 * @param context
	 * @param iswishlisted
	 */
	public final void setIsWishlisted(com.mendix.systemwideinterfaces.core.IContext context, java.lang.Boolean iswishlisted)
	{
		getMendixObject().setValue(context, MemberNames.IsWishlisted.toString(), iswishlisted);
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
	 * @return value of course_upload_Image
	 */
	public final system.proxies.Image getcourse_upload_Image() throws com.mendix.core.CoreException
	{
		return getcourse_upload_Image(getContext());
	}

	/**
	 * @param context
	 * @return value of course_upload_Image
	 */
	public final system.proxies.Image getcourse_upload_Image(com.mendix.systemwideinterfaces.core.IContext context) throws com.mendix.core.CoreException
	{
		system.proxies.Image result = null;
		com.mendix.systemwideinterfaces.core.IMendixIdentifier identifier = getMendixObject().getValue(context, MemberNames.course_upload_Image.toString());
		if (identifier != null)
			result = system.proxies.Image.load(context, identifier);
		return result;
	}

	/**
	 * Set value of course_upload_Image
	 * @param course_upload_image
	 */
	public final void setcourse_upload_Image(system.proxies.Image course_upload_image)
	{
		setcourse_upload_Image(getContext(), course_upload_image);
	}

	/**
	 * Set value of course_upload_Image
	 * @param context
	 * @param course_upload_image
	 */
	public final void setcourse_upload_Image(com.mendix.systemwideinterfaces.core.IContext context, system.proxies.Image course_upload_image)
	{
		if (course_upload_image == null)
			getMendixObject().setValue(context, MemberNames.course_upload_Image.toString(), null);
		else
			getMendixObject().setValue(context, MemberNames.course_upload_Image.toString(), course_upload_image.getMendixObject().getId());
	}

	@java.lang.Override
	public boolean equals(Object obj)
	{
		if (obj == this)
			return true;

		if (obj != null && getClass().equals(obj.getClass()))
		{
			final myfirstmodule.proxies.course_upload that = (myfirstmodule.proxies.course_upload) obj;
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
		return "MyFirstModule.course_upload";
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
