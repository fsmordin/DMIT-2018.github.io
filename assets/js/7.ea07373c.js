(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{281:function(e,t,i){"use strict";i.r(t);var n=i(0),s=Object(n.a)({},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content"},[e._m(0),e._v(" "),i("p",[e._v("ASP.NET Identity is available through two NuGet packages.")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),i("dl",[i("dt",[e._v("ApplicationUser")]),e._v(" "),i("dd",[e._v("This is an entity class that represents a user in the system. It inherits from "),i("code",[e._v("IdentityUser")]),e._v(" which provides the core implementation of the "),i("a",{attrs:{href:"http://msdn.microsoft.com/en-us/library/microsoft.aspnet.identity.iuser(v=vs.108).aspx",target:"_blank",rel:"noopener noreferrer"}},[e._v("IUser"),i("OutboundLink")],1),e._v(" interface in the Identity Core.")]),e._v(" "),i("dt",[e._v("ApplicationDbContext")]),e._v(" "),i("dd",[e._v("This class acts as the database context class (DAL) and inherits from "),i("a",{attrs:{href:"http://msdn.microsoft.com/en-us/library/dn468176(v=vs.108).aspx",target:"_blank",rel:"noopener noreferrer"}},[e._v("IdentityDbContext"),i("ApplicationUser",[i("OutboundLink")],1)],1),e._v(". This class has a default constructor which specifies the connection string name to use (DefaultConnection) in the web.config file.")]),e._v(" "),i("dt",[e._v("UserManager")]),e._v(" "),i("dd",[e._v("The UserManager class inherits from "),i("a",{attrs:{href:"http://msdn.microsoft.com/en-us/library/dn468199(v=vs.108).aspx",target:"_blank",rel:"noopener noreferrer"}},[e._v("UserManager"),i("ApplilcationUser",[i("OutboundLink")],1)],1),e._v(", specifying a default dependency on the "),i("code",[e._v("ApplicationDbContext")]),e._v(". The UserManager's base class implementation provides the majority of the functionality around managing users and security roles for your application, providing Business Logic Layer functionality.")])]),e._v(" "),i("p",[e._v("The other classes in the IdentityModel.cs file are helper classes whose purpose is to help integrate the Identity classes with OWIN and the HTTP pipeline.")])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"asp-net-identity"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#asp-net-identity","aria-hidden":"true"}},[this._v("#")]),this._v(" ASP.NET Identity")])},function(){var e=this.$createElement,t=this._self._c||e;return t("dl",[t("dt",[this._v("Microsoft ASP.NET Identity Core")]),this._v(" "),t("dd",[this._v("This contains the core interfaces for ASP.NET Identity, with minimal implementations. This package has no dependencies.")]),this._v(" "),t("dt",[this._v("Microsoft ASP.NET Identity EntityFramework")]),this._v(" "),t("dd",[this._v("This package provides an implementation of ASP.NET Identity that uses the Entity Framework. As such, this package has dependencies on both the Microsoft ASP.NET Identity Core and the Entity Framework.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"identity-and-owin-in-vs2013-web-site-template"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#identity-and-owin-in-vs2013-web-site-template","aria-hidden":"true"}},[this._v("#")]),this._v(" Identity and Owin in VS2013 Web Site Template")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("ASP.NET Identity EntityFramework and OWIN are included as part of the default template for an ASP.NET Web Forms web site in Visual Studio 2013. The core aspects of Identity are in the "),t("code",[this._v("~/App_Code/IdentityModel.cs")]),this._v(" but are also referenced in the pages under the "),t("code",[this._v("~/Account/")]),this._v(" folder. The classes in IdentityModel.cs that build on ASP.NET Identity are:")])}],!1,null,null,null);t.default=s.exports}}]);