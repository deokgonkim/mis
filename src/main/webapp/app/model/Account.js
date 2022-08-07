/**
 * Model::Account
 * 계정을 정의한다.
 */
Ext.define('MIS.model.Account', {
    extend: 'Ext.data.Model',
    fields: [
        'account_id',
        'account_name',
        'account_type',
        'account_description',
        'parent_account_id'
    ]
});