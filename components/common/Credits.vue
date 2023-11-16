<script setup lang="ts"></script>

<template>
	<span class="credits">
		<slot />
	</span>
</template>

<style lang="scss" scoped>
.credits {
	position: absolute;
	bottom: 0.5rem;
	left: 0.5rem;
	font-size: 0.75rem;
	font-family: $body;
	color: $white;
	opacity: 0.2;
}
</style>
