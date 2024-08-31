<template>
	<div>
		<MyAwesomeComponent />
	</div>
</template>

<style></style>

<script>
import MyAwesomeComponent from "../output/vue/src/MyAwesomeComponent.vue";

export default {
	name: "vue-app",
	components: { MyAwesomeComponent: MyAwesomeComponent },
	data() {
		return {};
	},
	methods: {},
};
</script>
