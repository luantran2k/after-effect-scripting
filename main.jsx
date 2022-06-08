var defaultHexColor = '0xF96163';
var colorHexObj = {
    hexComp: defaultHexColor,
    hexBackground: defaultHexColor,
    hexText: '0xF9F960'
};

var isStroke = true;
var fontFamily = 'Calibri';
var language = 'Tiếng Việt';
var start = 9.8;
var assetFolder = '';

var languageObj = {
    'Tiếng Việt': {
        1: 'Chào mừng bạn đến với ',
        2: '\nđược tổ chức tại ',
        3: 'Bao gồm các môn thi đấu sau'
    },
    English: {
        1: 'Welcome to the ',
        2: '\nhosted in ',
        3: 'With sports'
    }
};
var mainComp;
var hasAsset = false;
var hasComp = false;
// MAINPALETTE
// ===========
var mainPalette = new Window('palette');
mainPalette.text = 'Trần Văn Luân - B18DCPT151';
mainPalette.orientation = 'row';
mainPalette.alignChildren = ['center', 'top'];
mainPalette.spacing = 10;
mainPalette.margins = 16;

// COL1
// ====
var col1 = mainPalette.add('group', undefined, { name: 'col1' });
col1.orientation = 'column';
col1.alignChildren = ['left', 'center'];
col1.spacing = 10;
col1.margins = 0;

// PROJECTCONTROLPANEL
// ===================
var projectControlPanel = col1.add('panel', undefined, undefined, {
    name: 'projectControlPanel'
});
projectControlPanel.text = '1. Project';
projectControlPanel.orientation = 'column';
projectControlPanel.alignChildren = ['left', 'top'];
projectControlPanel.spacing = 10;
projectControlPanel.margins = 10;

var createProjectBtn = projectControlPanel.add('button', undefined, undefined, {
    name: 'createProjectBtn'
});
createProjectBtn.text = 'Tạo project';
createProjectBtn.preferredSize.width = 140;

var saveProjectBtn = projectControlPanel.add('button', undefined, undefined, {
    name: 'saveProjectBtn'
});
saveProjectBtn.text = 'Lưu project';
saveProjectBtn.preferredSize.width = 140;

// ASSESTPANEL
// ===========
var assestPanel = col1.add('panel', undefined, undefined, {
    name: 'assestPanel'
});
assestPanel.text = '2. Tài nguyên';
assestPanel.orientation = 'column';
assestPanel.alignChildren = ['center', 'top'];
assestPanel.spacing = 10;
assestPanel.margins = 10;

var assetBtn = assestPanel.add('button', undefined, undefined, {
    name: 'assetBtn'
});
assetBtn.helpTip = 'Folder tài nguyên chứa toàn bộ dữ liệu cần thiết';
assetBtn.text = 'Import folder asset';
assetBtn.preferredSize.width = 140;

// HELPGROUP
// =========
var helpGroup = col1.add('group', undefined, { name: 'helpGroup' });
helpGroup.orientation = 'row';
helpGroup.alignChildren = ['left', 'center'];
helpGroup.spacing = 10;
helpGroup.margins = 10;

var helpBtn = helpGroup.add('button', undefined, undefined, {
    name: 'helpBtn'
});
helpBtn.helpTip = 'Xem hướng dẫn';
helpBtn.text = 'Help';
helpBtn.alignment = ['left', 'center'];

// COL2
// ====
var col2 = mainPalette.add('group', undefined, { name: 'col2' });
col2.orientation = 'row';
col2.alignChildren = ['left', 'top'];
col2.spacing = 10;
col2.margins = 0;

// IMPLEMENTATIONPANEL
// ===================
var implementationPanel = col2.add('panel', undefined, undefined, {
    name: 'implementationPanel'
});
implementationPanel.text = '3. Triển khai';
implementationPanel.preferredSize.width = 326;
implementationPanel.preferredSize.height = 55;
implementationPanel.orientation = 'column';
implementationPanel.alignChildren = ['left', 'top'];
implementationPanel.spacing = 10;
implementationPanel.margins = 10;

// COMPPANEL
// =========
var compPanel = implementationPanel.add('panel', undefined, undefined, {
    name: 'compPanel'
});
compPanel.text = 'Composition';
compPanel.preferredSize.width = 400;
compPanel.orientation = 'column';
compPanel.alignChildren = ['left', 'top'];
compPanel.spacing = 10;
compPanel.margins = 10;

var nameComp = compPanel.add('edittext {properties: {name: "nameComp"}}');
nameComp.helpTip = 'Nhập tên composition';
nameComp.text = 'SeaGame31';
nameComp.preferredSize.width = 420;

