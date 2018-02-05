/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"93CB1E21-4122-46A2-94A8-7F88D5D9BA90"}
 */
function apriDettaglioTitoloStudio(event)
{
	var form = forms.agp_titolostudio_dtl.controller.getName();
	globals.ma_utl_showFormInDialog(form, 'Dettaglio titolo di studio', foundset);
}
