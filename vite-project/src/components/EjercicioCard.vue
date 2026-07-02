<template>
  <q-card class="ejercicio-card">

    <!-- Video -->
    <div class="video-wrapper">
      <iframe
        :src="`https://www.youtube.com/embed/${ejercicio.videoId}`"
        frameborder="0"
        allowfullscreen
        title="Video del ejercicio"
      />
    </div>

    <!-- Contenido -->
    <q-card-section class="q-pa-md">
      <div class="text-subtitle1 text-weight-bold text-white q-mb-sm">
        {{ ejercicio.nombre }}
      </div>

      <div class="row q-gutter-xs q-mb-sm">
        <div class="chip-dato">
          <q-icon name="fitness_center" size="14px" class="q-mr-xs" />
          {{ ejercicio.series }}
        </div>
        <div class="chip-dato chip-descanso">
          <q-icon name="schedule" size="14px" class="q-mr-xs" />
          {{ ejercicio.descanso }}
        </div>
      </div>

      <p class="text-body2 descripcion">{{ ejercicio.descripcion }}</p>
    </q-card-section>

  </q-card>
</template>

<script setup>
defineProps({
  ejercicio: { type: Object, required: true }
})
</script>

<style scoped>
.ejercicio-card {
  background: #1e1e1e;
  border: 1px solid #2a2a2a;
  border-radius: 14px !important;
  overflow: hidden;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.ejercicio-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.45);
}

/* Video responsive 16:9 */
.video-wrapper {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  background: #000;
}
.video-wrapper iframe {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
}

/* Chips de info */
.chip-dato {
  display: inline-flex;
  align-items: center;
  background: rgba(249, 115, 22, 0.12);
  border: 1px solid rgba(249, 115, 22, 0.3);
  color: #f97316;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 20px;
}
.chip-descanso {
  background: rgba(59, 130, 246, 0.12);
  border-color: rgba(59, 130, 246, 0.3);
  color: #60a5fa;
}

.descripcion {
  color: #9ca3af;
  font-size: 0.85rem;
  line-height: 1.55;
  margin: 0;
}
</style>
