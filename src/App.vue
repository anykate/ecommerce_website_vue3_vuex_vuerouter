<template>
	<router-view v-slot="{ Component }">
		<transition
			name="fade"
			mode="out-in"
		>
			<component :is="Component" />
		</transition>
	</router-view>
</template>

<script setup>
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()
</script>