// COMPELEMENT
// ===========
var compElement = compPanel.add('group', undefined, { name: 'compElement' });
compElement.orientation = 'row';
compElement.alignChildren = ['left', 'center'];
compElement.spacing = 10;
compElement.margins = 0;

var createCompBtn = compElement.add('button', undefined, undefined, {
    name: 'createCompBtn'
});
createCompBtn.text = 'Tạo composition';
createCompBtn.preferredSize.width = 140;

var compColor = compElement.add('button', undefined, undefined, {
    name: 'compColor'
});
compColor.size = [40, 28];
compColor.fillBrush = compColor.graphics.newBrush(
    compColor.graphics.BrushType.SOLID_COLOR,
    convertHextoRgb(colorHexObj.hexComp)
);
compColor.onDraw = customDraw;

var useBackgroundImg = compElement.add('checkbox', undefined, undefined, {
    name: 'useBackgroundImg'
});
useBackgroundImg.value = true;

useBackgroundImg.text = 'Dùng background';

// WELCOMEPANEL
// ============
var welcomePanel = implementationPanel.add('panel', undefined, undefined, {
    name: 'welcomePanel'
});
welcomePanel.text = 'Text';
welcomePanel.preferredSize.width = 400;
welcomePanel.orientation = 'column';
welcomePanel.alignChildren = ['left', 'top'];
welcomePanel.spacing = 10;
welcomePanel.margins = 10;

var textGroup1 = welcomePanel.add('group', undefined, { name: 'textGroup1' });
textGroup1.orientation = 'row';
textGroup1.alignChildren = ['left', 'center'];
textGroup1.spacing = 10;
textGroup1.margins = 0;

var nameEventGroup = textGroup1.add('group', undefined, {
    name: 'nameEventGroup'
});
nameEventGroup.orientation = 'column';
nameEventGroup.alignChildren = ['left', 'center'];
nameEventGroup.spacing = 10;
nameEventGroup.margins = 0;

var eventNameLabel = nameEventGroup.add('statictext', undefined, undefined, {
    name: 'eventNameLabel'
});
eventNameLabel.text = 'Tên sự kiện';

var eventNameText = nameEventGroup.add(
    'edittext {properties: {name: "eventNameText"}}'
);
eventNameText.text = 'Sea Game 31';
eventNameText.helpTip = 'Nhập tên sự kiện';
eventNameText.preferredSize.width = 200;

var hostNameGroup = textGroup1.add('group', undefined, {
    name: 'hostNameGroup'
});
hostNameGroup.orientation = 'column';
hostNameGroup.alignChildren = ['left', 'center'];
hostNameGroup.spacing = 10;
hostNameGroup.margins = 0;

var hostNameLabel = hostNameGroup.add('statictext', undefined, undefined, {
    name: 'hostNameGroup'
});
hostNameLabel.text = 'Chủ nhà';

var hostNameText = hostNameGroup.add(
    'edittext {properties: {name: "hostNameText"}}'
);
hostNameText.text = 'Việt Nam';
hostNameText.helpTip = 'Nhập tên quốc gia đăng cai';
hostNameText.preferredSize.width = 200;
// textGroup2
// =========
var textGroup2 = welcomePanel.add('group', undefined, { name: 'textGroup2' });
textGroup2.orientation = 'row';
textGroup2.alignChildren = ['left', 'bottom'];
textGroup2.spacing = 10;
textGroup2.margins = 0;

var mascotNameGroup = textGroup2.add('group', undefined, {
    name: 'mascotNameGroup'
});
mascotNameGroup.orientation = 'column';
mascotNameGroup.alignChildren = ['left', 'center'];

var mascotNameLabel = mascotNameGroup.add('statictext', undefined, undefined, {
    name: 'mascotNameLabel'
});
mascotNameLabel.text = 'Tên linh vật';
var mascotNameText = mascotNameGroup.add(
    'edittext {properties: {name: "mascotNameText"}}'
);
mascotNameText.text = 'Sao la';
mascotNameText.helpTip = 'Nhập tên linh vật';
mascotNameText.preferredSize.width = 90;

var languageGroup = textGroup2.add('group', undefined, {
    name: 'languageGroup'
});
languageGroup.orientation = 'column';
languageGroup.alignChildren = ['left', 'center'];

