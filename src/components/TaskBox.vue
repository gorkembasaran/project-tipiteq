<template>
    <div v-for="task in tasks" :key="task.id" class="TaskBox">
        <div class="titles-task">Task</div>
        <hr>
        <div class="titles-desc">Açıklama:</div>
        <div class="description">{{ task.description }}</div>
        <hr>
        <events-page :events="task.events"></events-page>
        <div class="altTitles">
            <div class="occurrence">Zaman: {{ task.occurrence }}</div>
            <div class="priority">Öncelik: {{ task.priority }}</div>
            <div class="titles-resp">Sorumlular:</div>
            <div v-for="user in task.responsibleUsers" :key="user.id" class="responsibleUsers">
            <div class="info">{{user.responsibleUser.name}}</div>
            </div>
            <div class="titles-tenant">Tenants:</div>
            <div v-for="tenant in task.tenants" :key="tenant.id" class="tenantsArr">
            <div class="name">{{ tenant.name }}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import EventsPage from './EventsPage.vue';

    export default {
        name : 'TaskBox',
        components : {
            EventsPage: EventsPage
        },
        props: {
            'tasks': Array, 
        }
        
    }
</script>