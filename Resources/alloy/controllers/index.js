function Controller() {
    function __alloyId8() {
        var models = __alloyId7.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId5 = models[i];
            __alloyId5.__transform = {};
            var __alloyId6 = Alloy.createController("row", {
                $model: __alloyId5
            });
            rows.push(__alloyId6.getViewEx({
                recurse: true
            }));
        }
        $.__views.table.setData(rows);
    }
    function showId(e) {
        if (e.row.model) {
            var detailObj = fighters.get(e.row.model);
            var win = Alloy.createController("detail", {
                $model: detailObj
            });
            win.getView().open();
        }
    }
    function addTestFighter() {
        var model = Alloy.createModel("fighters", {
            name: "Name " + counter,
            nickname: "Nickname " + counter
        });
        counter++;
        fighters.add(model);
        model.save();
        fighters.fetch();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "#fff",
        navBarHidden: true,
        exitOnClose: true,
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.title = Ti.UI.createLabel({
        top: 0,
        height: "50dp",
        width: Ti.UI.FILL,
        color: "#fff",
        backgroundColor: "#a00",
        font: {
            fontSize: "36dp",
            fontWeight: "bold"
        },
        textAlign: "center",
        text: "Fighters",
        id: "title"
    });
    $.__views.index.add($.__views.title);
    addTestFighter ? $.__views.title.addEventListener("click", addTestFighter) : __defers["$.__views.title!click!addTestFighter"] = true;
    $.__views.table = Ti.UI.createTableView({
        top: "50dp",
        bottom: 0,
        id: "table"
    });
    $.__views.index.add($.__views.table);
    var __alloyId7 = Alloy.Collections["fighters"] || fighters;
    __alloyId7.on("fetch destroy change add remove reset", __alloyId8);
    showId ? $.__views.table.addEventListener("click", showId) : __defers["$.__views.table!click!showId"] = true;
    exports.destroy = function() {
        __alloyId7.off("fetch destroy change add remove reset", __alloyId8);
    };
    _.extend($, $.__views);
    var fighters = Alloy.Collections.fighters;
    var counter = 1;
    fighters.fetch();
    $.index.open();
    __defers["$.__views.title!click!addTestFighter"] && $.__views.title.addEventListener("click", addTestFighter);
    __defers["$.__views.table!click!showId"] && $.__views.table.addEventListener("click", showId);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;