var languageLabel = languageGroup.add('statictext', undefined, undefined, {
    name: 'languageLabel'
});
languageLabel.text = 'Ngôn ngữ';
// prettier-ignore
var languageDropDown_array = ['Tiếng Việt','English'];
var languageDropDown = languageGroup.add('dropdownlist', undefined, undefined, {
    name: 'languageDropDown',
    items: languageDropDown_array
});
languageDropDown.selection = 0;

var fontFamilyGroup = textGroup2.add('group', undefined, {
    name: 'fontFamilyGroup'
});
fontFamilyGroup.orientation = 'column';
fontFamilyGroup.alignChildren = ['left', 'center'];

var fontFamilyLabel = fontFamilyGroup.add('statictext', undefined, undefined, {
    name: 'fontFamilyLabel'
});
fontFamilyLabel.text = 'Phông chữ';
// prettier-ignore
var fontFamilyDropDown_array = ["Arial","Bahnschrift","Bookman Old Style"
,"Calibri","Cambria","Century","Consolas","Minion Pro","Tahoma","Times New Roman"];
var fontFamilyDropDown = fontFamilyGroup.add(
    'dropdownlist',
    undefined,
    undefined,
    {
        name: 'fontFamilyDropDown',
        items: fontFamilyDropDown_array
    }
);
fontFamilyDropDown.helpTip = 'Chọn font chữ';
fontFamilyDropDown.selection = 3;

var textColor = textGroup2.add('button', undefined, undefined, {
    name: 'textColor'
});
textColor.helpTip = 'Màu nền chữ';
textColor.size = [40, 28];
textColor.fillBrush = textColor.graphics.newBrush(
    textColor.graphics.BrushType.SOLID_COLOR,
    convertHextoRgb(colorHexObj.hexText)
);
textColor.onDraw = customDraw;

var isStrokeCheckbox = textGroup2.add('checkbox', undefined, undefined, {
    name: 'isStrokeCheckbox'
});
isStrokeCheckbox.value = isStroke;

isStrokeCheckbox.text = 'Viền';

// FINALGROUP
// ==========
var finalGroup = implementationPanel.add('group', undefined, {
    name: 'finalGroup'
});
finalGroup.orientation = 'row';
finalGroup.alignChildren = ['left', 'center'];
finalGroup.spacing = 10;
finalGroup.margins = 10;

var quickFillBtn = finalGroup.add('button', undefined, undefined, {
    name: 'quickFillBtn'
});
quickFillBtn.text = 'Điền nhanh dữ liệu';
quickFillBtn.helpTip =
    'Dữ liệu sẽ được điền nhanh từ file data.json trong folder main-asset';
var loadDataToCompBtn = finalGroup.add('button', undefined, undefined, {
    name: 'loadDataToCompBtnBtn'
});
loadDataToCompBtn.text = 'Load asset ';
loadDataToCompBtn.helpTip =
    'Tải các dữ liệu vào composition.\nThiết lập vị trí và chuyển động cho chúng';

var renderBtn = finalGroup.add('button', undefined, undefined, {
    name: 'renderBtn'
});
renderBtn.text = 'Render';
renderBtn.helpTip = 'File sẽ được lưu cùng thư mục với file main.jsx';

var immediatelyRenderCheckbox = finalGroup.add(
    'checkbox',
    undefined,
    undefined,
    {
        name: 'immediatelyRenderCheckbox'
    }
);
immediatelyRenderCheckbox.value = true;

immediatelyRenderCheckbox.text = 'Render ngay';
immediatelyRenderCheckbox.helpTip =
    'Bỏ tick để chọn định dạng và folder lưu trữ file render';

mainPalette.show();

//// Function

compColor.onClick = function () {
    chooseColor('hexComp', compColor);
};

textColor.onClick = function () {
    chooseColor('hexText', textColor);
};

function convertHextoRgb(colorPickerRes) {
    var r = colorPickerRes >> 16;
    var g = (colorPickerRes & 0x00ff00) >> 8;
    var b = colorPickerRes & 0xff;
    return [r / 255, g / 255, b / 255];
}
function chooseColor(hex, button) {
    var colorPickerRes = $.colorPicker(colorHexObj[hex]);
    if (colorPickerRes != -1) {
        rgbColorRes = convertHextoRgb(colorPickerRes);
        $.writeln('selected a colour');
        colorHexObj[hex] = colorPickerRes;
        updateButtonColour(button, rgbColorRes);
    } else {
        $.writeln('did not select a colour');
    }
}

function customDraw() {
    with (this) {
        graphics.drawOSControl();
        graphics.rectPath(0, 0, size[0], size[1]);
        graphics.fillPath(fillBrush);
    }
}

