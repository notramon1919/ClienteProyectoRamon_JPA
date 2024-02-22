<template>
  <n-button-group size="large">

    <n-button round>
      <router-link to="/">
        Vista General
      </router-link>
    </n-button>

    <n-button round>
      <router-link to="/items">
        Items
      </router-link>
    </n-button>

    <n-button round>
      <RouterLink to="/personajes">
        Personajes
      </RouterLink>
    </n-button>

    <n-button round>
      <RouterLink to="/desbloqueos">
        Desbloqueos Personajes
      </RouterLink>
    </n-button>

    <n-button round>
      <RouterLink to="/estadisticasBase">
        Estadisticas Base
      </RouterLink>
    </n-button>

    <n-button round>
      <RouterLink to="/estadisticasPersonajes">
        EstadisticasBase_Personajes
      </RouterLink>
    </n-button>

  </n-button-group>

  <router-view></router-view>

</template>

<script>
import {defineComponent} from "vue";
import Items from "@/components/Items.vue";
import Personajes from "@/components/Personajes.vue";
import EstadisticasBase from "@/components/EstadisticasBase.vue";
import Desbloqueos from "@/components/Desbloqueos.vue";
import EstadisticasPersonajes from "@/components/Estadisticas_Personajes.vue";
import BasicView from "@/views/BasicView.vue";

export default defineComponent({
  components: {BasicView}
})
</script>

<style>

body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 20px;
  background-color: #f4f4f4;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th, td {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: left;
}

th {
  background-color: #3498db;
  color: #fff;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

tr:hover {
  background-color: #ddd;
}

</style>