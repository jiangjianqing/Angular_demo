/*global define*/
'use strict';

/**
 * The main controller for the app. The controller:
 * - retrieves and persist the model via the todoStorage service
 * - exposes the model to the template and provides event handlers
 */

define([
    'angular'
], function (angular) {
    return ['$scope',
        function ($scope) {
            $scope.phones = [
                {"name": "Nexus S",
                    "snippet": "Fast just got faster with Nexus S."},
                {"name": "Motorola XOOM? with Wi-Fi",
                    "snippet": "The Next, Next Generation tablet."},
                {"name": "MOTOROLA XOOM?",
                    "snippet": "The Next, Next Generation tablet."}
            ];
        }
    ];
});
