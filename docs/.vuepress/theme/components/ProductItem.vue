<template>
    <div class="product-item">
        <div class="product-item__header">
            <img
                    class="product-item__icon"
                    v-if="product.icon"
                    :src="$withBase(product.icon)"
                    :alt="product.title"
            >
            <div class="product-item__title">{{ product.title }}</div>
        </div>
        <div class="product-item__body">
            <ul>
                <li v-for="link of product.links" class="product-item__link">
                    <a :href="link.href" class="product-item__link-item">{{ link.label }}</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            product: {
                required: true
            }
        },
    }
</script>

<style lang="stylus" scoped>
    .product-item
        border-radius 5px
        box-shadow 0 0 10px 2px rgba(0, 0, 0, 0.03)
        border solid 1px #f2f4f5
        min-height 277px
        box-sizing border-box

        &__header
            display flex
            align-items center
            padding 19px 25px
            border-bottom 1px solid #f2f4f5

        &__title
            color #3d3d3d
            margin-left 8px
            font-size 16px
            font-weight 500
            word-wrap break-word

        &__body
            padding 10px 10px 10px 60px

        &__link
            padding 10px 0

        &__link-item
            text-decoration none
            color #314659
            word-wrap break-word

            &:hover
                text-decoration underline

</style>
