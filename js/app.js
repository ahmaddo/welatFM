/**
 * Created by Ark on 16.04.2017.
 */
(function(){
    'use strict';
    angular
        .module('welat', [])
        .controller('mainController',[ mainController]);

    mainController.$inject = ['$http', '$scope'];

    function mainController($http, $scope) {
        var vm = this;
        vm.decodeURI = decodeURI;
        vm.innerHTML = innerHTML;
        vm.getResponse = getResponse;


        function innerHTML(id, type, ObjKey) {
            $('#'+ id ).html(vm.response[ObjKey][type]['rendered']).text();
        }

        function decodeURI(uri) {
            return decodeURIComponent(uri);
        }

        function getResponse() {
            var url = 'http://www.welat.fm/wp-json/wp/v2/posts?orderby=date&per_page=20';

            var xhr = new XMLHttpRequest();
            xhr.open("GET", url, true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4) {
                    $('#loader').hide();
                    vm.response = JSON.parse(xhr.responseText);
                }
            };
            xhr.send();

            //$.get(url).done(function(responseText) {
            //    vm.response = responseText;
            //});
        }
    getResponse();
    }

})();

