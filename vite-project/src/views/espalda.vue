<template>
  <q-page class="pagina-ejercicios">
    <div class="encabezado-seccion q-pa-lg">
      <q-btn flat round icon="arrow_back" color="white" :to="{ name: 'portada' }" class="q-mb-sm" />
      <div class="row items-center q-gutter-sm">
        <div class="icono-seccion">
          <q-icon name="airline_seat_recline_normal" size="28px" color="white" />
        </div>
        <div>
          <div class="text-overline text-green-4" style="letter-spacing:2px">RUTINA</div>
          <h2 class="seccion-titulo">Espalda</h2>
        </div>
      </div>
    </div>

    <div class="q-pa-lg">
      <div class="row q-col-gutter-lg items-stretch">
        <div v-for="ej in ejercicios" :key="ej.nombre" class="col-12 col-sm-6 col-md-6">
          <EjercicioCard :ejercicio="ej" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import EjercicioCard from '../components/EjercicioCard.vue'

const ejercicios = [
  { nombre: 'Dominadas (Pull-ups)', series: '4 x 8 Reps', descanso: '120 seg', descripcion: 'El mejor ejercicio para lograr una espalda ancha en V. Agarre prono más ancho que los hombros, baja completamente.', videoId: 'D7z3g0Eg9BY' },
  { nombre: 'Remo con Barra', series: '4 x 10 Reps', descanso: '90 seg', descripcion: 'Aporta densidad al centro de la espalda. Inclina el torso a 45° y lleva la barra hacia el ombligo con codos pegados.', videoId: 'zqmq0kBo8Fg' },
  { nombre: 'Jalón al Pecho en Polea', series: '4 x 12 Reps', descanso: '60 seg', descripcion: 'Variante ideal para trabajar los dorsales de forma controlada. Jala hacia el pecho abriendo y arqueando levemente.', videoId: 'YrpgavWKjhI' },
  { nombre: 'Remo en Polea Baja', series: '3 x 12 Reps', descanso: '60 seg', descripcion: 'Énfasis en la parte media-baja de la espalda con contracción sostenida. Espalda erguida, codos cerca del cuerpo.', videoId: 'renP8kf3Jis' },
]
</script>

<style scoped>
.pagina-ejercicios { background: #131313; min-height: 100vh; }
.encabezado-seccion {
  background: linear-gradient(135deg, #1a1a1a 0%, #0a1f0f 100%);
  border-bottom: 2px solid #22c55e;
}
.icono-seccion {
  width: 52px; height: 52px;
  background: rgba(34,197,94,0.2);
  border: 1px solid rgba(34,197,94,0.4);
  border-radius: 12px;
  display: flex; align-items: center; justify-content: center;
}
.seccion-titulo {
  font-size: 2rem; font-weight: 900;
  color: white; margin: 0;
  letter-spacing: -0.5px;
}
</style>
