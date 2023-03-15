<script setup lang="ts">
	import { ref, Ref, defineProps, withDefaults } from 'vue'
	
	// Define props types
	export interface Props {
		submit?: () => Promise<any>,
		callback?: () => Promise<any>,
		validation?: boolean,
	}
	// Our default values for props
	const props = withDefaults(defineProps<Props>(), {
		submit: async () => { console.log('Button click.') },
		callback: async () => { console.log('Button callback.') },
		validation: false,
	});
	
	// Ref to Button in DOM
	const button: Ref<any> = ref(null);
	// Button state
	const error: Ref<string | null> = ref(null);
	const loading: Ref<boolean> = ref(false);
	const finished: Ref<boolean> = ref(false);

	// On click function

	async function Submit() {
		// 1. Hide slot and show loading animation
		button.value.style['pointer-events'] = 'none';
		error.value = null;
		loading.value = true;

		// 2. After finishing submit function passed from parent component 
		//    we start to change button state to show finish check mark or error
		try {
			await props.submit();
			// 3. Hide loader and show finish checkmark
			button.value.style['background-color'] = '#0088ff';
			loading.value = false;
			finished.value = true;
			// 4. Start callback passed from parent component 
			setTimeout(() => props.callback(), 750);
		} catch (error: any) {
			error.value = error.toString();

			// After 1000 sec we hide error
			setTimeout(() => {
				button.value.style.pointerEvents = 'auto';
				loading.value = false;
				finished.value = false;
				error.value = null;
			}, 1000);
		}
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


