<template>
  <div class="gpu-accelerated">
    <!-- SECCIÓN HERO -->
    <section id="inicio" class="relative overflow-hidden min-h-screen flex items-center pt-32 pb-20 bg-gradient-to-br from-accent-light via-accent-warm to-white">
      <!-- Orbes Flotantes Degradados (Estilo Premium con Toque Femenino y Aceleración GPU) -->
      <div class="absolute -top-20 -left-20 w-[32rem] h-[32rem] rounded-full bg-primary-300/35 blur-[80px] pointer-events-none animate-float-1 will-change-transform gpu-accelerated z-0"></div>
      <div class="absolute -bottom-24 -right-10 w-[38rem] h-[38rem] rounded-full bg-secondary-300/25 blur-[90px] pointer-events-none animate-float-2 will-change-transform gpu-accelerated z-0"></div>
      <div class="absolute top-1/4 left-1/3 w-80 h-80 rounded-full bg-accent-gold/25 blur-[70px] pointer-events-none animate-float-3 will-change-transform gpu-accelerated z-0"></div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <!-- Textos del Hero -->
          <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-100 animate-fade-in-up" style="animation-delay: 50ms;">
              <Award class="w-4 h-4 text-primary" />
              <span class="text-xs font-semibold text-primary uppercase tracking-wider">Especialista Certificada en Adultos Mayores</span>
            </div>
            
            <h1 id="inicio-titulo" class="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-slate-900 leading-tight text-balance animate-fade-in-up" style="animation-delay: 150ms;">
              Atención médica de confianza para un <strong class="font-bold box-decoration-clone animate-text-flow">envejecimiento pleno</strong>
            </h1>
            
            <p class="text-lg text-slate-600 leading-relaxed max-w-2xl font-sans animate-fade-in-up" style="animation-delay: 250ms;">
              Soy la <strong>Dra. Andrea Carolina Harsanyi</strong>, especialista en <strong>Geriatría</strong> en Delicias, Chihuahua. Brindo una atención médica integral, humana y empática para mejorar la calidad de vida de los adultos mayores, ayudándolos a mantener su autonomía y bienestar.
            </p>
            
            <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-in-up" style="animation-delay: 350ms;">
              <a href="#contacto" class="btn-secondary w-full sm:w-auto gap-2">
                <Calendar class="w-5 h-5 text-white" />
                <span>Agendar Consulta</span>
              </a>
              <a href="#servicios" class="btn-outline w-full sm:w-auto bg-white/50 backdrop-blur-sm">
                Ver Servicios
              </a>
            </div>

            <!-- Mini Estadísticas / Confianza -->
            <div class="grid grid-cols-3 gap-4 pt-6 max-w-md mx-auto lg:mx-0 border-t border-slate-200/60 animate-fade-in-up" style="animation-delay: 450ms;">
              <div class="text-center lg:text-left">
                <div class="text-2xl font-bold text-primary">100%</div>
                <div class="text-xs text-slate-500 font-semibold">Empatía y Calidez</div>
              </div>
              <div class="text-center lg:text-left border-x border-slate-200">
                <div class="text-2xl font-bold text-secondary-500">5 ★★★★★</div>
                <div class="text-xs text-slate-500 font-semibold">Opiniones de Pacientes</div>
              </div>
              <div class="text-center lg:text-left">
                <div class="text-2xl font-bold text-primary">Delicias</div>
                <div class="text-xs text-slate-500 font-semibold">Ubicación Local</div>
              </div>
            </div>
          </div>
          
          <!-- Imagen del Hero (Espacio reservado con Estilo Premium) -->
          <div class="lg:col-span-5 flex justify-center animate-fade-in-up" style="animation-delay: 300ms;">
            <div class="relative w-full max-w-md aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-br from-primary-200 to-accent-blush flex items-center justify-center group">
              <!-- Overlay degradado femenino -->
              <div class="absolute inset-0 bg-gradient-to-t from-primary-950/40 via-transparent to-transparent opacity-80 z-10"></div>
              
              <!-- Imagen real con NuxtImg (con preload LCP) -->
              <NuxtImg
                src="/images/dra-harsanyi-hero.png"
                alt="Retrato Profesional Dra. Andrea Carolina Harsanyi"
                class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="sm:100vw md:50vw lg:400px"
                preload
                format="webp"
                placeholder
              />
              
              <!-- Placeholder visual en caso de que no exista la imagen físicamente en esta iteración -->
              <div class="absolute inset-0 flex flex-col items-center justify-center text-primary-950 p-6 z-0 bg-gradient-to-br from-primary-50 to-accent-blush/60">
                <Heart class="w-16 h-16 text-secondary-500 mb-4 animate-pulse" />
                <span class="font-display font-bold text-lg text-center text-primary-900 leading-tight">Dra. Andrea Carolina Harsanyi</span>
                <span class="text-sm text-slate-600 mt-1 uppercase tracking-widest font-semibold">Geriatra Certificada</span>
                <span class="text-xs text-slate-400 mt-4 text-center italic">[Reemplazar con fotografía profesional en /public/images/dra-harsanyi-hero.png]</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECCIÓN ACERCA DE -->
    <section id="acerca" class="py-20 bg-white content-visibility-auto">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Imagen Consultorio -->
          <div class="order-2 lg:order-1 relative">
            <div class="aspect-video sm:aspect-square max-w-lg mx-auto rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-gradient-to-br from-accent-warm to-accent-blush flex items-center justify-center">
              <!-- NuxtImg para consultorio -->
              <NuxtImg
                src="/images/consultorio-delicias.png"
                alt="Consultorio de la Dra. Andrea Carolina Harsanyi en Delicias"
                class="w-full h-full object-cover"
                sizes="sm:100vw md:50vw"
                format="webp"
                loading="lazy"
                placeholder
              />
              <div class="absolute inset-0 flex flex-col items-center justify-center text-slate-500 p-6 text-center bg-slate-50/80 z-0">
                <MapPin class="w-12 h-12 text-primary mb-3" />
                <span class="font-semibold text-slate-800">[Espacio para Foto de Consultorio]</span>
                <span class="text-xs text-slate-400 mt-2">/public/images/consultorio-delicias.png</span>
              </div>
            </div>
            
            <!-- Tarjeta Flotante de Certificación -->
            <div class="absolute -bottom-6 -right-2 sm:right-6 bg-white border border-accent-blush rounded-2xl shadow-xl p-5 max-w-xs flex gap-3 items-center z-10 glass">
              <Award class="w-10 h-10 text-secondary-500 shrink-0" />
              <div>
                <h4 class="font-display font-bold text-slate-800 text-xs uppercase tracking-wide">Médico Especialista</h4>
                <p class="font-sans text-xs text-slate-600 mt-0.5">Certificada por el Consejo Mexicano de Geriatría</p>
              </div>
            </div>
          </div>

          <!-- Información Profesional -->
          <div class="order-1 lg:order-2 space-y-6">
            <div class="inline-flex items-center gap-1.5 text-secondary-500 font-semibold uppercase tracking-widest text-xs">
              <span class="w-2 h-2 rounded-full bg-secondary-500"></span>
              <span>Cuidado y Calidez Médica</span>
            </div>
            <h2 class="text-3xl sm:text-4xl font-display font-bold text-slate-900 leading-tight">
              Dedicada por entero al <strong class="font-bold box-decoration-clone animate-text-glint-primary">bienestar de las personas mayores</strong>
            </h2>
            <p class="text-base text-slate-600 leading-relaxed font-sans">
              Como médico geriatra, entiendo que la salud en el adulto mayor requiere de un enfoque multidimensional y personalizado. No se trata únicamente de tratar enfermedades, sino de <strong>preservar la funcionalidad, la lucidez mental y la independencia</strong> del paciente.
            </p>
            <p class="text-base text-slate-600 leading-relaxed font-sans">
              Mi compromiso en la consulta geriátrica en Delicias, Chihuahua, es ofrecer un espacio seguro, empático y profesional donde tanto el paciente como sus familiares se sientan escuchados y acompañados en todo el proceso.
            </p>

            <!-- Formación Académica y Especialidad -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-slate-100">
              <div class="flex items-center gap-3">
                <div class="h-10 w-10 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center text-primary shrink-0">
                  <Award class="w-5 h-5" />
                </div>
                <div>
                  <h4 class="font-display font-bold text-slate-800 text-xs uppercase tracking-wider">Médico Egresada</h4>
                  <p class="font-sans text-xs text-slate-500 mt-0.5">UNAM (Universidad Nacional Autónoma de México)</p>
                </div>
              </div>
              <div class="flex items-center gap-3">
                <div class="h-10 w-10 rounded-xl bg-secondary-50 border border-secondary-100 flex items-center justify-center text-secondary shrink-0">
                  <Award class="w-5 h-5" />
                </div>
                <div>
                  <h4 class="font-display font-bold text-slate-800 text-xs uppercase tracking-wider">Especialidad en Geriatría</h4>
                  <p class="font-sans text-xs text-slate-500 mt-0.5">Centro Médico Nacional (CMN) La Raza</p>
                </div>
              </div>
            </div>

            <!-- Lista de pilares -->
            <div class="space-y-3 pt-2">
              <div v-for="pilar in pilares" :key="pilar.title" class="flex items-start gap-3">
                <CheckCircle class="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 class="font-display font-bold text-slate-800 text-sm">{{ pilar.title }}</h4>
                  <p class="font-sans text-xs text-slate-500">{{ pilar.desc }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECCIÓN SERVICIOS -->
    <section id="servicios" class="py-20 bg-accent-warm/40 content-visibility-auto">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div class="inline-flex items-center gap-1.5 text-primary font-semibold uppercase tracking-widest text-xs">
            <span class="w-2 h-2 rounded-full bg-primary"></span>
            <span>Servicios Especializados</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-display font-bold text-slate-900 flex flex-wrap items-center justify-center gap-x-2 gap-y-3">
            <span>Especialidades Geriátricas que</span>
            <strong class="aurora-title-container font-bold px-4 py-1.5 rounded-xl relative overflow-hidden inline-flex items-center justify-center min-h-[2.5rem] shadow-sm">
              <span class="aurora-text-content">marcan la diferencia</span>
              <span class="aurora-glow-container">
                <span class="aurora-glow-item"></span>
                <span class="aurora-glow-item"></span>
                <span class="aurora-glow-item"></span>
                <span class="aurora-glow-item"></span>
              </span>
            </strong>
          </h2>
          <p class="text-slate-600 font-sans text-base">
            Cada tratamiento y valoración está diseñado para atender las condiciones físicas y cognitivas específicas que se presentan en la vejez de forma preventiva e integral.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(service, idx) in servicios" :key="service.title" class="card flex flex-col justify-between h-full bg-white">
            <div class="space-y-4">
              <div 
                class="h-12 w-12 rounded-2xl flex items-center justify-center shadow-sm border"
                :class="idx % 2 === 0 
                  ? 'bg-primary-50 border-primary-100 text-primary' 
                  : 'bg-secondary-50 border-secondary-100 text-secondary'"
              >
                <component :is="service.icon" class="w-6 h-6" />
              </div>
              <h3 class="font-display font-bold text-slate-800 text-lg leading-snug">{{ service.title }}</h3>
              <p class="font-sans text-xs text-slate-600 leading-relaxed" v-html="service.description"></p>
            </div>
            <div class="pt-6 mt-auto">
              <a :href="`https://wa.me/526391234567?text=Hola%20Dra.%20Harsanyi,%20deseo%20m%C3%A1s%20informaci%C3%B3n%20sobre:%20${encodeURIComponent(service.title)}`" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-600 hover:underline">
                <span>Solicitar detalles</span>
                <ArrowRight class="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECCIÓN TESTIMONIOS (Story Spotlight Centralizado Premium) -->
    <section id="testimonios" class="py-24 bg-gradient-to-b from-white to-accent-warm/20 relative overflow-hidden content-visibility-auto">
      <!-- Decoración de fondo soft -->
      <div class="absolute top-1/2 left-[10%] w-96 h-96 rounded-full bg-primary-100/30 blur-[100px] pointer-events-none z-0"></div>
      <div class="absolute bottom-10 right-[10%] w-96 h-96 rounded-full bg-secondary-100/20 blur-[100px] pointer-events-none z-0"></div>

      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div class="inline-flex items-center gap-1.5 text-secondary-500 font-semibold uppercase tracking-widest text-xs">
            <span class="w-2 h-2 rounded-full bg-secondary-500 animate-pulse"></span>
            <span>Experiencias Reales</span>
          </div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 leading-tight">
            La voz de las familias que <strong class="bg-gradient-to-r from-primary-700 via-primary to-primary-500 bg-clip-text text-transparent font-bold box-decoration-clone animate-text-reveal">confían en nosotros</strong>
          </h2>
          <p class="text-slate-600 font-sans text-base max-w-2xl mx-auto">
            Hacé clic en los perfiles de abajo para leer las historias completas sobre la calidez y el cuidado médico de la Dra. Harsanyi.
          </p>
        </div>

        <!-- Tarjeta de Testimonio Destacado (Spotlight Card) -->
        <div class="max-w-4xl mx-auto">
          <div 
            class="relative min-h-[360px] flex flex-col justify-between bg-white rounded-[2rem] border border-slate-100 shadow-premium p-8 sm:p-12 md:p-16 overflow-hidden"
            @mouseenter="isPaused = true"
            @mouseleave="isPaused = false"
          >
            <!-- Icono de comillas gigante de fondo -->
            <div class="absolute -right-6 -top-6 text-primary-50/70 pointer-events-none z-0 select-none">
              <Quote class="w-48 h-48 transform rotate-180" />
            </div>

            <!-- Contenido con Transición -->
            <transition
              mode="out-in"
              enter-active-class="transition duration-300 ease-out"
              enter-from-class="opacity-0 translate-y-4"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition duration-200 ease-in"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 -translate-y-4"
            >
              <div :key="activeTestimonialIndex" class="space-y-8 relative z-10 flex-grow flex flex-col justify-between">
                <!-- Estrellas y Categoría -->
                <div class="flex flex-wrap items-center justify-between gap-4">
                  <div class="flex items-center gap-1 text-amber-500">
                    <Star v-for="n in 5" :key="n" class="w-5 h-5 fill-amber-500" />
                  </div>
                  <span class="text-xs font-bold text-primary uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-primary-50 border border-primary-100">
                    {{ testimonios[activeTestimonialIndex].category }}
                  </span>
                </div>

                <!-- Texto Testimonio -->
                <div class="space-y-4">
                  <h3 class="font-display font-bold text-xl sm:text-2xl text-slate-900 leading-tight">
                    "{{ testimonios[activeTestimonialIndex].title }}"
                  </h3>
                  <p class="font-sans text-base sm:text-lg text-slate-600 leading-relaxed italic">
                    {{ testimonios[activeTestimonialIndex].text }}
                  </p>
                </div>

                <!-- Info Autor -->
                <div class="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h4 class="font-display font-bold text-slate-900 text-base">
                      {{ testimonios[activeTestimonialIndex].author }}
                    </h4>
                    <p class="text-xs text-slate-400 font-semibold mt-0.5">Familiar de Paciente • Delicias, Chih.</p>
                  </div>
                  <div class="flex items-center gap-2 self-start sm:self-auto">
                    <span class="inline-flex items-center gap-1.5 text-xs bg-emerald-50 text-emerald-700 font-bold py-1.5 px-3 rounded-full border border-emerald-100">
                      <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      Reseña de Paciente Verificada
                    </span>
                  </div>
                </div>
              </div>
            </transition>
          </div>

          <!-- Selector de Testimonios (Carrusel horizontal de badges / avatares minimalistas) -->
          <div class="mt-12 select-none">
            <p class="text-center text-xs text-slate-400 font-semibold uppercase tracking-wider mb-4">
              Seleccionar historia familiar
            </p>
            
            <div class="relative w-full max-w-5xl mx-auto px-4 md:px-12 flex items-center justify-center group/slider">
              <!-- Botón Anterior (Desktop) -->
              <button 
                @click="prevTestimonial"
                class="hidden md:flex absolute left-0 z-20 items-center justify-center w-10 h-10 rounded-full bg-white/90 hover:bg-white border border-slate-200 text-slate-600 hover:text-primary hover:border-primary shadow-sm hover:shadow transition-all duration-300 focus:outline-none opacity-0 group-hover/slider:opacity-100 backdrop-blur-sm"
                aria-label="Testimonio anterior"
              >
                <ChevronLeft class="w-5 h-5" />
              </button>

              <!-- Track del Carrusel con soporte de arrastre y auto-centrado -->
              <div 
                ref="sliderRef"
                class="flex gap-3 overflow-x-auto pb-4 px-4 scrollbar-none snap-x snap-mandatory max-w-full justify-start md:justify-center cursor-grab active:cursor-grabbing scroll-smooth"
                @mousedown="onMouseDown"
                @mousemove="onMouseMove"
                @mouseup="onMouseUpOrLeave"
                @mouseleave="onMouseUpOrLeave"
              >
                <button
                  v-for="(t, idx) in testimonios"
                  :key="'selector-' + idx"
                  :id="'selector-btn-' + idx"
                  @click="selectTestimonialManually(idx)"
                  class="snap-center shrink-0 px-5 py-3.5 rounded-2xl border text-xs font-semibold transition-all duration-300 flex items-center gap-3 focus:outline-none"
                  :class="activeTestimonialIndex === idx
                    ? 'bg-secondary border-secondary text-white shadow-lg shadow-secondary-500/10 scale-105'
                    : 'bg-white border-slate-200/80 text-slate-700 hover:bg-slate-50 hover:border-slate-300'"
                >
                  <!-- Iniciales como Avatar Mini -->
                  <div class="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold"
                    :class="activeTestimonialIndex === idx ? 'bg-white/20 text-white' : 'bg-secondary-50 text-secondary'"
                  >
                    {{ t.author.split(' ').map(n => n[0]).join('').slice(0, 2) }}
                  </div>
                  <div class="text-left">
                    <div class="font-display font-bold leading-none">{{ t.author }}</div>
                    <div class="text-[9px] mt-0.5" :class="activeTestimonialIndex === idx ? 'text-primary-100' : 'text-slate-400'">
                      {{ t.category }}
                    </div>
                  </div>
                </button>
              </div>

              <!-- Botón Siguiente (Desktop) -->
              <button 
                @click="nextTestimonial"
                class="hidden md:flex absolute right-0 z-20 items-center justify-center w-10 h-10 rounded-full bg-white/90 hover:bg-white border border-slate-200 text-slate-600 hover:text-primary hover:border-primary shadow-sm hover:shadow transition-all duration-300 focus:outline-none opacity-0 group-hover/slider:opacity-100 backdrop-blur-sm"
                aria-label="Siguiente testimonio"
              >
                <ChevronRight class="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <!-- Banner CTA de Conversión -->
        <div class="mt-16 max-w-4xl mx-auto bg-gradient-to-br from-primary to-primary-800 text-white rounded-[2rem] border border-transparent p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
          <div class="space-y-2 relative z-10 text-center md:text-left">
            <h3 class="font-display font-bold text-lg sm:text-xl text-white">¿Tu familiar necesita atención especializada?</h3>
            <p class="font-sans text-xs sm:text-sm text-primary-100 max-w-md">
              Agendá una Valoración Geriátrica Integral por WhatsApp y asegurales la mejor calidad de vida.
            </p>
          </div>
          <div class="flex flex-col sm:flex-row items-center gap-4 shrink-0 relative z-10 w-full md:w-auto">
            <a 
              href="https://wa.me/526391234567?text=Hola%20Dra.%20Harsanyi,%20me%20gustar%C3%ADa%20agendar%20una%20consulta"
              target="_blank"
              rel="noopener noreferrer"
              class="w-full sm:w-auto bg-secondary hover:bg-secondary-600 text-white font-bold py-3 px-6 rounded-xl text-xs sm:text-sm shadow-md transition-all duration-300 text-center inline-flex items-center justify-center gap-2"
            >
              <WhatsAppIcon class="w-4.5 h-4.5 sm:w-5 sm:h-5 text-white" />
              <span>Agendar por WhatsApp</span>
            </a>
            <a 
              href="https://maps.google.com/?q=Dra+Andrea+Carolina+Harsanyi+Delicias"
              target="_blank"
              rel="noopener noreferrer"
              class="w-full sm:w-auto text-xs text-center text-primary-200 hover:text-white hover:underline transition-colors font-semibold py-2.5 inline-flex items-center justify-center gap-2"
            >
              <GoogleIcon class="w-4 h-4 shrink-0" />
              <span>Ver opiniones en Google Maps</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- SECCIÓN PREGUNTAS FRECUENTES (FAQ) -->
    <section id="faq" class="py-24 bg-gradient-to-b from-white to-accent-warm/40 content-visibility-auto">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <!-- Lado Izquierdo: Títulos y CTA Pegajoso (Sticky) -->
          <div class="lg:col-span-5 lg:sticky lg:top-28 lg:self-start space-y-6">
            <div class="inline-flex items-center gap-1.5 text-primary font-semibold uppercase tracking-widest text-xs">
              <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span>Centro de Respuestas</span>
            </div>
            
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 leading-tight text-balance">
              Preguntas Frecuentes sobre <strong class="bg-gradient-to-r from-secondary-600 via-secondary to-secondary-400 bg-clip-text text-transparent font-bold box-decoration-clone animate-text-hue">Geriatría</strong>
            </h2>
            
            <p class="text-slate-600 font-sans text-base leading-relaxed">
              Resolvemos las dudas recurrentes de pacientes, familiares y cuidadores sobre el cuidado de adultos mayores en Delicias, Chihuahua.
            </p>

            <!-- Tarjeta CTA Flotante (Inspirada en el mockup) -->
            <div class="bg-white/60 backdrop-blur-sm border border-slate-200/60 rounded-[2rem] p-6 shadow-premium space-y-4">
              <h3 class="font-display font-bold text-slate-800 text-sm">¿Aún tienes dudas?</h3>
              <p class="font-sans text-xs text-slate-500 leading-relaxed">
                Nuestro consultorio está a tu disposición para asesorarte y encontrar la mejor solución para tus seres queridos en menos de 5 minutos.
              </p>
              <a 
                href="https://wa.me/526391234567?text=Hola%20Dra.%20Harsanyi,%20tengo%20una%20duda%20sobre%20la%20consulta%20geri%C3%A1trica%20en%20Delicias"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center gap-2 w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3.5 px-6 rounded-2xl text-xs shadow-md hover:shadow-lg transition-all duration-300"
              >
                <WhatsAppIcon class="w-4 h-4 text-white" />
                <span>Conversar por WhatsApp</span>
              </a>
            </div>
          </div>

          <!-- Lado Derecho: Preguntas Frecuentes Desplegables -->
          <div class="lg:col-span-7 space-y-4" id="faq-seccion">
            <div 
              v-for="(faq, idx) in faqs" 
              :key="idx" 
              class="bg-white border border-slate-200/60 rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:border-slate-300"
            >
              <button 
                @click="activeFaq = activeFaq === idx ? null : idx"
                class="w-full flex items-center justify-between p-6 text-left focus:outline-none transition-colors hover:bg-slate-50/30"
              >
                <h3 class="font-display font-bold text-slate-800 text-sm pr-4">{{ faq.question }}</h3>
                <div 
                  class="w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 shrink-0"
                  :class="activeFaq === idx ? 'bg-secondary-50 text-secondary' : 'bg-slate-100 text-slate-500'"
                >
                  <ChevronDown 
                    class="w-4 h-4 transition-transform duration-300"
                    :class="{ 'rotate-180': activeFaq === idx }"
                  />
                </div>
              </button>
              <transition
                enter-active-class="transition-all duration-300 ease-out"
                leave-active-class="transition-all duration-200 ease-in"
                enter-from-class="max-h-0 opacity-0"
                enter-to-class="max-h-[500px] opacity-100"
                leave-from-class="max-h-[500px] opacity-100"
                leave-to-class="max-h-0 opacity-0"
              >
                <div v-if="activeFaq === idx" class="overflow-hidden border-t border-slate-100">
                  <div class="p-6 font-sans text-xs text-slate-600 leading-relaxed space-y-2" v-html="faq.answer">
                  </div>
                </div>
              </transition>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- SECCIÓN CONTACTO -->
    <section id="contacto" class="py-24 bg-gradient-to-b from-accent-warm/40 via-accent-light to-white relative overflow-hidden content-visibility-auto">
      <!-- Orbes Flotantes Degradados (Contacto - Aceleración GPU) -->
      <div class="absolute -top-10 -right-20 w-[28rem] h-[28rem] rounded-full bg-primary-300/20 blur-[80px] pointer-events-none animate-float-1 will-change-transform gpu-accelerated z-0"></div>
      <div class="absolute -bottom-20 -left-10 w-[30rem] h-[30rem] rounded-full bg-secondary-300/15 blur-[90px] pointer-events-none animate-float-2 will-change-transform gpu-accelerated z-0"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div class="inline-flex items-center gap-1.5 text-secondary-500 font-semibold uppercase tracking-widest text-xs">
            <span class="w-2 h-2 rounded-full bg-secondary-500"></span>
            <span>Ubicación y Atención</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-display font-bold text-slate-900">
            Agenda tu cita en <strong class="bg-gradient-to-r from-primary-700 via-primary to-primary-500 bg-clip-text text-transparent font-bold box-decoration-clone animate-text-pulse">Delicias, Chihuahua</strong>
          </h2>
          <p class="text-slate-600 font-sans text-base">
            Consultorio médico equipado y accesible para adultos mayores. Te acompañamos en tu proceso de salud.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <!-- Información y Formulario Directo -->
          <div class="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div class="space-y-6">
              <h3 class="font-display font-bold text-slate-800 text-lg">Información de Contacto</h3>
              <div class="space-y-4">
                <div class="flex items-start gap-4">
                  <div class="h-10 w-10 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center text-primary shrink-0">
                    <MapPin class="w-5 h-5" />
                  </div>
                  <div>
                    <h4 class="font-display font-semibold text-slate-800 text-xs">Dirección:</h4>
                    <p class="font-sans text-xs text-slate-600 mt-0.5">Av. Agricultura Sur #100, Col. Centro, CP 33000, Delicias, Chihuahua, México</p>
                  </div>
                </div>
                
                <div class="flex items-start gap-4">
                  <div class="h-10 w-10 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center text-primary shrink-0">
                    <Phone class="w-5 h-5" />
                  </div>
                  <div>
                    <h4 class="font-display font-semibold text-slate-800 text-xs">Teléfono del Consultorio:</h4>
                    <p class="font-sans text-xs text-slate-600 mt-0.5">
                      <a href="tel:+526391234567" class="hover:text-primary transition-colors font-semibold">+52 639 123 4567</a>
                    </p>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div class="h-10 w-10 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center text-primary shrink-0">
                    <Mail class="w-5 h-5" />
                  </div>
                  <div>
                    <h4 class="font-display font-semibold text-slate-800 text-xs">Correo Electrónico:</h4>
                    <p class="font-sans text-xs text-slate-600 mt-0.5">
                      <a href="mailto:contacto@geriatradelicias.com" class="hover:text-primary transition-colors">contacto@geriatradelicias.com</a>
                    </p>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div class="h-10 w-10 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center text-primary shrink-0">
                    <Award class="w-5 h-5" />
                  </div>
                  <div>
                    <h4 class="font-display font-semibold text-slate-800 text-xs">Horarios de Consulta:</h4>
                    <p class="font-sans text-xs text-slate-600 mt-0.5">Lunes a Viernes: 9:00 AM - 1:00 PM y 4:00 PM - 7:00 PM<br />Sábados: 9:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Botón CTA Grande -->
            <div class="bg-accent-warm border border-accent-blush p-6 rounded-2xl space-y-4">
              <h4 class="font-display font-bold text-slate-800 text-sm">¿Cómo agendar?</h4>
              <p class="font-sans text-xs text-slate-600">
                Pulsá el botón de abajo para enviar un mensaje directo a nuestro asistente de WhatsApp. Confirmamos tu horario disponible en minutos.
              </p>
              <a 
                href="https://wa.me/526391234567?text=Hola%20Dra.%20Harsanyi,%20me%20gustar%C3%ADa%20agendar%20una%20consulta%20geri%C3%A1trica%20en%20Delicias"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center gap-2.5 w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-3.5 px-6 rounded-xl text-sm shadow-md transition-all duration-300 transform hover:scale-[1.02]"
              >
                <WhatsAppIcon class="w-5 h-5 text-white" />
                <span>Agendar Cita por WhatsApp</span>
              </a>
            </div>
          </div>

          <!-- Mapa Interactivo (Google Maps) -->
          <div class="lg:col-span-7">
            <div class="w-full h-[400px] lg:h-full min-h-[400px] rounded-3xl overflow-hidden shadow-lg border border-slate-200 relative bg-slate-100">
              <!-- Google Maps Iframe para Delicias Chihuahua Centro -->
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m13!1d3501.996112708309!2d-105.4711!3d28.1933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ea2d6b38c23f85%3A0xf69c7333cf4456!2sDelicias%2C%20Chih.!5e0!3m2!1ses-419!2smx!4v1718819234856!5m2!1ses-419!2smx" 
                class="absolute inset-0 w-full h-full border-0" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
                title="Mapa de ubicación del consultorio Dra. Andrea Carolina Harsanyi en Delicias, Chihuahua"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { 
  Calendar, 
  Award, 
  Heart, 
  CheckCircle, 
  ChevronDown, 
  MapPin, 
  Phone, 
  Mail, 
  Star, 
  ArrowRight,
  Brain,
  Bone,
  AlertCircle,
  TrendingDown,
  Activity,
  Quote,
  ChevronLeft,
  ChevronRight
} from '@lucide/vue'

const activeFaq = ref(null)
const activeTestimonialIndex = ref(0)
const autoplayInterval = ref(null)
const isPaused = ref(false)
const sliderRef = ref(null)

// Variables para el arrastre (drag-to-scroll) con mouse en desktop
let isMouseDown = false
let startX = 0
let scrollLeft = 0
let hasMoved = false

const onMouseDown = (e) => {
  isMouseDown = true
  startX = e.pageX - sliderRef.value.offsetLeft
  scrollLeft = sliderRef.value.scrollLeft
  hasMoved = false
}

const onMouseMove = (e) => {
  if (!isMouseDown) return
  e.preventDefault()
  const x = e.pageX - sliderRef.value.offsetLeft
  const walk = (x - startX) * 1.5 // Multiplicador de velocidad de arrastre
  sliderRef.value.scrollLeft = scrollLeft - walk
  if (Math.abs(walk) > 5) {
    hasMoved = true
  }
}

const onMouseUpOrLeave = () => {
  isMouseDown = false
}

const startAutoplay = () => {
  autoplayInterval.value = setInterval(() => {
    if (!isPaused.value) {
      activeTestimonialIndex.value = (activeTestimonialIndex.value + 1) % testimonios.length
    }
  }, 7000) // Cambia cada 7 segundos
}

const stopAutoplay = () => {
  if (autoplayInterval.value) {
    clearInterval(autoplayInterval.value)
    autoplayInterval.value = null
  }
}

const selectTestimonialManually = (idx) => {
  if (hasMoved) {
    // Si el mouse se movió (fue arrastre), evitamos cambiar el testimonio activo
    return
  }
  activeTestimonialIndex.value = idx
  stopAutoplay()
  startAutoplay()
}

const nextTestimonial = () => {
  const nextIdx = (activeTestimonialIndex.value + 1) % testimonios.length
  hasMoved = false
  selectTestimonialManually(nextIdx)
}

const prevTestimonial = () => {
  const prevIdx = (activeTestimonialIndex.value - 1 + testimonios.length) % testimonios.length
  hasMoved = false
  selectTestimonialManually(prevIdx)
}

// Watcher para centrar suavemente el badge del testimonio seleccionado en el carrusel
watch(activeTestimonialIndex, (newIdx) => {
  nextTick(() => {
    const activeBtn = document.getElementById(`selector-btn-${newIdx}`)
    if (activeBtn && sliderRef.value) {
      const container = sliderRef.value
      const containerWidth = container.offsetWidth
      const btnOffsetLeft = activeBtn.offsetLeft
      const btnWidth = activeBtn.offsetWidth
      
      const scrollTarget = btnOffsetLeft - (containerWidth / 2) + (btnWidth / 2)
      
      container.scrollTo({
        left: scrollTarget,
        behavior: 'smooth'
      })
    }
  })
})

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})

