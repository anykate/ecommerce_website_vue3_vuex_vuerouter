<script setup>
import { ref } from 'vue'
import { Vue3Marquee } from 'vue3-marquee'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const props = defineProps({
	url: {
		type: String,
		required: true,
	},
})
const images = ref([`${props.url}pic1.jpg`, `${props.url}pic2.jpg`, `${props.url}pic3.jpg`, `${props.url}pic4.jpg`])

const news = ref([
	'Stainless Steel Accessories',
	'925 Sliver Jewelry',
	'Gold Plated Bracelets',
	'Elegance at your fingertips !',
	'Sparkle and Style',
])
</script>

<template>
	<section class="relative w-full bg-secondary">
		<div
			class="w-full lg:px-16 md:px-12 px-6 mx-auto relative"
			data-aos="zoom-in"
		>
			<div class="grid lg:grid-cols-2 relative pt-24 mx-auto">
				<div class="md:mt-5 relative">
					<h1
						class="text-balance text-5xl/[0.9] font-medium tracking-tight text-black sm:text-8xl/[0.8] md:text-[5.5rem]/[0.9]"
					>
						Let us make you shine !
						<img
							:src="`${url}gif.gif`"
							alt="shining"
							class="w-[32%] inline-block -ml-10 align-middle"
						/>
					</h1>
					<button
						class="mt-4 w-full md:w-48 bg-secondary p-4 font-bold border border-b-4 border-black rounded-3xl hover:text-primary"
					>
						Shop Now
					</button>
				</div>
				<div class="lg:h-full w-[90%] md:w-full mt-20 md:mt-0">
					<Carousel
						:autoplay="2000"
						:height="450"
						:pause-autoplay-on-hover="true"
						:wrap-around="true"
					>
						<Slide
							v-for="(image, index) in images"
							:key="index"
						>
							<img
								:src="image"
								alt="jewelry image"
								class="glowing-border carousel__image w-[800px] h-[450px] rounded-3xl"
							/>
						</Slide>
						<template #addons>
							<Navigation />
						</template>
					</Carousel>
				</div>
			</div>
		</div>

		<!--Marquee section-->
		<div class="outer-running-about mt-10 bg-secondary2">
			<div class="running-text max-w-full">
				<Vue3Marquee>
					<span
						v-for="(word, index) in news"
						:key="index"
						class="head-7 font-playfair"
					>
						{{ word }}
						<span class="svg w-embed inline-block align-middle">
							<img
								alt="sparkle"
								src="https://raw.githubusercontent.com/anykate/ecommerce_website_vue3_vuex_vuerouter/assets/sparkle.svg"
							/>
						</span>
					</span>
				</Vue3Marquee>
			</div>
		</div>
	</section>
</template>

<style scoped>
.glowing-border {
	border-radius: 10px;
	border: 2px solid transparent;
	box-shadow:
		0 0 15px rgba(255, 255, 255, 0.6),
		0 0 25px rgba(255, 255, 255, 0.4);
	transition: box-shadow 0.3s ease-in-out;
}

.glowing-border:hover {
	box-shadow:
		0 0 15px rgba(255, 255, 255, 0.8),
		0 0 25px rgba(255, 255, 255, 0.6);
}

.outer-running-about {
	z-index: 1;
	width: 100.5%;
	grid-column-gap: 0;
	grid-row-gap: 0;
	display: flex;
	position: relative;
	left: -0.5rem;
	transform: translate(0, -10%);
}

.head-7 {
	letter-spacing: -1px;
	font-size: 2rem;
	font-weight: 500;
	line-height: 120%;
	color: white;
}
</style>
