
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"1831B8AA-BA29-4E0F-AC1B-14F7CCF434A4"}
 * @AllowToRunInFind
 */
function apriElencoRecapitiPersona(event) 
{
	var frm = forms.agp_recapiti_main;
	var fs = frm.foundset;
	
	if(fs.find())
	{
		fs.codicefiscale = codicefiscale;
		fs.search();
	}
	
	globals.ma_utl_showFormInDialog(forms.agp_recapiti_main.controller.getName(), 'Elenco recapiti');
}
