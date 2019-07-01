<template>
    <div class="theme-container">
        <div class="header-wrapper">
            <Header/>
        </div>
        <div class="page-wrapper">
            <Page/>
        </div>
        <div class="footer-wrapper">
            <Footer/>
        </div>
    </div>
</template>

<script>
    import Header from './Header.vue'
    import Page from './Page.vue'
    import Footer from './Footer.vue'

    export default {
        components: { Header, Page, Footer },
    }
</script>

<style src="./styles/theme.styl" lang="stylus"></style>
<style lang="stylus" scoped>
    .page-wrapper
        min-height: calc(100vh - 560px);

    .footer-wrapper
        padding 0 24px
</style>
