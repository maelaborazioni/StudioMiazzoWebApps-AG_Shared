/**
 *
 * @param {Boolean} _firstShow
 * @param {JSEvent} _event
 *
 * @properties={typeid:24,uuid:"8B697AB2-361B-4B24-B5DA-7EFC54F606B9"}
 */
function onShowForm(_firstShow, _event) 
{
	_super.onShowForm(_firstShow, _event);
	databaseManager.startTransaction();
	foundset.newRecord();
	codicefiscale = forms['agl_header_dtl'].codicefiscale || forms['agl_header_esterni_dtl'].lavoratori_to_lavoratori_personeesterne.codicefiscale;
	nprrecapito = 1;
	manuale = 1;
	globals.ma_utl_setStatus(globals.Status.EDIT,controller.getName());
}

/**
*
* @param {JSEvent} event
*
* @properties={typeid:24,uuid:"834B4924-08B1-4604-977B-E9B623E7064A"}
*/
function onHide(event) 
{
	annullaInserimento(event);
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"35849FF1-1607-4D15-B6E6-CC573FBFE262"}
 */
function annullaInserimento(event) 
{
	databaseManager.rollbackTransaction();
	globals.ma_utl_setStatus(globals.Status.BROWSE,controller.getName());
	globals.svy_mod_closeForm(event);
}
