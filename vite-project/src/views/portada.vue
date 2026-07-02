<template>
  <q-page>

    <!-- HERO SECTION -->
    <div class="hero-section q-pa-xl text-center">
      <div class="hero-badge q-mb-md">
        <q-icon name="bolt" size="18px" class="q-mr-xs" />
        PROGRAMA DE ENTRENAMIENTO
      </div>
      <h1 class="hero-titulo q-mb-md">
        ¡Desata tu<br><span class="hero-accent">Máximo Potencial!</span>
      </h1>
      <p class="hero-subtitulo q-mb-xl">
        Elige un grupo muscular y accede a rutinas guiadas con video y descripción detallada.
      </p>

      <!-- Stats rápidos -->
      <div class="row justify-center q-gutter-lg q-mb-xl">
        <div v-for="stat in stats" :key="stat.label" class="stat-chip">
          <div class="stat-numero">{{ stat.numero }}</div>
          <div class="stat-label">{{ stat.label }}</div>
        </div>
      </div>
    </div>

    <!-- TARJETAS DE GRUPOS -->
    <div class="q-pa-lg">
      <div class="text-overline text-orange-9 text-weight-bold q-mb-sm" style="letter-spacing:2px">
        SELECCIONA TU RUTINA
      </div>
      <div class="row q-col-gutter-md">
        <div v-for="item in navItems" :key="item.name" class="col-12 col-sm-6 col-md-3">
          <q-card
            class="tarjeta-grupo cursor-pointer"
            @click="$router.push({ name: item.name })"
          >
            <q-card-section class="q-pa-lg">
              <div class="tarjeta-icono q-mb-md">
                <q-icon :name="item.icon" size="40px" color="white" />
              </div>
              <div class="text-h6 text-weight-bold text-white q-mb-xs">{{ item.label }}</div>
              <div class="text-caption text-grey-5">{{ item.ejercicios }} ejercicios · Video incluido</div>
            </q-card-section>

            <q-card-actions class="q-px-lg q-pb-lg q-pt-none">
              <q-btn
                unelevated
                color="orange-9"
                label="Ver rutina"
                icon-right="arrow_forward"
                class="full-width boton-ver"
                dense
              />
            </q-card-actions>

            <!-- Línea decorativa superior -->
            <div class="tarjeta-linea" :style="{ background: item.color }" />
          </q-card>
        </div>
      </div>
    </div>

  </q-page>
</template>

<script setup>
const stats = [
  { numero: '4',    label: 'Grupos Musculares' },
  { numero: '16',   label: 'Ejercicios' },
  { numero: '100%', label: 'Gratis' },
]

const navItems = [
  { name: 'brazos',  label: 'Brazos',  icon: 'sports_gymnastics',          ejercicios: 4, color: '#f97316' },
  { name: 'pecho',   label: 'Pecho',   icon: 'sports_martial_arts',         ejercicios: 4, color: '#ef4444' },
  { name: 'piernas', label: 'Piernas', icon: 'accessibility_new',           ejercicios: 4, color: '#3b82f6' },
  { name: 'espalda', label: 'Espalda', icon: 'airline_seat_recline_normal', ejercicios: 4, color: '#22c55e' },
]
</script>

<style scoped>
/* Hero */
.hero-section {
  background: linear-gradient(135deg, #111 0%, #1f1f1f 60%, #2a1a00 100%);
  padding-bottom: 60px !important;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  background: rgba(249, 115, 22, 0.15);
  border: 1px solid rgba(249, 115, 22, 0.4);
  color: #f97316;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 2px;
  padding: 6px 16px;
  border-radius: 20px;
}

.hero-titulo {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 900;
  color: white;
  line-height: 1.15;
  letter-spacing: -1px;
  margin: 0 0 16px;
}
.hero-accent { color: #f97316; }

.hero-subtitulo {
  font-size: 1.1rem;
  color: #9ca3af;
  max-width: 480px;
  margin: 0 auto 32px;
  line-height: 1.6;
}

/* Stats */
.stat-chip {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 12px;
  padding: 16px 28px;
  min-width: 100px;
}
.stat-numero {
  font-size: 1.8rem;
  font-weight: 900;
  color: #f97316;
  line-height: 1;
}
.stat-label {
  font-size: 0.75rem;
  color: #9ca3af;
  margin-top: 4px;
  letter-spacing: 0.5px;
}

/* Tarjetas de grupo */
.tarjeta-grupo {
  background: #1e1e1e;
  border: 1px solid #2a2a2a;
  border-radius: 16px !important;
  overflow: hidden;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
  position: relative;
}
.tarjeta-grupo:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.4);
  border-color: #f97316;
}

.tarjeta-linea {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
}

.tarjeta-icono {
  width: 64px;
  height: 64px;
  background: rgba(249, 115, 22, 0.15);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.boton-ver {
  border-radius: 8px;
  font-weight: 700;
  letter-spacing: 0.5px;
}
</style>
