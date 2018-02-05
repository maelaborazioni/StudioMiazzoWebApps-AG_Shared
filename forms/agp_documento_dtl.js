/**
 * @param {JSForm} _form
 * @param {String} _lkp
 * @param {String} _table
 *
 * @properties={typeid:24,uuid:"4C364A7D-F4F4-4039-A51A-8F108798C728"}
 * @SuppressWarnings(unused)
 */
function setForm(_form, _lkp, _table)
{	
	var _relName = 'documenti_to_' + _table;
	var _relation = null
	if(!solutionModel.getRelation(_relName))
	{
		var tableFoundset = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,_table);
		_relation = solutionModel.newRelation(_relName, foundset.getDataSource(), tableFoundset.getDataSource(), JSRelation.INNER_JOIN)
		_relation.newRelationItem('valorelookup','=','codice')
	}
	_form.getField(elements.fld_tipodocumento.getName()).dataProviderID = _relName + '.descrizione'
	
	var _tipoBtn = _form.getLabel(elements.btn_tipodocumento.getName())
	var _qtdLkp = null
	var _qtdArg1 = null
	if(!(_lkp[0] == '\'' && _lkp[_lkp.length - 1] == '\''))		
	{
		_qtdLkp = "'" + _lkp + "'"
	}
	_qtdLkp = "'" + utils.stringReplace(_qtdLkp, "'", "\\'") + "'"
	_qtdArg1 = "'" + utils.stringReplace(_tipoBtn.onAction.getArguments()[1], "'", "\\'") + "'"
	
	_tipoBtn.onAction = solutionModel.wrapMethodWithArguments(_tipoBtn.onAction, [_tipoBtn.onAction.getArguments()[0], _tipoBtn.onAction.getArguments()[1], "'" + _lkp + "'"])
}

/**
 * @param _event
 * @param _form
 *
 * @properties={typeid:24,uuid:"364BA14A-6133-4E4C-8CBE-B4D40F3AF796"}
 */
function onRecordSelection(_event, _form) 
{
	_super.onRecordSelection(_event, _form);
	
	// Imposta il tipo di documento corretto, se necessario
	var table = persone_documenti_to_tab_tipidocumento && persone_documenti_to_tab_tipidocumento.tabellatipo
	var lkp = persone_documenti_to_tab_tipidocumento && persone_documenti_to_tab_tipidocumento.lookuptipo;
	
	if(table && lkp)
		setForm(solutionModel.getForm(controller.getName()), lkp ,table);
}
