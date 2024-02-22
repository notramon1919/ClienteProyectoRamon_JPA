<template>
  <div class = "container">
    <h1 class = "text-center"> Lista de Estadisticas con Personajes</h1>
    <table class = "table table-striped">
      <thead>
      <tr>
        <th> Id </th>
        <th> Id Personaje </th>
        <th> Id Estadisticas Base </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="personajeEstadistica in personajesEstadisticas" v-bind:key="personajeEstadistica.id">
        <td> {{personajeEstadistica.id }}</td>
        <td> {{personajeEstadistica.personaje.id}}</td>
        <td> {{personajeEstadistica.estadisticasBase.id}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import IsaacService from '../../services/IsaacService.js';

export default {
  name: 'EstadisticasPersonajes',
  data(){
    return {
      personajesEstadisticas: []
    }
  },
  methods: {
    getEstadisticasPersonajes(){
      IsaacService.getEstadisticasPersonajes().then((response) => {
        this.personajesEstadisticas = response.data;
      });
    }
  },
  created() {
    this.getEstadisticasPersonajes();
  }
}

</script>