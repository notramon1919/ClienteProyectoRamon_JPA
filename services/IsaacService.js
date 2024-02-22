import axios from 'axios';

const ITEMS_URL = 'http://localhost:1919/api/items';
const PERSONAJES_URL = 'http://localhost:1919/api/personajes';
const DESBLOQUEOPER_URL = 'http://localhost:1919/api/desbloqueoPersonaje';
const ESTADISTICASBASE_URL = 'http://localhost:1919/api/estadisticasBase';
const ESTPERS_URL = 'http://localhost:1919/api/personajeEstadisticasBase';

class IsaacService{

    getItems(){
        return axios.get((ITEMS_URL), {
            auth: {
                username: 'ramon',
                password: 'ramon'
            }
        })
    }

    getPersonajes() {
        return axios.get((PERSONAJES_URL), {
            auth: {
                username: 'ramon',
                password: 'ramon'
            }
        })
    }

    getDesbloqueoPersonaje() {
        return axios.get((DESBLOQUEOPER_URL), {
            auth: {
                username: 'ramon',
                password: 'ramon'
            }
        })
    }

    getEstadisticasBase() {
        return axios.get((ESTADISTICASBASE_URL), {
            auth: {
                username: 'ramon',
                password: 'ramon'
            }
        })
    }

    getEstadisticasPersonajes() {
        return axios.get((ESTPERS_URL), {
            auth: {
                username: 'ramon',
                password: 'ramon'
            }
        })
    }
}

export default new IsaacService();