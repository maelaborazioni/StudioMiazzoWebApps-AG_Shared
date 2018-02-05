/**
 * @properties={typeid:24,uuid:"37D623C9-1EA6-43DF-8C5F-A571A5A2A2DD"}
 */
function getRequiredFieldsProgram()
{
	return 'AG_Req_Cittadinanza';
}

/**
 * @AllowToRunInFind
 * @properties={typeid:24,uuid:"9D34FEC5-2F16-4497-8EB1-9A6C465B4ED4"}
 */
function filterData(fs)
{
	fs = persone_to_persone_cittadinanza;
	if(fs && fs.find())
	{
		fs.datadecorrenza = '^||<=' + globals.formatForFind(globals.TODAY);
		fs.search();
	}
}

/**
 * @properties={typeid:24,uuid:"5008F197-C1F8-4B17-A86A-91CBC0CBD0A1"}
 */
function unfilterData(fs)
{
	fs = persone_to_persone_cittadinanza;
	if(fs)
	{
		fs.loadAllRecords();
	}
}

/**
 * @properties={typeid:24,uuid:"04A1F39C-10B0-4A1C-AB6C-4103130E553D"}
 */
function isHistoryEnabled()
{
	return false;
}
