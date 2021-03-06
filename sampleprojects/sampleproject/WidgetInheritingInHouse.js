/** @module sampleproject/WidgetInheritingInHouse */
define([
	"dcl/dcl",
	"./Base0",
	"./Base1"
], function (dcl, Base0, Base1) {
	/**
	 * Sample widget class.
	 * @class module:sampleproject/WidgetInheritingInHouse
	 * @augments {module:sampleproject/Base0}
	 * @augments {module:sampleproject/Base1}
	 */
	var WidgetInheritingInHouse = dcl([Base0, Base1], /** @lends module:sampleproject/WidgetInheritingInHouse# */ {
		/**
		 * Description
		 * for {@link module:sampleproject/WidgetInheritingInHouse#createdCallback sampleproject/WidgetInheritingInHouse#createdCallback}.
		 * @method
		 */
		createdCallback: dcl.before(function () {
			console.log("module:sampleproject/WidgetInheritingInHouse#createdCallback called.");
		})
	});

	// Doing return dcl() prevents JSDoc from generating doclets for prototype methods/properties
	return WidgetInheritingInHouse;
});
