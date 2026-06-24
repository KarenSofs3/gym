<template>
    <q-layout view="lHh Lpr lFf" class="bg-grey-1">
        <q-header elevated class="bg-primary text-white">
            <q-toolbar>
                <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

                <q-toolbar-title class="text-weight-bold">
                    <q-icon name="fitness_center" size="sm" class="q-mr-sm" />
                    FITNESS CLUB
                </q-toolbar-title>

                <q-btn flat label="Inicio" icon="home" @click="seccionActual = 'inicio'" />
            </q-toolbar>
        </q-header>

        <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="bg-white">
            <q-list>
                <q-item-label header class="text-weight-bold text-uppercase text-grey-7">
                    Categorías de Entrenamiento
                </q-item-label>

                <q-item clickable v-ripple :active="seccionActual === 'inicio'" @click="cambiarSeccion('inicio')"
                    active-class="text-primary text-weight-bold bg-blue-1">
                    <q-item-section avatar>
                        <q-icon name="home" />
                    </q-item-section>
                    <q-item-section> Inicio </q-item-section>
                </q-item>

                <q-separator q-my-md />

                <q-item v-for="grupo in gruposMusculares" :key="grupo.id" clickable v-ripple
                    :active="seccionActual === grupo.id" @click="cambiarSeccion(grupo.id)"
                    active-class="text-primary text-weight-bold bg-blue-1">
                    <q-item-section avatar>
                        <q-icon :name="grupo.icon" />
                    </q-item-section>
                    <q-item-section class="text-capitalize">
                        {{ grupo.label }}
                    </q-item-section>
                </q-item>
            </q-list>
        </q-drawer>

        <q-page-container>
            <q-page class="q-pa-md">

                <div v-if="seccionActual === 'inicio'" class="row justify-center q-col-gutter-md">
                    <div class="col-12 col-md-8 text-center q-py-xl">
                        <h1 class="text-h3 text-weight-bolder text-primary q-mb-md">
                            ¡Desata tu Máximo Potencial!
                        </h1>
                        <p class="text-subtitle1 text-grey-7 q-mb-xl">
                            Selecciona una categoría en el menú lateral para descubrir las mejores rutinas guiadas de
                            ejercicios.
                        </p>

                        <div class="row q-col-gutter-md justify-center">
                            <div v-for="grupo in gruposMusculares" :key="grupo.id" class="col-12 col-sm-6 col-md-3">
                                <q-card flat bordered class="my-card text-center cursor-pointer q-hoverable"
                                    @click="cambiarSeccion(grupo.id)">
                                    <span class="q-focus-helper"></span>
                                    <q-card-section class="q-py-xl">
                                        <q-icon :name="grupo.icon" size="xl" color="primary" class="q-mb-sm" />
                                        <div class="text-h6 text-capitalize text-weight-bold">{{ grupo.label }}</div>
                                    </q-card-section>
                                </q-card>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-else>
                    <div class="row items-center q-mb-lg">
                        <q-btn flat round icon="arrow_back" color="primary" @click="seccionActual = 'inicio'" />
                        <h2 class="text-h4 text-weight-bold text-capitalize q-my-none q-ml-sm text-primary">
                            Rutina de {{ seccionActual === 'brazzos' ? 'brazos' : seccionActual }}
                        </h2>
                    </div>

                    <div class="row q-col-gutter-lg">
                        <div v-for="ejercicio in ejerciciosFiltrados" :key="ejercicio.nombre"
                            class="col-12 col-sm-6 col-md-3">
                            <q-card class="my-card shadow-3" flat bordered>
                                <q-img :src="ejercicio.imagen" height="200px">
                                    <div class="absolute-bottom text-subtitle2 text-weight-bold">
                                        {{ ejercicio.nombre }}
                                    </div>
                                </q-img>

                                <q-card-section>
                                    <div class="row no-wrap items-center q-mb-sm">
                                        <q-chip color="orange-1" text-color="orange-10" icon="fitness_center" dense
                                            class="text-weight-bold">
                                            {{ ejercicio.series }}
                                            </q-chip>
                                    </div>
                                    <div class="text-body2 text-grey-7" style="min-height: 40px;">
                                        {{ ejercicio.descripcion }}
                                    </div>
                                </q-card-section>
                            </q-card>
                        </div>
                    </div>
                </div>

            </q-page>
        </q-page-container>
    </q-layout>
</template>

<script setup>
import { ref, computed } from 'vue'

// Estado para abrir/cerrar el menú hamburguesa
const leftDrawerOpen = ref(false)

// Estado para controlar qué vista se muestra ('inicio', 'piernas', 'brazzos', 'pecho', 'espalda')
const seccionActual = ref('inicio')

// Estructura del menú lateral
const gruposMusculares = [
    { id: 'piernas', label: 'piernas', icon: 'accessibility_new' },
    { id: 'brazzos', label: 'brazos', icon: 'sports_gymnastics' },
    { id: 'pecho', label: 'pecho', icon: 'sports_martial_arts' },
    { id: 'espalda', label: 'espalda', icon: 'airline_seat_recline_normal' }
]

