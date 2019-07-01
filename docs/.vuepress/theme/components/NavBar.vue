<template>
    <div class="navbar">
        <div class="logo"></div>

        <div class="links">
            <div class="buttons">
                <a class="btn btn--submit-request" @click="createRequest">
                    {{ $themeLocaleConfig.header.submitRequest }}
                </a>
                <a :href="$site.themeConfig.try_free" target="_blank" class="btn btn--try-free">
                    {{ $themeLocaleConfig.header.tryFree }}
                </a>
            </div>
            <LanguageSelector/>
        </div>
    </div>
</template>

<script>
    import LanguageSelector from './LanguageSelector.vue'

    export default {
        components: { LanguageSelector },

        methods: {
            createRequest() {
                console.log('create request');
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .navbar
        display: flex;
        justify-content: space-between;
        padding: 13px 30px 0;

        .logo
            height: 43px;
            width: 180px;
            background-image: url(../images/logo-white.svg);
            background-position: center center;
            background-repeat: no-repeat;

        .links
            display: flex;

        .buttons
            display: flex;

            .btn
                font-size: 0.88rem;
                line-height: 1rem;
                color: #FFFFFF;
                text-align: center;
                font-weight 600
                text-decoration: none;
                border: 2px solid #fff;
                border-radius: 4px;
                padding 0.7rem 1.6rem;
                margin-right: 10px;
                overflow: hidden;
                cursor: pointer;
                transition-duration: 0.4s;

                &--try-free
                    background-color: #FFF;
                    color: #0250ca;

                &:hover
                    text-decoration underline

                &:last-child
                    margin-right: 0px;
</style>
