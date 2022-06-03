var mainWindow = new Window("palette", "Bài tập giữa kỳ - B18DCPT151");
mainWindow.alignChildren = "center";
mainWindow.orientation = "row";

// Tao va luu project
var panel1 = mainWindow.add("panel", undefined, "1. Tạo và lưu project");
var createProject = panel1.add("button", undefined, "Tạo project");
createProject.onClick = function () {
    app.newProject();
    app.project.saveWithDialog();
};
var saveProject = panel1.add("button", undefined, "Lưu Project");
saveProject.onClick = function () {
    app.project.save();
};

// Them composition moi
var panel2 = mainWindow.add(
    "panel",
    undefined,
    "2. Tạo composition và text giới thiệu"
);
var newCompWindow = new Window("palette", "Tạp Composition");
var newCompBtn = panel2.add("button", undefined, "Tạo Composition");
newCompBtn.onClick = function () {
    newCompWindow.show();
};

function addInput(label, value, window, numChar) {
    window.add("statictext", undefined, label);
    edt = window.add("edittext", undefined, value);
    edt.characters = numChar;
    return edt;
}
var size1 = newCompWindow.add("group", undefined, "sizeGroup");
size1.oriantation = "row";
var size2 = newCompWindow.add("group", undefined, "sizeGroup");
size2.oriantation = "row";
var nameComp = addInput("Name", "Composition name.", newCompWindow, 50);
var width = addInput("Width", "1920", size1, 10);
var height = addInput("Height", "1080", size1, 10);
var frameRate = addInput("FrameRate", "30", size2, 10);
var pixelAspect = addInput("Pixel Aspect", "1", size2, 10);

function colorPick() {
    var colorPicker = $.colorPicker("0x880000");
    var r = colorPicker >> 16;
    var g = (colorPicker & 0x00ff00) >> 8;
    var b = colorPicker & 0xff;
    return [r / 255, g / 255, b / 255];
}

var mainComp;
var createCompBtn = newCompWindow.add("button", undefined, "Tạo Composition");
createCompBtn.onClick = function () {
    mainComp = app.project.items.addComp(
        nameComp.text,
        parseInt(width.text),
        parseInt(height.text),
        parseFloat(pixelAspect.text),
        20,
        parseInt(frameRate.text)
    );
    try {
        mainComp.bgColor = colorPick();
        var solidLayer = mainComp.layers.addSolid(
            mainComp.bgColor,
            "mylayer",
            parseInt(width.text),
            parseInt(height.text),
            1.0
        );
    } catch (error) {}
    newCompWindow.hide();
    mainWindow.show();
};

// Them text ho ten + MSV
var newTextWindow = new Window("palette", "Tạo Text");
var newTextBtn = panel2.add("button", undefined, "Tạo Text");
newTextBtn.onClick = function () {
    newTextWindow.show();
};

var Name = addInput("Họ và tên", "Trần Văn Luân", newTextWindow, 50);
var Id = addInput("Mã sinh viên", "B18DCPT151", newTextWindow, 50);

var createTextBtn = newTextWindow.add("button", undefined, "Tạo Text");
createTextBtn.onClick = function () {
    try {
        var text_layer = mainComp.layers.addText();
    } catch (error) {
        alert("Bạn phải tạo composition trước");
        return;
    }
    var text_property = text_layer.sourceText;
    var text_value = text_property.value;

    text_value.resetCharStyle();
    text_value.resetParagraphStyle();
    text_value.text = Name.text + " - " + Id.text;

    text_value.fontSize = 100;
    text_value.textFont = "Minion Pro"; //Arial,Bahnschrift,Bookman Old Style,Calibri,Cambria,Century,Consolas,Minion Pro,Tahoma
    text_value.strokeColor = [0, 0, 0];
    text_value.strokeWidth = 2;
    text_value.applyStroke = true;
    text_property.setValue(text_value);
    text_value.justification = ParagraphJustification.CENTER_JUSTIFY;
    text_property.setValue(text_value);

    text_layer.transform.opacity.setValueAtTime(0, 0);
    text_layer.transform.opacity.setValueAtTime(1.9, 0);
    text_layer.transform.opacity.setValueAtTime(2, 100);
    text_layer.transform.opacity.setValueAtTime(9.9, 100);
    text_layer.transform.opacity.setValueAtTime(10, 0);

    newTextWindow.hide();
    mainWindow.show();
};

// Tao hinh va chuyen dong
var panel3 = mainWindow.add("panel", undefined, "3. Tạo hình và chuyển động");
var newShapeWindow = new Window("palette", "Tạo hình");
var newShapeBtn = panel3.add("button", undefined, "Tạo hình");
var strokeWidthEdt = addInput("Storke Width", "1", panel3, 5);
newShapeBtn.onClick = function () {
    try {
        createFlag(parseInt(strokeWidthEdt.text));
        createTank(parseInt(strokeWidthEdt.text));
    } catch (error) {
        alert("Bạn cần tạo composition trước");
    }
};

