<template>
  <header class="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <nav class="glass rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 shadow-premium border border-white/30 backdrop-blur-md">
      <!-- Logotipo -->
      <a href="#inicio" class="flex items-center gap-2 group">
        <div class="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-105 transition-transform duration-300">
          AH
        </div>
        <div class="flex flex-col">
          <span class="font-display font-bold text-primary text-base leading-tight">Dra. Andrea Harsanyi</span>
          <span class="font-sans text-xs text-secondary-500 uppercase tracking-widest leading-none font-semibold">Geriatra</span>
        </div>
      </a>

      <!-- Navegación Escritorio -->
      <div class="hidden md:flex items-center gap-6">
        <a 
          v-for="link in navLinks" 
          :key="link.href" 
          :href="link.href" 
          class="font-sans text-sm font-medium text-slate-700 hover:text-primary transition-colors duration-200"
        >
          {{ link.label }}
        </a>
      </div>

      <!-- Botón de WhatsApp Escritorio -->
      <div class="hidden md:block">
        <a 
          href="https://wa.me/526391234567?text=Hola%20Dra.%20Harsanyi,%20me%20gustar%C3%ADa%20agendar%20una%20consulta"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 bg-primary text-white hover:bg-primary-600 px-5 py-2.5 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.03]"
        >
          <WhatsAppIcon class="w-4 h-4 text-white" />
          <span>Agendar Cita</span>
        </a>
      </div>

      <!-- Botón Menú Móvil -->
      <button 
        @click="isOpen = !isOpen"
        class="md:hidden p-2 rounded-full hover:bg-slate-100 transition-colors"
        aria-label="Abrir menú de navegación"
      >
        <Menu v-if="!isOpen" class="w-6 h-6 text-slate-700" />
        <X v-else class="w-6 h-6 text-slate-700" />
      </button>
    </nav>

    <!-- Menú Móvil Desplegable -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 translate-y-2 scale-95"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 translate-y-2 scale-95"
    >
      <div 
        v-if="isOpen" 
        class="mt-2 mx-2 bg-white/95 backdrop-blur-md border border-slate-200 rounded-3xl shadow-xl p-6 flex flex-col gap-4 md:hidden"
      >
        <a 
          v-for="link in navLinks" 
          :key="link.href" 
          :href="link.href" 
          @click="isOpen = false"
          class="font-sans text-base font-semibold text-slate-800 hover:text-primary transition-colors py-2 border-b border-slate-100 last:border-b-0"
        >
          {{ link.label }}
        </a>
        <a 
          href="https://wa.me/526391234567?text=Hola%20Dra.%20Harsanyi,%20me%20gustar%C3%ADa%20agendar%20una%20consulta"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center gap-2 bg-primary text-white hover:bg-primary-600 py-3 rounded-full text-base font-semibold shadow-md transition-all duration-300 w-full mt-2"
        >
          <WhatsAppIcon class="w-5 h-5 text-white" />
          <span>Agendar Cita</span>
        </a>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { Menu, X } from '@lucide/vue'

const isOpen = ref(false)

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Acerca de', href: '#acerca' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Preguntas Frecuentes', href: '#faq' },
  { label: 'Contacto', href: '#contacto' }
]
</script>
