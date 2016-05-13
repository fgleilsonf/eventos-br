'use strict';

var $ = require('jquery');

if (window.jQuery === undefined) {
    window.jQuery = $;
}

if (window.swal === undefined) {
    window.swal = require('sweetalert');
}

//require('mediaelement');
require('flot/jquery.flot');
require('CurvedLines/curvedLines');
require('flot.tooltip/js/jquery.flot.tooltip');
//require('flot/jquery.flot.resize');
require('malihu-custom-scrollbar-plugin')($);
require('bootstrap-notify/bootstrap-notify');
require('bootstrap-datetimepicker');

require('./assets/fullcalendar.min');
require('./assets/jquery-ui.custom.min');

require('./config');

require('./services');

require('./directives');

require('./template');
require('./home');
require('./modules');
require('./models');

// var geocoder;
// var map;
// var marker;
//
// setTimeout(function () {
//
//     function initialize() {
//         var latlng = new google.maps.LatLng(-18.8800397, -47.05878999999999);
//         var options = {
//             zoom: 5,
//             center: latlng,
//             mapTypeId: google.maps.MapTypeId.ROADMAP
//         };
//
//         map = new google.maps.Map(document.getElementById("mapa"), options);
//
//         geocoder = new google.maps.Geocoder();
//
//         marker = new google.maps.Marker({
//             map: map,
//             draggable: true,
//         });
//
//         marker.setPosition(latlng);
//     }
//
//     $(document).ready(function () {
//
//         initialize();
//
//         function carregarNoMapa(endereco) {
//             geocoder.geocode({ 'address': endereco + ', Brasil', 'region': 'BR' }, function (results, status) {
//                 if (status == google.maps.GeocoderStatus.OK) {
//                     if (results[0]) {
//                         var latitude = results[0].geometry.location.lat();
//                         var longitude = results[0].geometry.location.lng();
//
//                         $('#location').val(results[0].formatted_address);
//                         $('#txtLatitude').val(latitude);
//                         $('#txtLongitude').val(longitude);
//
//                         var location = new google.maps.LatLng(latitude, longitude);
//                         marker.setPosition(location);
//                         map.setCenter(location);
//                         map.setZoom(16);
//                     }
//                 }
//             })
//         }
//
//         $("#btnEndereco").click(function() {
//             if($(this).val() != "")
//                 carregarNoMapa($("#location").val());
//         })
//
//         $("#location").blur(function() {
//             if($(this).val() != "")
//                 carregarNoMapa($(this).val());
//         })
//
//         google.maps.event.addListener(marker, 'drag', function () {
//             geocoder.geocode({ 'latLng': marker.getPosition() }, function (results, status) {
//                 if (status == google.maps.GeocoderStatus.OK) {
//                     if (results[0]) {
//                         $('#location').val(results[0].formatted_address);
//                         $('#txtLatitude').val(marker.getPosition().lat());
//                         $('#txtLongitude').val(marker.getPosition().lng());
//                     }
//                 }
//             });
//         });
//
//         $("#location").autocomplete({
//             source: function (request, response) {
//                 geocoder.geocode({ 'address': request.term + ', Brasil', 'region': 'BR' }, function (results, status) {
//                     response($.map(results, function (item) {
//                         return {
//                             label: item.formatted_address,
//                             value: item.formatted_address,
//                             latitude: item.geometry.location.lat(),
//                             longitude: item.geometry.location.lng()
//                         }
//                     }));
//                 })
//             },
//             select: function (event, ui) {
//                 $("#txtLatitude").val(ui.item.latitude);
//                 $("#txtLongitude").val(ui.item.longitude);
//                 var location = new google.maps.LatLng(ui.item.latitude, ui.item.longitude);
//                 marker.setPosition(location);
//                 map.setCenter(location);
//                 map.setZoom(16);
//             }
//         });
//
//         $("form").submit(function(event) {
//             event.preventDefault();
//
//             var endereco = $("#location").val();
//             var latitude = $("#txtLatitude").val();
//             var longitude = $("#txtLongitude").val();
//
//             alert("Endereço: " + endereco + "\nLatitude: " + latitude + "\nLongitude: " + longitude);
//         });
//
//     });
// }, 5000);


module.exports = 'app';