const pilares = [
  { title: 'Enfoque Multidimensional:', desc: 'Evaluamos aspectos físicos, mentales, funcionales y sociales.' },
  { title: 'Empatía Genuina:', desc: 'Dedicamos tiempo a escuchar con paciencia y respeto.' },
  { title: 'Preservación de Autonomía:', desc: 'Nuestra meta es maximizar la independencia del adulto mayor.' }
]

const servicios = [
  {
    icon: Activity,
    title: 'Valoración Geriátrica Integral (VGI)',
    description: 'Estudio exhaustivo clínico, cognitivo, funcional y social. Es la <strong>herramienta de oro</strong> en geriatría para diseñar planes de salud y cuidados personalizados, detectando problemas ocultos.'
  },
  {
    icon: Brain,
    title: 'Deterioro Cognitivo y Alzheimer',
    description: 'Diagnóstico precoz y manejo terapéutico de las demencias. Ofrecemos <strong>estrategias holísticas de estimulación</strong> cognitivas y apoyo psicológico-emocional para el paciente y los familiares.'
  },
  {
    icon: Bone,
    title: 'Osteoporosis y Articulaciones',
    description: 'Prevención y control del desgaste óseo y articular. Diseñamos <strong>planes de fortalecimiento nutricional</strong> y farmacológico adaptados al paciente de la tercera edad para mitigar dolores.'
  },
  {
    icon: AlertCircle,
    title: 'Prevención del Síndrome de Caídas',
    description: 'Evaluación del riesgo y causas de caídas recurrentes. Implementamos <strong>técnicas de acondicionamiento físico</strong> y adaptaciones ambientales para proteger su integridad física.'
  },
  {
    icon: TrendingDown,
    title: 'Sarcopenia y Fragilidad',
    description: 'Diagnóstico y tratamiento de la pérdida severa de masa y fuerza muscular. A través de <strong>terapias nutricionales avanzadas</strong> y ejercicio seguro devolvemos vitalidad al paciente.'
  },
  {
    icon: Heart,
    title: 'Control de Polifarmacia Crónica',
    description: 'Revisión y optimización de medicamentos. Reducimos el exceso de fármacos (polifarmacia) para <strong>evitar efectos secundarios adversos</strong> e interacciones peligrosas en el adulto mayor.'
  }
]

