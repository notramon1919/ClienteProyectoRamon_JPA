<template>
  <div class = "container">
    <h1 class = "text-center"> Lista de Objetos</h1>
    <table class = "table table-striped">
      <thead>
      <tr>
        <th> Id </th>
        <th> IdPersonaje </th>
        <th> Nombre </th>
        <th> Calidad </th>
        <th> URL_Imagen </th>
        <th> Imagen</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in items" v-bind:key="item.id">
        <td> {{item.id }}</td>
        <td> {{item.personaje.id}}</td>
        <td> {{item.nombre}}</td>
        <td> {{item.calidad}}</td>
        <td> {{item.urlImagen}}</td>
        <td> <img :src="`${item.urlImagen}`" alt="La imagen no se ha podido generar. Consulte problema."></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import IsaacService from '../../services/IsaacService.js';

export default {
  name: 'Items',
  data(){
    return {
      items: []
    }
  },
  methods: {
    getItems(){
      IsaacService.getItems().then((response) => {
        this.items = response.data;
      });
    }
  },
  created() {
    this.getItems();
  }
}

</script>