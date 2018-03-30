/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C7C92E5E-4C89-49BD-967E-FDE14CFE8F40"}
 */
var codACCANTONATA = 'A';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3F132929-F242-4218-A012-6C6CD3897BD6"}
 */
var codCOSTITUZIONEAZIENDALE = 'CA';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"397ED6AD-4DD8-495C-A10A-13B8969A7708"}
 */
var codDATORELAVORO = 'DL';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"85A600A5-C62D-40B1-AAB7-F62A8E409CD2"}
 */
var codDOMICILIOFISCALE = 'DF';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D806CB82-F60C-4A33-90FD-3774141B8949"}
 */
var codLEGALERAPPRESENTANTE = 'RL';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"437142F0-D5A2-459D-AF3C-F23CD33724AE"}
 */
var codNORMALE = 'N';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"ECF5AE96-CF07-453E-8E56-CBF781FE56A2"}
 */
var codPersCITTADINANZA = 'PC';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1BB0AC12-E817-425A-97E5-AF8676CD7CA0"}
 */
var codPersDOMICILI = 'PD';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"EAF62D12-B49B-4CAF-A700-53A32E3D8DFF"}
 */
var codPersRECAPITI = 'PR';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2C26E395-6663-462C-B667-F84491FBE049"}
 */
var codPersSTATOCIVILE = 'PSC';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"45454B56-C3DF-4976-9CB0-015BEBBC983C"}
 */
var codPersTITOLOSTUDIO = 'PTS';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FFB924F0-BF31-4B22-85FE-6D6B29DD65FF"}
 */
var codPRIVACY = 'PRI';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2A07C37B-23D3-4116-A0E7-EC9D7B46C869"}
 */
var codRESIDENZA = 'R';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FC183684-1083-4468-B911-92DD2E57C47F"}
 */
var codSEDELEGALE = 'SL';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B75E4D45-85BA-4B23-B16F-997B92A60160"}
 */
var codSEDEOPERATIVA = 'SO';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1A3D15C8-5896-4B3C-B450-94E3BE483C41"}
 */
var codSICUREZZA = 'SI%';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D551A03A-36D6-4B7B-86BC-3BD98A9C29BB"}
 */
var codSICUREZZA1 = 'SI1';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"AC8A96C8-C507-48B7-8B19-1979EE85B40F"}
 */
var codSICUREZZA2 = 'SI2';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"499AB3A3-FFBB-442A-8280-611BE7E3F848"}
 */
var codSICUREZZA3 = 'SI3';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"97A5A181-1A7A-46C0-AEDC-C3E44E336430"}
 */
var codSPOSTATA = 'S';

/**
 * @properties={typeid:35,uuid:"34E91709-96AF-43B8-B361-4975A2F73C2B",variableType:-4}
 */
var TipiCampo =
{
	CONTRATTO		:	'8',
	QUALIFICA		:	'1',
	LIVELLO			:	'2',
	PERC_PARTTIME	:	'9',
	TIPO_PARTTIME	:	'91'
}

/**
 * @properties={typeid:35,uuid:"309D887E-F966-4234-9C76-46220CC73B4F",variableType:-4}
 */
var TipoDecorrenza = { BADGE : 2, REGOLA : 3, TURNO : 23, BADGE_OCCASIONALE : 16, BADGE_SOSTITUTIVO : 12};

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"BCA75B7D-8D98-4B32-8865-C5391A59E027",variableType:4}
 */
var decTurno = 23;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {String} formToDisplay
 * @param {JSFoundset<db:/ma_anagrafiche/persone_domicili>} domiciliFs
 *
 * @properties={typeid:24,uuid:"716508CC-56D3-4473-B458-73786FBA7896"}
 */
function apriElencoRecapitiIndirizzo(event, formToDisplay, domiciliFs)
{		
	globals.ma_utl_showFormInDialog(formToDisplay, 'Elenco recapiti', domiciliFs.persone_domicili_to_persone_recapiti);
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"F2071F48-CCF1-4A40-8651-62906CC16B9C"}
 */
