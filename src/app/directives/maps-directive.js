'use strict';

var angular = require('angular');
var $ = require('jquery');

angular
    .module('webAdminApp')
    .directive('maps', maps);

function maps() {
    return {
        restrict: 'EA',
        templateUrl: '/templates/maps.html',
        scope: {
        },
        link: function(scope, element) {
            var latlng = new google.maps.LatLng(-18.8800397, -47.05878999999999);
            var options = {
                zoom: 5,
                center: latlng,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            var map = new google.maps.Map(element, options);
            var geocoder = new google.maps.Geocoder();

            var marker = new google.maps.Marker({
                map: map,
                draggable: true
            });

            marker.setPosition(latlng);

            google.maps.event.addListener(marker, 'drag', function () {
                geocoder.geocode({ 'latLng': marker.getPosition() }, function (results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        if (results[0]) {
                            $('#location').val(results[0].formatted_address);
                            $('#txtLatitude').val(marker.getPosition().lat());
                            $('#txtLongitude').val(marker.getPosition().lng());
                        }
                    }
                });
            });

            function carregarNoMapa(endereco) {
                geocoder.geocode({ 'address': endereco + ', Brasil', 'region': 'BR' }, function (results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        if (results[0]) {
                            var latitude = results[0].geometry.location.lat();
                            var longitude = results[0].geometry.location.lng();

                            $('#location').val(results[0].formatted_address);
                            $('#txtLatitude').val(latitude);
                            $('#txtLongitude').val(longitude);

                            var location = new google.maps.LatLng(latitude, longitude);
                            marker.setPosition(location);
                            map.setCenter(location);
                            map.setZoom(16);
                        }
                    }
                })
            }

            $("#btnEndereco").click(function() {
                if($(this).val() != "")
                    carregarNoMapa($("#location").val());
            })

            // $("#location").blur(function() {
            //     if($(this).val() != "")
            //         carregarNoMapa($(this).val());
            // });

            // $("#location").autocomplete({
            //     source: function (request, response) {
            //         geocoder.geocode({ 'address': request.term + ', Brasil', 'region': 'BR' }, function (results, status) {
            //             response($.map(results, function (item) {
            //                 return {
            //                     label: item.formatted_address,
            //                     value: item.formatted_address,
            //                     latitude: item.geometry.location.lat(),
            //                     longitude: item.geometry.location.lng()
            //                 }
            //             }));
            //         })
            //     },
            //     select: function (event, ui) {
            //         $("#txtLatitude").val(ui.item.latitude);
            //         $("#txtLongitude").val(ui.item.longitude);
            //         var location = new google.maps.LatLng(ui.item.latitude, ui.item.longitude);
            //         marker.setPosition(location);
            //         map.setCenter(location);
            //         map.setZoom(16);
            //     }
            // });

            $("form").submit(function(event) {
                event.preventDefault();

                var endereco = $("#location").val();
                var latitude = $("#txtLatitude").val();
                var longitude = $("#txtLongitude").val();

                alert("Endereço: " + endereco + "\nLatitude: " + latitude + "\nLongitude: " + longitude);
            });
        }
    }
}
