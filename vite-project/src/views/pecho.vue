<template>
  <q-page class="q-pa-md">
    <div class="row items-center q-mb-lg">
      <q-btn flat round icon="arrow_back" color="primary" :to="{ name: 'portada' }" />
      <q-icon name="sports_martial_arts" size="md" color="primary" class="q-ml-sm q-mr-xs" />
      <h2 class="text-h4 text-weight-bold text-primary q-my-none">Rutina de Pecho</h2>
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
    nombre: 'Press de Banca Plano',
    series: '4 Series x 8 Reps',
    descanso: '120 seg descanso',
    descripcion: 'El ejercicio rey para construir masa y fuerza en el pectoral mayor. Baja la barra hasta tocar levemente el pecho y empuja explosivo.',
    videoId: 'rT7DgCr-3pg'
  },
  {
    nombre: 'Press Inclinado con Mancuernas',
    series: '4 Series x 10 Reps',
    descanso: '90 seg descanso',
    descripcion: 'Enfocado en la porción clavicular (pecho alto). Usa un ángulo de 30-45° para máximo reclutamiento sin involucrar el hombro.',
    videoId: '8iPEnn-ltC8'
  },
  {
    nombre: 'Aperturas con Mancuernas',
    series: '3 Series x 12 Reps',
    descanso: '60 seg descanso',
    descripcion: 'Permite un estiramiento máximo de las fibras pectorales. Mantén una ligera flexión en los codos y controla la bajada.',
    videoId: 'eozdVDA78K0'
  },
  {
    nombre: 'Flexiones (Push-ups)',
    series: '3 Series x Al Fallo',
    descanso: '60 seg descanso',
    descripcion: 'Excelente finalizador con peso corporal. Mantén el cuerpo rígido como una tabla y baja hasta que el pecho casi toque el suelo.',
    videoId: '_l3ySVKYVJ8'
  },
]
</script>
