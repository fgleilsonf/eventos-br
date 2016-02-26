'use strict';

require('./app')
    .config(TranslateConfig);

function TranslateConfig($translateProvider) {
    $translateProvider.translations('en', require('../../resources/i18n/en'));
    $translateProvider.translations('pt-br', require('../../resources/i18n/pt-br'));

    $translateProvider.preferredLanguage('pt-br');
}
