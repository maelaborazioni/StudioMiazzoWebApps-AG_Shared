/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6201832A-674F-4F77-82BC-3A49B15A7DA7"}
 */
function editPermessi(event) 
{	
	showEditForm(foundset, globals.Status.EDIT);
}

/**
 * @properties={typeid:24,uuid:"4A22FA30-F1F2-4491-87D4-2D97695A1AFA"}
 */
function deletePermessi(event)
{
	globals.deleteRecord(foundset);
}

/**
 * @properties={typeid:24,uuid:"686ACCC8-DE8A-4CD2-B954-6C92F93F7986"}
 */
function showEditForm(fs, mode)
{
	globals.ma_utl_showEditDialog('agd_pri_permessi_edit', foundset, null, 'Modifica permessi', mode);
}
