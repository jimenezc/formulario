<script>
	import EvaluationForm from '../../components/EvaluationForm.svelte';
	import Info from '../../components/Info.svelte';
	import { dimension1, dimension2, dimension3, dimension4, dimension5 } from './formQuestions';
	import { getAIRecomendations } from './aiRecomendations';
	import SvelteMarkdown from 'svelte-markdown';
	import { onMount } from 'svelte';
	let html2pdf;

	onMount(async () => {
		const module = await import('html2pdf.js');
		html2pdf = module.default;
	});

	let formPage = $state(0);
	let aiResult = $state(``);

	let enterpriseInfo = $state({
		name: '',
		employNumber: '',
		yearsActive: '',
		isExporting: '',
		isCertified: '',
		sector: ''
	});

	let aiInputText = $state({
		dimension1: '',
		dimension2: '',
		dimension3: '',
		dimension4: '',
		dimension5: ''
	});

	let average = $state({
		dimension1: 0,
		dimension2: 0,
		dimension3: 0,
		dimension4: 0,
		dimension5: 0
	});

	function previewPage() {
		formPage -= 1;
	}

	function nextPage() {
		formPage += 1;
	}

	function getAIInput() {
		let generalInfo = `Información general de la empresa.Nombre de la empresa:${enterpriseInfo.name}. 
		Tamaño (número de empleados):${enterpriseInfo.employNumber}.
		Años de operación:${enterpriseInfo.yearsActive}.
		¿Exporta actualmente? (Sí / No):${enterpriseInfo.isExporting}.
		¿Cuenta con certificaciones en RSE o sostenibilidad? (Sí / No / ¿Cuáles?):${enterpriseInfo.isCertified}.
		Sector a que pertenece la empresa.:${enterpriseInfo.sector}.`;

		let aiMessages = `Esta en una evaluación medir el grado de madurez de las prácticas de Responsabilidad Social Empresarial de las empresas de diversos sectores y como mejorar. Cuando des la respuesta no agregues una introduccion ni una conclusion y en formato MARKDOWN. No debes incluir markdown en la respuesta
			${generalInfo}
			${aiInputText.dimension1}
			${aiInputText.dimension2}
			${aiInputText.dimension3}
			${aiInputText.dimension4}
			${aiInputText.dimension5}`;

		let messages = [
			{ role: 'system', content: '' },
			{
				role: 'user',
				content: aiMessages
			}
		];
		return messages;
	}

	async function sendForm() {
		aiResult = await getAIRecomendations(getAIInput());
		nextPage();
	}

	function downloadPDF() {
		const options = {
			filename: 'documento.pdf',
			margin: 1,
			image: { type: 'jpeg', quality: 0.98 },
			html2canvas: { scale: 2 },
			jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
		};
		const element = document.getElementById('pdf-download'); // ID of the HTML element to convert

		html2pdf().set(options).from(element).save();
	}
</script>

{#if formPage == 0}
	<Info bind:enterpriseInfo {nextPage} />
{:else if formPage == 1}
	<EvaluationForm
		questions={dimension1.questions}
		dimensionTitle={dimension1.title}
		bind:aiInputText={aiInputText.dimension1}
		bind:level={average.dimension1}
		buttonA={{ text: 'Anterior', buttonFunc: previewPage }}
		buttonB={{ text: 'Siguiente', buttonFunc: nextPage }}
	/>
{:else if formPage == 2}
	<EvaluationForm
		questions={dimension2.questions}
		dimensionTitle={dimension2.title}
		bind:aiInputText={aiInputText.dimension2}
		bind:level={average.dimension2}
		buttonA={{ text: 'Anterior', buttonFunc: previewPage }}
		buttonB={{ text: 'Siguiente', buttonFunc: nextPage }}
	/>
{:else if formPage == 3}
	<EvaluationForm
		questions={dimension3.questions}
		dimensionTitle={dimension3.title}
		bind:aiInputText={aiInputText.dimension3}
		bind:level={average.dimension3}
		buttonA={{ text: 'Anterior', buttonFunc: previewPage }}
		buttonB={{ text: 'Siguiente', buttonFunc: nextPage }}
	/>
{:else if formPage == 4}
	<EvaluationForm
		questions={dimension4.questions}
		dimensionTitle={dimension4.title}
		bind:aiInputText={aiInputText.dimension4}
		bind:level={average.dimension4}
		buttonA={{ text: 'Anterior', buttonFunc: previewPage }}
		buttonB={{ text: 'Siguiente', buttonFunc: nextPage }}
	/>
{:else if formPage == 5}
	<EvaluationForm
		questions={dimension5.questions}
		dimensionTitle={dimension5.title}
		bind:aiInputText={aiInputText.dimension5}
		bind:level={average.dimension5}
		buttonA={{ text: 'Anterior', buttonFunc: previewPage }}
		buttonB={{ text: 'Enviar', buttonFunc: sendForm }}
	/>
{:else if formPage == 6}
	{#if aiResult}
		<div class="h-full w-full">
			<div class="mx-auto mt-12 w-full max-w-md space-y-4">
				<div id="pdf-download" class="my-2 text-black">
					<div>
						<h3 class="font-semibold">{enterpriseInfo.name}</h3>
						<h4 class="font-medium">Resultados por dimensión</h4>
						<h4>{dimension1.title.slice(0, -1)}: {average.dimension1}%</h4>
						<h4>{dimension2.title.slice(0, -1)}: {average.dimension2}%</h4>
						<h4>{dimension3.title.slice(0, -1)}: {average.dimension3}%</h4>
						<h4>{dimension4.title.slice(0, -1)}: {average.dimension4}%</h4>
						<h4>{dimension5.title.slice(0, -1)}: {average.dimension5}%</h4>
					</div>
					<p class="mt-2 font-medium">Recomendaciones</p>
					<SvelteMarkdown source={aiResult} />
				</div>
				<button
					class="inline-flex w-full items-center justify-center rounded-lg border border-gray-200 px-5 py-3 text-center text-sm font-medium text-gray-900 hover:bg-purple-700 hover:text-white focus:ring-4 focus:ring-gray-100 sm:w-auto"
					onclick={downloadPDF}>Descargar PDF</button
				>
			</div>
		</div>
	{/if}
{/if}
