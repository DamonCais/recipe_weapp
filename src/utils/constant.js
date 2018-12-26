/**
 * 用户code 换取 session_key
 * @type {String}
 */
export const USER_SPECICAL_INFO = "userSpecialInfo";

/**
 * 用户信息
 * @type {String}
 */
export const USER_INFO = "userInfo";
export const OPENID = "openid";

/**
 * 系统信息
 * @type {String}
 */
export const SYSTEM_INFO = "systemInfo";


export const ADDRESS_ID = "addressId";

export const SEL_CLASS_CODE = "selClassCode";

export const baseForm = {
    name: {
        label: '姓名',
        value: 'damon'
    },
    sex: {
        label: '性别',
        value: '男',
        type: 'picker',
        options: ['男', '女']
    },
    phone: {
        label: '手机号',
        value: '',
        type: 'number'
    },
    qq: {
        label: 'QQ',
        value: '',
        type: 'number'
    },
    email: {
        label: '邮箱',
        value: ''
    }
};
export const residenceForm = {
    id: {
        label: '身份证',
        value: ''
    },
    birthday: {
        label: '生日',
        value: '',
        type: 'date'
    },
    address: {
        label: '现居地址',
        value: '',
    }
};
export const companyForm = {
    company: {
        label: '所在公司',
        value: ''
    },
    job: {
        label: '职位',
        value: '',
    },
};
export const educationForm = {
    education: {
        label: '最高学历',
        value: ''
    },
    degree: {
        label: '学位',
        value: '',
    },
    school: {
        label: '毕业学校',
        value: ''
    }
};
export const emergencyForm = {
    contact: {
        label: '紧急联系人',
        value: ''
    },
    phone: {
        label: '联系电话',
        value: '',
    },
};