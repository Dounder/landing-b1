<script setup lang="ts">
const { isMobile } = useWindow();
const { handleTouchStart, handleTouchMove, handleTouchEnd, directionSwiped } = useSwipe();

const links = ['Home', 'About Us', 'Skills', 'Products'];
const menu = ref(false);

const toggleMenu = () => (menu.value = !menu.value);

watch(directionSwiped, (direction) => {
	if (direction === 'right') menu.value = false;
});
</script>

<template>
	<ul class="menu-items" v-if="!isMobile">
		<li class="menu-item link text" v-for="(link, index) in links" :key="index">{{ link }}</li>
	</ul>
	<template v-else>
		<CommonMenuLogo @toggle:menu="toggleMenu" />
		<article
			class="drawer"
			:class="{ show: menu }"
			@click.self="toggleMenu"
			@touchstart="handleTouchStart"
			@touchmove="handleTouchMove"
			@touchend="handleTouchEnd"
		>
			<section class="drawer-items" :class="{ show: menu }">
				<span class="drawer-item text" v-for="(link, index) in links" :key="index">{{ link }}</span>
			</section>
		</article>
	</template>
</template>

<style lang="scss" scoped>
.menu {
	&-items {
		align-items: center;
		display: flex;
		gap: 1rem;
		justify-content: space-between;
		list-style: none;
	}
	&-item {
		font-family: $body;
		font-size: clamp(0.75rem, 5vw, 1rem);
	}
}

.drawer {
	background-color: rgba(0, 0, 0, 0.5);
	height: 100%;
	opacity: 0;
	position: fixed;
	right: 0;
	top: 0;
	transition: opacity 0.3s ease-in-out;
	visibility: hidden;
	width: 100%;
	z-index: 100;
	&.show {
		opacity: 1;
		visibility: visible;
	}
	&-items {
		align-items: flex-end;
		background: $white;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		height: 100%;
		justify-content: flex-start;
		padding: 2rem;
		position: absolute;
		right: -100%;
		top: 0;
		width: min(90%, 15rem);
		&.show {
			right: 0;
		}
	}
	&-item {
		color: $black;
		cursor: pointer;
		font-family: $body;
		font-size: clamp(1rem, 5vw, 1.5rem);
	}
}
</style>
