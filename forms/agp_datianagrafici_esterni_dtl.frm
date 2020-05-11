customProperties:"",
dataSource:"db:/ma_anagrafiche/lavoratori_personeesterne",
extendsID:"3C076162-6D45-4034-9F27-2ADA00E4841B",
items:[
{
dataProviderID:"lavoratori_personeesterne_to_tab_comuniitalia.cap",
editable:false,
enabled:false,
horizontalAlignment:2,
location:"440,60",
margin:"0,2,0,0",
name:"fld_cap",
size:"40,20",
typeid:4,
uuid:"04F365F2-563C-4D24-BF14-F1508C122645"
},
{
dataProviderID:"lavoratori_personeesterne_to_tab_comuniitalia.provincia",
editable:false,
enabled:false,
horizontalAlignment:0,
location:"400,60",
name:"fld_provincia",
size:"30,20",
typeid:4,
uuid:"074ED5AA-1678-4BFC-984C-BFFF3750C8CB"
},
{
extendsID:"AAAC08F8-0270-4E48-995F-E7066E036521",
height:90,
typeid:19,
uuid:"0971E51E-1C7A-46AE-97A1-2FCCF8799CA8"
},
{
labelFor:"fld_cap",
location:"440,40",
name:"lbl_cap",
size:"40,20",
text:"Cap",
transparent:true,
typeid:7,
uuid:"0C4D9DF3-C76D-45CD-AA06-9F1B53C2AB92"
},
{
dataProviderID:"codicefiscale",
displaysTags:true,
enabled:false,
formIndex:2,
horizontalAlignment:2,
location:"490,20",
margin:"0,2,0,0",
name:"fld_codicefiscale",
onDataChangeMethodID:"5F8D4B23-31F0-441D-AF1C-F2F0B01CDE75",
onFocusGainedMethodID:"-1",
size:"130,20",
text:"i18n:sampleuse_navigation.anagrafica_ditta_dtl.cod_ditta.text",
toolTipText:"i18n:sampleuse_navigation.anagrafica_ditta_dtl.cod_ditta.toolTipText",
typeid:4,
uuid:"1D3F8354-376D-4841-8E0C-AB0917C54644"
},
{
customProperties:"",
dataProviderID:"sesso",
displayType:2,
editable:false,
enabled:false,
horizontalAlignment:2,
location:"630,20",
name:"fld_sesso",
onActionMethodID:"-1",
size:"70,20",
typeid:4,
uuid:"24B0CB5C-516F-4D83-8D94-A72E02B9CCEE",
valuelistID:"953009D6-B6CF-401C-AA21-43F926348BB0"
},
{
dataProviderID:"lavoratori_personeesterne_to_tab_comuniitalia.descrizione",
editable:false,
enabled:false,
location:"10,60",
name:"fld_luogonascita",
size:"380,20",
typeid:4,
uuid:"2F7D0F7F-9B1E-412E-9136-7812EEFBF937"
},
{
borderType:"EmptyBorder,0,0,0,0",
customProperties:"methods:{\
onActionMethodID:{\
arguments:[\
null,\
\"'nascita_codstatoestero'\",\
\"'AG_Lkp_Statoestero'\",\
\"'updateComune'\"\
]\
}\
}",
enabled:false,
formIndex:1,
horizontalAlignment:0,
labelFor:"fld_statoestero",
location:"770,60",
mediaOptions:2,
name:"btn_statoestero",
onActionMethodID:"09683411-0331-4A08-BF5E-656611194522",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
rolloverCursor:12,
showClick:false,
size:"20,20",
styleClass:"btn_lookup",
transparent:true,
typeid:7,
uuid:"31227816-C660-474E-A00A-016C4FDF3748",
verticalAlignment:0
},
{
labelFor:"fld_sesso",
location:"630,5",
name:"lbl_sesso",
size:"70,10",
text:"Sesso",
transparent:true,
typeid:7,
uuid:"40EE651C-0E8B-4754-8F65-23CBC8007831"
},
{
borderType:"EmptyBorder,0,0,0,0",
customProperties:"methods:{\
onActionMethodID:{\
arguments:[\
null,\
\"'nascita_codcomune'\",\
\"'AG_Lkp_Comune'\",\
\"'updateStato'\"\
]\
}\
}",
enabled:false,
formIndex:1,
horizontalAlignment:0,
labelFor:"fld_luogonascita",
location:"370,60",
mediaOptions:2,
name:"btn_luogonascita",
onActionMethodID:"09683411-0331-4A08-BF5E-656611194522",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
rolloverCursor:12,
showClick:false,
size:"20,20",
styleClass:"btn_lookup",
transparent:true,
typeid:7,
uuid:"635E3DD2-577D-42B6-8A0B-D34174962200",
verticalAlignment:0
},
{
customProperties:"methods:{\
onActionMethodID:{\
arguments:[\
null,\
\"'sesso'\",\
\"'AG_Lkp_Sesso'\"\
]\
}\
}",
formIndex:1,
horizontalAlignment:0,
labelFor:"fld_sesso",
location:"685,141",
mediaOptions:2,
name:"btn_sesso",
onActionMethodID:"09683411-0331-4A08-BF5E-656611194522",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
rolloverCursor:12,
showClick:false,
size:"20,20",
styleClass:"btn_lookup",
transparent:true,
typeid:7,
uuid:"6C8C4094-A68B-4D90-9495-F81EC9F546DC",
verticalAlignment:0,
visible:false
},
{
dataProviderID:"nascita_data",
displaysTags:true,
enabled:false,
format:"dd/MM/yyyy|mask",
location:"710,20",
name:"fld_datanascita",
size:"80,20",
typeid:4,
uuid:"7E877870-2F9B-4637-B834-9F247DD11530"
},
{
labelFor:"fld_provincia",
location:"400,40",
name:"lbl_provincia",
size:"30,20",
text:"Prov",
transparent:true,
typeid:7,
uuid:"82B30AFC-8E2E-4669-8FFA-604AA4A1F066"
},
{
formIndex:7,
labelFor:"fld_nome",
location:"250,0",
mediaOptions:14,
name:"lbl_nome",
size:"100,20",
text:"Nome",
toolTipText:"i18n:sampleuse_navigation.anagrafica_ditta_dtl.label_1073742059.toolTipText",
transparent:true,
typeid:7,
uuid:"9221D228-D94D-4B21-B539-4FFD736E000A"
},
{
height:95,
partType:5,
typeid:19,
uuid:"97CAE20C-9893-4BEA-AC13-3729C9BBEFEB"
},
{
labelFor:"fld_statoestero",
location:"490,40",
name:"lbl_statoestero",
size:"165,20",
text:"Stato di nascita",
transparent:true,
typeid:7,
uuid:"98C63607-AEE3-44ED-B680-AA01B4C165FD"
},
{
labelFor:"fld_luogonascita",
location:"10,40",
name:"lbl_luogonascita",
size:"80,20",
text:"Luogo di nascita",
transparent:true,
typeid:7,
uuid:"9A256C83-23C8-4BF8-9100-ABECCC9C6AB3"
},
{
dataProviderID:"lavoratori_personeesterne_to_tab_statiesteri.descrizione",
editable:false,
enabled:false,
location:"490,60",
name:"fld_statoestero",
size:"300,20",
typeid:4,
uuid:"AABAE206-74F1-4A70-9EA3-C01F85B7AB1F"
},
{
enabled:false,
formIndex:1,
horizontalAlignment:0,
labelFor:"fld_datanascita",
location:"770,20",
mediaOptions:2,
name:"btn_datanascita",
onActionMethodID:"763FDDFF-2CFE-46E2-A447-E7F60173BC57",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
rolloverCursor:12,
showClick:false,
size:"20,20",
styleClass:"btn_calendar",
transparent:true,
typeid:7,
uuid:"AD4C0404-D727-4E6B-A45F-506E5D64DFF5",
verticalAlignment:0
},
{
labelFor:"fld_datanascita",
location:"710,5",
name:"lbl_datanascita",
size:"80,10",
text:"Data di nascita",
transparent:true,
typeid:7,
uuid:"CA5ABF0D-F2A9-4D8A-A2AE-43F582C5A619"
},
{
formIndex:3,
labelFor:"fld_cognome",
location:"10,0",
mediaOptions:14,
name:"lbl_cognome",
size:"100,20",
text:"Cognome",
toolTipText:"i18n:sampleuse_navigation.anagrafica_ditta_dtl.label_1073742063.toolTipText",
transparent:true,
typeid:7,
uuid:"E4B65D9D-CA8D-4513-B810-5336DF52688E"
},
{
dataProviderID:"nome",
enabled:false,
formIndex:2,
location:"250,20",
name:"fld_nome",
onFocusGainedMethodID:"-1",
size:"230,20",
text:"i18n:sampleuse_navigation.anagrafica_ditta_dtl.cod_ditta.text",
toolTipText:"i18n:sampleuse_navigation.anagrafica_ditta_dtl.cod_ditta.toolTipText",
typeid:4,
uuid:"EC59B79B-B6DB-45BB-9082-D2A0E85EE28C"
},
{
dataProviderID:"cognome",
enabled:false,
location:"10,20",
name:"fld_cognome",
size:"230,20",
text:"i18n:sampleuse_navigation.anagrafica_ditta_dtl.RagioneSocialeFull.text",
toolTipText:"i18n:sampleuse_navigation.anagrafica_ditta_dtl.RagioneSocialeFull.toolTipText",
typeid:4,
uuid:"ED0AE886-C348-46AB-AFA6-9AF89F10FA6F"
},
{
formIndex:7,
labelFor:"fld_codicefiscale",
location:"490,0",
mediaOptions:14,
name:"lbl_codicefiscale",
size:"100,20",
text:"Codice fiscale",
toolTipText:"i18n:sampleuse_navigation.anagrafica_ditta_dtl.label_1073742059.toolTipText",
transparent:true,
typeid:7,
uuid:"F014505C-2467-47C8-BCC4-C0046D97C6BE"
}
],
name:"agp_datianagrafici_esterni_dtl",
navigatorID:"-1",
onShowMethodID:"2B85FC8D-2752-4485-8AA6-C84458505F9B",
size:"800,95",
styleName:"leaf_style",
typeid:3,
uuid:"CFDD5E37-1B54-4740-9AC3-7E0D57A9454F"