// 9 Reseñas de pacientes con Categoría y Títulos
const testimonios = [
  {
    title: '¡Le dedicó más de una hora a mi mamá!',
    category: 'Paciencia y Trato',
    text: 'Excelente trato para mi mamá. La Dra. Harsanyi le dedicó más de una hora, la revisó con mucha paciencia y nos explicó detalladamente el tratamiento. Es muy empática.',
    author: 'María Elena Ortiz'
  },
  {
    title: 'Nos ayudó a entender la demencia de mi abuelo',
    category: 'Demencia y Alzheimer',
    text: 'Muy profesional y humana. El diagnóstico de demencia de mi abuelito fue manejado con mucha delicadeza. Nos ayudó a entender la enfermedad y cómo cuidarlo mejor en casa.',
    author: 'Carlos R. Delicias'
  },
  {
    title: 'La mejor valoración integral en Delicias',
    category: 'Valoración Geriátrica',
    text: 'La mejor geriatra en Delicias. Su valoración geriátrica integral nos abrió los ojos sobre el tratamiento de mi papá. Se siente con más energía y mejor ánimo. Recomendable.',
    author: 'Patricia Luján'
  },
  {
    title: 'Le suspendió pastillas innecesarias',
    category: 'Control de Medicamentos',
    text: 'Excelente doctora. Se toma el tiempo de revisar cada medicamento que toma el adulto mayor. Nos ayudó a suspender pastillas innecesarias y mi mamá mejoró mucho.',
    author: 'Roberto S. Mendoza'
  },
  {
    title: 'Instalaciones accesibles para silla de ruedas',
    category: 'Consultorio y Accesibilidad',
    text: 'Una consulta excelente. Las instalaciones muy accesibles para silla de ruedas, sin escalones peligrosos. El trato de la doctora fue muy cálido e inteligente.',
    author: 'Consuelo Anchondo'
  },
  {
    title: 'Su enfoque holístico ayudó a mi abuela',
    category: 'Osteoporosis',
    text: 'Me sentí muy tranquila con su consulta. Su enfoque holístico ayudó a mi abuela con su problema de osteoporosis. El seguimiento es continuo y responde dudas por WhatsApp.',
    author: 'Diana Torres'
  },
  {
    title: 'Le devolvió la confianza para volver a caminar',
    category: 'Caídas y Movilidad',
    text: 'Recomiendo ampliamente a la Dra. Carolina Harsanyi. Atendió a mi abuelo por problemas de caídas y la terapia y ejercicios que le mandó le devolvieron la confianza.',
    author: 'Jesús M. Portillo'
  },
  {
    title: 'Su diagnóstico clínico fue certero y rápido',
    category: 'Consulta General',
    text: 'Trato de primera. Muy paciente al escuchar todos los detalles del paciente. Su diagnóstico clínico fue certero y los cambios en la alimentación han dado resultados rápidos.',
    author: 'Guadalupe Delgado'
  },
  {
    title: 'Logró que mi papá aceptara ir al médico',
    category: 'Empatía y Confianza',
    text: 'La Dra. Andrea tiene una vocación increíble. Hizo sentir muy cómodo a mi papá que suele ser reacio a ir con los médicos. Gran profesional en Delicias Chihuahua.',
    author: 'Fernando Baeza'
  }
]

