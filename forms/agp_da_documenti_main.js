/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"54B64248-2CD7-41CA-A7EC-9041149A4D6E"}
 */
function filterData(fs)
{
	fs = persone_to_persone_documenti;
	if(fs && fs.find())
	{
		// La data di decorrenza deve essere anteriore alla data odierna
		fs.datadecorrenza = '^||<=' + globals.formatForFind(globals.TODAY);
		
		// Le date di scadenza e rinnovo scadenza devono essere posteriori alla data odierna.
		fs.rilasciatoscadenza = '^||>=' + globals.formatForFind(globals.TODAY);
		fs.rinnovoscadenza = '^||>=' + globals.formatForFind(globals.TODAY);
		
		fs.search();
	}
}

/**
 * @properties={typeid:24,uuid:"9BE9A65A-0E83-48B8-A1B2-7DB00402029C"}
 */
function unfilterData(fs)
{
	fs = persone_to_persone_documenti;
	if(fs)
	{
		fs.loadAllRecords();
	}
}
