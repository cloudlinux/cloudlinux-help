<template>
    <div class="search-bar">
        <h2 class="search-bar__title">{{ $themeLocaleConfig.header.search.title }}</h2>

        <p class="search-bar__description">{{ $themeLocaleConfig.header.search.description }}</p>

        <div class="search-bar__search-input">
            <div class="search-input">
                <div class="search-input__search-type">
                    <DropdownLink :items="searchDropDownItems" v-on:valueChanged="valueChanged($event)"/>
                </div>
                <div class="search-input__input-wrapper">
                    <AlgoliaSearchBox v-if="isAlgoliaSearch" :options="algolia" />
                </div>

                <div class="search-input__icon-wrapper">
                    <img class="product-item__icon" :src="$withBase('/search-icon.svg')"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import DropdownLink from './DropdownLink.vue'
    import AlgoliaSearchBox from './AlgoliaSearchBox.vue'

    export default {
        components: { DropdownLink, AlgoliaSearchBox },

        data() {
            return {
                searchType: 1, // All products
                searchDropDownItems: {},
            };
        },

        created() {
            this.searchDropDownItems = this.getSearchDropDownItems(this.searchType);
        },

        watch: {
            searchType(val) {
                this.searchDropDownItems = this.getSearchDropDownItems(val);
            }
        },

        computed: {
            algolia () {
                return this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {}
            },

            isAlgoliaSearch () {
                return this.algolia && this.algolia.apiKey && this.algolia.indexName
            },
        },

        methods: {
            valueChanged(newValue) {
                this.searchType = newValue.id;
            },

            getSearchDropDownItems(currentProductId) {
                const items = this.$themeLocaleConfig.products.map((item) => {
                    return { id: item.id, text: item.title };
                });
                items.push({ id: 1, text: this.$themeLocaleConfig.header.search.defaultSearchType });

                const currentProduct = items.find((item) => currentProductId === item.id);

                const text = currentProduct ? currentProduct.text : this.$themeLocaleConfig.header.search.defaultSearchType;
                return { text, items };
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .dropdown-selector
        width 300px
        position relative

    .search-bar
        text-align center
        color #FFF
        padding 80px 0

        &__title
            font-weight normal
            font-size 55px

        &__description
            font-size 14px
            margin-top 8px

        &__search-input
            display flex
            justify-content center
            margin-top 26px

    .search-input
        display flex
        width 830px
        height 65px

        &__search-type
            width 213px
            height 65px
            padding-left 40px
            box-sizing border-box
            color #373737
            background-color #FFF
            font-size 14px
            font-weight 600
            border-radius 30px
            border-top-right-radius 0
            border-bottom-right-radius 0

        &__input-wrapper
            display flex
            align-items center
            width 560px
            background-color #FFF

        &__icon-wrapper
            display flex
            width 57px
            height 65px
            background-color #FFF
            border-radius 30px
            border-top-left-radius 0
            border-bottom-left-radius 0

</style>