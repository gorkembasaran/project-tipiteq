<template>
    <div class="containerHead">
        <router-link class="tit" to="/">Tümünü sırala</router-link>
        <router-link class="tit" to="/daily">Günlük sırala</router-link>
        <router-link class="tit" to="/weekly">Haftalık sırala</router-link>
        <router-link class="tit" to="/monthly">Aylık sırala</router-link>
    </div>
</template>


<script>

    export default {
        name : 'HeaderPage',

    }
</script>


<style>
    .containerHead {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .tit {
        padding: 20px;
        text-decoration: none;
        color: black;
        font-size: 20px;
    }
</style>