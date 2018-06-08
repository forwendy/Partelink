Vue.component('search-picker', {
    template: '<div><transition name="fade"><div v-show="show" class="mask"></div></transition>\
    <transition name="right-slide-fade">\
        <div v-show="show">\
            <div class="header navigation" style="z-index:1;">\
                <a class="ico-back fl"  v-on:click="close"></a>\
                <h1>{{title}}</h1>\
            </div>\
            <div class="main" style="position: absolute;top: 0;left:0;right:0;">\
                <div class="scroll-container page-content" style="background:#f4f4f4;">\
                    <div class="form-group form-port-search fix">\
                        <i class="ico-port-search fl"></i>\
                        <input type="text" placeholder="请输入港口名称" v-model="searchKeyword" v-on:input="search">\
                    </div>\
                    <div class="search-picker-list" v-if="searchKeyword.length == 0">\
                        <h2>热门</h2>\
                        <p v-for="obj in hotPort" class="fix" v-on:click="selected(obj)">\
                            <span class="fl">{{obj.englishName.toUpperCase()}}</span>\
                            <span class="fr">{{obj.name}}</span>\
                        </p>\
                    </div>\
                    <div class="search-picker-list" v-else>\
                        <p v-for="obj in list" class="fix" v-on:click="selected(obj)">\
                            <span class="fl">{{obj.englishName.toUpperCase()}}</span>\
                            <span class="fr">{{obj.name}}</span>\
                        </p>\
                    </div>\
                </div>\
            </div>\
        </div>\
    </transition></div>',
    created: function () {
        // 通过hotPortUrl获取列表
        this.hotPort = [{
            id:0,
            name: '宁波',
            englishName: 'NINGBO'
        },{
            id:1,
            name: '上海',
            englishName: 'SHANGHAI'
        },{
            id:2,
            name: '深圳',
            englishName: 'SHENZHEN'
        },{
            id:3,
            name: '武汉',
            englishName: 'WUHAN'
        }
        ];
    },
    data: function() {
        return {
            searchKeyword: '',
            list: [],
            hotPort: []
        };
    },
    props: {
        title: String,
        searchUrl: String,
        hotPortUrl: Array,
        show: Boolean
    },
    methods: {
        search: function () {
            var keyWord = this.searchKeyword;

            // 通过 searchURL
            this.list = [{
                id:0,
                name: '宁波',
                englishName: 'NINGBO'
            },{
                id:1,
                name: '上海',
                englishName: 'SHANGHAI'
            },{
                id:2,
                name: '深圳',
                englishName: 'SHENZHEN'
            },{
                id:3,
                name: '武汉',
                englishName: 'WUHAN'
            },{
                id:4,
                name: '武汉',
                englishName: 'WUHAN'
            },{
                id:5,
                name: '武汉',
                englishName: 'WUHAN'
            }
            ];
        },
        selected: function (obj) {
            this.searchKeyword = '';
            this.$emit('change', [this.title, obj]);
            this.$emit('close');
        },
        close: function () {
            this.$emit('close');
        }
    }
});
