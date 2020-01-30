<template>
	<v-app>
		<Menu />
		<Header />
		<v-content>
			<Carousel />
		</v-content>
		<Footer />		
	</v-app>
</template>

<script>
	import Header from './Header.vue'
	import Menu from './Menu.vue'
	import Carousel from './Carousel.vue'
	import Footer from './Footer.vue'

export default {
	components: {
		Header, Menu, Carousel, Footer
	}
}
</script>
