<template>
  <q-layout view="lHh Lpr lFf" class="bg-grey-1">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleDrawer" />
        <q-toolbar-title class="text-weight-bold">
          <q-icon name="fitness_center" size="sm" class="q-mr-sm" />
          FITNESS CLUB
        </q-toolbar-title>
        <q-btn flat label="Inicio" icon="home" :to="{ name: 'portada' }" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawerOpen" show-if-above bordered class="bg-white">
      <q-list>
        <q-item-label header class="text-weight-bold text-uppercase text-grey-7">
          Grupos Musculares
        </q-item-label>

        <q-item
          clickable v-ripple
          :to="{ name: 'portada' }"
          exact
          active-class="text-primary text-weight-bold bg-blue-1"
        >
          <q-item-section avatar><q-icon name="home" /></q-item-section>
          <q-item-section>Inicio</q-item-section>
        </q-item>

        <q-separator spaced />

        <q-item
          v-for="item in navItems"
          :key="item.name"
          clickable v-ripple
          :to="{ name: item.name }"
          active-class="text-primary text-weight-bold bg-blue-1"
          @click="drawerOpen = false"
        >
          <q-item-section avatar><q-icon :name="item.icon" /></q-item-section>
          <q-item-section>{{ item.label }}</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

const drawerOpen = ref(false)

const navItems = [
  { name: 'brazos',  label: 'Brazos',  icon: 'sports_gymnastics' },
  { name: 'pecho',   label: 'Pecho',   icon: 'sports_martial_arts' },
  { name: 'piernas', label: 'Piernas', icon: 'accessibility_new' },
  { name: 'espalda', label: 'Espalda', icon: 'airline_seat_recline_normal' },
]

function toggleDrawer() {
  drawerOpen.value = !drawerOpen.value
}
</script>
