(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{318:function(e,t,a){"use strict";a.r(t);var n=a(0),o=Object(n.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[e._m(0),a("p",[e._v("A "),a("a",{attrs:{href:"http://msdn.microsoft.com/en-us/library/vstudio/system.web.ui.webcontrols.listview(v=vs.100).aspx#introduction",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[e._v("ListView")]),a("OutboundLink")],1),e._v(" control provides a high flexiblity in rendering its collection of data, but with that flexibility comes more responsibility on the part of the developer to specify how that rendering should take place. A ListView supports "),a("em",[e._v("Create")]),e._v(", "),a("em",[e._v("Read")]),e._v(", "),a("em",[e._v("Update")]),e._v(", and "),a("em",[e._v("Delete")]),e._v(" functionality, so it is in many respects an ideal data-bound control to use for many situations.")]),e._m(1),a("p",[e._v("The ListView uses a set of templates to control the rendering of its collection of data. For details on each of the templates and links on how to use them, see the MSDN documentation on the "),a("a",{attrs:{href:"http://msdn.microsoft.com/en-us/library/vstudio/system.web.ui.webcontrols.listview(v=vs.100).aspx#templates",target:"_blank",rel:"noopener noreferrer"}},[e._v("ListView Templates"),a("OutboundLink")],1),e._v(".")]),a("p",[e._v("At a minimum, the ListView requires a LayoutTemplate and an ItemTemplate in order to display data. The ItemTemplate can be used in conjuncture with the AlternatingItemTemplate as a means of showing alternating rows of data slightly differently. Additionally, the SelectedItemTemplate can be used if you want to present a selected row of data differently from other rows. ItemSeparatorTemplate allows you to render specific content to separate the rows of data. The EmptyDataTemplate holds whatever you want to display if there is no data in the collection bound to the ListView.")]),a("p",[e._v("InsertItemTemplate and EditItemTemplate are used to - you guessed it - insert and update rows of data. Typically, a Delete button would appear on the ItemTemplate, but there is no restriction requiring that. You could, for instance, only show that button on the SelectedItemTemplate. It's all up to you.")]),a("p",[e._v('With all this talk of "rows" of data, that doesn\'t mean that the information has to be displayed in a tabluar fashion. Pretty much any valid HTML representation of the data is allowed - bulleted lists, free-flow text, columns, repeating columns, acordian, etc. A GroupTemplate and a GroupSeparatorTemplate can help with repeating columns or groups.')]),e._m(2),e._m(3),e._m(4),a("p",[e._v("Like the GridView control, buttons in the ListView can set their CommandName property set to various values to trigger automatic handlilng/processing through Data Source controls such as the ObjectDataSource. CommandName values can be (quoting from "),a("a",{attrs:{href:"http://msdn.microsoft.com/en-us/library/vstudio/system.web.ui.webcontrols.listview(v=vs.100).aspx#data_operations",target:"_blank",rel:"noopener noreferrer"}},[e._v("MSDN documents"),a("OutboundLink")],1),e._v("):")]),e._m(5)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"listview-overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#listview-overview","aria-hidden":"true"}},[this._v("#")]),this._v(" ListView Overview")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"templates"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#templates","aria-hidden":"true"}},[this._v("#")]),this._v(" Templates")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"binding-data"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#binding-data","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Data")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Data binding inside the templates can be done through "),t("code",[this._v('<%# Eval("*PropertyName*") %>')]),this._v(" for one-way data binding and "),t("code",[this._v('<%# Bind("*PropertyName*") %>')]),this._v(' for two-way data binding. These bindings can be placed in attributes of other controls (such as the Text property of a TextBox control) or as "plain text" in the template. For the property name, you can also use the navigation proeprties and "drill-down" to other data - all you need to do is ensure that the data in the navigation property has been loaded before leaving the BLL.')])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"command-buttons"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#command-buttons","aria-hidden":"true"}},[this._v("#")]),this._v(" Command Buttons")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("blockquote",[a("ul",[a("li",[a("strong",[e._v("Cancel")]),e._v(" - Cancels an edit or insert operation. Raises the ItemCanceling event.")]),a("li",[a("strong",[e._v("Delete")]),e._v(" - Deletes the current record from the data source. Raises the ItemDeleted and ItemDeleting events.")]),a("li",[a("strong",[e._v("Select")]),e._v(" - Sets the SelectedIndex property to the DisplayIndex property value for the item. Renders the SelectedItemTemplate template for the item. Raises the SelectedIndexChanging and SelectedIndexChanged events.")]),a("li",[a("strong",[e._v("Edit")]),e._v(" - Puts the item in edit mode. Renders the EditItemTemplate template for the item. Raises the ItemEditing event.")]),a("li",[a("strong",[e._v("Insert")]),e._v(" - Inserts the bound values from the InsertItemTemplate template into the data source. Raises the ItemInserting and ItemInserted events.")]),a("li",[a("strong",[e._v("Update")]),e._v(" - Updates the current record in the data source with the bound values from the EditItemTemplate template. Raises the ItemUpdating and ItemUpdated events.")]),a("li",[a("strong",[e._v("Sort")]),e._v(" - Sorts the columns listed in the CommandArgument property of the button. Raises the Sorting and Sorted events.")])])])}],!1,null,null,null);t.default=o.exports}}]);