///**
// * @properties={typeid:24,uuid:"D3791BF5-43FE-49DF-BD83-BFED733E56E5"}
// */
//function gotoEdit()
//{
//	elements.btnEdit.enabled = false
//	elements.btnDelete.enabled = false
//}
//
///**
// * @properties={typeid:24,uuid:"C16DA0A3-C87B-4348-944A-EB6B1D38E68B"}
// */
//function gotoBrowse()
//{
//	elements.btnEdit.enabled = true
//	elements.btnDelete.enabled = true
//}
//
///**
// * @properties={typeid:24,uuid:"C6B300C5-C372-422E-B7DE-60BE024C4D30"}
// */
//function dc_delete(_event, _triggerForm, _forceForm)
//{
//	_super.dc_delete(_event,_triggerForm,controller.getName())
//}
//
///**
// * Perform the element default action.
// *
// * @param {JSEvent} event the event that triggered the action
// * @param _triggerForm
// * @param _forceForm
// *
// * @properties={typeid:24,uuid:"936A3D0A-E896-4D56-AC55-7E51290C3225"}
// */
//function dc_edit(event, _triggerForm, _forceForm) {
//	forms.anagrafica_dipendenti_documenti_tab.dc_edit(event, _triggerForm)
//}
//
///**
// * @param {JSEvent} event
// *
// * @properties={typeid:24,uuid:"96027CC4-D0D7-4121-A1B7-6DC4F1E1A06D"}
// * @AllowToRunInFind
// */
//function _editDocumento(event)
//{
//	var _form = forms.anagrafica_dipendenti_documenti_tab.setForm(documenti_to_tipidocumenti.codice,forms.aggiungi_documento.controller.getName())	
//	globals._showEditDialog(_form,forms[_form].foundset,'HR_Req_documento','Modifica documento')
//}
//
///**
// * @param {JSEvent} _event
// * @param {String} _triggerForm
// *
// * @properties={typeid:24,uuid:"90FF073F-103F-4677-A28A-581551539817"}
// */
//function onRecordSelection(_event, _triggerForm)
//{
//	if(documenti_to_tipidocumenti)
//		forms.anagrafica_dipendenti_documenti_tab.setDetailForm(documenti_to_tipidocumenti.codice)
//}