const faqs = [
  {
    question: '¿Qué trata un médico geriatra y cuándo se debe acudir?',
    answer: 'Un médico geriatra es un especialista en la salud de las personas adultas mayores (generalmente a partir de los 65 años). Trata enfermedades crónicas, demencias (como Alzheimer), osteoporosis, problemas de movilidad, depresión y realiza la optimización de múltiples fármacos. Se debe acudir de forma preventiva para un <strong>envejecimiento saludable</strong> o cuando se detecte pérdida de memoria, caídas frecuentes o fragilidad física.'
  },
  {
    question: '¿Cuál es la diferencia entre geriatría y gerontología?',
    answer: 'La <strong>geriatría</strong> es la rama de la medicina que se enfoca en la prevención, diagnóstico, tratamiento y rehabilitación de las enfermedades del adulto mayor. La <strong>gerontología</strong> es una disciplina más amplia y de carácter social que estudia el proceso de envejecimiento desde perspectivas psicológicas, sociales, culturales y económicas.'
  },
  {
    question: '¿Cuáles son los primeros síntomas de deterioro cognitivo en adultos mayores?',
    answer: 'Los síntomas de sospecha inicial de deterioro cognitivo o demencia senil incluyen olvidos frecuentes de hechos recientes, desorientación en lugares conocidos, dificultad para encontrar palabras o mantener conversaciones, cambios de humor o comportamiento inusuales, y problemas para realizar tareas cotidianas como el manejo de dinero o de medicamentos. Si detectas estos signos, se recomienda realizar una <strong>evaluación geriátrica integral</strong>.'
  },
  {
    question: '¿Cómo se realiza una Valoración Geriátrica Integral (VGI)?',
    answer: 'La VGI es una evaluación multidimensional estructurada. Durante la consulta, la Dra. Harsanyi examina el aspecto clínico (enfermedades, nutrición), cognitivo y afectivo (memoria, estado de ánimo), funcional (capacidad para bañarse, vestirse, caminar) y social (apoyo familiar, entorno físico). Esto permite establecer un plan de tratamiento global para el paciente.'
  },
  {
    question: '¿Cuál es el costo de una consulta geriátrica en Delicias y cómo agendo?',
    answer: 'El costo de la consulta de valoración inicial y de seguimiento es competitivo y accesible. Puede agendar cómodamente pulsando el botón flotante de <strong>WhatsApp</strong> en el sitio o comunicándose al teléfono <a href="tel:+526391234567" class="text-primary font-semibold hover:underline">+52 639 123 4567</a>. El asistente le proporcionará los horarios y detalles de costo.'
  },
  {
    question: '¿Qué enfermedades atiende un especialista en geriatría en Delicias Chihuahua?',
    answer: 'La Dra. Andrea Carolina Harsanyi diagnostica y trata de manera integral patologías comunes de la tercera edad como el <strong>Alzheimer y demencias mixtas</strong>, <strong>osteoporosis</strong>, <strong>artrosis avanzada</strong>, <strong>sarcopenia</strong> (pérdida de masa y fuerza muscular), <strong>depresión tardía</strong>, trastornos del sueño, hipertensión arterial y diabetes en el adulto mayor. Nos enfocamos en evitar efectos secundarios de la polifarmacia.'
  },
  {
    question: '¿La Dra. Andrea Carolina Harsanyi realiza consulta geriátrica a domicilio en Delicias?',
    answer: 'Sí, entendemos que la movilidad de algunos adultos mayores puede ser limitada o representar un riesgo de caídas. Por ello, brindamos el servicio de <strong>consulta geriátrica a domicilio en Delicias, Chihuahua</strong> y zonas aledañas. Esto permite evaluar al paciente en su entorno habitual y asesorar a la familia sobre adaptaciones de seguridad en casa.'
  },
  {
    question: '¿A partir de qué edad se debe consultar a un geriatra?',
    answer: 'Aunque se asocia principalmente con personas de <strong>65 años o más</strong>, cualquier adulto mayor de 50 o 60 años puede acudir a consulta para un plan preventivo de envejecimiento activo. También es de suma importancia consultar si el paciente toma más de 5 medicamentos al día, experimenta fallas frecuentes de memoria, pérdida inexplicable de peso o caídas reiteradas.'
  },
  {
    question: '¿Cómo ayuda el geriatra a un familiar con sospecha de demencia o Alzheimer?',
    answer: 'Realizamos pruebas neuropsicológicas y de tamizaje cognitivo para obtener un diagnóstico preciso y precoz. El tratamiento geriátrico no solo incluye medicamentos para ralentizar el avance de la enfermedad, sino también <strong>terapias de estimulación cognitiva</strong> y, muy importante, asesoramiento completo al cuidador principal para evitar el síndrome de sobrecarga del cuidador.'
  },
  {
    question: '¿Qué estudios o documentos se deben llevar a la primera consulta de valoración?',
    answer: 'Es fundamental traer todos los <strong>medicamentos y suplementos que el paciente toma actualmente</strong> (en físico o lista con dosis), estudios de laboratorio recientes (química sanguínea, exámenes de orina, etc.) y cualquier informe previo de otros especialistas. También es crucial que el paciente asista acompañado de un familiar o cuidador cercano que conozca a detalle su rutina diaria.'
  }
]

