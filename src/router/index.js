import {createRouter, createWebHistory} from 'vue-router'
import Basic from '../views/BasicView.vue'
import Items from '../views/ItemsView.vue'
import Personajes from '../views/PersonajesView.vue'
import Desbloqueos from '../views/DesbloqueosView.vue'
import EstadisticasBase from '../views/EstadisticasBaseView.vue'
import Estadisticas_Personajes from '../views/Estadisticas_PersonajesView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Basic',
            component: Basic
        }, {
            path: '/items',
            name: 'items',
            component: Items
        }, {
            path: '/personajes',
            name: 'personajes',
            component: Personajes
        }, {
            path: '/desbloqueos',
            name: 'desbloqueos',
            component: Desbloqueos
        }, {
            path: '/estadisticasBase',
            name: 'estadisticasBase',
            component: EstadisticasBase
        }, {
            path: '/estadisticasPersonajes',
            name: 'estadisticasPersonaje',
            component: Estadisticas_Personajes
        }
    ]
})

export default router