/**
 * @AllowToRunInFind
 * @properties={typeid:24,uuid:"8E49FA5F-25B2-4DF5-B56E-FA07C59DF2B1"}
 */
function filterData(fs)
{	
	fs = persone_to_persone_domicili;
	_super.filterData(fs);
	
	// Recupera l'ultimo indirizzo, non tutti quelli correntemente attivi
	var indirizzoFs = persone_to_v_persone_ultimoindirizzo;
	if(indirizzoFs && indirizzoFs.find())
	{
		persone_to_v_persone_ultimoindirizzo.codtipoindirizzo = globals.codRESIDENZA;
		if(fs && fs.find())
		{
			if(indirizzoFs.search() > 0) 
				fs.idpersonadomicilio = indirizzoFs.idpersonadomicilio;
			else
				fs.idpersonadomicilio = -1;	// won't ever find it
			
			fs.search();
		}		
	}
}

/**
 * @AllowToRunInFind
 * @properties={typeid:24,uuid:"24342088-AD0A-4A23-BBAE-D1E3ABC8B3FE"}
 */
function unfilterData(fs)
{
	fs = persone_to_persone_domicili;
	fs && fs.loadAllRecords();
	
	if(fs && fs.find())
	{
		fs.codtipoindirizzo = globals.codRESIDENZA;
		fs.search();
	}
}
