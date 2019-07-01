<template>
    <header class="header">
        <NavBar/>
        <SearchBar/>
    </header>
</template>

<script>
    import NavBar from './components/NavBar.vue'
    import SearchBar from './components/SearchBar.vue'

    export default {
        components: { NavBar, SearchBar }
    }
</script>

<style lang="stylus" scoped>
    .header
        width: 100%;
        height: 411px;
        background-image: linear-gradient(220deg, #1886e5, #0250ca);
</style>
