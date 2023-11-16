<script setup lang="ts">
interface Props {
	type?: 'button' | 'submit' | 'reset';
	disabled?: boolean;
	onClick?: () => void;
	color?: 'primary' | 'secondary' | 'accent' | 'danger' | 'warning' | 'success';
}

const props = withDefaults(defineProps<Props>(), {
	type: 'button',
	disabled: false,
	onClick: () => {},
	color: 'primary',
});

const { type, disabled, onClick, color } = toRefs(props);
</script>

<template>
	<button :class="['button', 'text', color]" :type="type" :disabled="disabled" @click="onClick">
		<slot />
	</button>
</template>

<style lang="scss" scoped>
.button {
	border-radius: 0.1rem;
	padding: 0.5rem 2rem;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	&:hover {
		background: darken($primary, 10%);
	}
}
</style>
