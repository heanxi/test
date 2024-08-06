var wms_layers = [];

var format_Alberta_0 = new ol.format.GeoJSON();
var features_Alberta_0 = format_Alberta_0.readFeatures(json_Alberta_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Alberta_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Alberta_0.addFeatures(features_Alberta_0);
var lyr_Alberta_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Alberta_0, 
                style: style_Alberta_0,
                popuplayertitle: "Alberta",
                interactive: true,
                title: '<img src="styles/legend/Alberta_0.png" /> Alberta'
            });
var format_waterclipped_1 = new ol.format.GeoJSON();
var features_waterclipped_1 = format_waterclipped_1.readFeatures(json_waterclipped_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_waterclipped_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_waterclipped_1.addFeatures(features_waterclipped_1);
var lyr_waterclipped_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_waterclipped_1, 
                style: style_waterclipped_1,
                popuplayertitle: "waterclipped",
                interactive: true,
                title: '<img src="styles/legend/waterclipped_1.png" /> waterclipped'
            });
var format_FishStockingPoints_2 = new ol.format.GeoJSON();
var features_FishStockingPoints_2 = format_FishStockingPoints_2.readFeatures(json_FishStockingPoints_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FishStockingPoints_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FishStockingPoints_2.addFeatures(features_FishStockingPoints_2);
var lyr_FishStockingPoints_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FishStockingPoints_2, 
                style: style_FishStockingPoints_2,
                popuplayertitle: "Fish Stocking Points",
                interactive: true,
                title: '<img src="styles/legend/FishStockingPoints_2.png" /> Fish Stocking Points'
            });

lyr_Alberta_0.setVisible(true);lyr_waterclipped_1.setVisible(true);lyr_FishStockingPoints_2.setVisible(true);
var layersList = [lyr_Alberta_0,lyr_waterclipped_1,lyr_FishStockingPoints_2];
lyr_Alberta_0.set('fieldAliases', {'PRUID': 'PRUID', 'DGUID': 'DGUID', 'PRNAME': 'PRNAME', 'PRENAME': 'PRENAME', 'PRFNAME': 'PRFNAME', 'PREABBR': 'PREABBR', 'PRFABBR': 'PRFABBR', 'LANDAREA': 'LANDAREA', });
lyr_waterclipped_1.set('fieldAliases', {'HYDROUID': 'HYDROUID', 'NAME': 'NAME', 'RANK': 'RANK', 'PRUID': 'PRUID', });
lyr_FishStockingPoints_2.set('fieldAliases', {'DISTRICT': 'DISTRICT', 'WATERBODY': 'WATERBODY', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'SPECIES': 'SPECIES', 'GENOTYPE': 'GENOTYPE', 'STOCKED -': 'STOCKED -', 'STOCKING N': 'STOCKING N', 'PLANNED ST': 'PLANNED ST', 'Map Author': 'Map Author', });
lyr_Alberta_0.set('fieldImages', {'PRUID': 'TextEdit', 'DGUID': 'TextEdit', 'PRNAME': 'TextEdit', 'PRENAME': 'TextEdit', 'PRFNAME': 'TextEdit', 'PREABBR': 'TextEdit', 'PRFABBR': 'TextEdit', 'LANDAREA': 'TextEdit', });
lyr_waterclipped_1.set('fieldImages', {'HYDROUID': 'TextEdit', 'NAME': 'TextEdit', 'RANK': 'Range', 'PRUID': 'TextEdit', });
lyr_FishStockingPoints_2.set('fieldImages', {'DISTRICT': 'TextEdit', 'WATERBODY': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'SPECIES': 'TextEdit', 'GENOTYPE': 'TextEdit', 'STOCKED -': 'TextEdit', 'STOCKING N': 'TextEdit', 'PLANNED ST': 'TextEdit', 'Map Author': 'TextEdit', });
lyr_Alberta_0.set('fieldLabels', {'PRUID': 'hidden field', 'DGUID': 'hidden field', 'PRNAME': 'inline label - visible with data', 'PRENAME': 'hidden field', 'PRFNAME': 'hidden field', 'PREABBR': 'hidden field', 'PRFABBR': 'hidden field', 'LANDAREA': 'hidden field', });
lyr_waterclipped_1.set('fieldLabels', {'HYDROUID': 'hidden field', 'NAME': 'inline label - always visible', 'RANK': 'hidden field', 'PRUID': 'hidden field', });
lyr_FishStockingPoints_2.set('fieldLabels', {'DISTRICT': 'inline label - visible with data', 'WATERBODY': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'SPECIES': 'hidden field', 'GENOTYPE': 'hidden field', 'STOCKED -': 'hidden field', 'STOCKING N': 'hidden field', 'PLANNED ST': 'inline label - always visible', 'Map Author': 'inline label - always visible', });
lyr_FishStockingPoints_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});