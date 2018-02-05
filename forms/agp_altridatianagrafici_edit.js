/**
 * @type {Boolean}
 *
 * @properties={typeid:35,uuid:"CF05B4BA-0223-4F89-83BD-3F93487F322A",variableType:-4}
 */
var _close = false;

/**
 * // TODO generated, please specify type and doc for the params
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"4D8E176C-6285-4B2C-836D-ECB4BF720DBE"}
 */
function onHide(event)
{
	if(_super.onHide(event))
		return _close
		
	return false
}
