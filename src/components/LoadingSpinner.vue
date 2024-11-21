<script setup></script>

<template>
	<div class="flex justify-center items-center w-full h-screen bg-primary">
		<svg
			class="animate-spin h-16 w-16 text-white"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<defs>
				<linearGradient
					id="gradient1"
					x1="0%"
					x2="100%"
					y1="0%"
					y2="100%"
				>
					<stop
						offset="0%"
						stop-color="#c0908c"
					/>
					<stop
						offset="100%"
						stop-color="#c0908c"
					/>
				</linearGradient>
			</defs>
			<circle
				class="opacity-25"
				cx="12"
				cy="12"
				fill="none"
				r="10"
				stroke="url(#gradient1)"
				stroke-width="4"
			></circle>
			<path
				d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
				fill="#c0908c"
			/>
		</svg>
	</div>
</template>

<style scoped></style>