function apriElencoRecapitiIndirizzoPersona(event)
{
	/** @type {JSFoundset<db:/ma_anagrafiche/persone_domicili>} */
	var personeDomiciliFs = forms[event.getFormName()].foundset;
	if(personeDomiciliFs && personeDomiciliFs.persone_domicili_to_persone_recapiti && personeDomiciliFs.persone_domicili_to_persone_recapiti.getSize())
	{
		personeDomiciliFs.sort('persone_domicili_to_persone_recapiti.persone_recapiti_to_tab_tipirecapito.ordine');
	}
	else
	{
		globals.ma_utl_showInfoDialog('Nessun recapito associato all\'indirizzo selezionato', 'Info');
		return;
	}
		
	apriElencoRecapitiIndirizzo(event, forms.agp_recapiti_main.controller.getName(), personeDomiciliFs);
}

/**
 * Gets the next progressive number of people working for the specified company with the specified qualification
 * @param {string} code
 * @param {number} companyId
 *
 * @properties={typeid:24,uuid:"6EB152F0-B40A-4C85-8AB6-5058B92A0707"}
 * @AllowToRunInFind
 */
function getNextProgNumber(code,companyId)
{
	/** @type {JSFoundset<db:/ma_anagrafiche/ditte_funzionipersone>} */
	var fs = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE ,'ditte_funzionipersone');
	if(fs && fs.find())
	{
		fs.idditta = companyId;
		fs.codtipofunzione = code;
		
		if(fs.search() > 0)
		{
			fs.sort('numprog desc');
			return fs.getRecord(1).numprog + 1;
		}
	}
	
	return 0
}

/**
 * @AllowToRunInFind
 * 
 * @properties={typeid:24,uuid:"7B31E1E7-12E4-4ECE-B3C7-7DBC28C19AD1"}
 */
function getAmbitoFromCode(code)
{
	/** @type {JSFoundset<db:/ma_anagrafiche/tab_tipifunzione>} */
	var tipofunzioneFoundset = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,'tab_tipifunzione')
	if(tipofunzioneFoundset.find())
	{
		tipofunzioneFoundset.codice = code
		tipofunzioneFoundset.search();
	}
	
	return tipofunzioneFoundset.codambito;
}

/**
 * @AllowToRunInFind
 * 
 * @param {Number} companyId
 * 
 * @properties={typeid:24,uuid:"44CFD0E6-EF8E-423A-ACC8-C281311BB64B"}
 */
function getDatoreLavoro(companyId)
{
	return getResponsabile(companyId, globals.codSICUREZZA1, globals.codDATORELAVORO);
}

/**
 * @properties={typeid:24,uuid:"B4E91A8A-BDC4-4D27-9FC2-70595B5EE2E6"}
 */
function getLegaleRappresentante(companyId)
{
	return getResponsabile(companyId, globals.codCOSTITUZIONEAZIENDALE, globals.codLEGALERAPPRESENTANTE);
}

/**
 * @AllowToRunInFind
 * 
 * @param {Number} companyId
 * @param {String} codambito
 * @param {String} [code]
 * 
 * @return {JSRecord<db:/ma_anagrafiche/ditte_funzionipersone>}
 *
 * @properties={typeid:24,uuid:"9597A023-710F-41DD-BF18-47B533257E8B"}
 */
function getResponsabile(companyId, codambito, code)
{
	/** @type {JSFoundset<db:/ma_anagrafiche/ditte_funzionipersone>} */
	var fs = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE, 'ditte_funzionipersone');
	if(fs && fs.find())
	{
		fs.codambito = codambito;
		fs.codtipofunzione = code;
		fs.idditta = companyId;
		fs.datarevoca = '^';
		fs.datacessazione = '^';
		
		if(fs.search() > 0)
		{
			return fs.getSelectedRecord();
		}
	}
	
	return null;
}

