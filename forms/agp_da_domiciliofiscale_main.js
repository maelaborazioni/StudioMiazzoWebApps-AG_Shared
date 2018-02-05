/**
 * @AllowToRunInFind
 * @properties={typeid:24,uuid:"46EA9C86-8669-4F80-8093-685375B67985"}
 */
function filterData(fs)
{	
	fs = persone_to_persone_domicili;
	_super.filterData(fs);
	
	// Recupera l'ultimo indirizzo, non tutti quelli correntemente attivi
	var indirizzoFs = persone_to_v_persone_ultimoindirizzo;
	if(indirizzoFs && indirizzoFs.find())
	{
		persone_to_v_persone_ultimoindirizzo.codtipoindirizzo = globals.codDOMICILIOFISCALE;
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
 * @properties={typeid:24,uuid:"BD2CE16C-C0B4-425B-8F13-74FA0666F301"}
 */
function unfilterData(fs)
{
	fs = persone_to_persone_domicili;
	if(fs && fs.find())
	{
		fs.codtipoindirizzo = globals.codDOMICILIOFISCALE;
		fs.search();
	}
}