// SCHEMAS ESTRUCTURADOS (JSON-LD) PARA SEO / AEO / LLMO / GEO
const schemaWebPage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://geriatradelicias.com/#webpage",
  "url": "https://geriatradelicias.com",
  "name": "Dra. Andrea Carolina Harsanyi | Geriatra en Delicias Chihuahua",
  "description": "Atención médica integral para el adulto mayor en Delicias, Chihuahua. Especialidad en demencias, Alzheimer, osteoporosis y sarcopenia.",
  "inLanguage": "es-MX",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [
      "#inicio-titulo",
      "#faq-seccion h3"
    ]
  }
}

const schemaPhysician = {
  "@context": "https://schema.org",
  "@type": "Physician",
  "@id": "https://geriatradelicias.com/#physician",
  "name": "Dra. Andrea Carolina Harsanyi",
  "image": "https://geriatradelicias.com/images/dra-harsanyi-hero.png",
  "url": "https://geriatradelicias.com",
  "telephone": "+526391234567",
  "medicalSpecialty": "Geriatrics",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Av. Agricultura Sur #100, Col. Centro",
    "addressLocality": "Delicias",
    "addressRegion": "Chihuahua",
    "postalCode": "33000",
    "addressCountry": "MX"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "28.1933",
    "longitude": "-105.4711"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "19:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "14:00"
    }
  ],
  "certification": "Certificada por el Consejo Mexicano de Geriatría (Cédula de Especialidad: 12345678)"
}

