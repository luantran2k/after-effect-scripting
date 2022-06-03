var defaultHexColor = '0xF96163';
var colorHexObj = {
    hexComp: defaultHexColor,
    hexBackground: defaultHexColor,
    hexText: '0xFFFFFF'
};

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
createProjectBtn.preferredSize.width = 130;

var saveProjectBtn = projectControlPanel.add('button', undefined, undefined, {
    name: 'saveProjectBtn'
});
saveProjectBtn.text = 'Lưu project';
saveProjectBtn.preferredSize.width = 130;

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

var backgroundMusicBtn = assestPanel.add('button', undefined, undefined, {
    name: 'backgroundMusicBtn'
});
backgroundMusicBtn.helpTip = 'Nhạc nền của đoạn video giới thiệu';
backgroundMusicBtn.text = 'Chọn nhạc nền';
backgroundMusicBtn.preferredSize.width = 140;

var mascotBtn = assestPanel.add('button', undefined, undefined, {
    name: 'mascotBtn'
});
mascotBtn.helpTip = 'Folder chứa ảnh của linh vật';
mascotBtn.text = 'Chọn ảnh linh vật';
mascotBtn.preferredSize.width = 140;

var placeBtn = assestPanel.add('button', undefined, undefined, {
    name: 'placeBtn'
});
placeBtn.helpTip = 'Folder chứa ảnh của địa điẻm thi đấu';
placeBtn.text = 'Chọn ảnh địa điểm';
placeBtn.preferredSize.width = 140;

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
nameComp.text = 'Seagame31';
nameComp.preferredSize.width = 380;

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

// BACKGROUNDPANEL
// ===============
var backgroundPanel = implementationPanel.add('panel', undefined, undefined, {
    name: 'backgroundPanel'
});
backgroundPanel.text = 'Nền';
backgroundPanel.preferredSize.width = 400;
backgroundPanel.orientation = 'row';
backgroundPanel.alignChildren = ['left', 'center'];
backgroundPanel.spacing = 10;
backgroundPanel.margins = 10;

var createBackgroundColorBtn = backgroundPanel.add(
    'button',
    undefined,
    undefined,
    { name: 'createBackgroundColorBtn' }
);
createBackgroundColorBtn.text = 'Tạo nền';

var backgroundColor = backgroundPanel.add('button', undefined, undefined, {
    name: 'backgroundColor'
});
backgroundColor.helpTip = 'Chọn màu nền cho video';
backgroundColor.size = [40, 28];
backgroundColor.fillBrush = backgroundColor.graphics.newBrush(
    backgroundColor.graphics.BrushType.SOLID_COLOR,
    convertHextoRgb(colorHexObj.hexBackground)
);
backgroundColor.onDraw = customDraw;

var isMultiColor = backgroundPanel.add('checkbox', undefined, undefined, {
    name: 'isMultiColor'
});
isMultiColor.text = 'Nhiều màu';
isMultiColor.helpTip = 'Phầm mềm sẽ sử dụng nhiều màu nền khác nhau cho video';

// WELCOMEPANEL
// ============
var welcomePanel = implementationPanel.add('panel', undefined, undefined, {
    name: 'welcomePanel'
});
welcomePanel.text = 'Welcome text';
welcomePanel.preferredSize.width = 400;
welcomePanel.orientation = 'column';
welcomePanel.alignChildren = ['left', 'top'];
welcomePanel.spacing = 10;
welcomePanel.margins = 10;

var welcompText = welcomePanel.add(
    'edittext {properties: {name: "welcompText"}}'
);
welcompText.text = 'Chào mừng đến với Sea Game 31 tại Việt Nam';
welcompText.preferredSize.width = 380;

// TEXTGROUP
// =========
var textGroup = welcomePanel.add('group', undefined, { name: 'textGroup' });
textGroup.orientation = 'row';
textGroup.alignChildren = ['left', 'center'];
textGroup.spacing = 10;
textGroup.margins = 0;

var createWelcomeBtn = textGroup.add('button', undefined, undefined, {
    name: 'createWelcomeBtn'
});
createWelcomeBtn.text = 'Tạo text';

// prettier-ignore
var fontSizeDropDown_array = ["20","-","22","-","24","-","26","-","28","-"
,"30","-","32","-","34","-","36","-","38","-","40","-","42","-","44"];
var fontSizeDropDown = textGroup.add('dropdownlist', undefined, undefined, {
    name: 'fontSizeDropDown',
    items: fontSizeDropDown_array
});
fontSizeDropDown.selection = 0;

// prettier-ignore
var fontFamilyDropDown_array = ["Arial","-","Bahnschrift","-","Bookman Old Style","-","Calibri"
,"-","Cambria","-","Century","-","Consolas","-","Minion Pro","-","Tahoma","-","Times New Roman"];
var fontFamilyDropDown = textGroup.add('dropdownlist', undefined, undefined, {
    name: 'fontFamilyDropDown',
    items: fontFamilyDropDown_array
});
fontFamilyDropDown.helpTip = 'Chọn font chữ';
fontFamilyDropDown.selection = 0;

var textColor = textGroup.add('button', undefined, undefined, {
    name: 'textColor'
});
textColor.size = [40, 28];
textColor.fillBrush = textColor.graphics.newBrush(
    textColor.graphics.BrushType.SOLID_COLOR,
    convertHextoRgb(colorHexObj.hexText)
);
textColor.onDraw = customDraw;

// FINALGROUP
// ==========
var finalGroup = implementationPanel.add('group', undefined, {
    name: 'finalGroup'
});
finalGroup.orientation = 'row';
finalGroup.alignChildren = ['left', 'center'];
finalGroup.spacing = 10;
finalGroup.margins = 10;

var loadDataToComp = finalGroup.add('button', undefined, undefined, {
    name: 'loadDataToComp'
});
loadDataToComp.text = 'Tải tài nguyên vào';
loadDataToComp.helpTip =
    'Tải các dữ liệu vào composition.\nThiết lập vị trí và chuyển động cho chúng';

var renderBtn = finalGroup.add('button', undefined, undefined, {
    name: 'renderBtn'
});
renderBtn.text = 'Render';
renderBtn.preferredSize.width = 130;
mainPalette.show();

//// Function

//Color Picker
// var hexComp = '0xF96163';
// var hexBackground = '0xF96163';
// var hex = '0xF96163';
// var compColorValue = [0, 0, 0];
// var backGroundColorValue = [0, 0, 0];
// var textColorValue = [0, 0, 0];
// compColor.onClick = chooseColor;
// backgroundColor.onClick = chooseColor;
// textColor.onClick = chooseColor;

compColor.onClick = function () {
    chooseColor('hexComp', compColor);
};
backgroundColor.onClick = function () {
    chooseColor('hexBackground', backgroundColor);
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

var mainComp;
createCompBtn.onClick = function () {
    mainComp = app.project.items.addComp(
        nameComp.text,
        1280,
        720,
        1,
        60, // time
        30 // famerate
    );
    mainComp.bgColor = convertHextoRgb(colorHexObj.hexComp);
};

createBackgroundColorBtn.onClick = function () {
    var solidLayer = mainComp.layers.addSolid(
        mainComp.bgColor,
        'backgroundLayer',
        1280,
        720,
        1
    );
};
