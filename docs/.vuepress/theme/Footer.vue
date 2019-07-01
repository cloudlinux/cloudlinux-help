<template>
    <div class="footer">
        <a :href="$site.themeConfig.cloudlinuxSite" class="footer__logo">
            <img src="./images/we-are-cloudlinux.svg" alt="We are Cloudlinux">
        </a>
        <div class="footer__right">
            <div class="footer__company-title">{{ year }}. CloudLinux Inc</div>
            <ul class="footer__links">
                <li v-for="item in $themeLocaleConfig.footer.bottomLinks" class="footer__link-item">
                    <a :href="item.url" target="_blank" class="footer__link">{{ item.text }}</a>
                </li>
            </ul>

            <div class="footer__social">
                <span class="footer__social-text">{{ $themeLocaleConfig.footer.stayInTouch }}</span>
                <a v-for="item in $site.themeConfig.social" :href="item.url" target="_blank" class="footer__social-link">
                    <img :src="item.logo" class="footer__social-logo">
                </a>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'Footer',

        computed: {
            year() {
                return (new Date()).getFullYear();
            }
        },
    }
</script>

<style lang="stylus" scoped>
    .footer
        display: flex;
        justify-content: space-between;
        box-sizing border-box
        width 100%
        border-top 1px solid #e8e8e8
        padding 36px 14px

        &__right
            display flex
            align-items center

        &__company-title
            color #d8d8d8
            font-weight 600
            font-size 12px
            margin-right 60px

        &__links
            display flex
            margin-right 24px

        &__link-item
            margin-left 22px

            &:last-child
                margin-right 0

        &__link
            color #106cdf
            font-size 12px
            font-weight 600
            text-decoration none

            &:hover
                text-decoration underline

        &__social
            display flex
            align-items center

        &__social-text
            border-left 1px solid #ebebeb
            padding 0 12px
            color #314659
            font-size 12px

        &__social-link
            height 31px

        &__social-logo
            margin-top -3px
            height 42px
            width auto

</style>