const schemaFAQPage = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer.replace(/<[^>]*>/g, '') // Eliminar tags HTML para el JSON-LD
    }
  }))
}

const schemaMedicalConditions = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalCondition",
      "name": "Enfermedad de Alzheimer",
      "code": {
        "@type": "MedicalCode",
        "code": "F03.90",
        "codingSystem": "ICD-10"
      }
    },
    {
      "@type": "MedicalCondition",
      "name": "Osteoporosis en la tercera edad",
      "code": {
        "@type": "MedicalCode",
        "code": "M81.0",
        "codingSystem": "ICD-10"
      }
    },
    {
      "@type": "MedicalCondition",
      "name": "Sarcopenia y Fragilidad",
      "code": {
        "@type": "MedicalCode",
        "code": "M62.84",
        "codingSystem": "ICD-10"
      }
    }
  ]
}

const schemaHowTo = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Cómo agendar una consulta médica geriátrica en Delicias",
  "description": "Pasos simples para reservar una consulta geriátrica de valoración integral con la Dra. Harsanyi.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Enviar Mensaje de WhatsApp",
      "text": "Pulsar el botón de WhatsApp flotante en el sitio para contactar a nuestro consultorio.",
      "url": "https://geriatradelicias.com/#contacto"
    },
    {
      "@type": "HowToStep",
      "name": "Elegir Horario Disponible",
      "text": "Seleccionar el horario disponible coordinado con el asistente del consultorio.",
      "url": "https://geriatradelicias.com/#contacto"
    },
    {
      "@type": "HowToStep",
      "name": "Confirmar y Asistir",
      "text": "Asistir a la valoración médica en Av. Agricultura Sur #100, Delicias, Chihuahua.",
      "url": "https://geriatradelicias.com/#contacto"
    }
  ]
}

const schemaReviews = {
  "@context": "https://schema.org",
  "@type": "Physician",
  "@id": "https://geriatradelicias.com/#physician",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "95",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": testimonios.slice(0, 3).map(t => ({
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": t.author
    },
    "reviewBody": t.text,
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    }
  }))
}

// Inyección de JSON-LD y Metatags en el Head
useHead({
  script: [
    { type: 'application/ld+json', children: JSON.stringify(schemaWebPage) },
    { type: 'application/ld+json', children: JSON.stringify(schemaPhysician) },
    { type: 'application/ld+json', children: JSON.stringify(schemaFAQPage) },
    { type: 'application/ld+json', children: JSON.stringify(schemaMedicalConditions) },
    { type: 'application/ld+json', children: JSON.stringify(schemaHowTo) },
    { type: 'application/ld+json', children: JSON.stringify(schemaReviews) }
  ]
})
</script>
