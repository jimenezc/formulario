<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { Navigation } from '@skeletonlabs/skeleton-svelte';
	import logo from '../images/logo.svg';
	

	let { children } = $props();
	let value = $state('home');
	let menuSelected = $state('1');

	//
	function selectMenu(event) {
		menuSelected = event.srcElement.id;
	}
</script>

<svelte:head>
	<link rel="icon" href={logo} />
</svelte:head>

<div class="grid h-screen grid-rows-[auto_1fr_auto] text-black">
	<!-- Header -->
	<header class="fixed w-full bg-white text-black">
		<nav class="border-gray-200 bg-white py-2.5">
			<!-- dark:bg-gray-900 -->
			<div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between px-4">
				<a href="/" class="flex items-center">
					<img src={logo} class="mr-3 h-6 sm:h-9" alt="Landwind Logo" />
					<span class="self-center text-xl font-semibold whitespace-nowrap">RSE</span
					><!-- dark:text-white -->
				</a>
				<div class="flex items-center lg:order-2">
					<button
						data-collapse-toggle="mobile-menu-2"
						type="button"
						class="ml-1 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 focus:outline-none lg:hidden"
						aria-controls="mobile-menu-2"
						aria-expanded="false"
						><!-- dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 -->
						<span class="sr-only">Open main menu</span>
						<svg
							class="h-6 w-6"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
								clip-rule="evenodd"
							></path>
						</svg>
						<svg
							class="hidden h-6 w-6"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
								clip-rule="evenodd"
							></path>
						</svg>
					</button>
				</div>
				<div
					class="hidden w-full items-center justify-between lg:order-1 lg:flex lg:w-auto"
					id="mobile-menu-2"
				>
					<ul class="mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8">
						<li>
							<a
								id="1"
								onclick={selectMenu}
								href="/"
								class="{'block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 lg:border-0 lg:p-0 lg:hover:bg-transparent lg:hover:text-purple-700'} {menuSelected ==
								'1'
									? 'text-purple-700'
									: 'text-gray-700'}"
								aria-current="page">Inicio</a
							><!-- dark:text-white -->
						</li>
						<li>
							<a
								id="2"
								onclick={selectMenu}
								href="/evaluar"
								class="{'block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 lg:border-0 lg:p-0 lg:hover:bg-transparent lg:hover:text-purple-700'} {menuSelected ==
								'2'
									? 'text-purple-700'
									: 'text-gray-700'}">Evaluar</a
							><!-- dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent lg:dark:hover:text-white -->
						</li>
						<li>
							<a
								id="3"
								onclick={selectMenu}
								href="/informacion"
								class="{'block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 lg:border-0 lg:p-0 lg:hover:bg-transparent lg:hover:text-purple-700'} {menuSelected ==
								'3'
									? 'text-purple-700'
									: 'text-gray-700'}">Información</a
							><!-- dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent lg:dark:hover:text-white -->
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</header>
	<!-- Main -->
	<main class="h-full w-full space-y-4 bg-white p-4">
		{@render children()}
		<!-- <p class="h-[512px] bg-white p-4">Paragraph 2</p>
		<p class="h-[512px] bg-white p-4">Paragraph 3</p> -->
	</main>
	<!-- Footer -->
	<!-- <footer class="bg-blue-500 p-4">(footer)</footer> -->
</div>
<!-- {@render children()} -->
