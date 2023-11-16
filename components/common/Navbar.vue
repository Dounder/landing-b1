<script setup lang="ts">
const { isMobile } = useWindow();

const toggleMenu = () => {
	console.log('toggle menu');
};
</script>

<template>
	<header>
		<nav class="nav">
			<h1 class="nav-title title">
				<CommonLogo />
				Coffee Shop
			</h1>
			<CommonMenu />
		</nav>
	</header>
</template>

<style lang="scss" scoped>
header {
	width: 100%;
}
.nav {
	align-items: center;
	display: flex;
	justify-content: space-between;
	width: 100%;
	&-title {
		font-size: clamp(1rem, 5vw, 3rem);
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}
}
</style>
