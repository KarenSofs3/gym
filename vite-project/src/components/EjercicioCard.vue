<template>
  <q-card class="ejercicio-card shadow-3" flat bordered>
    <!-- Video embed -->
    <div class="video-wrapper">
      <iframe
        :src="`https://www.youtube.com/embed/${ejercicio.videoId}`"
        frameborder="0"
        allowfullscreen
        title="Video del ejercicio"
      />
    </div>

    <q-card-section>
      <div class="text-h6 text-weight-bold q-mb-xs">{{ ejercicio.nombre }}</div>

      <div class="row items-center q-mb-sm q-gutter-xs">
        <q-chip dense color="orange-1" text-color="orange-10" icon="fitness_center" class="text-weight-bold">
          {{ ejercicio.series }}
        </q-chip>
        <q-chip dense color="blue-1" text-color="blue-10" icon="schedule">
          {{ ejercicio.descanso }}
        </q-chip>
      </div>

      <p class="text-body2 text-grey-7 q-mb-none">{{ ejercicio.descripcion }}</p>
    </q-card-section>
  </q-card>
</template>

<script setup>
defineProps({
  ejercicio: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.ejercicio-card {
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.2s ease-in-out;
}
.ejercicio-card:hover {
  transform: translateY(-4px);
}
.video-wrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  overflow: hidden;
}
.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
