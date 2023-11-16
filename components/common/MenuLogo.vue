<script setup lang="ts">
interface Emits {
	(e: 'toggle:menu'): void;
}

const emits = defineEmits<Emits>();
</script>

<template>
	<button @click="emits('toggle:menu')" class="button">
		<svg width="40px" height="40px" viewBox="0 0 24 24" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
			<g id="Menu / Menu_Alt_01">
				<path id="Vector" d="M12 17H19M5 12H19M5 7H19" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
			</g>
		</svg>
	</button>
</template>

<style lang="scss" scoped>
.button {
	cursor: pointer;
	background-color: transparent;
	border: none;
	display: grid;
	place-items: center;
}
</style>
