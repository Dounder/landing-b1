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
				<h1 class="hero-title title">Coffe Shop</h1>
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
@media screen and (min-width: 320px) {
	.hero {
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: transparent;
		&-body {
			text-shadow: 0 0 5px rgba($black, 1);
			width: 100%;
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
		&-column {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 100%;
			text-align: center;
		}
		&-title {
			font-size: clamp(2rem, 5vw, 5rem);
		}
		&-text {
			font-size: clamp(1rem, 5vw, 1.5rem);
			margin-top: 0.5rem;
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
				object-position: 70% 0%;
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
}

@media screen and (min-width: 768px) {
	.hero {
		&-title {
			font-size: clamp(3rem, 5vw, 5rem);
		}
	}
}
</style>
