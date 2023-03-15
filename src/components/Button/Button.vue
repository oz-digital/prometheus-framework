<script setup lang="ts">
	import { ref } from 'vue'
	
	// Define props types
	interface Props {
		submit?: () => Promise<void>,
		callback?: () => Promise<void>,
		validation?: boolean,
	}
	// Our default values for props
	const props = withDefaults(defineProps<Props>(), {
		submit: console.log('button click'),
		callback: console.log('button callback'),
		validation: false,
	});
	
	// Ref to Button in DOM
	const button = ref<HTMLElement | null>(null);
	// Button state
	const error = ref<string | null>(null);
	const loading = ref<boolean | null>(null);
	const finished = ref<boolean | null>(null);

	// On click function
	function Submit() {
		// Hide slot and show loading animation
		button.value!.style['pointer-events'] = 'none';
		error.value = null;
		loading.value = true;

		// After finishing submit function passed from parent component 
		// we start to change button state to show finish check mark or error
		props.submit().then(
			() => {
				// Hide loader and show finish checkmark
				button.value!.style['background-color'] = '#0088ff';
				loading.value = false;
				finished.value = true;
				// Start callback passed from parent component 
				setTimeout(() => props.callback(), 750);
			},
			err => {
				error.value = err.toString();

				// After 1000 sec we hide error
				setTimeout(() => {
					button.value!.style.pointerEvents = 'auto';
					loading.value = false;
					finished.value = false;
					error.value = null;
				}, 1000);
			}
		);
	}
</script>

<template>
	<button @click="Submit" :disabled="validation" ref="button" class="w-100 t-white bg-blue button">
		<!-- Slot -->
		<transition mode="out-in" name="scale">
			<slot v-if="!loading && !error && !finished"></slot>
		</transition>
		<!-- Loading Circle Animation -->
		<transition mode="out-in" name="scale">
			<div v-if="loading && !error" class="loading">
				<svg class="i-default" width="135"	height="140" viewBox="0 0 135 140" xmlns="http://www.w3.org/2000/svg" fill="#fff">
					<rect 			  y="10"	width="15" 	height="120" rx="6">	<animate attributeName="height"	begin="0.5s" 	dur="1s"	values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear"	repeatCount="indefinite" /> <animate attributeName="y"	begin="0.5s" 	dur="1s"	values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"	repeatCount="indefinite"/> </rect> 
					<rect x="30"	y="10" 	width="15" 	height="120" rx="6"> 	<animate attributeName="height"	begin="0.25s" dur="1s"	values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear"	repeatCount="indefinite" /> <animate attributeName="y"	begin="0.25s" dur="1s"	values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"	repeatCount="indefinite"/> </rect>
					<rect x="60" 				 	width="15" 	height="140" rx="6"> 	<animate attributeName="height"	begin="0s" 		dur="1s"	values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear"	repeatCount="indefinite" /> <animate attributeName="y"	begin="0s" 		dur="1s"	values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"	repeatCount="indefinite"/> </rect>
					<rect x="90"	y="10"	width="15" 	height="120" rx="6"> 	<animate attributeName="height"	begin="0.25s" dur="1s"	values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear"	repeatCount="indefinite" /> <animate attributeName="y"	begin="0.25s" dur="1s"	values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"	repeatCount="indefinite"/> </rect>
					<rect x="120" y="10" 	width="15" 	height="120" rx="6"> 	<animate attributeName="height"	begin="0.5s" 	dur="1s"	values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear"	repeatCount="indefinite" /> <animate attributeName="y"	begin="0.5s" 	dur="1s"	values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"	repeatCount="indefinite"/> </rect> 
				</svg>
			</div>
		</transition>
		<!-- Checkmark if finished -->
		<transition mode="out-in" name="scale">
			<div v-if="finished" class="h4 loading">
				<span class="t-white">✔</span>
			</div>
		</transition>
		<!-- Error if not finished -->
		<div v-if="error" class="error">
			{{ error }}
		</div>
		
	</button> 
</template>

<style lang="scss">
</style>


