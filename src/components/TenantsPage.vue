<template>
    <div v-for="tenant in tenants" :key="tenant.id" class="tenants">
                <div class="tenant">{{ tenant.name }}</div>
    </div>
</template>

<script>
    export default {
        name : 'TenantsPage',
        props : {
            tenants : Array
        }
    }
</script>