/**
 * Model::Transaction
 * 일반원장을 정의한다.
 */
Ext.define('MIS.model.Transaction', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'transaction_id',
            type: 'string'
        }, {
            name: 'transaction_group_id',
            type: 'string'
        }, {
            name: 'owner',
            type: 'string'
        }, {
            name: 'transaction_daily_no',
            type: 'string'
        }, {
            name: 'transaction_reference_no',
            type: 'string'
        }, {
            name: 'affecting_account_id',
            type: 'string'
        }, {
            name: 'amount',
            type: 'number'
        }, {
            name: 'transaction_datetime',
            type: 'date',
            dateFormat:'time'
        }, {
            name: 'related_business_id',
            type: 'string'
        }, {
            name: 'comment',
            type: 'string'
        }
    ]
});