/**
 * @param {JSRecord} record
 * @param {Array<{ dateToValidate: Object, dateToCompareWith: Object, operator: Number, errorMessage: String, overwrite: Boolean }>} [validationObjects] 
 * 								un array di oggetti contenenti il nome del campo data con cui confrontare il campo data da validare,
 * 								insieme ad un valore numerico indicante il tipo di confronto (si veda l'oggetto <code>globals.COMPARISON_OPERATOR)
 * 
 *
 * @properties={typeid:24,uuid:"36D0B690-E8C2-4BCA-B933-92DED8FB5CCC"}
 */
function validateDate(record, validationObjects)
{	
	if(record && validationObjects)
	{
		for(var i = 0; i < validationObjects.length; i++)
		{
			var vo = validationObjects[i];
			/** @type {Date}*/
			var dateToValidate = null;
			/** @type {Date}*/
			var dateToCompareWith = null;
			
			if(typeof(vo.dateToValidate) === 'string' && record[vo.dateToValidate])
				dateToValidate = record[vo.dateToValidate];
			else if(vo.dateToValidate instanceof Date)
				dateToValidate = vo.dateToValidate
				
			if(typeof(vo.dateToCompareWith) === 'string' && record[vo.dateToCompareWith])
				dateToCompareWith = record[vo.dateToCompareWith];
			else if(vo.dateToCompareWith instanceof Date)
				dateToCompareWith = vo.dateToCompareWith
				
			if(dateToValidate && dateToCompareWith && !globals.compareObjects(dateToValidate, dateToCompareWith, vo.operator.toString()))
			{
				if(vo.overwrite)
					dateToValidate = dateToCompareWith;
				else
				{
					var dtvFormat    = utils.dateFormat(dateToValidate, globals.EU_DATEFORMAT);
					var dtcwFormat   = utils.dateFormat(dateToCompareWith, globals.EU_DATEFORMAT);
					var errorMessage = vo.errorMessage.replace('@dateToValidate', dtvFormat).replace('@dateToCompareWith', dtcwFormat);
					
					throw new Error(errorMessage);
				}
			}
		}
	}
		
	return true;
}

/**
 * Record pre-insert trigger.
 * Validate the record to be inserted.
 * When false is returned the record will not be inserted in the database.
 * When an exception is thrown the record will also not be inserted in the database but it will be added to databaseManager.getFailedRecords(),
 * the thrown exception can be retrieved via record.exception.getValue().
 *
 * @param {JSRecord<db:/ma_anagrafiche/persone>} record the record that will be inserted
 * @param {Boolean} [lookForDuplicates] true if you want to search for duplicate records, false otherwise
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"CC215AE7-5C85-4BC7-9EDB-9ED6A0BCB91A"}
 * @AllowToRunInFind
 */
function validatePerson(record, lookForDuplicates) 
{
	if(record.codicefiscale === 'XXXXXX00X00X000X')
		throw 'Impostare un codice fiscale differente';

	var regex = /[A-Z]{6}\d{2}[A-Z]{1}\d{2}[A-Z]{1}\d{3}[A-Z]{1}/i;
	if(!regex.test(record.codicefiscale))
		throw 'Codice fiscale non valido';

	if(lookForDuplicates)
	{
		/**
		 * Usa una query, altrimenti la persona presente nel DB non viene trovata
		 */
		var sqlQuery = "SELECT \
							CodiceFiscale \
						FROM \
							Persone \
						WHERE \
							CodiceFiscale = ?";
		
		var ds = databaseManager.getDataSetByQuery(globals.Server.MA_ANAGRAFICHE, sqlQuery, [record.codicefiscale], -1);
		var not_valid = ds && ds.getMaxRowIndex() > 0;
		
		// throw exception to pass info to handler, will be returned in record.exception.getValue() when record.exception is a DataException
		if (not_valid)
		{
			throw { message: 'Il codice fiscale inserito è già presente', pk: ds.getValue(1, 1) };//foundRecord: databaseManager.getFoundSet(ds.createDataSource('persone_ds')).getSelectedRecord() };
		}
	}
	
	// return boolean to indicate success
	return true;
}

