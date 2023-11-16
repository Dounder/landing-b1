<script setup lang="ts"></script>

<template>
	<main class="section hero">
		<figure class="hero-bg">
			<article class="hero-bg_foreground"></article>
			<img src="/img/hero.jpg" alt="woman holding mug of cappuccino" />
		</figure>
		<CommonNavbar />
		<section class="hero-body">
			<section class="hero-column">
				<h1 class="hero-title">Coffe Shop</h1>
				<p class="hero-text text">Experience Pure Perfection: Discover Our Finest Coffee Grains</p>
				<section class="hero-buttons">
					<CommonButton color="secondary">View products</CommonButton>
					<CommonButton>About shop</CommonButton>
				</section>
			</section>
		</section>
		<CommonCredits>Photo by Porapak Apichodilok: https://www.pexels.com/photo/woman-holding-mug-of-cappuccino-373639/</CommonCredits>
	</main>
</template>

<style lang="scss" scoped>
.hero {
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	background: transparent;
	text-shadow: 0 0 5px rgba($black, 1);
	&-body {
		width: 100%;
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
	}
	&-column {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		width: 50%;
		height: 100%;
	}
	&-title {
		font-size: clamp(2rem, 5vw, 4rem);
		font-family: $title;
	}
	&-headline {
		font-size: 1.5rem;
		font-family: $body;
	}
	&-buttons {
		display: flex;
		gap: 1rem;
		margin-top: 2rem;
	}
	&-bg {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
		z-index: -1;
		box-shadow: inset 0 0 300px 300px rgba($black, 1);
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
		&_foreground {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: radial-gradient(circle, rgba($black, 0) 0%, rgba(#000, 1) 100%);
		}
	}
}
</style>
