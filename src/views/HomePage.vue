<script setup>
import { defineAsyncComponent } from 'vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'

const url = 'https://raw.githubusercontent.com/anykate/ecommerce_website_vue3_vuex_vuerouter/assets/'

//components lazy loading
const NavBar = defineAsyncComponent(() => import('@/components/NavBar.vue'))
const HeroSection = defineAsyncComponent(() => import('@/components/HeroSection.vue'))
const CollectionComponent = defineAsyncComponent(() => import('@/components/CollectionComponent.vue'))
const ExclusiveSection = defineAsyncComponent(() => import('@/components/ExclusiveSection.vue'))
const BestSellers = defineAsyncComponent(() => import('@/components/BestSellers.vue'))
const OurLocation = defineAsyncComponent(() => import('@/components/OurLocation.vue'))
const BestGifts = defineAsyncComponent(() => import('@/components/BestGifts.vue'))
const ContactSection = defineAsyncComponent(() => import('@/components/ContactSection.vue'))
const FooterComponent = defineAsyncComponent(() => import('@/components/FooterComponent.vue'))
const BackToTop = defineAsyncComponent(() => import('@/components/BackToTop.vue'))
</script>

<template>
	<div class="min-h-screen">
		<Suspense>
			<template #default>
				<div class="font-playfair">
					<NavBar :url="url" />
					<HeroSection :url="url" />
					<CollectionComponent />
					<ExclusiveSection />
					<BestSellers />
					<OurLocation />
					<BestGifts />
					<ContactSection />
					<FooterComponent />
					<BackToTop />
				</div>
			</template>
			<template #fallback>
				<div class="flex justify-center items-center min-h-screen">
					<LoadingSpinner />
				</div>
			</template>
		</Suspense>
	</div>
</template>
