/**
 * @type {Boolean}
 *
 * @properties={typeid:35,uuid:"3F5FE8F1-7FF3-4150-B823-57F7ADC199E1",variableType:-4}
 */
var _close = false;

/**
 * // TODO generated, please specify type and doc for the params
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"BCA5F814-3531-40D4-913E-640C5AD934E6"}
 */
function onHide(event)
{
	if(_super.onHide(event))
		return _close
		
	return false
}
