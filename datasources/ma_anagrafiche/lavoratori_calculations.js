/**
 * @properties={type:12,typeid:36,uuid:"79328183-2997-4849-9EDE-38E600B0097D"}
 */
function nominativo_qualifica()
{
	return nominativo + (lavoratori_to_e2tabqualifiche ? ' (' + lavoratori_to_e2tabqualifiche.descrizione + ')' : 'Qualifica sconosciuta');
}

/**
 * @properties={type:12,typeid:36,uuid:"9D377609-C7D2-4BF5-AD9B-97B96EB359FA"}
 */
function nominativo()
{
	return (lavoratori_to_persone && lavoratori_to_persone.nominativo) 
	    || (lavoratori_to_lavoratori_personeesterne && lavoratori_to_lavoratori_personeesterne.nominativo)
		|| '?';
}

/**
 * @properties={type:12,typeid:36,uuid:"5785B243-BD6A-413A-9191-4114567D07DC"}
 */
function codice_nominativo()
{
	return codice + ' - ' + nominativo;
}

/**
 * @properties={type:12,typeid:36,uuid:"03777002-26E2-458D-B984-32A4255B8DF9"}
 */
function codice_nominativo_qualifica()
{
	return codice + ' - ' + nominativo_qualifica;
}
