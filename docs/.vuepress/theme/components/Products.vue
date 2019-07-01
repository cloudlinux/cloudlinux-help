<template>
    <div class="products">
        <h2 class="products__title">{{ $themeLocaleConfig.mainTitle }}</h2>

        <div class="products__products">
            <ProductItem  v-for="item of $themeLocaleConfig.products" :product="item" :key="item.title"/>
        </div>
    </div>
</template>

<script>
    import ProductItem from './ProductItem.vue'

    export default {
        components: {ProductItem},
    }
</script>

<style lang="stylus" scoped>
    @import '../styles/config.styl'

    .products
        margin 45px 100px 0

        &__title
            font-size 16px
            font-weight bold
            color #314659

        &__products
            display flex
            flex-wrap wrap
            justify-content space-between
            margin-top 44px

            .product-item
                width 23%
                margin-bottom 30px

    @media (max-width: $MQMobile)
        .products
            margin 5%

            &__products
                margin-top 3px

</style>
