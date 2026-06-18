<template>
  <div class="fixed bottom-6 right-6 z-40">
    <a 
      href="https://wa.me/526391234567?text=Hola%20Dra.%20Harsanyi,%20me%20gustar%C3%ADa%20agendar%20una%20consulta"
      target="_blank"
      rel="noopener noreferrer"
      class="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#20ba5a] transition-all duration-300 transform hover:scale-110 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-[#25D366]/30 relative"
      aria-label="Contactar por WhatsApp"
    >
      <!-- Animación de pulso concéntrico -->
      <span class="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping opacity-75 group-hover:animate-none"></span>
      
      <!-- Icono de WhatsApp oficial -->
      <WhatsAppIcon class="w-7 h-7 relative z-10 filter drop-shadow-sm" />
      
      <!-- Tooltip en hover (solo escritorio) -->
      <span class="absolute right-16 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-md hidden md:block">
        ¿Necesitas ayuda? Escríbenos
      </span>
    </a>
  </div>
</template>

<script setup>
// WhatsAppIcon se auto-importa automáticamente en Nuxt
</script>
