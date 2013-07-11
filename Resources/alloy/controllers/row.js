function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    var $model = arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.row = Ti.UI.createTableViewRow({
        height: "60dp",
        backgroundColor: "#fff",
        id: "row"
    });
    $.__views.row && $.addTopLevelView($.__views.row);
    $.__views.name = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        top: "7dp",
        left: "7dp",
        font: {
            fontSize: "24dp",
            fontWeight: "bold"
        },
        id: "name",
        text: "undefined" != typeof $model.__transform["name"] ? $model.__transform["name"] : $model.get("name")
    });
    $.__views.row.add($.__views.name);
    $.__views.nickname = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        bottom: "7dp",
        left: "14dp",
        font: {
            fontSize: "16dp",
            fonWeight: "normal"
        },
        id: "nickname",
        text: "undefined" != typeof $model.__transform["nickname"] ? $model.__transform["nickname"] : $model.get("nickname")
    });
    $.__views.row.add($.__views.nickname);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $model && ($.row.model = $model.toJSON());
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;