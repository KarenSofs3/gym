<template>
  <q-page class="pagina-ejercicios">
    <div class="encabezado-seccion q-pa-lg">
      <q-btn flat round icon="arrow_back" color="white" :to="{ name: 'portada' }" class="q-mb-sm" />
      <div class="row items-center q-gutter-sm">
        <div class="icono-seccion">
          <q-icon name="sports_gymnastics" size="28px" color="white" />
        </div>
        <div>
          <div class="text-overline text-orange-5" style="letter-spacing:2px">RUTINA</div>
          <h2 class="seccion-titulo">Brazos</h2>
        </div>
      </div>
    </div>

    <div class="q-pa-lg">
      <div class="row q-col-gutter-md">
        <div v-for="ej in ejercicios" :key="ej.nombre" class="col-12 col-sm-6 col-md-3">
          <EjercicioCard :ejercicio="ej" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import EjercicioCard from '../components/EjercicioCard.vue'

const ejercicios = [
  { nombre: 'Curl de Bíceps con Barra', series: '4 x 12 Reps', descanso: '60 seg', descripcion: 'El clásico constructor de masa para la cara anterior del brazo. Mantén los codos fijos a los costados y controla la bajada.', videoId: 'ZIm_qrJSOds' },
  { nombre: 'Fondos en Paralelas', series: '3 x 10 Reps', descanso: '90 seg', descripcion: 'Ejercicio compuesto que activa tríceps, pecho y hombros. Inclina el torso hacia adelante para mayor énfasis en el tríceps.', videoId: 'oAz7tT9bgrk' },
  { nombre: 'Curl Martillo con Mancuernas', series: '3 x 12 Reps', descanso: '60 seg', descripcion: 'Desarrolla el braquial y el antebrazo. La posición neutra de la muñeca reduce el estrés articular.', videoId: 'y-YqqdC7FvY' },
  { nombre: 'Extensión de Tríceps en Polea', series: '4 x 15 Reps', descanso: '45 seg', descripcion: 'Aislamiento perfecto para las tres cabezas del tríceps. Mantén los codos pegados al cuerpo durante el movimiento.', videoId: 'spkATNOdhog' },
]
</script>

<style scoped>
.pagina-ejercicios { background: #131313; min-height: 100vh; }
.encabezado-seccion {
  background: linear-gradient(135deg, #1a1a1a 0%, #2a1500 100%);
  border-bottom: 2px solid orange;
}
.icono-seccion {
  width: 52px; height: 52px;
  background: rgba(249,115,22,0.2);
  border: 1px solid rgba(249,115,22,0.4);
  border-radius: 12px;
  display: flex; align-items: center; justify-content: center;
}
.seccion-titulo {
  font-size: 2rem; font-weight: 900;
  color: white; margin: 0;
  letter-spacing: -0.5px;
}
</style>
