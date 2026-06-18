<template>
  <div class="min-h-screen flex flex-col bg-accent-light">
    <!-- Navbar Flotante -->
    <Navbar />

    <!-- Contenido Principal -->
    <main class="flex-grow">
      <slot />
    </main>

    <!-- Footer Corporativo -->
    <footer class="bg-slate-900 text-slate-300 font-sans border-t border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <!-- Columna 1: Branding -->
          <div class="space-y-4">
            <div class="flex items-center gap-2">
              <div class="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">
                AH
              </div>
              <div class="flex flex-col">
                <span class="font-display font-bold text-white text-base leading-tight">Dra. Andrea Harsanyi</span>
                <span class="text-xs text-primary-400 uppercase tracking-widest font-semibold">Geriatra</span>
              </div>
            </div>
            <p class="text-sm text-slate-400 leading-relaxed">
              Atención médica gerontológica especializada, empática y con enfoque holístico para asegurar un envejecimiento pleno, saludable y digno en Delicias, Chihuahua.
            </p>
          </div>

          <!-- Columna 2: Enlaces Rápidos -->
          <div>
            <h3 class="font-display font-bold text-white text-sm uppercase tracking-wider mb-4">Navegación</h3>
            <ul class="space-y-2.5 text-sm">
              <li>
                <a href="#inicio" class="hover:text-primary-400 transition-colors">Inicio</a>
              </li>
              <li>
                <a href="#acerca" class="hover:text-primary-400 transition-colors">Acerca de mí</a>
              </li>
              <li>
                <a href="#servicios" class="hover:text-primary-400 transition-colors">Servicios Geriátricos</a>
              </li>
              <li>
                <a href="#testimonios" class="hover:text-primary-400 transition-colors">Testimonios</a>
              </li>
              <li>
                <a href="#faq" class="hover:text-primary-400 transition-colors">Preguntas Frecuentes</a>
              </li>
              <li>
                <a href="#contacto" class="hover:text-primary-400 transition-colors">Ubicación y Contacto</a>
              </li>
            </ul>
          </div>

          <!-- Columna 3: Especialidades -->
          <div>
            <h3 class="font-display font-bold text-white text-sm uppercase tracking-wider mb-4">Servicios Clave</h3>
            <ul class="space-y-2.5 text-sm text-slate-400">
              <li>Valoración Geriátrica Integral</li>
              <li>Diagnóstico de Demencia y Alzheimer</li>
              <li>Prevención y Control de Osteoporosis</li>
              <li>Manejo del Síndrome de Caídas</li>
              <li>Tratamiento de Sarcopenia</li>
              <li>Control de Enfermedades Crónicas</li>
            </ul>
          </div>

          <!-- Columna 4: Contacto Rápido -->
          <div class="space-y-3">
            <h3 class="font-display font-bold text-white text-sm uppercase tracking-wider mb-4">Contacto</h3>
            <p class="text-sm text-slate-400 flex items-start gap-2">
              <MapPin class="w-5 h-5 text-secondary-500 shrink-0 mt-0.5" />
              <span>Av. Agricultura Sur #100, Col. Centro, CP 33000, Delicias, Chihuahua, México</span>
            </p>
            <p class="text-sm text-slate-400 flex items-center gap-2">
              <Phone class="w-5 h-5 text-secondary-500 shrink-0" />
              <a href="tel:+526391234567" class="hover:text-primary-400 transition-colors">+52 639 123 4567</a>
            </p>
            <p class="text-sm text-slate-400 flex items-center gap-2">
              <Mail class="w-5 h-5 text-secondary-500 shrink-0" />
              <a href="mailto:contacto@geriatradelicias.com" class="hover:text-primary-400 transition-colors">contacto@geriatradelicias.com</a>
            </p>
          </div>
        </div>

        <hr class="border-slate-800 my-8" />

        <div class="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; {{ new Date().getFullYear() }} Dra. Andrea Carolina Harsanyi. Todos los derechos reservados.</p>
          <div class="flex gap-4">
            <a href="#" @click.prevent="isPrivacyOpen = true" class="hover:text-slate-400 underline">Aviso de Privacidad</a>
            <a href="#" @click.prevent="isTermsOpen = true" class="hover:text-slate-400 underline">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>

    <!-- Botón de WhatsApp Flotante -->
    <WhatsAppCTA />

    <!-- Banner de Consentimiento de Cookies -->
    <CookieBanner @open-privacy="isPrivacyOpen = true" />

    <!-- Modal de Aviso de Privacidad -->
    <LegalModal :is-open="isPrivacyOpen" title="Aviso de Privacidad" @close="isPrivacyOpen = false">
      <div class="space-y-4">
        <p class="font-semibold text-slate-800">Responsable de la protección de sus datos personales:</p>
        <p>
          La Dra. Andrea Carolina Harsanyi, con domicilio en Av. Agricultura Sur #100, Col. Centro, Delicias, Chihuahua, México, es responsable de recabar sus datos personales, del uso que se le dé a los mismos y de su protección en estricto cumplimiento con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares de México.
        </p>
        <p class="font-semibold text-slate-800">Finalidades del tratamiento de sus datos:</p>
        <p>
          Sus datos personales serán utilizados para fines relacionados exclusivamente con su atención médica gerontológica, incluyendo la creación de su expediente clínico, el agendamiento de citas, el contacto para seguimiento médico, la facturación de servicios y la comunicación de información relevante de salud.
        </p>
        <p class="font-semibold text-slate-800">Datos personales que recabamos:</p>
        <p>
          Recabamos información de identificación (nombre completo, edad, teléfono, correo electrónico), datos de contacto y datos sensibles sobre su estado de salud (historial médico, antecedentes familiares, tratamientos actuales y diagnósticos previos) necesarios para su correcta valoración geriátrica.
        </p>
        <p class="font-semibold text-slate-800">Derechos ARCO:</p>
        <p>
          Usted tiene derecho a acceder, rectificar, cancelar u oponerse al tratamiento de sus datos personales. Para ejercer estos derechos, podrá enviar una solicitud formal por escrito al correo electrónico <span class="text-primary">contacto@geriatradelicias.com</span> indicando detalladamente el derecho que desea ejercer.
        </p>
      </div>
    </LegalModal>

    <!-- Modal de Términos y Condiciones -->
    <LegalModal :is-open="isTermsOpen" title="Términos y Condiciones" @close="isTermsOpen = false">
      <div class="space-y-4">
        <p>
          Bienvenido al sitio web oficial de la Dra. Andrea Carolina Harsanyi (https://geriatradelicias.com). Al navegar y utilizar este sitio, usted acepta los siguientes términos y condiciones de uso.
        </p>
        <p class="font-semibold text-slate-800">Naturaleza de la Información:</p>
        <p>
          El contenido de este sitio web tiene carácter estrictamente informativo y educativo. En ningún momento sustituye la consulta, diagnóstico o tratamiento médico personalizado por parte de un profesional de la salud. Siempre consulte directamente a su geriatra certificado ante cualquier síntoma.
        </p>
        <p class="font-semibold text-slate-800">Agendamiento de Citas:</p>
        <p>
          El uso de los enlaces de WhatsApp u otros canales de contacto son para facilitar la consulta de horarios y el agendamiento preliminar de citas. El registro final de la cita estará sujeto a confirmación directa de nuestro consultorio médico.
        </p>
        <p class="font-semibold text-slate-800">Propiedad Intelectual:</p>
        <p>
          Todos los textos, logotipos, diseños y contenidos multimedia presentes en este sitio son propiedad de la Dra. Andrea Carolina Harsanyi o se utilizan bajo licencia. Queda estrictamente prohibida su reproducción parcial o total sin autorización previa y por escrito.
        </p>
        <p class="font-semibold text-slate-800">Modificaciones:</p>
        <p>
          Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento y sin previo aviso. Le recomendamos revisar esta sección periódicamente.
        </p>
      </div>
    </LegalModal>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { MapPin, Phone, Mail } from '@lucide/vue'
import Navbar from '~/components/Navbar.vue'
import WhatsAppCTA from '~/components/WhatsAppCTA.vue'
import CookieBanner from '~/components/CookieBanner.vue'
import LegalModal from '~/components/LegalModal.vue'

const isPrivacyOpen = ref(false)
const isTermsOpen = ref(false)
</script>