/**
 * @param {JSRecord} record
 * 
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"0A95D14B-A2D2-4B2A-B714-36EB917486BE"}
 * @AllowToRunInFind
 */
function validateDocumento(record)
{	
	/** @type Array<{dateToValidate:Object,dateToCompareWith:Object,operator:Number,errorMessage:String,overwrite:Boolean}>*/
	var validationObjects = 
	[
		{ dateToValidate: 'rilasciatoscadenza', dateToCompareWith: 'rilasciatoil', operator: globals.ComparisonOperator.GT, errorMessage: 'La data di scadenza deve essere maggiore della data di rilascio' },
		{ dateToValidate: 'rinnovoscadenza', dateToCompareWith: 'rinnovoil', operator: globals.ComparisonOperator.GT, errorMessage: 'La data di scadenza rinnovo deve essere maggiore della data di rinnovo' },
		{ dateToValidate: 'rinnovoil', dateToCompareWith: 'rilasciatoil', operator: globals.ComparisonOperator.GT, errorMessage: 'La data di rinnovo deve essere maggiore della data di rilascio' },
		{ dateToValidate: 'rinnovoil', dateToCompareWith: 'rilasciatoscadenza', operator: globals.ComparisonOperator.GT, errorMessage: 'La data di rinnovo deve essere maggiore della data di scadenza' },
		{ dateToValidate: 'rinnovoscadenza', dateToCompareWith: 'rilasciatoscadenza', operator: globals.ComparisonOperator.GT, errorMessage: 'La data di scadenza rinnovo deve essere maggiore della data di scadenza' },
	];
	
	globals.validateDate(record, validationObjects);
	
	var _fs = record.foundset.duplicateFoundSet();		
	if(_fs.find())
	{
		_fs['idpersonadocumento'] = '!=' + record['idpersonadocumento'];
		_fs['idpersona'] = record['idpersona'];
		_fs['codtipodocumento'] = record['codtipodocumento'];
		_fs['datadecorrenza'] = record['datadecorrenza'];
		if(_fs.search(true) > 0)
			throw 'Il documento inserito è già presente con la medesima data di decorrenza';
	}
		
	return true
}

/**
 * @param {JSRecord<db:/ma_hr/privacy_datigenerali>} record
 * @param {String} [fieldToCheck]
 *
 * @properties={typeid:24,uuid:"AD10A30F-853F-4163-A179-1B6F5562CCE2"}
 * @AllowToRunInFind
 */
function validateDocumentoPrivacy(record, fieldToCheck) 
{
	var msg = 'Il documento inserito è già presente';
	
	var fs = record.foundset.duplicateFoundSet();
	if(fs && fs.find())
	{
		fs.idprivacydatigenerali = '!=' + record.idprivacydatigenerali;
		fs.codprivacytipodocumento = record.codprivacytipodocumento;
		fs.idditta = record.idditta;
		if(fieldToCheck)
			fs[fieldToCheck] = record[fieldToCheck] || '^';
			
//		fs.datascadenza = record.datascadenza || '^';
//		fs.relativoa = record.relativoa || '^';
		
		var not_valid = fs.search() > 0;
	}
	else
	{
		throw 'Errore durante l\'accesso in modalità ricerca';
	}
	
	if (not_valid)
		throw msg;
	
	// return boolean to indicate success
	return true;
}

/**
 * @properties={typeid:24,uuid:"8186B6B8-8775-4987-8058-2981B25451F7"}
 */
