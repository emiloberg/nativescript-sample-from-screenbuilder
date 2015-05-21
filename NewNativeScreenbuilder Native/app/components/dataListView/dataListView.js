'use strict';
var isInit = true,
    frameModule = require('ui/frame'),

    service = require('./dataListView-service'),

    // additional requires
    viewModel = require('./dataListView-view-model');

function onListViewItemTap(args) {
    var itemData = viewModel.get("listItems")[args.index];

    frameModule.topmost().navigate({
        moduleName: "components/dataListView/itemDetails/itemDetails",
        context: itemData.details
    });
}
exports.onListViewItemTap = onListViewItemTap;

// additional functions
function _removeIOSNavBar() {
    var iosFrame = frameModule.topmost().ios;

    if (iosFrame) {
        iosFrame.navBarVisibility = 'never';
    }
}

function pageLoaded(args) {
    var page = args.object;

    _removeIOSNavBar();
    page.bindingContext = viewModel;

    service.getAllRecords()
        .then(function(result) {
            var itemsList = [];

            result.forEach(function(item) {
                itemsList.push({

                    header: item.ActivityId,

                    details: {

                        header: item.ActivityId,

                        subheader: item.Comment,

                    }

                });
            });

            viewModel.set('listItems', itemsList);
        });

    // additional pageLoaded

    if (isInit) {
        isInit = false;

        // additional pageInit
    }
}

exports.pageLoaded = pageLoaded;