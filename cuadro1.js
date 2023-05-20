//-------------------- COAGULACIÓN --------------------------
var dataSet_coagulacion = [
    ['1', 'Enfermedad del Hígado', "40-50", '45-60', '60-70'],
    ['2', 'Falta de Vitamina K', "40-50", '45-60', '60-70'],
    ['3', 'Transfusiones sanguineas', "40-50", '45-60', '60-70'],
    ['4', 'Cáncer', "40-50", '45-60', '60-70'],
    ['5', 'Transtornos inmunológicos', "40-50", '45-60', '60-70'],
    ['6', 'Enfermedades autoinmunes, como lupus', "40-50", '45-60', '60-70'],
    ['7', 'Obesidad', "40-50", '45-60', '60-70'],
];

$(document).ready(function () {
    $('#example_coagulacion').DataTable({
        data: dataSet_coagulacion,
        columns: [
            { title: 'Id' },
            { title: 'Tipo Afeccción ' },
            { title: 'Grupo etareo general' },
            { title: 'Rango etareo /hombres' },
            { title: 'Rango etareo /mujeres' },  
        ],
    });
});

//-------------------- COLESTEROL --------------------------
var dataSet_colesterol = [
    ['1', 'Colesterol total', "220", '240', '180'],
    ['2', 'Colesterol de lipoproteínas de baja densidad (LDL)', "220", '240', '180'],
    ['3', 'Colesterol de lipoproteínas de alta densidad (HDL)', "220", '240', '180'],
    ['4', 'Triglicéridos', "220", '240', '180'],
];

$(document).ready(function () {
    $('#example_colesterol').DataTable({
        data: dataSet_colesterol,
        columns: [
            { title: 'Id' },
            { title: 'Tipo Afeccción ' },
            { title: 'Media rango 30-40 años general (mg/dl)' },
            { title: 'Media rango 30-40 años /hombres  (mg/dl)' },
            { title: 'Media rango 30-40 años /mujeres  (mg/dl)' },           
        ],
    });
});

//-------------------- PERFIL LÍPIDO --------------------------
var dataSet_lipido = [
    ['1', 'Colesterol total', "220", '240', '180'],
    ['2', 'Colesterol de lipoproteínas de baja densidad (LDL)', "220", '240', '180'],
    ['3', 'Colesterol de lipoproteínas de alta densidad (HDL)', "220", '240', '180'],
    ['4', 'Triglicéridos', "220", '240', '180'],
];

$(document).ready(function () {
    $('#example_lipido').DataTable({
        data: dataSet_lipido,
        columns: [
            { title: 'Id' },
            { title: 'Tipo Afeccción ' },
            { title: 'Media rango 30-40 años general (mg/dl)' },
            { title: 'Media rango 30-40 años /hombres  (mg/dl)' },
            { title: 'Media rango 30-40 años /mujeres  (mg/dl)' },            
        ],
    });
});

//-------------------- TRIGLICÉRIDOS --------------------------
var dataSet_trigli = [
    ['1', 'Colesterol total', "220", '240', '180'],
    ['2', 'Colesterol de lipoproteínas de baja densidad (LDL)', "220", '240', '180'],
    ['3', 'Colesterol de lipoproteínas de alta densidad (HDL)', "220", '240', '180'],
    ['4', 'Triglicéridos', "220", '240', '180'],
];

$(document).ready(function () {
    $('#example_trigli').DataTable({
        data: dataSet_trigli,
        columns: [
            { title: 'Id' },
            { title: 'Tipo Afeccción ' },
            { title: 'Media rango 30-40 años general (mg/dl)' },
            { title: 'Media rango 30-40 años /hombres  (mg/dl)' },
            { title: 'Media rango 30-40 años /mujeres  (mg/dl)' },            
        ],
    });
});

//-------------------- HEMOGRAMAS --------------------------
var dataSet_hemograma = [
    ['1', 'Recuento de glóbulos rojos', '4350 millones a 5650 millones de células/l', '3920 millones a 5130 millones de células/l'],
    ['2', 'Hemoglobina', "13,2 a 16,6 gramos/dl (de 132 a 166 gramos/l)", '11,6 a 15 gramos/dl (de 116 a 150 gramos/l)',],
    ['3', 'Hematocrito', "del 38,3 % al 48,6 %", 'del 35,5 % al 44,9 %'],
    ['4', 'Recuento de glóbulos blancos', "De 3400 millones a 9600 millones de células/l", 'De 3400 millones a 9600 millones de células/l'],
    ['5', 'Recuento de plaquetas', '1350 millones a 3170 millones/l', '1570 millones a 3710 millones/l'],
];

$(document).ready(function () {
    $('#example_hemograma').DataTable({
        data: dataSet_hemograma,
        columns: [
            { title: 'Id' },
            { title: 'Variables ' },
            { title: 'Hombres' },
            { title: 'Mujeres' },
        ],
    });
});

//-------------------- ORINA --------------------------
var dataSet_orina = [
    ['1', 'Aldosterona', 'Orina, 24 h', '5-19 mcg/24 h', '13,9 - 52,6 nmol/24 h'],
    ['2', 'Aminoácidos, totales', 'Orina, 24 h', '200–400 mg/24 h', '14-29 nmol/24 h'],
    ['3', 'Amilasa', 'Orina, programado', '6,5 - 48,1 U/h', '-'],
    ['4', 'Calcio (dieta no restringida)', 'Orina, programado', '100-300 mg/día', '2,5 a 7,5 mmol/día'],
    ['5', 'Catecolaminas, total', 'Orina, 24 h', 'Orina, programado', '< 100 mcg/m2/24 h', '< 591 nmol/m2/24 h'],
    ['6', 'Cortisol, libre', 'Orina, 24 h', '< 90 mcg/24 h', '< 248 nmol/24 h'],
    ['7', 'Cratina Mujeres', 'Orina, 24 h', '0-100 mg/24 h', '0-763 mmol/24 h'],
    ['8', 'Cratina Hombres', 'Orina, 24 h', "4–40 mg/24 h", '30 - 305 mmol/24 h'],
];

