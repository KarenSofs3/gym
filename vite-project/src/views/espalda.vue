<template>
  <q-page class="q-pa-md">
    <div class="row items-center q-mb-lg">
      <q-btn flat round icon="arrow_back" color="primary" :to="{ name: 'portada' }" />
      <q-icon name="airline_seat_recline_normal" size="md" color="primary" class="q-ml-sm q-mr-xs" />
      <h2 class="text-h4 text-weight-bold text-primary q-my-none">Rutina de Espalda</h2>
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
    nombre: 'Dominadas (Pull-ups)',
    series: '4 Series x 8 Reps',
    descanso: '120 seg descanso',
    descripcion: 'El mejor ejercicio para lograr una espalda ancha en V. Agarre prono más ancho que los hombros, baja completamente entre repeticiones.',
    videoId: 'eGo4IYlbE5g'
  },
  {
    nombre: 'Remo con Barra',
    series: '4 Series x 10 Reps',
    descanso: '90 seg descanso',
    descripcion: 'Aporta densidad al centro de la espalda y trapecios. Inclina el torso a 45° y lleva la barra hacia el ombligo con los codos pegados.',
    videoId: '9efgcAjQe7E'
  },
  {
    nombre: 'Jalón al Pecho en Polea',
    series: '4 Series x 12 Reps',
    descanso: '60 seg descanso',
    descripcion: 'Variante ideal para trabajar los dorsales de forma controlada. Jala la barra al pecho mientras abres el pecho y arqueas levemente la espalda.',
    videoId: 'CAwf7n6Luuc'
  },
  {
    nombre: 'Remo en Polea Baja',
    series: '3 Series x 12 Reps',
    descanso: '60 seg descanso',
    descripcion: 'Énfasis en la parte media-baja de la espalda con contracción sostenida. Mantén la espalda erguida y los codos cerca del cuerpo.',
    videoId: 'GZbfZ033f74'
  },
]
</script>
