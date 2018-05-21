Vue.component('picker', {
    template: '<div><transition name="fade"><div v-show="show" class="mask"></div></transition>\
    <transition name="picker-slide-fade">\
        <div v-show="show" class="picker-modal">\
            <div class="picker-control fix">\
                <span class="fl" v-if="text.length == 0">请选择</span>\
                <span class="fl" v-else>{{text}}</span>\
                <a class="fr" v-on:click="sumbit">确定</a>\
            </div>\
            <div class="picker-content">\
                <p v-for="obj in list" \
                :data-value="obj.value" v-on:click="select">{{obj.text}}</p>\
            </div>\
        </div>\
    </transition></div>',
    data: function() {
        return {
            text: '请选择',
            value: ''
        };
    },
    props: {
        list: Array,
        show: Boolean,
    },
    methods: {
        select: function (e) {
            var value = e.currentTarget.getAttribute('data-value');
            var text = e.currentTarget.innerHTML;
            this.text = text;
            this.value = value;
        },
        sumbit: function () {
            this.$emit('change', [this.text, this.value]);
            this.$emit('close');
        }
    }
});
