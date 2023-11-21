<script setup lang="ts">
const { isMobile } = useWindow();
const schedules = [
	{ day: 'Monday - Friday', hours: '9:00 - 17:00' },
	{ day: 'Saturday', hours: '9:00 - 21:00' },
	{ day: 'Sunday', hours: 'CLOSED' },
];
</script>

<template>
	<section class="section about">
		<section class="headline">
			<span class="headline-subtitle text">Who we are</span>
			<h4 class="headline-title">About our coffee-shop</h4>
			<p class="headline-text">
				At CoffeeShop, we're passionate about delivering an unparalleled coffee experience. From sourcing the finest beans to crafting the perfect
				roast, our mission is to bring you exceptional quality and flavor in every cup. Our team's dedication to the art of coffee ensures a journey
				of rich aromas and delightful tastes with every sip. Welcome to the heart of exceptional coffee brewing
			</p>
		</section>
		<section class="schedule">
			<h4 class="schedule-title">Opening hours</h4>
			<ul class="schedule-list">
				<li v-for="schedule in schedules" :key="schedule.day" class="schedule-item text">
					<span class="schedule-day">{{ schedule.day }}: </span>
					<span class="schedule-hours">{{ schedule.hours }}</span>
				</li>
			</ul>
			<CommonLogo class="about-logo" />
		</section>
	</section>
</template>

<style lang="scss" scoped>
.about {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 6rem 4rem;
	gap: 1rem;
	overflow: hidden;
	flex-wrap: wrap;
	background: transparent;
	@media screen and (max-width: 768px) {
		padding: 2rem 1rem;
	}
	&-logo {
		$size: 10rem;
		position: absolute;
		top: 50%;
		right: 1rem;
		transform: translateY(-50%);
		width: $size;
		height: $size;
		z-index: -1;
		@media screen and (max-width: 900px) {
			opacity: 0.1;
			right: 0;
		}
	}
}
.headline {
	width: 60%;
	@media screen and (max-width: 900px) {
		width: 100%;
	}
	&-subtitle {
		opacity: 0.8;
	}
	&-title {
		margin-bottom: 1rem;
		font-size: clamp(1.5rem, 5vw, 2rem);
	}
	&-text {
		opacity: 0.7;
	}
}
.schedule {
	position: relative;
	flex: 1;
	&-title {
		font-size: clamp(1rem, 5vw, 1.5rem);
		margin-bottom: 0.5rem;
	}
	&-list {
		list-style: none;
		padding: 0;
		margin: 0;
	}
	&-item {
		margin-bottom: 0.5rem;
	}
	&-day {
		font-weight: 700;
		color: $accent;
	}
}
</style>
