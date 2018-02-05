/**
 * @properties={type:12,typeid:36,uuid:"1F4FBA47-EEB8-4C6C-A841-96FAACE8D102"}
 */
function descrizionegenerale()
{
	return e2regolefasce_to_e2fo_fasceorarie.codicefascia + ' - ' + e2regolefasce_to_e2fo_fasceorarie.descrizione;
}

/**
 * @properties={type:12,typeid:36,uuid:"8ACD3E64-611E-400E-98BF-871DECED0DF4"}
 */
function desctiporiposo()
{
	switch(tiporiposo)
	{
		case 0:
			return 'Nessuno';
			break;
		case 1:
			return 'Primario';
			break;
		case 2: 
			return 'Secondario';
			break;
		default:
			break;
	}
	return null;
}
