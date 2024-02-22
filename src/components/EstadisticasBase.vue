<template>
  <div class = "container">
    <h1 class = "text-center"> Lista de Estadisticas Base</h1>
    <table class = "table table-striped">
      <thead>
      <tr>
        <th> Id </th>
        <th> Vida </th>
        <th> Daño </th>
        <th> Suerte </th>
        <th> Velocidad </th>
        <th> Velocidad de Ataque </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="estadisticaBase in estadisticasBase" v-bind:key="estadisticaBase.id">
        <td> {{estadisticaBase.id }}</td>
        <td> {{estadisticaBase.vida}}</td>
        <td> {{estadisticaBase.daño}}</td>
        <td> {{estadisticaBase.velocidad}}</td>
        <td> {{estadisticaBase.velocidadAtaque}}</td>
        <td> {{estadisticaBase.suerte}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import IsaacService from '../../services/IsaacService.js';

export default {
  name: 'EstadisticasBase',
  data(){
    return {
      estadisticasBase: []
    }
  },
  methods: {
    getEstadisticasBase(){
      IsaacService.getEstadisticasBase().then((response) => {
        this.estadisticasBase = response.data;
      });
    }
  },
  created() {
    this.getEstadisticasBase();
  }
}

</script>