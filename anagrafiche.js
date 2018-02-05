/**
 * Recupera le eventuali richieste non ancora confermate o rifiutate per la ditta richiesta 
 * nel periodo indicato
 *  
 * @param {Number} idditta
 * @param {Number} mese
 * @param {Number} anno
 * 
 * @return {Array<Number>}
 * 
 * @properties={typeid:24,uuid:"185AAD33-212D-4D27-96FC-2BE7729AC2A0"}
 */
function getRichiesteInSospeso(idditta,mese,anno)
{
	var dal = new Date(anno, mese - 1, 1);
	var al = new Date(anno, mese - 1,globals.getTotGiorniMese(mese,anno))
	var sqlRicSosp = "SELECT DISTINCT LGT.idLavoratoreGiustificativoTesta\
                      FROM Lavoratori_GiustificativiRighe LGR\
                      INNER JOIN Lavoratori_GiustificativiTesta LGT\
                      ON LGT.idLavoratoreGiustificativoTesta = LGR.idLavoratoreGiustificativoTesta\
                      INNER JOIN Lavoratori L\
                      ON L.idLavoratore = LGT.idLavoratore\
                      WHERE LGT.Stato IS NULL\
                      AND LGR.Giorno BETWEEN ? AND ?\
                      AND L.idDitta = ?"
	var arrRicSosp = [utils.dateFormat(dal,globals.ISO_DATEFORMAT)
	                  ,utils.dateFormat(al,globals.ISO_DATEFORMAT)
					  ,idditta];
	var dsRicSosp = databaseManager.getDataSetByQuery(globals.Server.MA_ANAGRAFICHE,sqlRicSosp,arrRicSosp,-1);
	return dsRicSosp.getColumnAsArray(1);
}

/**
 * Ritorna gli identificativi dei lavoratori in forza alla ditta per il periodo specificato.
 * 
 * @param {Number} ditta
 * @param {Number} periodo
 * 
 * @return Array<Number>
 *
 * @properties={typeid:24,uuid:"25B72761-DC6C-48ED-A023-36E7E5247472"}
 */
function FilterLavoratori(ditta, periodo)
{
	var periodoDate = scopes.date.FromIntMonth(periodo);
	var dalString   = utils.dateFormat(scopes.date.FirstDayOfMonth(periodoDate), globals.EU_DATEFORMAT);
	var alString    = utils.dateFormat(scopes.date.LastDayOfMonth(periodoDate), globals.EU_DATEFORMAT);
	
	var sqlQuery = "select idLavoratore from dbo.F_Ditta_ElencoDip(?, ?, ?, -1);";
	var dataset  = databaseManager.getDataSetByQuery(globals.Server.MA_ANAGRAFICHE, sqlQuery, [ditta, dalString, alString], -1);
	
	if (dataset && dataset.getMaxRowIndex() > 0)
		return dataset.getColumnAsArray(1);
	
	return [];
}

/**
 * @param {Number} ditta
 * @param {Date} dal
 * @param {Date} al
 * @param {JSFoundset<db:/ma_anagrafiche/lavoratori>} fs
 * 
 * @return {JSFoundset<db:/ma_anagrafiche/lavoratori>}
 *
 * @properties={typeid:24,uuid:"BABC4F39-D31F-43D6-A00F-083B8C0E1773"}
 * @AllowToRunInFind
 */
function FilterLavoratoriDalAl(ditta, dal, al, fs)
{	
	var dalString = utils.dateFormat(dal, globals.EU_DATEFORMAT);
	var alString  = utils.dateFormat(al, globals.EU_DATEFORMAT);
	
	if(fs && fs.find())
	{
		var sqlQuery = "select idLavoratore from F_Ditta_ElencoDip(?, ?, ?, -1);";
		var dataset = databaseManager.getDataSetByQuery(globals.Server.MA_ANAGRAFICHE, sqlQuery, [ditta, dalString, alString], -1);
		if (dataset)
			fs.idlavoratore = dataset.getColumnAsArray(1);

		fs.search();
	}

	if(fs.getSize() > 0)
		fs.sort('lavoratori_to_persone.nominativo asc, codice asc');
	
	return fs;
}