<template>
  <div class = "container">
    <h1 class = "text-center"> Lista de Personajes</h1>
    <table class = "table table-striped">
      <thead>
      <tr>
        <th> Id </th>
        <th> Nombre </th>
        <th> URL_Imagen </th>
        <th> ID Desbloqueo </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="personaje in personajes" v-bind:key="personaje.id">
        <td> {{personaje.id }}</td>
        <td> {{personaje.nombre}}</td>
        <td> {{personaje.urlImagen}}</td>
        <td> {{personaje.desbloqueoId}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import IsaacService from '../../services/IsaacService.js';

export default {
  name: 'Personajes',
  data(){
    return {
      personajes: []
    }
  },
  methods: {
    getPersonajes(){
      IsaacService.getPersonajes().then((response) => {
        this.personajes = response.data;
      });
    }
  },
  created() {
    this.getPersonajes();
  }
}

</script>