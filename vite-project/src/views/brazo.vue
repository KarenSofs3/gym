<template>
  <q-page class="q-pa-md">
    <div class="row items-center q-mb-lg">
      <q-btn flat round icon="arrow_back" color="primary" :to="{ name: 'portada' }" />
      <q-icon name="sports_gymnastics" size="md" color="primary" class="q-ml-sm q-mr-xs" />
      <h2 class="text-h4 text-weight-bold text-primary q-my-none">Rutina de Brazos</h2>
    </div>

    <div class="row q-col-gutter-lg">
      <div v-for="ej in ejercicios" :key="ej.nombre" class="col-12 col-sm-6 col-md-3">
        <EjercicioCard :ejercicio="ej" />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import EjercicioCard from '../components/EjercicioCard.vue'

const ejercicios = [
  {
    nombre: 'Curl de Bíceps con Barra',
    series: '4 Series x 12 Reps',
    descanso: '60 seg descanso',
    descripcion: 'El clásico constructor de masa para la cara anterior del brazo. Mantén los codos fijos a los costados y controla la bajada.',
    videoId: 'ykJmrZ5v0Oo'
  },
  {
    nombre: 'Fondos en Paralelas',
    series: '3 Series x 10 Reps',
    descanso: '90 seg descanso',
    descripcion: 'Ejercicio compuesto que activa los tríceps, pecho y hombros. Inclina el torso ligeramente hacia adelante para mayor énfasis en el tríceps.',
    videoId: 'wjUmnZH528Y'
  },
  {
    nombre: 'Curl Martillo con Mancuernas',
    series: '3 Series x 12 Reps',
    descanso: '60 seg descanso',
    descripcion: 'Desarrolla el braquial y el antebrazo, aportando mayor grosor. La posición neutra de la muñeca reduce el estrés articular.',
    videoId: 'zC3nLlEvin4'
  },
  {
    nombre: 'Extensión de Tríceps en Polea',
    series: '4 Series x 15 Reps',
    descanso: '45 seg descanso',
    descripcion: 'Aislamiento perfecto para las tres cabezas del tríceps. Mantén los codos pegados al cuerpo durante todo el movimiento.',
    videoId: '2-LAMcpzODU'
  },
]
</script>
