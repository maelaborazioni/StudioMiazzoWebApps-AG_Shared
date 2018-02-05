/**
 * @properties={typeid:24,uuid:"6896A4F3-89A6-467E-8DA2-6B566F35546F"}
 */
function updateCittadinanza(record)
{
	var fs = persone_to_persone_cittadinanza, cittadinanza;
	
	if(globals.ma_utl_isFoundSetNullOrEmpty(fs))
		cittadinanza = fs.getRecord(fs.newRecord());
	else
		cittadinanza = fs.getSelectedRecord();
	
	cittadinanza.datarilevazione = cittadinanza.datadecorrenza = new Date();
	cittadinanza.codcittadinanza = record.codice;
}

/**
 * @properties={typeid:24,uuid:"51E1C504-8D80-4025-BB0B-71F0317B5FC8"}
 */
function updateStatoCivile(record)
{
	var fs = persone_to_persone_statocivile, statocivile;
	
	if(globals.ma_utl_isFoundSetNullOrEmpty(fs))
		statocivile = fs.getRecord(fs.newRecord());
	else
		statocivile = fs.getSelectedRecord();
	
	statocivile.datarilevazione = statocivile.datadecorrenza = new Date();
	statocivile.codstatocivile = record.codice;
}