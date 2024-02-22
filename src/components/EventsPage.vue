<template>
    <div v-for="event in events" :key="event" class="events">
        <div class="titles-event">Event:</div>
            <div class="event">
                <div class="desc">{{ event.description }}</div>
                <div class="datetime">{{ event.datetime }}</div>
                <div class="type">{{ event.type }}</div>
                <div class="user">
                 {{ event.user.name }}
                </div>
                <div class="titles-tenant">Tenants:</div>
                <tenants-page
                :tenants="event.user.tenants"
                ></tenants-page>
        </div>
    </div>
</template>

<script>
    import TenantsPage from './TenantsPage.vue';

export default {
    name : 'EventsPage',
    components : {
        TenantsPage : TenantsPage
    },
    props: {
        events : Array,
    }
}
</script>