/**
 * @type {Date}
 * @properties={typeid:35,uuid:"39AB7585-271D-4640-94DF-9DAB6760695C",variableType:93}
 */
var _dataDecorrenza = null;
/**
 * @type {String}
 * @properties={typeid:35,uuid:"91B6CB02-8F73-4EE3-A015-ABD8D317BD23"}
 */
var _indirizzo = null;
/**
 * @type {String}
 * @properties={typeid:35,uuid:"D113CF74-B29E-494C-954C-AB93374C484F"}
 */
var _codComune = null;
/**
 * @type {String}
 * @properties={typeid:35,uuid:"715E8E0A-2E28-4B6C-9D7C-8D98A7EBFA2E"}
 */
var _comune = null;
/**
 * @type {String}
 * @properties={typeid:35,uuid:"443B5D0F-AF80-46A9-B536-AF0079828432"}
 */
var _provincia = null;
/**
 * @type {String}
 * @properties={typeid:35,uuid:"59912221-45A5-4690-81FD-ED1E73EF6327"}
 */
var _cap = null;
/**
 * @type {String}
 * @properties={typeid:35,uuid:"4988A4B0-F286-4533-8926-90C3F32F88D8"}
 */
var _codStatoEstero = null;
/**
 * @type {String}
 * @properties={typeid:35,uuid:"227DCE77-905D-42F8-A39D-7D8F70C462CB"}
 */
var _statoEstero = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C1263DC8-0023-4778-95DF-54D0BA1CBD2F"}
 */
var _codTipoIndirizzo;

/**
 * @properties={typeid:35,uuid:"5505305A-60AB-4C97-B99F-62BB908697ED",variableType:-4}
 */
var _isInEdit = false;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F48DC238-CF73-4956-8989-850107F075BB",variableType:8}
 */
var _idIndEdit

/**
 * @param _rec
 *
 * @properties={typeid:24,uuid:"BFB14AFA-1AFD-4776-A4B1-91527E15791B"}
 */
function updateComune(_rec)
{
	_codComune = _rec['codcomune'];
	_comune = _rec['descrizione'];
	_provincia = _rec['provincia'];
	_cap = _rec['cap'];
}

/**
 * TODO generated, please specify type and doc for the params
 * @param _rec
 *
 * @properties={typeid:24,uuid:"60F59B6D-4181-4217-9A46-13A4B059507B"}
 */
function updateStatoEstero(_rec)
{
	_codStatoEstero = _rec['codice'];
	_statoEstero = _rec['descrizione'];
}