// Banco de datos con 4 ejercicios por categoría
const bancoEjercicios = {
    piernas: [
        { nombre: 'Sentadillas con Barra', series: '4 Series x 10 Reps', descripcion: 'Ejercicio fundamental para el desarrollo completo de cuádriceps y glúteos.', imagen: 'https://cdn.quasar.dev/img/parallax2.jpg' },
        { nombre: 'Prensa de Piernas', series: '4 Series x 12 Reps', descripcion: 'Permite un trabajo aislado e intenso en las piernas minimizando la fatiga lumbar.', imagen: 'https://cdn.quasar.dev/img/mountains.jpg' },
        { nombre: 'Zancadas con Mancuernas', series: '3 Series x 12 Reps', descripcion: 'Excelente para trabajar de manera unilateral, mejorando equilibrio y fuerza.', imagen: 'https://cdn.quasar.dev/img/parallax1.jpg' },
        { nombre: 'Peso Muerto Rumano', series: '4 Series x 10 Reps', descripcion: 'Enfoque directo en la cadena posterior: femorales y glúteos.', imagen: 'https://cdn.quasar.dev/img/donkeys.jpg' }
    ],
    brazzos: [
        { nombre: 'Curl de Bíceps con Barra', series: '4 Series x 12 Reps', descripcion: 'El clásico constructor de masa y fuerza para la cara anterior del brazo.', imagen: 'https://cdn.quasar.dev/img/parallax2.jpg' },
        { nombre: 'Fondos en Paralelas', series: '3 Series x 10 Reps', descripcion: 'Excelente ejercicio compuesto enfocado en la potencia de los tríceps.', imagen: 'https://cdn.quasar.dev/img/mountains.jpg' },
        { nombre: 'Curl Martillo', series: '3 Series x 12 Reps', descripcion: 'Desarrolla el braquial y el antebrazo aportando mayor grosor.', imagen: 'https://cdn.quasar.dev/img/parallax1.jpg' },
        { nombre: 'Extensión de Tríceps en Polea', series: '4 Series x 15 Reps', descripcion: 'Aislamiento perfecto para bombear y dar forma a las tres cabezas del tríceps.', imagen: 'https://cdn.quasar.dev/img/donkeys.jpg' }
    ],
    pecho: [
        { nombre: 'Press de Banca Plano', series: '4 Series x 8 Reps', descripcion: 'El ejercicio rey para construir masa y fuerza en el pectoral mayor.', imagen: 'https://cdn.quasar.dev/img/parallax2.jpg' },
        { nombre: 'Press Inclinado con Mancuernas', series: '4 Series x 10 Reps', descripcion: 'Enfocado en la porción clavicular (pecho alto) para un aspecto estético completo.', imagen: 'https://cdn.quasar.dev/img/mountains.jpg' },
        { nombre: 'Aperturas con Mancuernas', series: '3 Series x 12 Reps', descripcion: 'Permite un estiramiento máximo de las fibras del pectoral de forma aislada.', imagen: 'https://cdn.quasar.dev/img/parallax1.jpg' },
        { nombre: 'Flexiones (Push-ups)', series: '3 Series x Al Fallo', descripcion: 'Excelente constructor con peso corporal para rematar la sesión.', imagen: 'https://cdn.quasar.dev/img/donkeys.jpg' }
    ],
    espalda: [
        { nombre: 'Dominadas (Pull-ups)', series: '4 Series x 8 Reps', descripcion: 'El mejor ejercicio de peso corporal para lograr una espalda ancha en forma de V.', imagen: 'https://cdn.quasar.dev/img/parallax2.jpg' },
        { nombre: 'Remo con Barra', series: '4 Series x 10 Reps', descripcion: 'Aporta una tremenda densidad al centro de la espalda y trapecios.', imagen: 'https://cdn.quasar.dev/img/mountains.jpg' },
        { nombre: 'Jalón al Pecho', series: '4 Series x 12 Reps', descripcion: 'Variante ideal en polea para trabajar los dorsales de forma controlada.', imagen: 'https://cdn.quasar.dev/img/parallax1.jpg' },
        { nombre: 'Remo Gironda (Polea Baja)', series: '3 Series x 12 Reps', descripcion: 'Enfoque en la parte media-baja de la espalda con contracción sostenida.', imagen: 'https://cdn.quasar.dev/img/donkeys.jpg' }
    ]
}

// Computado dinámico que filtra y retorna los 4 ejercicios según la sección elegida
const ejerciciosFiltrados = computed(() => {
    return bancoEjercicios[seccionActual.value] || []
})

// Funciones utilitarias
function toggleLeftDrawer() {
    leftDrawerOpen.value = !leftDrawerOpen.value
}

function cambiarSeccion(id) {
    seccionActual.value = id
    leftDrawerOpen.value = false // Cierra el menú en móviles automáticamente al dar click
}
</script>

<style scoped>
.my-card {
    transition: transform 0.2s ease-in-out;
    border-radius: 12px;
    overflow: hidden;
}

.my-card:hover {
    transform: translateY(-4px);
}
</style>