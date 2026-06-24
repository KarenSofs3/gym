<template>
  <q-page class="q-pa-md">
    <div class="row items-center q-mb-lg">
      <q-btn flat round icon="arrow_back" color="primary" :to="{ name: 'portada' }" />
      <q-icon name="accessibility_new" size="md" color="primary" class="q-ml-sm q-mr-xs" />
      <h2 class="text-h4 text-weight-bold text-primary q-my-none">Rutina de Piernas</h2>
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
    nombre: 'Sentadillas con Barra',
    series: '4 Series x 10 Reps',
    descanso: '120 seg descanso',
    descripcion: 'El ejercicio fundamental para el desarrollo completo de cuádriceps, glúteos e isquiotibiales. La columna siempre neutral.',
    videoId: 'ultWZbUMPL8'
  },
  {
    nombre: 'Prensa de Piernas',
    series: '4 Series x 12 Reps',
    descanso: '90 seg descanso',
    descripcion: 'Permite cargar mucho peso con menor estrés lumbar. La posición de los pies varía el músculo objetivo.',
    videoId: 'IZxyjW7MPJQ'
  },
  {
    nombre: 'Zancadas con Mancuernas',
    series: '3 Series x 12 Reps',
    descanso: '60 seg descanso',
    descripcion: 'Trabajo unilateral que mejora el equilibrio y la fuerza. Da un paso largo y baja la rodilla trasera casi al suelo.',
    videoId: 'L8fvypPrzzs'
  },
  {
    nombre: 'Peso Muerto Rumano',
    series: '4 Series x 10 Reps',
    descanso: '90 seg descanso',
    descripcion: 'Enfoque directo en femorales y glúteos. Mantén la barra cerca del cuerpo y empuja las caderas hacia atrás al bajar.',
    videoId: 'JCXUYuzwNrM'
  },
]
</script>