function updateButtonColour(button, rgbArray) {
    button.fillBrush = button.graphics.newBrush(
        button.graphics.BrushType.SOLID_COLOR,
        rgbArray
    );
    button.onDraw = customDraw;
    button.enabled = false;
    button.enabled = true;
}

function setTransform(layer, property, keyOpacity) {
    for (var time in keyOpacity) {
        layer.transform[property].setValueAtTime(time, keyOpacity[time]);
    }
}

function findItemInFolder(folder, nameItem) {
    if (!folder instanceof FolderItem) {
        return -2;
    }
    for (var i = 1; i <= folder.numItems; i++) {
        if (folder.item(i).name == nameItem) {
            return folder.item(i);
        }
    }
    return -1;
}

function readJSONFile(file) {
    file.open('r');
    var data = file.read();
    file.close();
    data = JSON.parse(data);
    return data;
}

function findLayerInComp(myComp, nameLayer) {
    for (var i = 1; i <= myComp.numLayers; i++) {
        if (myComp.layer(i).name == nameLayer) {
            return myComp.layer(i);
        }
    }
    return -1;
}

function setLinearAnimation(property) {
    for (var k = 1; k <= property.numKeys; k++) {
        property.setInterpolationTypeAtKey(k, KeyframeInterpolationType.LINEAR);
        property.setSpatialTangentsAtKey(k, [0, 0, 0], [0, 0, 0]);
    }
}

function findAssetFolder() {
    for (var i = 1; i < app.project.numItems; i++) {
        var assetFolder = '';
        if (
            app.project.item(i) instanceof FolderItem &&
            app.project.item(i).name == nameComp.text
        ) {
            assetFolder = app.project.item(i);
            break;
        }
    }
    return assetFolder;
}

// 1. Create Project
createProjectBtn.onClick = function () {
    app.newProject();
    app.project.saveWithDialog();
};

// 2. Save Project
saveProjectBtn.onClick = function () {
    app.project.save();
};

// 3. Add asset to project
assetBtn.onClick = function () {
    assetFolder = app.project.importFileWithDialog();
};

// 4. Help
helpBtn.onClick = function () {
    // DIALOG
    // ======
    var dialog = new Window('dialog');
    dialog.text = 'Help';
    dialog.orientation = 'column';
    dialog.alignChildren = ['left', 'top'];
    dialog.spacing = 10;
    dialog.margins = 16;

    var statictext1 = dialog.add('statictext', undefined, undefined, {
        name: 'statictext1'
    });
    statictext1.text =
        'Hướng dẫn sử dụng script tạo video giới thiệu sự kiện thể thao';
    statictext1.justify = 'center';
    statictext1.alignment = ['center', 'top'];

    var statictext2 = dialog.add('statictext', undefined, undefined, {
        name: 'statictext2'
    });
    statictext2.text = 'Bước 1(Tùy chọn): Chọn tạo hoặc lưu project';

    var statictext3 = dialog.add('statictext', undefined, undefined, {
        name: 'statictext3'
    });
    statictext3.text =
        'Bước 2: Chọn \u0022Import folder asset\u0022 và  import folder event trong thư mục asset. (VD: SeaGame31, Olympic2020).';

    var statictext4 = dialog.add('group');
    statictext4.orientation = 'column';
    statictext4.alignChildren = ['left', 'center'];
    statictext4.spacing = 0;

    statictext4.add(
        'statictext',
        undefined,
        'Bước 3(Tùy chọn): Có thế sử dụng nút \u0022Điền nhanh dữ liệu\u0022(Góc dưới trái mục 3) để đọc dữ liệu về tên sự kiện, tên',
        { name: 'statictext4' }
    );
    statictext4.add(
        'statictext',
        undefined,
        'linh vật, ... được lưu sẵn trong file \u0022data.json\u0022 trong mục main-asset',
        { name: 'statictext4' }
    );

    var statictext5 = dialog.add('group');
    statictext5.orientation = 'column';
    statictext5.alignChildren = ['left', 'center'];
    statictext5.spacing = 0;

    statictext5.add(
        'statictext',
        undefined,
        'Bước 4: Chọn chức năng \u0022Tạo composition\u0022 để tạo composition với các thông số đã thiết lập từ trước.(Có thể tùy',
        { name: 'statictext5' }
    );
    statictext5.add(
        'statictext',
        undefined,
        'chọn màu nền và có sử dụng hình nền hay không).',
        { name: 'statictext5' }
    );
    statictext5.add(
        'statictext',
        undefined,
        '*Lưu ý: Tên composition cần trùng với trên folder chứa asset sự  kiện. Vđ: Cùng tên là SeaGame31. Tên này còn được',
        { name: 'statictext5' }
    );
    statictext5.add(
        'statictext',
        undefined,
        'sử dụng làm tên video  khi xuất.',
        { name: 'statictext5' }
    );

    var statictext6 = dialog.add('statictext', undefined, undefined, {
        name: 'statictext6'
    });
    statictext6.text =
        'Bước 5: Chọn \u0022Load asset\u0022 để load hết các dữ liệu cần thiết vào và tạo chuyển động cho chúng.';

    var statictext7 = dialog.add('group');
    statictext7.orientation = 'column';
    statictext7.alignChildren = ['left', 'center'];
    statictext7.spacing = 0;

    statictext7.add(
        'statictext',
        undefined,
        'Bước  6: Ấn nút render để xuất video, có thể tùy chỉnh định dạng video và nơi xuất bằng việc bỏ tích \u0022Render ngay\u0022.',
        { name: 'statictext7' }
    );
    statictext7.add(
        'statictext',
        undefined,
        'Mặc định video sẽ được xuất ra cùng thư mục chứa file main.jsx',
        { name: 'statictext7' }
    );

    var statictext8 = dialog.add('group');
    statictext8.orientation = 'column';
    statictext8.alignChildren = ['left', 'center'];
    statictext8.spacing = 0;

    statictext8.add('statictext', undefined, '*Một số lưu ý khác.', {
        name: 'statictext8'
    });
    statictext8.add(
        'statictext',
        undefined,
        '**Tên của ảnh của môn thể thao sẽ là tên của môn thể thao đó.',
        { name: 'statictext8' }
    );
    statictext8.add(
        'statictext',
        undefined,
        '**Các ảnh cần có định dạng \u0022.png\u0022.',
        { name: 'statictext8' }
    );

    dialog.show();
};

