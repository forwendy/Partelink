Vue.component('upload-pic', {
    template: '<div style="display: inline-block;"><div v-if="value.length == 0">\
        <input class="input-hide" type="file" :id="name" v-on:change="addPic">\
        <label :for="name" class="upload-pic"></label>\
    </div>\
    <div v-else>\
        <div class="show-pic">\
            <i class="ico-del" v-on:click="removePic"></i>\
            <img class="img-cover" :src="value">\
        </div>\
    </div></div>',
    data: function() {
        return {
            value: ''
        };
    },
    props: {
        name: String
    },
    methods: {
        addPic: function (e) {
            var _this = this;
            // 单图上传
            var file = e.currentTarget.files[0];
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function(e){
                _this.value = this.result;

                _this.$emit('getvalue', [_this.value, _this.name]);
            }
        },
        removePic: function (e) {
            this.value = '';
            this.$emit('getvalue', [this.value, this.name]);
        }
    }
});
