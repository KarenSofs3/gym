<template>
  <q-page class="pagina-ejercicios">
    <div class="encabezado-seccion q-pa-lg">
      <q-btn flat round icon="arrow_back" color="white" :to="{ name: 'portada' }" class="q-mb-sm" />
      <div class="row items-center q-gutter-sm">
        <div class="icono-seccion">
          <q-icon name="accessibility_new" size="28px" color="white" />
        </div>
        <div>
          <div class="text-overline text-blue-4" style="letter-spacing:2px">RUTINA</div>
          <h2 class="seccion-titulo">Piernas</h2>
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
  { nombre: 'Sentadillas con Barra', series: '4 x 10 Reps', descanso: '120 seg', descripcion: 'El ejercicio fundamental para cuádriceps, glúteos e isquiotibiales. La columna siempre en posición neutral.', videoId: 'ultWZbUMPL8' },
  { nombre: 'Prensa de Piernas', series: '4 x 12 Reps', descanso: '90 seg', descripcion: 'Permite cargar mucho peso con menor estrés lumbar. La posición de los pies varía el músculo objetivo.', videoId: 'IZxyjW7MPJQ' },
  { nombre: 'Zancadas con Mancuernas', series: '3 x 12 Reps', descanso: '60 seg', descripcion: 'Trabajo unilateral que mejora el equilibrio y la fuerza. Da un paso largo y baja la rodilla trasera casi al suelo.', videoId: 'L8fvypPrzzs' },
  { nombre: 'Peso Muerto Rumano', series: '4 x 10 Reps', descanso: '90 seg', descripcion: 'Enfoque directo en femorales y glúteos. Mantén la barra cerca del cuerpo y empuja las caderas hacia atrás.', videoId: 'JCXUYuzwNrM' },
]
</script>

<style scoped>
.pagina-ejercicios { background: #131313; min-height: 100vh; }
.encabezado-seccion {
  background: linear-gradient(135deg, #1a1a1a 0%, #0a1a2a 100%);
  border-bottom: 2px solid #3b82f6;
}
.icono-seccion {
  width: 52px; height: 52px;
  background: rgba(59,130,246,0.2);
  border: 1px solid rgba(59,130,246,0.4);
  border-radius: 12px;
  display: flex; align-items: center; justify-content: center;
}
.seccion-titulo {
  font-size: 2rem; font-weight: 900;
  color: white; margin: 0;
  letter-spacing: -0.5px;
}
</style>
