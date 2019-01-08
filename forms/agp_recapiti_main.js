/**
 * @properties={typeid:24,uuid:"4A8C8B09-0725-45E1-B257-16BF31C61A2D"}
 */
function getButtonObject()
{
	var _enabled = (forms['agl_header_esterni_dtl'] && forms['agl_header_esterni_dtl'].idditta != null)
		           || globals.getTipologiaDitta(forms['agl_header_dtl'].idditta) == globals.Tipologia.ESTERNA
	               || globals.ma_utl_hasKey(globals.Key.GEST_ANAG_DITTA);
	
	var btnObj = _super.getButtonObject();
	
		btnObj.btn_new = { enabled: _enabled };
		btnObj.btn_edit = { enabled: _enabled };
		btnObj.btn_delete = { enabled: _enabled };
		btnObj.btn_duplicate = { enabled: false };
		
	return btnObj;
}
/**
 * @param {JSEvent} _event
 * @param {String} _triggerForm
 * @param {String} _forceForm
 *
 * @properties={typeid:24,uuid:"702DE1DA-27D7-43A6-953F-FF89A7464DC9"}
 */
function dc_new(_event, _triggerForm, _forceForm) 
{
	var frm = forms.agp_recapiti_edit;
	globals.ma_utl_showFormInDialog(frm.controller.getName(),'Nuovo recapito per il lavoratore');
}

/**
*
* @param {JSEvent} _event
* @param {String} _triggerForm
* @param {String} _forceForm
*
* @properties={typeid:24,uuid:"F55E229D-3373-4424-9ABD-D9A5CAACEBC5"}
*/
function dc_edit(_event, _triggerForm, _forceForm) 
{
	_super.dc_edit(_event,_triggerForm,_forceForm);
}

/**
*
* @param {JSEvent} _event
* @param {String} _triggerForm
* @param {String} _forceForm
* @param {Boolean} _noConfirm
*
* @properties={typeid:24,uuid:"75D795BB-22CB-4EA7-9B55-F413F3453BA6"}
*/
function dc_delete(_event, _triggerForm, _forceForm, _noConfirm)
{
	return forms.agp_recapiti_tbl.foundset.deleteRecord();
}



