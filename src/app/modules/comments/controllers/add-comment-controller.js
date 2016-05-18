'use strict';

var angular = require('angular');

angular
    .module('webAdminApp')
    .controller('AddCommentController', AddCommentController);

function AddCommentController($scope, Comment) {
    var self = this;

    self.isOpenForm = false;

    self.openForm = function (flag) {
        self.isOpenForm = flag;

        setTimeout(function () {
            angular.element('#messageComment').focus();
        });
    };

    self.save = function() {
        var comment = new Comment();
        comment.user_id = 1;
        comment.event_id = 6;
        comment.message = self.comment.message;

        comment.$save(function () {
            self.comment.message = '';

            $scope.$emit('call-load-comments');
        });
    };
}
