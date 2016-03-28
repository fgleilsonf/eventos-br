var angular = require('angular');
var $ = require('jquery');


angular
    .module('webAdminApp')
.controller('calendarCtrl', function($modal){

    //Create and add Action button with dropdown in Calendar header.
    this.month = 'month';

    this.actionMenu = '<ul class="actions actions-alt" id="fc-actions">' +
        '<li class="dropdown" dropdown>' +
        '<a href="" dropdown-toggle><i class="zmdi zmdi-more-vert"></i></a>' +
        '<ul class="dropdown-menu dropdown-menu-right">' +
        '<li class="active">' +
        '<a data-calendar-view="month" href="">Month View</a>' +
        '</li>' +
        '<li>' +
        '<a data-calendar-view="basicWeek" href="">Week View</a>' +
        '</li>' +
        '<li>' +
        '<a data-calendar-view="agendaWeek" href="">Agenda Week View</a>' +
        '</li>' +
        '<li>' +
        '<a data-calendar-view="basicDay" href="">Day View</a>' +
        '</li>' +
        '<li>' +
        '<a data-calendar-view="agendaDay" href="">Agenda Day View</a>' +
        '</li>' +
        '</ul>' +
        '</div>' +
        '</li>';


    //Open new event modal on selecting a day
    this.onSelect = function(argStart, argEnd) {
        var modalInstance  = $modal.open({
            templateUrl: 'addEvent.html',
            controller: 'addeventCtrl',
            backdrop: 'static',
            keyboard: false,
            resolve: {
                calendarData: function() {
                    var x = [argStart, argEnd];
                    return x;
                }
            }
        });
    }
})

//Add event Controller (Modal Instance)
    .controller('addeventCtrl', function($scope, $modalInstance, calendarData){

        //Calendar Event Data
        $scope.calendarData = {
            eventStartDate: calendarData[0],
            eventEndDate:  calendarData[1]
        };

        //Tags
        $scope.tags = [
            'bgm-teal',
            'bgm-red',
            'bgm-pink',
            'bgm-blue',
            'bgm-lime',
            'bgm-green',
            'bgm-cyan',
            'bgm-orange',
            'bgm-purple',
            'bgm-gray',
            'bgm-black',
        ]

        //Select Tag
        $scope.currentTag = '';

        $scope.onTagClick = function(tag, $index) {
            $scope.activeState = $index;
            $scope.activeTagColor = tag;
        }

        //Add new event
        $scope.addEvent = function() {
            if ($scope.calendarData.eventName) {

                //Render Event
                $('#calendar').fullCalendar('renderEvent',{
                    title: $scope.calendarData.eventName,
                    start: $scope.calendarData.eventStartDate,
                    end:  $scope.calendarData.eventEndDate,
                    allDay: true,
                    className: $scope.activeTagColor

                },true ); //Stick the event

                $scope.activeState = -1;
                $scope.calendarData.eventName = '';
                $modalInstance.close();
            }
        }

        //Dismiss
        $scope.eventDismiss = function() {
            $modalInstance.dismiss();
        }
    })