// 5. Add composition
createCompBtn.onClick = function () {
    if (!findAssetFolder()) {
        alert(
            'Asset chưa được chọn hoặc sai tên.\nTên composition phải trùng với tên folder Asset\nHãy thủ chọn chức năng điền thông tin nhanh ở dưới.'
        );
        return;
    }
    mainComp = app.project.items.addComp(
        nameComp.text,
        1280,
        720,
        1,
        25 + findAssetFolder().item(2).numItems * (5 / 3),
        30 // famerate
    );
    mainComp.bgColor = convertHextoRgb(colorHexObj.hexComp);
    var solidLayer = mainComp.layers.addSolid(
        mainComp.bgColor,
        'backgroundLayer',
        1280,
        720,
        1
    );
    if (useBackgroundImg.value) {
        var backgroundImg = findItemInFolder(
            findAssetFolder().item(1),
            'backgroundImg.png'
        );
        var backgroundImgLayer = mainComp.layers.add(backgroundImg);
    }
    mainComp.openInViewer();
    hasComp = true;
};

// 6. Quick fill data
quickFillBtn.onClick = function () {
    var file = findItemInFolder(app.project, 'data.json');
    var data = readJSONFile(File(file.file.fsName));
    nameComp.text = data.compName;
    eventNameText.text = data.eventName;
    hostNameText.text = data.hostName;
    mascotNameText.text = data.mascotName;
    languageDropDown.selection = languageDropDown_array.indexOf(data.language);
};

// 7. Load data to comp
loadDataToCompBtn.onClick = function () {
    isStroke = isStrokeCheckbox.value;
    fontFamily = fontFamilyDropDown.selection.text;
    language = languageObj[languageDropDown.selection.text];

    assetFolder = findAssetFolder();
    if (assetFolder == '') {
        alert(
            'Asset chưa được chọn hoặc sai tên.\nTên folder Asset phải trùng với tên composition\n'
        );
        return;
    }
    loadIntro(assetFolder);
    loadSport(assetFolder);
    logoAnimation(assetFolder);
    loadOutro();
};

// 8. Render
renderBtn.onClick = function () {
    var comp = app.project.activeItem;
    var item = app.project.renderQueue.items.add(comp);
    var outputModule = item.outputModule(1);
    var outputFolder = File($.fileName).path;
    outputModule.file = File(outputFolder + '/' + comp.name); //outputFolder + '/' +
    app.project.renderQueue.queueInAME(immediatelyRenderCheckbox.value);
};

