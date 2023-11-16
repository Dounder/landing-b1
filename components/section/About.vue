<script setup lang="ts">
const schedules = [
	{ day: 'Monday', hours: '9:00 - 21:00' },
	{ day: 'Tuesday', hours: '9:00 - 21:00' },
	{ day: 'Wednesday', hours: '9:00 - 21:00' },
	{ day: 'Thursday', hours: '9:00 - 21:00' },
	{ day: 'Friday', hours: '9:00 - 21:00' },
	{ day: 'Saturday', hours: '11:00 - 16:00' },
	{ day: 'Sunday', hours: 'CLOSED' },
];
</script>

<template>
	<section class="section about">
		<section class="about-body">
			<span class="about-subtitle text">Who we are</span>
			<h4 class="about-title">About our coffee-shop</h4>
			<p class="about-text">
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
		</section>
		<figure class="about-img"><img src="/img/about.png" alt="Coffee grains" /></figure>
		<CommonLogo class="about-logo" />
	</section>
</template>

<style lang="scss" scoped>
%flex {
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
}
.about {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 6rem 4rem;
	overflow: hidden;
	position: relative;
	&-body {
		@extend %flex;
		align-items: flex-start;
		width: 40%;
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
	&-img {
		width: 25%;
		height: 30rem;
		img {
			border-radius: 0.3rem;
			box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.1);
			height: 100%;
			object-fit: cover;
			width: 100%;
		}
	}
	&-logo {
		$size: 40rem;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: $size;
		height: $size;
		opacity: 0.1;
	}
}
.schedule {
	@extend %flex;
	width: 35%;
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
