<template>
  <transition
    enter-active-class="transition duration-500 ease-out"
    enter-from-class="opacity-0 translate-y-10"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition duration-300 ease-in"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-10"
  >
    <div 
      v-if="showBanner" 
      class="fixed bottom-6 left-6 right-6 md:left-auto md:max-w-md bg-white border border-accent-blush rounded-2xl shadow-2xl p-5 z-40"
    >
      <div class="flex flex-col gap-3">
        <h3 class="font-display font-semibold text-slate-800 text-sm">Aviso de Privacidad y Cookies</h3>
        <p class="font-sans text-xs text-slate-600 leading-relaxed">
          Utilizamos cookies propias y de terceros para optimizar tu experiencia en el sitio. Al continuar navegando, consideramos que aceptas su uso. Consultá nuestro 
          <a href="#" @click.prevent="openPrivacy" class="text-primary font-semibold underline">Aviso de Privacidad</a>.
        </p>
        <div class="flex items-center gap-3 mt-1">
          <button 
            @click="acceptCookies" 
            class="flex-grow bg-primary text-white text-xs font-semibold py-2 px-4 rounded-lg hover:bg-primary-600 transition-colors shadow-sm"
          >
            Aceptar cookies
          </button>
          <button 
            @click="rejectCookies" 
            class="bg-slate-100 text-slate-600 text-xs font-semibold py-2 px-4 rounded-lg hover:bg-slate-200 transition-colors"
          >
            Rechazar
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const showBanner = ref(false)

const emit = defineEmits(['open-privacy'])

onMounted(() => {
  const consent = localStorage.getItem('cookie-consent')
  if (!consent) {
    // Retrasar la aparición del banner para mejorar FCP
    setTimeout(() => {
      showBanner.value = true
    }, 2000)
  }
})

const acceptCookies = () => {
  localStorage.setItem('cookie-consent', 'accepted')
  showBanner.value = false
}

const rejectCookies = () => {
  localStorage.setItem('cookie-consent', 'rejected')
  showBanner.value = false
}

const openPrivacy = () => {
  emit('open-privacy')
}
</script>
