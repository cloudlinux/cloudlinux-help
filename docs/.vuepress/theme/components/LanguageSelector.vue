<template>
    <nav class="language-selector">
        <DropdownLink :items="languageDropdownItems"/>
    </nav>
</template>

<script>
    import DropdownLink from './DropdownLink.vue'

    export default {
        components: { DropdownLink },

        computed: {
            languageDropdownItems() {
                const { locales } = this.$site;
                if (!locales || Object.keys(locales).length < 2) {
                    return {};
                }

                const currentLink = this.$page.path;
                const routes = this.$router.options.routes;
                const themeLocales = this.$site.themeConfig.locales || {};
                const languageConfig = this.$themeLocaleConfig.header.language;
                return {
                    title: languageConfig.title || 'Language',
                    text: languageConfig.selectText || 'En',
                    items: Object.keys(locales).map(path => {
                        const locale = locales[path];
                        const text = themeLocales[path] && themeLocales[path].header.language.label || locale.lang;
                        let link;
                        // Stay on the current page
                        if (locale.lang === this.$lang) {
                            link = currentLink;
                        } else {
                            // Try to stay on the same page
                            link = currentLink.replace(this.$localeConfig.path, path);
                            // fallback to homepage
                            if (!routes.some(route => route.path === link)) {
                                link = path;
                            }
                        }
                        return { text, link }
                    })
                };
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .language-selector
        display flex
        align-items center
        margin-left 36px
        color: #FFFFFF
</style>
