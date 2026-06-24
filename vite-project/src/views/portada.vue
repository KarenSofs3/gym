<template>
  <q-page class="q-pa-md">
    <div class="row justify-center q-col-gutter-md">
      <div class="col-12 col-md-8 text-center q-py-xl">
        <q-icon name="fitness_center" size="80px" color="primary" class="q-mb-md" />
        <h1 class="text-h3 text-weight-bolder text-primary q-mb-md">
          ¡Desata tu Máximo Potencial!
        </h1>
        <p class="text-subtitle1 text-grey-7 q-mb-xl">
          Selecciona una categoría para ver las rutinas guiadas con video y descripción.
        </p>

        <div class="row q-col-gutter-md justify-center">
          <div v-for="item in navItems" :key="item.name" class="col-12 col-sm-6 col-md-3">
            <q-card
              flat bordered
              class="tarjeta-grupo text-center cursor-pointer q-hoverable"
              @click="$router.push({ name: item.name })"
            >
              <span class="q-focus-helper" />
              <q-card-section class="q-py-xl">
                <q-icon :name="item.icon" size="xl" color="primary" class="q-mb-sm" />
                <div class="text-h6 text-weight-bold">{{ item.label }}</div>
                <div class="text-caption text-grey-6 q-mt-xs">{{ item.ejercicios }} ejercicios</div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
const navItems = [
  { name: 'brazos',  label: 'Brazos',  icon: 'sports_gymnastics',           ejercicios: 4 },
  { name: 'pecho',   label: 'Pecho',   icon: 'sports_martial_arts',          ejercicios: 4 },
  { name: 'piernas', label: 'Piernas', icon: 'accessibility_new',            ejercicios: 4 },
  { name: 'espalda', label: 'Espalda', icon: 'airline_seat_recline_normal',  ejercicios: 4 },
]
</script>

<style scoped>
.tarjeta-grupo {
  border-radius: 12px;
  transition: transform 0.2s ease-in-out;
}
.tarjeta-grupo:hover {
  transform: translateY(-4px);
}
</style>
