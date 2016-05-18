'use strict';

var angular = require('angular');

angular
    .module('webAdminApp')
    .controller('CommentController', CommentController);

function CommentController($scope, Comment) {

    var self = this;

    self.comments = [];

    self.delete = function (comment) {
        comment.$remove(load_);
    };

    var load_ = function () {
        Comment.query({event_id: 6}, function (comments) {
            self.comments = comments;

            $scope.$emit('call-load-list-comments', self.comments.length);
        });
    };

    $scope.$on('call-load-comments', load_);

    load_();
}
