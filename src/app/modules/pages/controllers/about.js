'use strict';

var angular = require('angular');

angular
    .module('webAdminApp')
    .controller('AboutCtrl', AboutCtrl);

function AboutCtrl() {
    var vm = this;

    vm.users = [{
        phone: '+55 85 996994462',
        email: 'fgleilsonf@gmail.com',
        photo_profile: 'https://fbcdn-sphotos-b-a.akamaihd.net/hphotos-ak-xtp1/v/t1.0-9/13051601_794963017305595_6116474065762148471_n.jpg?oh=2479bfa0b16454a899835acfdb8e5fde&oe=57DE3AAD&__gda__=1474702491_2e3386eecbcf0e401d029f7d3f32e58d',
        photo_cover: 'https://scontent-gru2-1.xx.fbcdn.net/v/t1.0-9/13015287_794160034052560_7575695178305307468_n.jpg?oh=32237a15ea685812cf2c3f4b946e7c6f&oe=57DA7AB2',
        name: 'Gleilson Ferreira',
        profession: 'Desenvolvedor',
        linkedin: 'https://br.linkedin.com/in/gleilson-ferreira-84948a104'
    },
    {
        phone: '+55 85 996994462',
        email: 'fgleilsonf@gmail.com',
        photo_profile: 'https://scontent-gru2-1.xx.fbcdn.net/v/t1.0-9/12472551_910676339030457_8388931635245596009_n.jpg?oh=2db59ed5dd79362ebdedc8d7dcadf96d&oe=579C8E30',
        photo_cover: 'https://scontent-gru2-1.xx.fbcdn.net/v/t1.0-9/10149830_564632626968165_999168583_n.jpg?oh=eada1c946c0ac0853dc2c32df1a0358e&oe=57ACC85C',
        name: 'Maurício Filho',
        profession: 'Desenvolvedor',
        linkedin: 'https://br.linkedin.com/in/gleilson-ferreira-84948a104'
    }];
}
