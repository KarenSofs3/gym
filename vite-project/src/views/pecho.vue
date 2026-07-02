<template>
  <q-page class="pagina-ejercicios">
    <div class="encabezado-seccion q-pa-lg">
      <q-btn flat round icon="arrow_back" color="white" :to="{ name: 'portada' }" class="q-mb-sm" />
      <div class="row items-center q-gutter-sm">
        <div class="icono-seccion">
          <q-icon name="sports_martial_arts" size="28px" color="white" />
        </div>
        <div>
          <div class="text-overline text-red-4" style="letter-spacing:2px">RUTINA</div>
          <h2 class="seccion-titulo">Pecho</h2>
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
  { nombre: 'Press de Banca Plano', series: '4 x 8 Reps', descanso: '120 seg', descripcion: 'El ejercicio rey para construir masa y fuerza en el pectoral mayor. Baja la barra hasta tocar el pecho y empuja explosivo.', videoId: 'rT7DgCr-3pg' },
  { nombre: 'Press Inclinado con Mancuernas', series: '4 x 10 Reps', descanso: '90 seg', descripcion: 'Enfocado en la porción clavicular (pecho alto). Usa un ángulo de 30-45° para máximo reclutamiento.', videoId: '8iPEnn-ltC8' },
  { nombre: 'Aperturas con Mancuernas', series: '3 x 12 Reps', descanso: '60 seg', descripcion: 'Permite un estiramiento máximo de las fibras pectorales. Mantén ligera flexión en codos y controla la bajada.', videoId: 'eozdVDA78K0' },
  { nombre: 'Flexiones (Push-ups)', series: '3 x Al Fallo', descanso: '60 seg', descripcion: 'Excelente finalizador con peso corporal. Cuerpo rígido como tabla y baja hasta que el pecho casi toque el suelo.', videoId: '_l3ySVKYVJ8' },
]
</script>

<style scoped>
.pagina-ejercicios { background: #131313; min-height: 100vh; }
.encabezado-seccion {
  background: linear-gradient(135deg, #1a1a1a 0%, #2a0a0a 100%);
  border-bottom: 2px solid #ef4444;
}
.icono-seccion {
  width: 52px; height: 52px;
  background: rgba(239,68,68,0.2);
  border: 1px solid rgba(239,68,68,0.4);
  border-radius: 12px;
  display: flex; align-items: center; justify-content: center;
}
.seccion-titulo {
  font-size: 2rem; font-weight: 900;
  color: white; margin: 0;
  letter-spacing: -0.5px;
}
</style>