function isDatore(record)
{
	return record && record.codambito === globals.codSICUREZZA && record.codtipofunzione === globals.codDATORELAVORO;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0B12A6B4-ECA0-456B-BC20-74AE0AF84579"}
 */
function apriDettaglioFunzione(event)
{
	var form = null;
	
	/** @type {JSFoundset<db:/ma_anagrafiche/ditte_funzionipersone>} */
	var fs = forms[event.getFormName()].foundset;
	var detailFs = null;
	if(fs.idlavoratore)
	{
		form = forms.agp_datianagrafici_main.controller.getName();
//		detailFs = (fs.coincidecon && fs.ditte_funzionipersone_to_ditte_funzionipersone_coincidecon.ditte_funzionipersone_to_lavoratori) || fs.ditte_funzionipersone_to_lavoratori;
	}
	else if(fs.codicefiscale)
	{
		form = forms.agp_datianagrafici_main.controller.getName();
		detailFs = (fs.coincidecon && fs.ditte_funzionipersone_to_ditte_funzionipersone_coincidecon.ditte_funzionipersone_to_persone) || fs.ditte_funzionipersone_to_persone;
	}
	
	globals.ma_utl_showFormInDialog(form, 'Dettagli ' + fs.ditte_funzionipersone_to_tab_tipifunzione.descrizione, detailFs);
}

/**
 * @AllowToRunInFind
 *
 * @param {Number} tipologiaDitta
 * 
 * @return {JSRecord<db:/ma_anagrafiche/ditte>}
 * 
 * @properties={typeid:24,uuid:"BF406DA8-E976-4351-B35A-D671B1C9FA79"}
 */
function getSingolaDitta(tipologiaDitta)
{
	/** @type {JSFoundset<db:/ma_anagrafiche/ditte>} */
	var fs = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,globals.Table.DITTE);
	if(fs.find())
	{
		fs.tipologia = tipologiaDitta;
		if(fs.search() == 1)
			return fs.getSelectedRecord();
	}
	return null;
}

/**
 * @param idDitta
 *
 * @properties={typeid:24,uuid:"ED6FE619-A141-46C5-9F6E-915D4D871315"}
 * @AllowToRunInFind
 * @SuppressWarnings(unused)
 */
function getCausaliTimbratureDitta(idDitta)
{
	var idDittaCausali = idDitta;
	
	/** @type {JSFoundset<db:/ma_anagrafiche/ditte>}*/
	var fs = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,globals.Table.DITTE);
	if(fs.find())
	{
		fs.idditta = idDitta;
		if(fs.search())
		{
			// nel caso di ditte interinali la verifica dell'esistenza di causalizzate va fatta sulla ditta madre
			if(fs.tipologia == 1 && fs.ditte_to_ditte_legami.tipoesterni == 0)
			   idDittaCausali = fs.ditte_to_ditte_legami.iddittariferimento;
			
			var sqlCausali = "SELECT Causale FROM E2TimbratureServizioGestione WHERE idditta = ?";
			var arrCausali = [idDitta];
			var dsCausali = databaseManager.getDataSetByQuery(globals.Server.MA_PRESENZE,sqlCausali,arrCausali,-1);
		    
			return dsCausali.getColumnAsArray(1);
			
		}
	}
	
	return [];
}

/**
 * @AllowToRunInFind
 * 
 * Restituisce true se la gestione della ditta è a mese precedente
 * 
 * @param {Number} idDitta
 * @param {Number} periodo
 *
 * @properties={typeid:24,uuid:"EF94B1A7-B3B3-481C-ABBC-B7596DBDC717"}
 */
function isDittaMesePrecedente(idDitta,periodo)
{
	var sqlMP = 'SELECT [dbo].[F_Ditta_MesePrec] (?,?)';
	var arrMP = [idDitta,periodo];
	var dsMP = databaseManager.getDataSetByQuery(globals.Server.MA_ANAGRAFICHE,sqlMP,arrMP,1);
	
	return dsMP.getValue(1,1);
}
