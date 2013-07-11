exports.definition = {
    config: {
        adapter: {
            type: "sql",
            collection_name: "fighters",
            db_file: "/myapp.sqlite",
            db_name: "fighters",
            idAttribute: "id",
            remoteBackup: false
        }
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("fighters", exports.definition, []);

collection = Alloy.C("fighters", exports.definition, model);

exports.Model = model;

exports.Collection = collection;