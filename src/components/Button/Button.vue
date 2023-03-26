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
			button.value.classList.add('bg-light-blue');
			button.value.classList.remove('bg-blue');

			loading.value = false;
			finished.value = true;
			// 4. Start callback passed from parent component 
			setTimeout(() => props.callback(), 750);
		} catch (err: any) {

			button.value.classList.add('bg-light-red');
			button.value.classList.remove('bg-blue');

			error.value = '❌';
			
			// After 1000 sec we hide error
			setTimeout(() => {
				// button.value.classList.add('bg-blue');
				button.value.classList.add('bg-blue');
				button.value.classList.remove('bg-light-red');
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
		<transition mode="out-in" name="fadeIn">
			<span v-if="!loading && !error && !finished">
				<slot></slot>
			</span>
		</transition>
		<!-- Loading Circle Animation -->
		<transition mode="out-in" name="fadeIn">
			<div v-if="loading && !error" class="loading">
				<span>
					<svg class="i-default" width="135"	height="140" viewBox="0 0 135 140" xmlns="http://www.w3.org/2000/svg" fill="#fff">
						<rect 			  y="10"	width="15" 	height="120" rx="6">	<animate attributeName="height"	begin="0.5s" 	dur="1s"	values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear"	repeatCount="indefinite" /> <animate attributeName="y"	begin="0.5s" 	dur="1s"	values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"	repeatCount="indefinite"/> </rect> 
						<rect x="30"	y="10" 	width="15" 	height="120" rx="6"> 	<animate attributeName="height"	begin="0.25s" dur="1s"	values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear"	repeatCount="indefinite" /> <animate attributeName="y"	begin="0.25s" dur="1s"	values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"	repeatCount="indefinite"/> </rect>
						<rect x="60" 				 	width="15" 	height="140" rx="6"> 	<animate attributeName="height"	begin="0s" 		dur="1s"	values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear"	repeatCount="indefinite" /> <animate attributeName="y"	begin="0s" 		dur="1s"	values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"	repeatCount="indefinite"/> </rect>
						<rect x="90"	y="10"	width="15" 	height="120" rx="6"> 	<animate attributeName="height"	begin="0.25s" dur="1s"	values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear"	repeatCount="indefinite" /> <animate attributeName="y"	begin="0.25s" dur="1s"	values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"	repeatCount="indefinite"/> </rect>
						<rect x="120" y="10" 	width="15" 	height="120" rx="6"> 	<animate attributeName="height"	begin="0.5s" 	dur="1s"	values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear"	repeatCount="indefinite" /> <animate attributeName="y"	begin="0.5s" 	dur="1s"	values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"	repeatCount="indefinite"/> </rect> 
					</svg>
				</span>
			</div>
		</transition>
		<!-- Checkmark if finished -->
		<transition mode="out-in" name="fadeIn">
			<div v-if="finished" class="h4 loading">
				<span class="t-white">✔</span>
			</div>
		</transition>
		<!-- Error if not finished -->
		<transition mode="out-in" name="fadeIn">
			<div v-if="error" class="error">
				<span>{{ error }}</span>
			</div>
		</transition>
		
	</button> 
</template>

<style lang="scss">
	button[disabled] {background: grey; &:hover {background: grey; } }

	.button {
		display: flex;
		width: fit-content;

		padding: 1rem 1.75rem;
		border-radius: 3rem;
		// background-color: #00ff88;

		transform: scale(1);
		opacity: 1;

		align-items: center;
		justify-content: center;
		
		color: black;
		text-align: center;
		text-transform: uppercase;
		font-size: 1rem;
		font-weight: 500;
		letter-spacing: 5%;

		transition: all 0.33s ease;
	 
		&:hover {
			// background: var(--second);

			opacity: 1;

			color: var(--white);
			
			cursor: pointer;
		}

		&:active {
			transform: scale(0.95);
		}

		&-small {
			padding: 0.5rem 0.75rem;
			border-radius: 0.5rem;
			height: fit-content;
		}

		&-square {
			height: 2.5rem;
			width: 2.5rem;

			padding: 1rem;
			border-radius: 0.5rem;
			font-size: 1.125rem;
		}

		&-close-popup {
			position: absolute;

			right: 0;
			top: 0;

			width: 3rem;
			height: 3rem;

			background: transparent;

			padding: 0;

			border-radius: 0;

			img {
				width: 33%;
			}
		}

		&-delete {
			&:hover {
				background: red;
			}
		}

		&-grey {
			color: var(--dark);
			background-color: #F7F7F7;
		}

		&-sort {
			height: 2.5rem;

			padding: 0.5rem 1.25rem;

			text-transform: none;
			font-size: 1rem;
			color: var(--dark);
			background-color: #F7F7F7;
		}

		&-active {
			background: #00ff88;
			color: white;
			&:hover {
				background: #00ff88;
				color: rgba(255,255,255,0.75);

			}
		}

		

		
		&-filter {
			height: 2.5rem;

			padding: 0;
			border-radius: 0.5rem;
			font-size: 1.125rem;

			color: var(--dark);
			background: white;
		}

		&-disabled {
			color: rgba(0,0,0,0.5);

			&:hover {
				color: rgba(0,0,0,0.5);
			}
			&:active {
				pointer-events: none;
				transform: scale(1,1);
			}
		}
		&-active {
			background: #00ff88;
			color: white;
			&:hover {
				background: #00ff88;
				color: rgba(255,255,255,0.75);

			}
		}
		&-reset-filter {
			width: 100%;
			text-transform: uppecase;
			height: 3.75rem;

			background: transparent;
			color: #00ff88;

			border-top: 1px solid rgba(0,0,0,0.1);
			border-bottom: 1px solid rgba(0,0,0,0.1);
			&:hover {
				background: #00ff88;
				color: rgba(255,255,255,0.75);

			}
		}
		
		&-icon {
			height: 1rem; width: 1rem; background: transparent; img { width: 100%; height: 100%}
			background: transparent;
			box-shadow: none;
			border-radius: 0;
			padding: 0;

			&:hover {
				cursor: pointer;
			}
		}	
		
		
		&-link      {
			color: rgba(0, 0, 0, 0.5);
			font-size: 1.125rem;
			display: flex;
			align-items: center;
			font-weight: 600;

			&-blue {color: #2495FF;}
			
			&-black{color: rgba(0, 0, 0, 0.5);}
			
			&-cream {color: #DBADAA; text-align: left; font-weight: 600; letter-spacing: 0;}
			
		}

		&-otr-link {
			display: inline-flex;
			margin-top: 0.25rem;
			align-items: center;
			color: #000;

			img { margin-right: 0.5rem;}
		}
		
		&-cart {
			display: inline-flex;
			color: #000;
			height: 3rem;
			width: 3rem;
			font-weight: 700;
			width: fit-content;
			font-size: 1.5rem;
			color: #00ff88;
			background: #FAF7F3;
			text-transform: none;
			padding: 0.75rem 1rem;
			border-radius: 4rem;

			&:hover {
				background: #00ff88;
				color: white;
				opacity: 1;

				cursor: pointer;
			}
		}

		&-cart-big {
			display: inline-flex;
			color: #000;
			font-weight: 700;
			width: fit-content;
			background: #FFE500;
			text-transform: none;
			font-size: 2rme;
			padding: 1.5rem 2rem;
			border-radius: 2rem;
		}

		&-blog {
			padding: 0.75rem 1rem;
			background-color: #2495FF;
			color: #fff;
			border-radius: 0.375rem;
			font-size: 1.125rem;
			text-transform: uppercase;
			width: fit-content;
		}

		&-nav-footer{
			color: #000;
			font-size: 0.875rem;
			font-weight: 700; display: flex;
			align-items: center;
				svg {margin-right: 0.5rem;}}

		&-inst {
			background: radial-gradient(179.06% 43.44% at -16.75% 7.2%, #3771C8 0%, #3771C8 12.8%, rgba(102, 0, 255, 0) 100%),
			radial-gradient(92.18% 99.11% at 26.56% 107.7%, #FFDD55 0%, #FFDD55 10%, #FF543E 50%, #C837AB 100%);
			color: white;
			font-size: 1.125rem;
			font-weight: 700;
			text-transform: uppercase;
			padding: 0.75rem 0.75rem;
			border-radius: 0.5625rem;
			display: flex;
			align-items: center;
			justify-content: center;
			width: fit-content;
			box-shadow: 4px 4px 24px -12px rgba(201, 163, 163, 0.5);
			img {margin-right: 0.5rem}
		}
	}
</style>