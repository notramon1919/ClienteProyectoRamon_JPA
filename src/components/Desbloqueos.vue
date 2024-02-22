<template>
  <div class = "container">
    <h1 class = "text-center"> Lista Desbloqueos</h1>
    <table class = "table table-striped">
      <thead>
      <tr>
        <th> Id </th>
        <th> Requerimiento </th>
        <th> Nivel Necesario </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="desbloqueo in desbloqueos" v-bind:key="desbloqueo.id">
        <td> {{desbloqueo.id }}</td>
        <td> {{desbloqueo.requerimiento}}</td>
        <td> {{desbloqueo.nivelNecesario}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import IsaacService from '../../services/IsaacService.js';

export default {
  name: 'Desbloqueos',
  data(){
    return {
      desbloqueos: []
    }
  },
  methods: {
    getDesbloqueoPersonaje(){
      IsaacService.getDesbloqueoPersonaje().then((response) => {
        this.desbloqueos = response.data;
      });
    }
  },
  created() {
    this.getDesbloqueoPersonaje();
  }
}

</script>