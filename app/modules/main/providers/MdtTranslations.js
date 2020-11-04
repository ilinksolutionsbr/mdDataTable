(function () {
    'use strict';

    angular
        .module('mdDataTable')
        .provider('MdtTranslations', function() {
            var mdtTranslations = {
                rowsPerPage: 'Rows per page:',
                of: 'of',
                largeEditDialog: {
                    saveButtonLabel: 'Save',
                    cancelButtonLabel: 'Cancel',
                },
                columnSelector: {
                    title: 'Columns',
                    selectAll: 'Select all',
                    selectedSingular: 'Selected',
                    selectedPlural: 'Selected',
                    clear: 'Clear',
                    ok: 'Ok',
                    cancel: 'Cancel'
                }
            };

            return {
                replaceAll: function(translations) {
                    mdtTranslations = translations;
                },
                translations: mdtTranslations,
                $get: function () {
                    return mdtTranslations
                }
            }
        });
})();