function loadIntro(assetFolder) {
    var mainAsset = findAssetFolder().item(1);
    var backgroundMusic = findItemInFolder(mainAsset, 'backgroundMusic.mp3');
    var mascot = findItemInFolder(mainAsset, 'mascot.png');
    var flag = findItemInFolder(mainAsset, 'flag.png');
    var backgroundMusicLayer = mainComp.layers.add(backgroundMusic);
    var mascotLayer = mainComp.layers.add(mascot);
    var flagLayer = mainComp.layers.add(flag);
    welcomeTextAnimation();
    mascotAnimation(mascotLayer);
    flagAnimation(flagLayer, mascotLayer);
    sportTextAnimation();
}

function logoAnimation(assetFolder) {
    var mainAsset = assetFolder.item(1);
    var logo = findItemInFolder(mainAsset, 'logo.png');
    var logoLayer = mainComp.layers.add(logo);
    var endSportsTime = 10 + findAssetFolder().item(2).numItems * (5 / 3);
    //position
    var keyPosition = {
        2: [-220, 360],
        3: [450, 360],
        4: [550, 360],
        5: [640, 360],
        5.5: [120, 620]
    };
    keyPosition[endSportsTime] = [120, 620];
    keyPosition[endSportsTime + 1.5] = [640, 360];
    setTransform(logoLayer, 'position', keyPosition);
    setLinearAnimation(logoLayer.transform.position);
    //opacity
    var keyOpacity = {
        5: 100,
        5.5: 25
    };
    keyOpacity[endSportsTime] = 25;
    keyOpacity[endSportsTime + 1.5] = 100;
    keyOpacity[endSportsTime + 3.5] = 100;
    keyOpacity[endSportsTime + 5.5] = 0;
    setTransform(logoLayer, 'opacity', keyOpacity);
    //Scale
    var keyScale = {
        5: [100, 100],
        5.5: [25, 25]
    };
    keyScale[endSportsTime] = [25, 25];
    keyScale[endSportsTime + 1.5] = [100, 100];
    keyScale[endSportsTime + 3.5] = [100, 100];
    keyScale[endSportsTime + 5.5] = [300, 300];
    setTransform(logoLayer, 'scale', keyScale);
}

function welcomeTextAnimation() {
    var eventNameTextValue = eventNameText.text;
    var hostNameTextValue = hostNameText.text;
    var welcomeTextValue =
        language[1] + eventNameTextValue + language[2] + hostNameTextValue;
    var colorTextValue = convertHextoRgb(colorHexObj.hexText);

    var welcomeTextLayer = mainComp.layers.addText();
    var welcomeTextLayerProperty = welcomeTextLayer.sourceText;
    var welcomeTextLayerValue = welcomeTextLayerProperty.value;

    welcomeTextLayerValue.resetCharStyle();
    welcomeTextLayerValue.resetParagraphStyle();
    welcomeTextLayerValue.text = welcomeTextValue;
    welcomeTextLayerValue.fillColor = colorTextValue;
    welcomeTextLayerValue.fontSize = 64;
    welcomeTextLayerValue.font = fontFamily;
    welcomeTextLayerValue.strokeColor = [0, 0, 0];
    welcomeTextLayerValue.strokeWidth = 1;
    welcomeTextLayerValue.applyStroke = isStroke;
    welcomeTextLayerProperty.setValue(welcomeTextLayerValue);
    welcomeTextLayerValue.justification = ParagraphJustification.CENTER_JUSTIFY;
    welcomeTextLayerProperty.setValue(welcomeTextLayerValue);

    setTransform(welcomeTextLayer, 'position', {
        1.5: [640, 360],
        2.5: [640, 70]
    });
    setTransform(welcomeTextLayer, 'opacity', {
        0: 0,
        0.5: 100,
        5: 99,
        5.5: 0
    });
    welcomeTextLayer.outPoint = 10;
}

