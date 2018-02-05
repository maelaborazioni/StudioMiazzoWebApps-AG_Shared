dataSource:"db:/ma_anagrafiche/persone_statocivile",
extendsID:"-1",
items:[
{
dataProviderID:"datadecorrenza",
displayType:0,
editable:true,
horizontalAlignment:0,
location:"0,20",
name:"fld_decorrenza",
size:"70,20",
styleClass:"table",
transparent:true,
typeid:4,
uuid:"0DAB69D1-DB15-4816-B8FB-7C851E47ED37",
visible:false
},
{
anchors:11,
dataProviderID:"persone_statocivile_to_tab_statocivile.descrizione",
editable:true,
location:"70,20",
name:"fld_descrizione",
size:"330,20",
styleClass:"table",
transparent:true,
typeid:4,
uuid:"5CA580E1-86E4-4D64-A0CF-3799DA141750"
},
{
anchors:11,
labelFor:"fld_descrizione",
location:"70,0",
name:"lbl_descrizione",
size:"330,20",
styleClass:"table_header",
text:"Stato civile",
transparent:false,
typeid:7,
uuid:"64B3E08C-D7C5-43FF-9ECE-4AF9117F6749"
},
{
horizontalAlignment:0,
labelFor:"fld_decorrenza",
location:"0,0",
mnemonic:null,
name:"lbl_decorrenza",
size:"70,20",
styleClass:"table_header",
text:"Decorrenza",
transparent:false,
typeid:7,
uuid:"9D71DF33-6BB1-44F5-806C-5C95A41F6BF1",
visible:false
},
{
height:40,
partType:5,
typeid:19,
uuid:"9EBB414F-EC41-47EE-A783-0736148B4569"
}
],
name:"agp_statocivile_tbl",
scrollbars:32,
showInMenu:true,
size:"400,40",
styleName:"leaf_style",
typeid:3,
uuid:"CD9F3971-1768-4160-A0EB-D851FC33A75B",
view:3