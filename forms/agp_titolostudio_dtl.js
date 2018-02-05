/**
 * // TODO generated, please specify type and doc for the params
 * @param {JSFoundset} _foundset
 * @param {String} [_program]
 *
 * @properties={typeid:24,uuid:"52D79E95-FD73-4376-87D8-31BA82E5DD9D"}
 */
function dc_save_validate(_foundset, _program)
{
	return _super.dc_save_validate(_foundset ? _foundset : foundset, _program ? _program : 'HR_Req_titolostudio')
}

/**
 * @param {JSFoundset} _foundset
 *
 * @properties={typeid:24,uuid:"FE5002E3-7221-4D1D-AE74-3D24DD214F1D"}
 */
function dc_save_pre(_foundset)
{
	var _fs = _foundset && _foundset.getDataSource() == foundset.getDataSource() ? _foundset : foundset
	if(_super.dc_save_pre(_fs) != -1)
		_fs['datarilevazione'] = _fs['datadecorrenza']
	else
		return -1
		
	return 0
}

///**
// * @properties={typeid:24,uuid:"636F8CA8-2C16-43D1-9B2D-25702C2137DA"}
// */
//function gotoEdit()
//{
//	_super.gotoEdit()
//	if(globals.nav.mode == 'edit')
//	{
//		elements.titolo_studio_btn.enabled = false
//	}
//}

///**
// * @param {JSRecord} rec
// *
// * @properties={typeid:24,uuid:"F13F3020-6D7C-44E7-B0E4-ECB27DBA9CFE"}
// * @AllowToRunInFind
// */
//function updateComune(rec)
//{
//	if(lavoratori_datianagrafici_to_persone_titolostudio && lavoratori_datianagrafici_to_persone_titolostudio.codcomune)
//	{
//		/** @type {JSFoundset<db:/ma_anagrafiche/tab_statiesteri>} */
//		var statiFs = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE, 'tab_statiesteri');
//		if(statiFs.loadAllRecords() && statiFs.find())
//		{
//			statiFs.descrizione = '#ITALIA';
//			if(statiFs.search() > 0)
//				lavoratori_datianagrafici_to_persone_titolostudio.codstato = statiFs.codice;
//		} 
//	}
//}
//
///**
// * @param {JSRecord} rec
// *
// * @properties={typeid:24,uuid:"37A17825-798B-4F7F-865E-B5A08E7A243F"}
// */
//function updateStato(rec)
//{
//	if(lavoratori_datianagrafici_to_persone_titolostudio && lavoratori_datianagrafici_to_persone_titolostudio.codstato && !lavoratori_datianagrafici_to_persone_titolostudio.persone_titolostudio_to_tab_statiesteri.descrizione.equalsIgnoreCase('ITALIA'));
//	{
//		lavoratori_datianagrafici_to_persone_titolostudio.codcomune = null;
//	}
//}
//
///**
// * Handle changed data.
// *
// * @param oldValue old value
// * @param newValue new value
// * @param {JSEvent} event the event that triggered the action
// *
// * @returns {Boolean}
// *
// * @private
// *
// * @properties={typeid:24,uuid:"E18DEDA2-B7BD-4650-8ECA-BA29E7FC2817"}
// */
//function onComuneDataChange(oldValue, newValue, event) {
//	if(oldValue != newValue)
//		codstato = null
//		
//	return true
//}