function mascotAnimation(layer) {
    //position
    layer.transform.position.setValue([970, 400]);
    setTransform(layer, 'position', { 7.8: [970, 400], 8.2: [1500, 400] });
    setLinearAnimation(layer.transform.position);
    //opacity
    var keyOpacity = {
        5.5: 0,
        6: 100
    };
    setTransform(layer, 'opacity', keyOpacity);
    //Scale
    var keyScale = {
        5.5: [0, 0],
        6: [70, 70]
    };
    setTransform(layer, 'scale', keyScale);

    //Name
    var mascotNameTextLayer = mainComp.layers.addText();
    var mascotNameLayerProperty = mascotNameTextLayer.sourceText;
    var mascotNameLayerValue = mascotNameLayerProperty.value;

    mascotNameLayerValue.resetCharStyle();
    mascotNameLayerValue.resetParagraphStyle();
    mascotNameLayerValue.text = mascotNameText.text;
    mascotNameLayerValue.fillColor = convertHextoRgb(colorHexObj.hexText);
    mascotNameLayerValue.fontSize = 48;
    mascotNameLayerValue.font = fontFamily;
    mascotNameLayerValue.applyStroke = isStroke;
    mascotNameLayerProperty.setValue(mascotNameLayerValue);
    mascotNameLayerValue.justification = ParagraphJustification.CENTER_JUSTIFY;
    mascotNameLayerProperty.setValue(mascotNameLayerValue);

    mascotNameTextLayer.transform.position.setValue([990, 650]);
    setTransform(mascotNameTextLayer, 'opacity', {
        5.5: 0,
        6: 100,
        7.8: 99,
        8.2: 0
    });
    mascotNameTextLayer.outPoint = 10;
    layer.outPoint = 10;
}
function flagAnimation(layer, mascotLayer) {
    //position
    layer.transform.position.setValue([770, 360]);
    setTransform(layer, 'position', {
        6.2: [770, 360],
        6.7: [470, 360],
        7.8: [469, 360],
        8.2: [-350, 360]
    });
    setLinearAnimation(layer.transform.position);
    //opacity
    var keyOpacity = {
        6.2: 0,
        6.7: 100
    };
    setTransform(layer, 'opacity', keyOpacity);
    layer.moveAfter(mascotLayer);
    layer.outPoint = 10;
}

function sportTextAnimation() {
    var colorTextValue = convertHextoRgb(colorHexObj.hexText);
    var sportTextLayer = mainComp.layers.addText();
    var sportTextLayerProperty = sportTextLayer.sourceText;
    var sportTextLayerValue = sportTextLayerProperty.value;

    sportTextLayerValue.resetCharStyle();
    sportTextLayerValue.resetParagraphStyle();
    sportTextLayerValue.text = language[3];
    sportTextLayerValue.fillColor = colorTextValue;
    sportTextLayerValue.fontSize = 64;
    sportTextLayerValue.font = fontFamily;
    sportTextLayerValue.strokeColor = [0, 0, 0];
    sportTextLayerValue.strokeWidth = 1;
    sportTextLayerValue.applyStroke = isStroke;
    sportTextLayerProperty.setValue(sportTextLayerValue);
    sportTextLayerValue.justification = ParagraphJustification.CENTER_JUSTIFY;
    sportTextLayerProperty.setValue(sportTextLayerValue);

    setTransform(sportTextLayer, 'opacity', {
        8.2: 0,
        8.5: 100,
        9.2: 99,
        9.5: 0
    });
    sportTextLayer.outPoint = 10;
}

function loadSport(assetFolder) {
    var sportFolder = findAssetFolder().item(2);
    var du = sportFolder.numItems % 3;
    for (var i = 1; i <= sportFolder.numItems - du; i += 3) {
        var sportSlot1 = sportFolder.item(i);
        var sportSlot2 = sportFolder.item(i + 1);
        var sportSlot3 = sportFolder.item(i + 2);
        addSport(sportSlot1, start, 1);
        addSport(sportSlot2, start + 1, 2);
        addSport(sportSlot3, start + 2, 3);
        start += 5;
    }
    if (du == 2) {
        var sportSlot1 = sportFolder.item(sportFolder.numItems - 1);
        var sportSlot2 = sportFolder.item(sportFolder.numItems);
        addSport(sportSlot1, start, 1);
        addSport(sportSlot2, start + 1, 2);
        start += 10 / 3;
    }
    if (du == 1) {
        var sportSlot1 = sportFolder.item(sportFolder.numItems);
        addSport(sportSlot1, start, 1);
        start += 5 / 3;
    }
}

