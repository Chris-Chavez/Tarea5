<template>
<body>
  <div>
  <b-card
    :img-src="src"
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text >
        <span style="font-size: 130%;">{{Nombre.first+" "+Nombre.last}}</span><br>
        <span style="font-size: 110%;">{{"Género: "+item.gender}}</span><br>
        <span>{{"Correo: "+item.email}}</span><br>
        <span>{{"Celular: "+item.cell}}</span><br>
        <span>{{"Telefono: "+item.phone}}</span><br>
    </b-card-text>

    <b-button outlined rounded text @click="ConsultaPersona">Generar Personas</b-button>
  </b-card>
</div>
</body>
  
</template>

<script>
import data from "../services/api.js";
  export default {
    data(){
      return{
        item:[],
        Nombre: {},
        src: "",
      }
    },
    methods:{
      async ConsultaPersona(){
        let res = await data.ObtenerNombre();
        this.item = res.results[0];
        this.Nombre = res.results[0].name;
        this.src = res.results[0].picture.medium;
      }
    }
  }
</script>