$(document).ready(function () {
    $('#example_orina').DataTable({
        data: dataSet_orina,
        columns: [
            { title: 'Id' },
            { title: 'Muestra ' },
            { title: 'Unidades convencionales' },
            { title: 'Unidades del SI' },
        ],
    });
});

//-------------------- PERFIL BIOQUÍMICO --------------------------
var dataSet_bioquimico = [
    ['1', 'Albúmina: 3.4 a 5.4 mg/dL (de 34 a 54 g/L)', 40, 45, 35],
    ['2', 'Fosfatasa alcalina: 20 a 130 U/L', 100, 120, 95],
    ['3', 'ALT (alanina transaminasa): 4 a 36 U/L', 20, 18, 25],
    ['4', 'AST (aspartato de aminotransferasa): 8 a 33 U/L' , 25, 20, 30],
    ['5', 'BUN (nitrógeno ureico en la sangre): 6 a 20 mg/dL (de 2.14 a 7.14 mmol/L)', 5, 5, 4],
    ['6', 'Calcio: 8.5 a 10.2 mg/dL (de 2.13 a 2.55 mmol/L)', 2.4, 2.2, 2.3],
    ['7', 'Cloruro: 96 a 106 mEq/L (de 96 a 106 mmol/L)', 120, 130, 90],
    ['8', 'CO2 (dióxido de carbono): 23 a 29 mEq/L.(de 23 a 29 mmol/L)', 37, 38, 36],
    ['9', 'Creatinina: 0.6 a 1.3 mg/dL (de 53 a 114.9 µmol/L)', 100, 90, 110],
    ['10', 'Glucosa: 70 a 100 mg/dL (de 3.9 a 5.6 mmol/L)', 4, 5, 6],
    ['11', 'Potasio: 3.7 a 5.2 mEq/L (de 3.70 a 5.20 mmol/L)', 4, 4.5, 4.1],
    ['12', 'Sodio: 135 a 145 mEq/L (de 135 a 145 mmol/L)', 180, 1800, 180],
    ['13', 'Bilirrubina total: 0.1 a 1.2 mg/dL (de 2 a 21 µmol/L)', 15, 12, 18],
    ['14', 'Proteína total: 6.0 a 8.3 g/dL (de 60 a 38 g/L)', 40, 45, 50],
];

$(document).ready(function () {
    $('#example_bioquimico').DataTable({
        data: dataSet_bioquimico,
        columns: [
            { title: 'Id' },
            { title: 'Pruebas completas ' },
            { title: 'Grupo etareo general' },
            { title: 'Rango etareo /hombres' },
            { title: 'Rango etareo /mujeres' },           
        ],
    });
});

//-------------------- GENERALES --------------------------
var dataSet_general = [
    ['1', 'Hemograma',                                  1000, 1200, 1250, 1350, 1245, 1360, 1245, 1850, 1560, 1356, 1756, 1450, 1603],
    ['2', 'Perfil Lídico',                              5000, 6000, 5500, 4000, 4230, 5123, 7256, 8789, 7545, 5640, 8787, 8200, 6745],
    ['3', 'Colesterol', 5000, 6000, 5500, 4000, 4230, 5123, 7256, 8789, 7545, 5640, 8787, 8200, 6745],
    ['4', 'Triglicéridos',               5000, 6000, 5500, 4000, 4230, 5123, 7256, 8789, 7545, 5640, 8787, 8200, 6745],
    ['5', 'Orina',           15000, 12000, 14000, 16540, 17896, 15364, 13456, 14789, 17856, 14567, 16548, 18764, 16785, 15234],
    ['6', 'Perfil Bioquímico', 8560, 7895, 4567, 5781, 7812, 4589, 6789, 6000, 5000, 4500, 5350, 6542, 6856],
    ['7', 'Coagulación',                123, 425, 324, 234, 423, 456, 489, 566, 423, 652, 578, 689,  654],
    ['8', 'Radiología',                1230, 4252, 3240, 2340, 4230, 4560, 4890, 5660, 4230, 6520, 5780, 6890, 6540],
    ['9', 'Escaner',                5000, 6000, 5500, 4000, 4230, 5123, 7256, 8789, 7545, 5640, 8787, 8200, 6745],
    ['10', 'Mamografía',                15000, 12000, 14000, 16540, 17896, 15364, 13456, 14789, 17856, 14567, 16548, 18764, 16785, 15234],
    ['11', 'Ecografía',                1230, 42520, 3240, 2340, 4230, 4560, 4890, 5660, 4230, 6520, 5780, 6890, 6540],
    ['12', 'Endoscopia',                123, 4252, 324, 234, 423, 456, 489, 566, 423, 652, 578, 689,  654],
    ['13', 'Endoscopía Colon',                123, 4252, 324, 234, 423, 456, 489, 566, 423, 652, 578, 689,  654],
];

$(document).ready(function () {
    $('#example_general').DataTable({
        data: dataSet_general,
        columns: [
            { title: 'Id' },
            { title: 'Tipo examen' },
            { title: '2010' },
            { title: '2011' },
            { title: '2012' },
            { title: '2013' },
            { title: '2014' },
            { title: '2015' },
            { title: '2016' },
            { title: '2017' },
            { title: '2018' },    
            { title: '2019' },
            { title: '2020' },
            { title: '2021' },        
            { title: '2022' },        
        ],
    });
});





