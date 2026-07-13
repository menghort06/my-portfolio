<script setup lang="ts">
import { Mail, Linkedin, Github, MapPin, Phone, Contact } from 'lucide-vue-next';
import { personalInfo } from '../../data/home';
import { getCurrentMapLink, getMapUrl } from '@/src/composables/useMap';
import { contactList } from '@/src/data/contact';
import ButtonComponent from '../ui/ButtonComponent.vue';
import { useRouter } from 'vue-router';

const mapLink = getCurrentMapLink.value;
const mapUrl = getMapUrl;
const contacts = personalInfo.contacts;
const contactInfo = contactList;
const router = useRouter();

// Map icon names to actual components
const iconMap: { [key: string]: any } = {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Phone
};

const props = defineProps({
  isShowContact: {
    type: Boolean,
    default: true,
  },
});

const navigateTo = () => {
  router.push('/contact');
}
</script>

<template>
  <section id="contact" class="py-24 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Detail Background Element -->
    <div class="portfolio-panel">
      <div class="mb-16 sm:mb-20">
        <h2 class="text-sm font-mono tracking-widest uppercase text-emerald-500 dark:text-emerald-400 mb-2">
          Hello
        </h2>
        <div class="w-fit">
          <h3 class="text-3xl sm:text-4xl font-display font-bold tracking-tight text-zinc-900 dark:text-white">
            Contact Section
          </h3>
          <div class="w-full h-1 bg-emerald-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <!-- Contact Information -->
        <div>
          <h4 class="text-xl font-display font-bold text-zinc-900 dark:text-white mb-4 mt-6">
            {{ contactInfo.text }}
          </h4>
  
          <div class="flex flex-col gap-4 text-sm sm:text-base text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6"
            v-for="(info, index) in contactInfo.infoList"
          >
            <p > 
            {{ info.description }}
            </p>
          </div>
        </div>
      </div>
      
      <div v-if="!props.isShowContact" class="flex justify-center">
        <ButtonComponent @click="navigateTo" :label="'See More'"/>
      </div>

    </div>

    <div v-if="props.isShowContact" class="mt-12">

      <div class="w-fit">
        <h4 class="text-xl font-display font-bold text-zinc-900 dark:text-white mb-2 mt-6">
          Contact Me
        </h4>
        <div class="w-full h-0.5 bg-emerald-500 mx-auto  rounded-full"></div>
      </div>


      <div class="grid grid-cols-1 mt-8 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
        
        <!-- Quick channels left column -->
        <div class="lg:col-span-5 flex flex-col gap-6">

          <div v-for="(contact, index) in contacts">
            <a
              :href="contact.link"
              target="_blank"
              rel="noopener noreferrer"
              class="p-5 bg-zinc-50/40 dark:bg-zinc-950/40 rounded-2xl border border-zinc-100 dark:border-zinc-900 shadow-sm flex items-center gap-4 hover:border-emerald-500/30 transition-all"
            >
              <div class="w-10 h-10 rounded-xl bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center shrink-0 text-emerald-500 border border-zinc-200/50 dark:border-zinc-800/50">
                <component :is="iconMap[contact.icon]" class="w-5 h-5" />
              </div>
              <div class="overflow-hidden">
                <span class="block text-[10px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 leading-none mb-1">
                  {{ contact.title }}
                </span>
                <span class="block text-xs sm:text-sm font-semibold text-zinc-800 dark:text-zinc-200 truncate leading-none">
                  {{ contact.text }}
                </span>
              </div>
            </a>
          </div>
        </div>

        <!-- Map -->
        <div class="lg:col-span-7">
          <div class="relative h-full min-h-[22rem] sm:min-h-[24rem] lg:min-h-[30rem] overflow-hidden rounded-sm border border-zinc-200/70 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-950/40 shadow-sm backdrop-blur-sm">
            <iframe
              :src="mapUrl"
              class="w-full h-full min-h-[22rem] sm:min-h-[24rem] lg:min-h-[30rem]"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              allowfullscreen
              frameborder="0"
              title="Current location map"
            />
            <a
              :href="mapLink"
              target="_blank"
              rel="noopener noreferrer"
              class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex items-center gap-2 rounded-full border border-zinc-200 bg-white/95 px-3 py-2 shadow-lg backdrop-blur-sm transition hover:scale-105"
            >
              <div class="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                <MapPin class="h-4 w-4" />
              </div>
              <span class="text-sm font-semibold text-zinc-700">Open location</span>
            </a>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>