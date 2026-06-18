<template>
  <transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div 
      v-if="isOpen" 
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
      @click.self="close"
    >
      <div 
        class="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[85vh] flex flex-col border border-accent-blush overflow-hidden transform transition-all duration-300 scale-100"
      >
        <!-- Encabezado -->
        <div class="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <h2 class="font-display font-bold text-slate-800 text-lg">{{ title }}</h2>
          <button 
            @click="close"
            class="p-1.5 rounded-full hover:bg-slate-200 transition-colors text-slate-500 hover:text-slate-700"
            aria-label="Cerrar modal"
          >
            <X class="w-5 h-5" />
          </button>
        </div>

        <!-- Contenido -->
        <div class="p-6 overflow-y-auto font-sans text-sm text-slate-600 leading-relaxed space-y-4">
          <slot></slot>
        </div>

        <!-- Pie -->
        <div class="px-6 py-4 border-t border-slate-100 flex justify-end bg-slate-50">
          <button 
            @click="close"
            class="bg-primary text-white font-semibold py-2 px-6 rounded-lg hover:bg-primary-600 transition-colors shadow-sm"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { X } from '@lucide/vue'

defineProps({
  isOpen: {
    type: Boolean,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['close'])

const close = () => {
  emit('close')
}
</script>
