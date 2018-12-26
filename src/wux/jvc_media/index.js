Component({
    externalClasses: ['wux-class'],
    properties: {
        thumb: {
            type: String,
            value: '',
        },
        thumbStyle: {
            type: String,
            value: '',
        },
        title: {
            type: String,
            value: '',
        },
        label: {
            type: String,
            value: '',
        },
        username: {
            type: String,
            value: '',
        },
        dateline: {
            type: String,
            value: '',
        },
        align: {
            type: String,
            value: 'center',
        },
    },
    methods: {
        onTap() {
            this.triggerEvent('Tap');
        }
    }
})