var phaoLayer;
var thapLayer;
var thanLayer;
var banhLayer;
var squareLayer;
var starLayer;
var canLayer;

function createTank(strokeWidth) {
    //Phao xe
    phaoLayer = mainComp.layers.addShape();
    phaoLayer.name = "Phao xe";
    var phaoContent = phaoLayer.property("ADBE Root Vectors Group");
    var phaoGroup = phaoContent.addProperty("ADBE Vector Group");
    var phao = phaoGroup
        .property("ADBE Vectors Group")
        .addProperty("ADBE Vector Shape - Rect");
    phao.property("ADBE Vector Rect Size").setValue([400, 40]);
    var phaoStroke = phaoGroup
        .property("ADBE Vectors Group")
        .addProperty("ADBE Vector Graphic - Stroke");
    phaoStroke.property("ADBE Vector Stroke Color").setValue([0.1, 0.4, 0.1]);
    phaoStroke.property("ADBE Vector Stroke Width").setValue(strokeWidth);
    var phaoFill = phaoGroup
        .property("ADBE Vectors Group")
        .addProperty("ADBE Vector Graphic - Fill");
    phaoFill.property("ADBE Vector Fill Color").setValue([0.2, 0.6, 0.1]);

    //Thap xe
    thapLayer = mainComp.layers.addShape();
    thapLayer.name = "Thap xe";
    var thapContent = thapLayer.property("ADBE Root Vectors Group");
    var thapGroup = thapContent.addProperty("ADBE Vector Group");
    var thap = thapGroup
        .property("ADBE Vectors Group")
        .addProperty("ADBE Vector Shape - Ellipse");
    thap.property("ADBE Vector Ellipse Size").setValue([400, 80]);
    var thapStroke = thapGroup
        .property("ADBE Vectors Group")
        .addProperty("ADBE Vector Graphic - Stroke");
    thapStroke.property("ADBE Vector Stroke Color").setValue([0.1, 0.4, 0.1]);
    thapStroke.property("ADBE Vector Stroke Width").setValue(strokeWidth);
    var thapFill = thapGroup
        .property("ADBE Vectors Group")
        .addProperty("ADBE Vector Graphic - Fill");
    thapFill.property("ADBE Vector Fill Color").setValue([0.2, 0.6, 0.1]);

    //Than xe
    thanLayer = mainComp.layers.addShape();
    thanLayer.name = "Thân xe";
    var thanContent = thanLayer.property("ADBE Root Vectors Group");
    var thanGroup = thanContent.addProperty("ADBE Vector Group");
    var than = thanGroup
        .property("ADBE Vectors Group")
        .addProperty("ADBE Vector Shape - Rect");
    than.property("ADBE Vector Rect Size").setValue([600, 100]);
    var thanStroke = thanGroup
        .property("ADBE Vectors Group")
        .addProperty("ADBE Vector Graphic - Stroke");
    thanStroke.property("ADBE Vector Stroke Color").setValue([0.1, 0.4, 0.1]);
    thanStroke.property("ADBE Vector Stroke Width").setValue(strokeWidth);
    var thanFill = thanGroup
        .property("ADBE Vectors Group")
        .addProperty("ADBE Vector Graphic - Fill");
    thanFill.property("ADBE Vector Fill Color").setValue([0.2, 0.6, 0.1]);

    //Banh xe
    banhLayer = mainComp.layers.addShape();
    banhLayer.name = "Banh xe";
    var banhContent = banhLayer.property("ADBE Root Vectors Group");
    var banhGroup = banhContent.addProperty("ADBE Vector Group");
    var banh = banhGroup
        .property("ADBE Vectors Group")
        .addProperty("ADBE Vector Shape - Rect");
    banh.property("ADBE Vector Rect Size").setValue([560, 80]);
    var banhStroke = banhGroup
        .property("ADBE Vectors Group")
        .addProperty("ADBE Vector Graphic - Stroke");
    banhStroke.property("ADBE Vector Stroke Color").setValue([0.3, 0.3, 0.3]);
    banhStroke.property("ADBE Vector Stroke Width").setValue(strokeWidth);
    var banhFill = banhGroup
        .property("ADBE Vectors Group")
        .addProperty("ADBE Vector Graphic - Fill");
    banhFill.property("ADBE Vector Fill Color").setValue([0, 0, 0]);

    var thanPos = thanLayer.property("Position");
    thanPos.setValue([928, 638]);
    var banhPos = banhLayer.property("Position");
    banhPos.setValue([922, 663]);
    var thapPos = thapLayer.property("Position");
    thapPos.setValue([946, 584]);
    var phaoPos = phaoLayer.property("Position");
    phaoPos.setValue([1064, 564]);
}

