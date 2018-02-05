/** 
 * @type {Boolean}
 *
 * @properties={typeid:35,uuid:"19B42E0F-3534-4D0B-A832-B164490780D1",variableType:-4}
 */
var vLookForDuplicates = false;

/**
 * @properties={typeid:24,uuid:"837D27D6-3680-4FD0-BECE-497797FB7D12"}
 * @AllowToRunInFind
 */
function updateStato(record)
{
	/** @type {JSFoundset<db:/ma_anagrafiche/tab_statiesteri>} */
	var fs = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE, 'tab_statiesteri');
	if(fs && fs.find())
	{
		fs.descrizione = '#ITALIA';
		fs.search() > 0 && (nascita_codstatoestero = fs.codice);
	}
}

/**
 * @properties={typeid:24,uuid:"454FC985-F484-4C75-87DF-53A718FD834B"}
 */
function updateComune(record)
{	
	if(record && !record.descrizione.equalsIgnoreCase('ITALIA'))
		nascita_codcomune = null;
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @private
 *
 * @properties={typeid:24,uuid:"CE2F27CF-B37C-404B-953D-4D458491B24C"}
 */
function onDataChangeCodiceFiscale(oldValue, newValue, event)
{
	vLookForDuplicates = globals.nav.mode === globals.Status.EDIT && oldValue !== newValue;
	return true;
}

/**
 * @properties={typeid:24,uuid:"C6229E73-CEAE-451D-A942-4A865536DE52"}
 */
function gotoEdit()
{
	_super.gotoEdit();
	vLookForDuplicates = false;
}

/**
 * @param {Boolean} firstShow
 * @param {JSEvent} event
 * @param {Boolean} svyNavBaseOnShow
 *
 * @properties={typeid:24,uuid:"A9DDCDA2-7671-448D-8047-AFBF54A6329D"}
 */
function onShowForm(firstShow, event, svyNavBaseOnShow) 
{
	controller.readOnly = true;
	_super.onShowForm(firstShow, event, false);
}