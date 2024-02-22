import { createRouter, createWebHistory } from "vue-router";
import TaskPage from '../components/TaskPage'
import DailyTask from '../components/DailyTask'
import WeeklyTask from '../components/WeeklyTask'
import MonthlyTask from '../components/MonthlyTask'

const routes = [
    {
        path : '/',
        name : 'TaskPage',
        component : TaskPage
    },
    {
        path : '/daily',
        name : 'DailyTask',
        component : DailyTask
    },
    {
        path : '/monthly',
        name : 'MonthlyTask',
        component : MonthlyTask
    },
    {
        path : '/weekly',
        name : 'WeeklyTask',
        component : WeeklyTask
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;