function addSport(sport, start, slot) {
    var sportLayer = mainComp.layers.add(sport);
    var nameSport = sport.name.slice(0, -4);
    var sportNameLayer = mainComp.layers.addText();
    var sportNameLayerProperty = sportNameLayer.sourceText;
    var sportNameLayerValue = sportNameLayerProperty.value;
    sportLayer.inPoint = start;
    sportNameLayer.inPoint = start;
    sportLayer.outPoint = sportLayer.inPoint + 3;
    sportNameLayer.outPoint = sportNameLayer.inPoint + 3;

    sportNameLayerValue.resetCharStyle();
    sportNameLayerValue.resetParagraphStyle();
    sportNameLayerValue.text = nameSport;
    sportNameLayerValue.fillColor = convertHextoRgb(colorHexObj.hexText);
    sportNameLayerValue.fontSize = 48;
    sportNameLayerValue.font = fontFamily;
    sportNameLayerValue.applyStroke = isStroke;
    sportNameLayerProperty.setValue(sportNameLayerValue);
    sportNameLayerValue.justification = ParagraphJustification.CENTER_JUSTIFY;
    sportNameLayerProperty.setValue(sportNameLayerValue);

    var keyOpacity = {};
    keyOpacity[start] = 0;
    keyOpacity[start + 0.5] = 100;
    keyOpacity[start + 2] = 99;
    keyOpacity[start + 2.5] = 0;

    var keyPosition1 = {};
    keyPosition1[start] = [220, 200];
    keyPosition1[start + 0.5] = [220, 360];

    var keyPosition2 = {};
    keyPosition2[start] = [640, 200];
    keyPosition2[start + 0.5] = [640, 360];

    var keyPosition3 = {};
    keyPosition3[start] = [1060, 200];
    keyPosition3[start + 0.5] = [1060, 360];
    switch (slot) {
        case 1:
            setTransform(sportNameLayer, 'position', { 0: [220, 650] });
            setTransform(sportLayer, 'position', keyPosition1);
            setTransform(sportLayer, 'opacity', keyOpacity);
            setTransform(sportNameLayer, 'opacity', keyOpacity);
            break;
        case 2:
            setTransform(sportNameLayer, 'position', { 0: [640, 650] });
            setTransform(sportLayer, 'position', keyPosition2);
            setTransform(sportLayer, 'opacity', keyOpacity);
            setTransform(sportNameLayer, 'opacity', keyOpacity);
            break;
        case 3:
            setTransform(sportNameLayer, 'position', { 0: [1060, 650] });
            setTransform(sportLayer, 'position', keyPosition3);
            setTransform(sportLayer, 'opacity', keyOpacity);
            setTransform(sportNameLayer, 'opacity', keyOpacity);
            break;
    }
}

function loadOutro() {
    start = start + 6; // End logo zoom time
    // prettier-ignore
    var blackBackground = mainComp.layers.addSolid([0, 0, 0], "blackBackground", 1280, 720, 1.0);

    var keyOpacityBg = {};
    keyOpacityBg[start] = 0;
    keyOpacityBg[start + 1.5] = 100;
    setTransform(blackBackground, 'opacity', keyOpacityBg);
    blackBackground.inPoint = start;

    //Name
    var nameTextLayer = mainComp.layers.addText();
    var nameTextLayerProperty = nameTextLayer.sourceText;
    var nameTextLayerValue = nameTextLayerProperty.value;

    nameTextLayerValue.resetCharStyle();
    nameTextLayerValue.resetParagraphStyle();
    nameTextLayerValue.text = 'Trần Văn Luân - B18DCPT151';
    nameTextLayerValue.fillColor = [1, 1, 1];
    nameTextLayerValue.fontSize = 64;
    nameTextLayerValue.font = fontFamily;
    nameTextLayerProperty.setValue(nameTextLayerValue);
    nameTextLayerValue.justification = ParagraphJustification.CENTER_JUSTIFY;
    nameTextLayerProperty.setValue(nameTextLayerValue);

    var keyOpacityName = {};
    keyOpacityName[start + 1.5] = 0;
    keyOpacityName[start + 2] = 100;
    setTransform(nameTextLayer, 'opacity', keyOpacityName);
    nameTextLayer.inPoint = start;

    //Line
    var lineLayer = mainComp.layers.addShape();
    var lineContent = lineLayer.property('ADBE Root Vectors Group');
    var lineGroup = lineContent.addProperty('ADBE Vector Group');
    lineLayer.name = 'Line';
    var line = lineGroup
        .property('ADBE Vectors Group')
        .addProperty('ADBE Vector Shape - Rect');
    line.property('ADBE Vector Rect Size').setValue([1000, 10]);
    var lineFill = lineGroup
        .property('ADBE Vectors Group')
        .addProperty('ADBE Vector Graphic - Fill');
    lineFill
        .property('ADBE Vector Fill Color')
        .setValue([50 / 255, 168 / 255, 74 / 255]);

    lineLayer.inPoint = start + 2;
    lineLayer.property('Position').setValue([640, 380]);
    var lineScale = lineLayer.property('Scale');
    lineScale.setValueAtTime(start + 2.5, [0, 100]);
    lineScale.setValueAtTime(start + 3.5, [75, 100]);
    var lineOpacity = lineLayer.property('Opacity');
    lineOpacity.setValueAtTime(start + 2.5, 0);
    lineOpacity.setValueAtTime(start + 3.5, 100);
}
