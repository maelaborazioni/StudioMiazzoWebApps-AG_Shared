/** 
 * @type {Boolean}
 *
 * @properties={typeid:35,uuid:"16E5242F-7BBC-4794-9EA8-981B1F8B9C39",variableType:-4}
 */
var vLookForDuplicates = false;

/**
 * @properties={typeid:24,uuid:"D7AEBF6E-50A7-4FEE-94D3-EF98B4718304"}
 * @AllowToRunInFind
 */
function updateStato(record)
{
	/** @type {JSFoundSet<db:/ma_anagrafiche/tab_statiesteri>} */
	var fs = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE, 'tab_statiesteri');
	if(fs && fs.find())
	{
		fs.descrizione = '#ITALIA';
		fs.search() > 0 && (nascita_codstatoestero = fs.codice);
	}
}

/**
 * @properties={typeid:24,uuid:"E06E3058-3EE4-45F3-A772-FF3BB23AC8F3"}
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
 * @properties={typeid:24,uuid:"5F8D4B23-31F0-441D-AF1C-F2F0B01CDE75"}
 */
function onDataChangeCodiceFiscale(oldValue, newValue, event)
{
	vLookForDuplicates = globals.nav.mode === globals.Status.EDIT && oldValue !== newValue;
	return true;
}

/**
 * @properties={typeid:24,uuid:"53649163-0D08-4907-82EF-17A950129934"}
 */
function gotoEdit()
{
	_super.gotoEdit();
	vLookForDuplicates = false;
}
