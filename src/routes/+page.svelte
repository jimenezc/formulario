<script>
	import hero from '../images/hero.png';
</script>

<section class="bg-white">
	<div
		class="mx-auto grid max-w-screen-xl px-4 pt-20 pb-8 lg:grid-cols-12 lg:gap-8 lg:py-16 lg:pt-28 xl:gap-0"
	>
		<div class="mr-auto place-self-center lg:col-span-7">
			<h1
				class="mb-4 max-w-2xl text-4xl leading-none font-extrabold tracking-tight md:text-5xl xl:text-6xl"
			>
				Responsabilidad Social Empresarial.
			</h1>
			<p class="mb-6 max-w-2xl font-light text-gray-500 md:text-lg lg:mb-8 lg:text-xl">
				Evaluar el grado de madurez de las prácticas de Responsabilidad Social Empresarial, su
				impacto en la competitividad exportadora y como mejorar basado en Inteligencia Artificial.
			</p>
			<div class="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
				<a
					href="/evaluar"
					class="inline-flex w-full items-center justify-center rounded-lg border border-gray-200 px-5 py-3 text-center text-sm font-medium text-gray-900 hover:bg-purple-700 hover:text-white focus:ring-4 focus:ring-gray-100 sm:w-auto"
					>Evaluar
				</a>
			</div>
		</div>
		<div class="hidden lg:col-span-5 lg:mt-0 lg:flex">
			<img src={hero} alt="hero" />
		</div>
	</div>
</section>
