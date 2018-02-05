/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"D7005C93-9839-47DE-9283-4F1BCA8BA245"}
 */
function editRecord(event)
{
	var editForm = getEditFormName();
	globals.ma_utl_showEditDialog(editForm, forms[elements.data_tabless.getTabFormNameAt(1)].foundset, getRequiredFieldsProgram(), 'Modifica');
}

/**
 * @properties={typeid:24,uuid:"EDF8B579-5B42-46B2-BD6C-8DF07A6F396A"}
 */
function getEditFormName()
{
	var dataForm = elements.data_tabless.getTabFormNameAt(1);
	return dataForm.substr(0, dataForm.length - 3) + 'edit';
}

/**
 * @properties={typeid:24,uuid:"5DE7CC17-DCD8-4C1D-9AB9-EF8C60824D9D"}
 */
function setFormButtons(add, edit, del)
{
	_super.setFormButtons(true, true, true);
}

/**
 * @properties={typeid:24,uuid:"EEA5D9F3-C8A0-4304-A50C-96AA12781B7F"}
 */
function isHistoryEnabled()
{
	return false;
}
