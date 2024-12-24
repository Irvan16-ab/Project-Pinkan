var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BANGUNAN_AR_50K_1 = new ol.format.GeoJSON();
var features_BANGUNAN_AR_50K_1 = format_BANGUNAN_AR_50K_1.readFeatures(json_BANGUNAN_AR_50K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BANGUNAN_AR_50K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BANGUNAN_AR_50K_1.addFeatures(features_BANGUNAN_AR_50K_1);
var lyr_BANGUNAN_AR_50K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BANGUNAN_AR_50K_1, 
                style: style_BANGUNAN_AR_50K_1,
                popuplayertitle: 'BANGUNAN_AR_50K',
                interactive: true,
                title: '<img src="styles/legend/BANGUNAN_AR_50K_1.png" /> BANGUNAN_AR_50K'
            });
var format_RUMAHSAKIT_PT_50K_2 = new ol.format.GeoJSON();
var features_RUMAHSAKIT_PT_50K_2 = format_RUMAHSAKIT_PT_50K_2.readFeatures(json_RUMAHSAKIT_PT_50K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUMAHSAKIT_PT_50K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUMAHSAKIT_PT_50K_2.addFeatures(features_RUMAHSAKIT_PT_50K_2);
var lyr_RUMAHSAKIT_PT_50K_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RUMAHSAKIT_PT_50K_2, 
                style: style_RUMAHSAKIT_PT_50K_2,
                popuplayertitle: 'RUMAHSAKIT_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/RUMAHSAKIT_PT_50K_2.png" /> RUMAHSAKIT_PT_50K'
            });
var format_TERMINALBUS_PT_50K_3 = new ol.format.GeoJSON();
var features_TERMINALBUS_PT_50K_3 = format_TERMINALBUS_PT_50K_3.readFeatures(json_TERMINALBUS_PT_50K_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TERMINALBUS_PT_50K_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TERMINALBUS_PT_50K_3.addFeatures(features_TERMINALBUS_PT_50K_3);
var lyr_TERMINALBUS_PT_50K_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TERMINALBUS_PT_50K_3, 
                style: style_TERMINALBUS_PT_50K_3,
                popuplayertitle: 'TERMINALBUS_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/TERMINALBUS_PT_50K_3.png" /> TERMINALBUS_PT_50K'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_BANGUNAN_AR_50K_1.setVisible(true);lyr_RUMAHSAKIT_PT_50K_2.setVisible(true);lyr_TERMINALBUS_PT_50K_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_BANGUNAN_AR_50K_1,lyr_RUMAHSAKIT_PT_50K_2,lyr_TERMINALBUS_PT_50K_3];
lyr_BANGUNAN_AR_50K_1.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_RUMAHSAKIT_PT_50K_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'TIPRST': 'TIPRST', 'JPLYRS': 'JPLYRS', 'ALAMAT': 'ALAMAT', });
lyr_TERMINALBUS_PT_50K_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'KODTRM': 'KODTRM', 'MGTTRM': 'MGTTRM', 'STATRM': 'STATRM', 'KATTRM': 'KATTRM', 'TIPTRM': 'TIPTRM', 'LUAS': 'LUAS', 'THBTRM': 'THBTRM', 'THOTRM': 'THOTRM', 'THSTRM': 'THSTRM', 'KONKON': 'KONKON', 'JLBTRM': 'JLBTRM', 'KEBTRM': 'KEBTRM', 'JLDTRM': 'JLDTRM', 'KEDTRM': 'KEDTRM', 'PARTRM': 'PARTRM', 'KEPTRM': 'KEPTRM', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_BANGUNAN_AR_50K_1.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_RUMAHSAKIT_PT_50K_2.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'LCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'TIPRST': 'Range', 'JPLYRS': 'Range', 'ALAMAT': 'TextEdit', });
lyr_TERMINALBUS_PT_50K_3.set('fieldImages', {'NAMOBJ': 'TextEdit', 'KODTRM': 'TextEdit', 'MGTTRM': 'TextEdit', 'STATRM': 'Range', 'KATTRM': 'Range', 'TIPTRM': 'Range', 'LUAS': 'TextEdit', 'THBTRM': 'TextEdit', 'THOTRM': 'TextEdit', 'THSTRM': 'TextEdit', 'KONKON': 'Range', 'JLBTRM': 'Range', 'KEBTRM': 'TextEdit', 'JLDTRM': 'Range', 'KEDTRM': 'TextEdit', 'PARTRM': 'Range', 'KEPTRM': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_BANGUNAN_AR_50K_1.set('fieldLabels', {'NAMOBJ': 'inline label - always visible', 'FCODE': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'inline label - always visible', 'SHAPE_Leng': 'inline label - always visible', 'SHAPE_Area': 'inline label - always visible', });
lyr_RUMAHSAKIT_PT_50K_2.set('fieldLabels', {'NAMOBJ': 'inline label - always visible', 'FCODE': 'inline label - always visible', 'LCODE': 'no label', 'REMARK': 'inline label - always visible', 'METADATA': 'no label', 'SRS_ID': 'inline label - always visible', 'TIPRST': 'no label', 'JPLYRS': 'no label', 'ALAMAT': 'inline label - always visible', });
lyr_TERMINALBUS_PT_50K_3.set('fieldLabels', {'NAMOBJ': 'inline label - always visible', 'KODTRM': 'inline label - always visible', 'MGTTRM': 'inline label - always visible', 'STATRM': 'inline label - always visible', 'KATTRM': 'inline label - always visible', 'TIPTRM': 'inline label - always visible', 'LUAS': 'inline label - always visible', 'THBTRM': 'inline label - always visible', 'THOTRM': 'inline label - always visible', 'THSTRM': 'inline label - always visible', 'KONKON': 'inline label - always visible', 'JLBTRM': 'inline label - always visible', 'KEBTRM': 'inline label - always visible', 'JLDTRM': 'inline label - always visible', 'KEDTRM': 'inline label - always visible', 'PARTRM': 'inline label - always visible', 'KEPTRM': 'inline label - always visible', 'FCODE': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SRS_ID': 'inline label - always visible', 'LCODE': 'inline label - always visible', 'METADATA': 'inline label - always visible', });
lyr_TERMINALBUS_PT_50K_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});