function createFlag(strokeWidth) {
    canLayer = mainComp.layers.addShape();
    canLayer.name = "Hinh vuong";
    var canContent = canLayer.property("ADBE Root Vectors Group");
    var canGroup = canContent.addProperty("ADBE Vector Group");
    var can = canGroup
        .property("ADBE Vectors Group")
        .addProperty("ADBE Vector Shape - Rect");
    can.property("ADBE Vector Rect Size").setValue([10, 250]);
    var canStroke = canGroup
        .property("ADBE Vectors Group")
        .addProperty("ADBE Vector Graphic - Stroke");
    canStroke.property("ADBE Vector Stroke Color").setValue([0.6, 0.3, 0.2]);
    canStroke.property("ADBE Vector Stroke Width").setValue(strokeWidth);
    var canFill = canGroup
        .property("ADBE Vectors Group")
        .addProperty("ADBE Vector Graphic - Fill");
    canFill.property("ADBE Vector Fill Color").setValue([0, 0, 0]);

    squareLayer = mainComp.layers.addShape();
    squareLayer.name = "Hinh vuong";
    var squareContent = squareLayer.property("ADBE Root Vectors Group");
    var squareGroup = squareContent.addProperty("ADBE Vector Group");
    var square = squareGroup
        .property("ADBE Vectors Group")
        .addProperty("ADBE Vector Shape - Rect");
    square.property("ADBE Vector Rect Size").setValue([400, 300]);
    var squareStroke = squareGroup
        .property("ADBE Vectors Group")
        .addProperty("ADBE Vector Graphic - Stroke");
    squareStroke.property("ADBE Vector Stroke Color").setValue([1, 1, 1]);
    squareStroke.property("ADBE Vector Stroke Width").setValue(strokeWidth);
    var squareFill = squareGroup
        .property("ADBE Vectors Group")
        .addProperty("ADBE Vector Graphic - Fill");
    squareFill
        .property("ADBE Vector Fill Color")
        .setValue([253 / 255, 40 / 255, 45 / 255]);

    starLayer = mainComp.layers.addShape();
    starLayer.name = "Hinh sao";
    var starContent = starLayer.property("ADBE Root Vectors Group");
    var starGroup = starContent.addProperty("ADBE Vector Group");
    var star = starGroup
        .property("ADBE Vectors Group")
        .addProperty("ADBE Vector Shape - Star");
    star.property("Points").setValue(5);
    var starStroke = starGroup
        .property("ADBE Vectors Group")
        .addProperty("ADBE Vector Graphic - Stroke");
    starStroke.property("ADBE Vector Stroke Color").setValue([1, 1, 1]);
    starStroke.property("ADBE Vector Stroke Width").setValue(strokeWidth);
    var starFill = starGroup
        .property("ADBE Vectors Group")
        .addProperty("ADBE Vector Graphic - Fill");
    starFill.property("ADBE Vector Fill Color").setValue([1, 1, 0]);

    var squarePos = squareLayer.property("Position");
    squarePos.setValue([686, 407]);
    var starPos = starLayer.property("Position");
    starPos.setValue([680, 403]);
    var canPos = canLayer.property("Position");
    canPos.setValue([752, 474]);

    var squareScale = squareLayer.property("Scale");
    squareScale.setValue([40, 40]);
    var starScale = starLayer.property("Scale");
    starScale.setValue([40, 40]);
}

var newAniBtn = panel3.add("button", undefined, "Thêm chuyển động");
newAniBtn.onClick = function () {
    try {
        createAnimation();
    } catch (error) {
        alert("Bạn cần tạo hình trước");
    }
};

function createAnimation() {
    var banhPos = banhLayer.property("Position");
    banhPos.setValueAtTime(0, [-324, 979]);
    banhPos.setValueAtTime(15, [2288, 1003]);
    var thanPos = thanLayer.property("Position");
    thanPos.setValueAtTime(0, [-318, 954]);
    thanPos.setValueAtTime(15, [2294, 978]);
    var thapPos = thapLayer.property("Position");
    thapPos.setValueAtTime(0, [-300, 900]);
    thapPos.setValueAtTime(15, [2312, 924]);
    var phaoPos = phaoLayer.property("Position");
    phaoPos.setValueAtTime(0, [-182, 880]);
    phaoPos.setValueAtTime(15, [2430, 904]);
    var saoPos = starLayer.property("Position");
    saoPos.setValueAtTime(0, [-578, 717]);
    saoPos.setValueAtTime(15, [2040, 785]);
    var vuongPos = squareLayer.property("Position");
    vuongPos.setValueAtTime(0, [-572, 721]);
    vuongPos.setValueAtTime(15, [2046, 789]);
    var canPos = canLayer.property("Position");
    canPos.setValueAtTime(0, [-506, 788]);
    canPos.setValueAtTime(15, [2112, 856]);

    var phaoRotate = phaoLayer.property("Rotation");
    phaoRotate.setValueAtTime(0, 0);
    phaoRotate.setValueAtTime(5, -23);
    phaoRotate.setValueAtTime(10, 0);
    phaoRotate.setValueAtTime(15, -23);
}

mainWindow.center();
mainWindow.show();
