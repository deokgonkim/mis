/**
 * Model::User
 * 사용자를 정의한다.
 */
Ext.define('MIS.model.User', {
    extend: 'Ext.data.Model',
    fields: [ 'member_id', 'emp_no', 'member_name', 'member_ou' ]
});