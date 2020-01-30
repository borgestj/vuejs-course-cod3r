<template>
    <v-navigation-drawer app>
		<v-toolbar flat>
			<v-list>
				<v-list-tile>
					<v-list-tile-title class="title">
						Menu
					</v-list-tile-title>
				</v-list-tile>
			</v-list>
		</v-toolbar>
		<v-divider></v-divider>
		<app-menuitens />
	</v-navigation-drawer>
</template>

<script>
	import MenuItens from './MenuItens.vue'

export default {
    components: { 'app-menuitens': MenuItens }
}
</script>