<template>
  <q-layout view="lHh Lpr lFf">

    <!-- HEADER -->
    <q-header class="header-gym">
      <q-toolbar class="q-py-sm">
        <q-btn flat dense round icon="menu" color="white" @click="toggleDrawer" />

        <q-toolbar-title class="logo-titulo q-ml-sm">
          <span class="logo-icono">💪</span>
          <span class="logo-texto">FITNESS<span class="logo-accent">CLUB</span></span>
        </q-toolbar-title>

        <q-btn
          flat
          label="Inicio"
          icon="home"
          color="white"
          :to="{ name: 'portada' }"
          class="boton-header"
        />
      </q-toolbar>
    </q-header>

    <!-- DRAWER / MENÚ LATERAL -->
    <q-drawer v-model="drawerOpen" show-if-above bordered class="drawer-gym">
      <div class="drawer-header q-pa-md">
        <div class="text-weight-bold text-uppercase text-caption text-grey-5 q-mb-sm letter-spacing">
          Grupos Musculares
        </div>
      </div>

      <q-list padding>
        <q-item
          clickable v-ripple
          :to="{ name: 'portada' }"
          exact
          active-class="nav-activo"
          class="nav-item q-mb-xs"
        >
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section class="text-weight-medium">Inicio</q-item-section>
        </q-item>

        <q-separator color="grey-9" class="q-my-sm" />

        <q-item
          v-for="item in navItems"
          :key="item.name"
          clickable v-ripple
          :to="{ name: item.name }"
          active-class="nav-activo"
          class="nav-item q-mb-xs"
          @click="drawerOpen = false"
        >
          <q-item-section avatar>
            <q-icon :name="item.icon" />
          </q-item-section>
          <q-item-section class="text-weight-medium">{{ item.label }}</q-item-section>
          <q-item-section side>
            <q-badge color="orange-9" text-color="white" label="4" rounded />
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <!-- CONTENIDO -->
    <q-page-container class="page-fondo">
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

<style scoped>
/* Header oscuro con acento naranja */
.header-gym {
  background: #111111;
  border-bottom: 3px solid #f97316;
}

.logo-titulo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.3rem;
  font-weight: 900;
  letter-spacing: 2px;
  color: white;
}
.logo-icono { font-size: 1.5rem; }
.logo-texto { color: #fff; }
.logo-accent { color: #f97316; }

.boton-header {
  border: 1px solid rgba(249, 115, 22, 0.4);
  border-radius: 8px;
  font-weight: 600;
  letter-spacing: 0.5px;
  transition: all 0.2s;
}
.boton-header:hover {
  background: rgba(249, 115, 22, 0.15);
  border-color: #f97316;
}

/* Drawer oscuro */
.drawer-gym {
  background: #1a1a1a !important;
  color: #e5e5e5;
}

.drawer-header {
  background: #111;
  border-bottom: 1px solid #2a2a2a;
}

.letter-spacing { letter-spacing: 1.5px; }

.nav-item {
  border-radius: 8px;
  color: #aaa;
  transition: all 0.2s;
}
.nav-item:hover {
  color: #fff;
  background: rgba(249, 115, 22, 0.1) !important;
}

/* Item activo */
:deep(.nav-activo) {
  color: #f97316 !important;
  background: rgba(249, 115, 22, 0.15) !important;
  border-left: 3px solid #f97316;
}

/* Fondo del contenido */
.page-fondo {
  background: #f1f1f1;
}
</style>
