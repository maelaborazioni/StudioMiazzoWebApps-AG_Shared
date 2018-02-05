/**
 * @properties={typeid:24,uuid:"DCC89336-EBB0-4612-A5D6-4AC2E8D8C147"}
 */
function getRequiredFieldsProgram()
{
	return 'AG_Req_StatoCivile';
}

/**
 * @AllowToRunInFind
 * @properties={typeid:24,uuid:"71E6288E-9E6A-4219-9810-C586F966963A"}
 */
function filterData(fs)
{
	fs = persone_to_persone_statocivile;
	if(fs && fs.find())
	{
		fs.datadecorrenza = '^||<=' + globals.formatForFind(globals.TODAY);
		fs.search();
	}
}

/**
 * @properties={typeid:24,uuid:"9BF3F832-CD9C-4F69-8705-F2281B42146A"}
 */
function unfilterData(fs)
{
	fs = persone_to_persone_statocivile;
	if(fs)
	{
		fs.loadAllRecords();
	}
}

/**
 * @properties={typeid:24,uuid:"1381E7F0-C14B-40B3-BF94-BF9DA9BF79B5"}
 */
function isHistoryEnabled()
{
	return false;
}
