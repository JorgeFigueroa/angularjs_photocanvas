/**
 * Created by jorge on 10/10/15.
 */
'use strict';

angular.module('ImageEditor')
    .controller('eventos', function ($scope) {
        $scope.cambio = function () {
            $scope.evento = [{icona_clase:'zmdi-arrows', tituloicona:'MoveTool'}];
        };
    });
