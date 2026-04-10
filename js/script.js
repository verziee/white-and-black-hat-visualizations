// White Hat vs Black Hat: Substantiation Rate Over Time
// White Hat: Shows full 2010-2020 data with honest scale, transparent methodology
// Black Hat: Cherry-picks recent years and narrow axes to exaggerate small changes

const dataPath = "data/allegations_202007271729.csv";

const scenarioDescriptions = {
	trend: 'White hat shows the full 2010–2020 substantiation trend. Black hat hides older years and narrows the axis to exaggerate a subtle change.',
	topOfficers: 'White hat highlights officers with the most substantiated complaints. Black hat highlights officers with the most total complaints and uses a misleading truncated axis.'
};

const panelCopies = {
	trend: {
		white: 'Substantiation rate is the percentage of complaints determined to be valid after investigation. This chart shows the full 2010–2020 trend without hiding any years.',
		black: 'This chart selects only the most recent years and zooms into a narrow 66–76% range. That makes a subtle decline look dramatic and encourages the viewer to think lower substantiation is clearly better.'
	},
	topOfficers: {
		white: 'This chart shows officers with the highest number of substantiated complaints, using a full axis starting at zero.',
		black: 'This chart shows officers with the most total complaints, using a truncated axis to exaggerate differences and hide substantiated rates.'
	}
};

const chartTitles = {
	trend: {
		white: 'Department-wide NYPD Officer Complaint Substantiation Trend',
		black: 'Substantiated NYPD Officer Complaints Significantly Decreasing'
	},
	topOfficers: {
		white: 'NYPD Officers with Most Substantiated Complaints',
		black: 'NYPD Officers with Most Complaints'
	}
};

const writeupContent = {
	trend: {
		white: {
			copy: 'This visualization uses the NYPD civilian complaint dataset and focuses on complaint outcomes closed between 2010 and 2020. For the trend example, the white hat version shows the full yearly substantiation rate, where substantiation means a complaint was found valid after review. That definition matters because substantiation rate is not the same thing as raw complaint volume. It is the percentage of cases that investigators determined had enough evidence to support the allegation. A lower rate is often framed as positive because it can suggest fewer validated misconduct cases, but that interpretation is only fair if the data and axis are not manipulated. The chart title, axis labels, and explanatory text clearly define the measure being shown. The y-axis uses the full 0 to 100 percent range, which keeps year-to-year variation in honest proportion. The default state also shows the complete timeline instead of a selective slice, preserving context before any interaction happens. Interactive controls are included for exploration, but they do not hide the broader pattern by default. These design decisions support clarity and accuracy because they match the visual encoding to the data and make the chart easier to interpret without exaggerating the trend. The goal of the white hat version is not to force a conclusion but to help the audience understand what changed, how much it changed, and what the dataset can reasonably support.'
		},
		black: {
			copy: 'The black hat version uses the same underlying complaint dataset, but it is designed to steer the viewer toward a stronger conclusion than the evidence deserves. It removes older years and keeps only the most recent observations, which prevents the audience from seeing whether the displayed drop is part of a longer, flatter pattern. It also narrows the y-axis to a small percentage window, making a modest change appear much sharper than it would on an honest scale. The caption and framing encourage the viewer to read the chart as proof of a significant improvement even though the broader context is hidden. This is manipulative because it does not falsify the values directly; instead, it distorts perception by selecting a limited time frame and exaggerating the slope visually. It shows only recent years rather than the full trend, zooms into a narrow percentage range to exaggerate small change, and implies a normal decline is a strong improvement even though the full story is slimmer. Those choices distort perception because the audience is more likely to react to the steep-looking line than to question the missing context. The result is a chart that feels persuasive at a glance while quietly suppressing the information a careful viewer would need to judge the trend fairly. In other words, the black hat chart does not lie with fake numbers, but it does mislead by framing true numbers in a more dramatic way.'
		},
		ai: {
			copy: 'AI was used to support drafting and refinement for the webpage content and layout. It helped generate clearer explanations of the white hat and black hat design choices, suggest wording improvements, generate code and speed up iterative edits to the page structure. However, the dataset selection, visualization logic, ethical framing, and final evaluation of whether the charts are accurate or misleading was by our own judgement.'
		},
		development: {
			copy: 'We first decided on the dataset, brainstormed what to focus on, and then had one person do the white hat visualization while the other worked on the black hat version. Our main focus was the department-wide substantiation trend, but we also decided to add another set of visualizations for officer complaint rankings and equally split the work. We roughly spent around 5 hours actively working on this assignment, with iterating on the visualization designs taking the most time after AI assistance.'
		}
	},
	topOfficers: {
		white: {
			copy: 'This visualization uses the same NYPD complaint dataset but shifts the focus from yearly trends to officer-level comparisons. In the white hat version, officers are ranked by substantiated complaints rather than by total complaints alone. That design choice matters because substantiated complaints are the measure most closely tied to verified misconduct findings in the dataset. The bars start at zero, which preserves visual proportion and prevents small differences from being overstated. Labels and tooltips provide both substantiated and total complaint counts, giving the audience useful context instead of isolating a single number. The chart title also stays descriptive rather than argumentative, so the viewer is told what is being shown without being pushed toward a loaded conclusion. Together, these choices improve clarity and accuracy because they align the ranking, axis, and annotations with the real question being asked. The visualization still simplifies a complex issue, but it does so transparently and in a way that helps the viewer understand what the data actually supports.'
		},
		black: {
			copy: 'The black hat officer comparison distorts the same dataset by changing the ranking logic and visual scale in ways that encourage a more dramatic interpretation. Instead of emphasizing substantiated complaints, it ranks officers by total complaints, which combines validated and unvalidated allegations into one more alarming-looking measure. It then truncates the x-axis so bars that are numerically close appear much farther apart visually. This makes certain officers look substantially worse than others even when the actual difference is limited. By omitting substantiation as the primary focus, the chart also weakens the connection between the displayed ranking and the implied claim of accountability or misconduct.'
		},
		ai: {
			copy: 'AI was used to support drafting and refinement for the webpage content and layout. It helped generate clearer explanations of the white hat and black hat design choices, suggest wording improvements, generate code and speed up iterative edits to the page structure. However, the dataset selection, visualization logic, ethical framing, and final evaluation of whether the charts are accurate or misleading was by our own judgement.'
		},
		development: {
			copy: 'We first decided on the dataset, brainstormed what to focus on, and then had one person do the white hat visualization while the other worked on the black hat version. Our main focus was the department-wide substantiation trend, but we also decided to add another set of visualizations for officer complaint rankings and equally split the work. We roughly spent around 5 hours actively working on this assignment, with iterating on the visualization designs taking the most time after AI assistance.'
		}
	}
};

writeupContent.topOfficers.white.copy = 'This visualization uses the same NYPD complaint dataset but shifts the focus from yearly trends to officer-level comparisons. In the white hat version, officers are ranked by substantiated complaints rather than by total complaints alone. That design choice matters because substantiated complaints are the measure most closely tied to verified misconduct findings in the dataset. In this context, officer accountability means looking beyond accusation counts and paying attention to whether complaints were actually upheld after investigation. Total complaints include all allegations, regardless of outcome, so using that measure alone can blur the line between accusation and validated finding. The bars start at zero, which preserves visual proportion and prevents small differences from being overstated. Labels and tooltips provide both substantiated and total complaint counts, giving the audience useful context instead of isolating a single number. The chart title also stays descriptive rather than argumentative, so the viewer is told what is being shown without being pushed toward a loaded conclusion. Together, these choices improve clarity and accuracy because they align the ranking, axis, and annotations with the real question being asked. The visualization still simplifies a complex issue, but it does so transparently and in a way that helps the viewer understand what the data actually supports.';

writeupContent.topOfficers.black.copy = 'The black hat officer comparison distorts the same dataset by changing the ranking logic and visual scale in ways that encourage a more dramatic interpretation. Instead of emphasizing substantiated complaints, it ranks officers by total complaints, which combines validated and unvalidated allegations into one more alarming-looking measure. That shift is misleading because total complaints include every allegation regardless of outcome, while substantiated complaints are the ones found valid after investigation. It then truncates the x-axis so bars that are numerically close appear much farther apart visually. This makes certain officers look substantially worse than others even when the actual difference is limited. By omitting substantiation as the primary focus, the chart also weakens the connection between the displayed ranking and the implied claim of accountability or misconduct. It prioritizes total complaints over substantiated ones, uses a truncated axis to make small differences look large, and hides the measure that is most relevant to validity.';

function getSettings(){
	return {
		exampleScenario: document.getElementById('exampleScenario').value,
		whiteRange: document.getElementById('whiteRange').value,
		blackYears: parseInt(document.getElementById('blackYears').value, 10),
		blackAxis: document.getElementById('blackAxis').value,
		showPoints: document.getElementById('showPoints').checked,
		blackShowPoints: document.getElementById('blackShowPoints').checked
	};
}

function updateScenarioDescription(settings){
	const desc = scenarioDescriptions[settings.exampleScenario] || '';
	document.getElementById('scenarioDescription').textContent = desc;
}

function updatePanelCopies(settings){
	document.querySelector('#white-panel .panel-copy').textContent = panelCopies[settings.exampleScenario].white;
	document.querySelector('#black-panel .panel-copy').textContent = panelCopies[settings.exampleScenario].black;
}

function updateChartTitles(settings) {
	document.getElementById('whiteChartTitle').textContent = chartTitles[settings.exampleScenario].white;
	document.getElementById('blackChartTitle').textContent = chartTitles[settings.exampleScenario].black;
}

function updateWriteups(settings) {
	const content = writeupContent[settings.exampleScenario];
	document.getElementById('whiteWriteupText').textContent = content.white.copy;
	document.getElementById('blackWriteupText').textContent = content.black.copy;
	document.getElementById('aiUsageText').textContent = content.ai.copy;
	document.getElementById('developmentProcessText').textContent = content.development.copy;
}

function updateControls(settings){
	const whiteControls = document.getElementById('white-controls');
	const blackControls = document.getElementById('black-controls');
	if (settings.exampleScenario === 'trend') {
		whiteControls.style.display = 'flex';
		blackControls.style.display = 'flex';
	} else {
		whiteControls.style.display = 'none';
		blackControls.style.display = 'none';
	}
}

function render(){
	d3.csv(dataPath).then(rows => {
		const byYear = d3.rollup(
			rows,
			group => {
				const total = group.length;
				const substantiated = group.filter(r =>
					r.board_disposition && r.board_disposition.toLowerCase().includes('substantiated')
				).length;
				return {
					total,
					substantiated,
					rate: substantiated / total
				};
			},
			d => parseInt(d.year_closed, 10)
		);

		const data = Array.from(byYear.entries())
			.map(([year, d]) => ({ year, ...d }))
			.filter(d => d.year >= 2010 && d.year <= 2020)
			.sort((a, b) => a.year - b.year);

		const settings = getSettings();
		updateScenarioDescription(settings);
		updatePanelCopies(settings);
		updateChartTitles(settings);
		updateWriteups(settings);
		updateControls(settings);
		drawWhite('#white-vis', data, rows, settings);
		drawBlack('#black-vis', data, rows, settings);
	});
}

function drawWhite(container, data, rows, settings){
	if (settings.exampleScenario === 'topOfficers') {
		drawTopOfficersWhite(container, rows, settings);
		return;
	}
	drawTrendWhite(container, data, settings);
}

function drawBlack(container, data, rows, settings){
	if (settings.exampleScenario === 'topOfficers') {
		drawTopOfficersBlack(container, rows, settings);
		return;
	}
	drawTrendBlack(container, data, settings);
}

function drawTrendWhite(container, data, settings){
	d3.select(container).selectAll('*').remove();
	const margin = {top:20, right:20, bottom:60, left:60};
	const containerWidth = document.getElementById('white-vis').offsetWidth;
	const totalWidth = Math.max(containerWidth - 10, 400);
	const totalHeight = 380;
	const w = totalWidth - margin.left - margin.right;
	const h = totalHeight - margin.top - margin.bottom;

	const svg = d3.select(container).append('svg')
		.attr('width', totalWidth)
		.attr('height', totalHeight)
		.append('g')
		.attr('transform', `translate(${margin.left},${margin.top})`);

	let displayData = data;
	if (settings.whiteRange === 'recent5') {
		displayData = data.slice(-5);
	} else if (settings.whiteRange === 'recent3') {
		displayData = data.slice(-3);
	}

	const x = d3.scaleLinear().domain([displayData[0].year, displayData[displayData.length - 1].year]).range([0, w]);
	const y = d3.scaleLinear().domain([0, 1]).range([h, 0]);

	svg.selectAll('.grid-line-y')
		.data(y.ticks(5))
		.enter().append('line')
		.attr('class', 'grid-line-y')
		.attr('x1', 0).attr('x2', w)
		.attr('y1', d => y(d)).attr('y2', d => y(d))
		.style('stroke', '#e5e7eb').style('stroke-dasharray', '2,2').style('stroke-width', 1);

	const line = d3.line()
		.x(d => x(+d.year))
		.y(d => y(+d.rate));

	svg.append('path')
		.datum(displayData)
		.attr('fill', 'none')
		.attr('stroke', '#16a34a')
		.attr('stroke-width', 3)
		.attr('stroke-linejoin', 'round')
		.attr('d', line);

	if (settings.showPoints) {
		svg.selectAll('.point')
			.data(displayData)
			.enter().append('circle')
			.attr('class', 'point')
			.attr('cx', d => x(+d.year))
			.attr('cy', d => y(+d.rate))
			.attr('r', 5)
			.attr('fill', '#16a34a')
			.attr('stroke', 'white')
			.attr('stroke-width', 2);
	}

	svg.append('g')
		.attr('transform', `translate(0,${h})`)
		.call(d3.axisBottom(x).ticks(displayData.length).tickFormat(d3.format('d')))
		.style('font-size', '12px');

	svg.append('g')
		.call(d3.axisLeft(y).ticks(5).tickFormat(d3.format('.0%')))
		.style('font-size', '12px');

	svg.append('text')
		.attr('x', w/2)
		.attr('y', h + 45)
		.attr('text-anchor', 'middle')
		.style('font-size', '13px')
		.style('font-weight', '600')
		.text('Year (Closed)');

	svg.append('text')
		.attr('transform', 'rotate(-90)')
		.attr('x', -h/2)
		.attr('y', -45)
		.attr('text-anchor', 'middle')
		.style('font-size', '13px')
		.style('font-weight', '600')
		.text('Substantiation Rate');

	const tip = d3.select(container).append('div').attr('class', 'tooltip').style('display', 'none');
	if (settings.showPoints) {
		svg.selectAll('.point').on('mouseover', (event, d) => {
			tip.style('display', 'block')
				.html(`<strong>Year ${d.year}</strong><br/>Substantiation Rate: ${(d.rate*100).toFixed(1)}%<br/>Substantiated: ${d.substantiated} / ${d.total}`)
				.style('left', (event.pageX+10) + 'px')
				.style('top', (event.pageY+10) + 'px');
		}).on('mouseout', () => tip.style('display', 'none'));
	}

	d3.select(container).append('div')
		.style('font-size', '12px')
		.style('color', '#6b7280')
		.style('margin-top', '12px')
		.html('<strong>White Hat Methodology:</strong> All complaints closed between 2010-2020 are included. ' +
			  'Y-axis spans full 0-100% range. Substantiation = board disposition includes "Substantiated". ' +
			  'Hover points for exact numbers.');
}

function drawTrendBlack(container, data, settings){
	d3.select(container).selectAll('*').remove();
	const margin = {top:20, right:20, bottom:60, left:60};
	const containerWidth = document.getElementById('black-vis').offsetWidth;
	const totalWidth = Math.max(containerWidth - 10, 400);
	const totalHeight = 380;
	const w = totalWidth - margin.left - margin.right;
	const h = totalHeight - margin.top - margin.bottom;

	const svg = d3.select(container).append('svg')
		.attr('width', totalWidth)
		.attr('height', totalHeight)
		.append('g')
		.attr('transform', `translate(${margin.left},${margin.top})`);

	const cherryPicked = data.slice(-settings.blackYears);
	const [minZoom, maxZoom] = settings.blackAxis.split('-').map(Number);

	const x = d3.scaleLinear().domain([cherryPicked[0].year, cherryPicked[cherryPicked.length - 1].year]).range([0, w]);
	const y = d3.scaleLinear().domain([minZoom, maxZoom]).range([h, 0]);

	const line = d3.line()
		.x(d => x(+d.year))
		.y(d => y(+d.rate));

	svg.append('path')
		.datum(cherryPicked)
		.attr('fill', 'none')
		.attr('stroke', '#dc2626')
		.attr('stroke-width', 4)
		.attr('stroke-linejoin', 'round')
		.attr('d', line);

	if (settings.blackShowPoints) {
		svg.selectAll('.point')
			.data(cherryPicked)
			.enter().append('circle')
			.attr('class', 'point')
			.attr('cx', d => x(+d.year))
			.attr('cy', d => y(+d.rate))
			.attr('r', 6)
			.attr('fill', '#dc2626')
			.attr('stroke', 'white')
			.attr('stroke-width', 2);
	}

	svg.append('g')
		.attr('transform', `translate(0,${h})`)
		.call(d3.axisBottom(x).ticks(cherryPicked.length).tickFormat(d3.format('d')))
		.style('font-size', '12px');

	svg.append('g')
		.call(d3.axisLeft(y).ticks(5).tickFormat(d3.format('.0%')))
		.style('font-size', '12px');

	svg.append('text')
		.attr('x', w/2)
		.attr('y', h + 45)
		.attr('text-anchor', 'middle')
		.style('font-size', '13px')
		.style('font-weight', '600')
		.text('Year (Closed)');

	svg.append('text')
		.attr('transform', 'rotate(-90)')
		.attr('x', -h/2)
		.attr('y', -45)
		.attr('text-anchor', 'middle')
		.style('font-size', '13px')
		.style('font-weight', '600')
		.text('Substantiation Rate');

	const tip = d3.select(container).append('div').attr('class', 'tooltip').style('display', 'none');
	if (settings.blackShowPoints) {
		svg.selectAll('.point').on('mouseover', (event, d) => {
			tip.style('display', 'block')
				.html(`<strong>Year ${d.year}</strong><br/>Substantiation Rate: ${(d.rate*100).toFixed(1)}%`)
				.style('left', (event.pageX+10) + 'px')
				.style('top', (event.pageY+10) + 'px');
		}).on('mouseout', () => tip.style('display', 'none'));
	}

	d3.select(container).append('div')
		.style('font-size', '12px')
		.style('color', '#6b7280')
		.style('margin-top', '12px')
		.html(`<strong>Black Hat Issues:</strong> Only shows the most recent data points and uses a narrow ${settings.blackAxis.replace('-', '–')} axis to exaggerate small changes. ` +
			  'A lower substantiation rate is often marketed as good news, but here the chart achieves that impression by hiding broader context and selecting a misleading range.');
}

function drawTopOfficersWhite(container, rows, settings){
	d3.select(container).selectAll('*').remove();
	const margin = {top:20, right:20, bottom:80, left:100};
	const containerWidth = document.getElementById('white-vis').offsetWidth;
	const totalWidth = Math.max(containerWidth - 10, 400);
	const totalHeight = 380;
	const w = totalWidth - margin.left - margin.right;
	const h = totalHeight - margin.top - margin.bottom;

	const officers = new Map();
	rows.forEach(r => {
		const id = r.unique_mos_id;
		const name = `${r.first_name || ''} ${r.last_name || ''}`.trim() || id;
		const entry = officers.get(id) || {id, name, total: 0, substantiated: 0};
		entry.total += 1;
		if (r.board_disposition && r.board_disposition.toLowerCase().includes('substantiated')) entry.substantiated += 1;
		officers.set(id, entry);
	});

	const sorted = Array.from(officers.values())
		.map(d => ({ ...d, rate: d.total ? d.substantiated / d.total : 0 }))
		.sort((a, b) => b.substantiated - a.substantiated || b.rate - a.rate)
		.slice(0, 10);

	const svg = d3.select(container).append('svg')
		.attr('width', totalWidth)
		.attr('height', totalHeight)
		.style('display', 'block')
		.style('margin', '0 auto')
		.append('g')
		.attr('transform', `translate(${margin.left},${margin.top})`);

	const x = d3.scaleLinear().domain([0, d3.max(sorted, d => d.substantiated) || 1]).range([0, w]);
	const y = d3.scaleBand().domain(sorted.map(d => d.name)).range([0, h]).padding(0.2);

	svg.selectAll('.bar')
		.data(sorted)
		.enter().append('rect')
		.attr('class', 'bar')
		.attr('x', 0)
		.attr('y', d => y(d.name))
		.attr('width', d => x(d.substantiated))
		.attr('height', y.bandwidth())
		.attr('fill', '#16a34a');

	svg.selectAll('.label')
		.data(sorted)
		.enter().append('text')
		.attr('x', d => x(d.substantiated) - 8)
		.attr('y', d => y(d.name) + y.bandwidth() / 2 + 4)
		.attr('text-anchor', 'end')
		.text(d => `${d.substantiated}/${d.total}`)
		.style('font-size', '12px')
		.attr('fill', 'white');

	svg.append('g').call(d3.axisLeft(y).tickSize(0)).selectAll('text').style('font-size', '12px');
	svg.append('g').attr('transform', `translate(0,${h})`).call(d3.axisBottom(x).ticks(4).tickFormat(d3.format('d'))).style('font-size', '12px');

	svg.append('text')
		.attr('x', w / 2)
		.attr('y', h + 50)
		.attr('text-anchor', 'middle')
		.style('font-size', '13px')
		.style('font-weight', '600')
		.text('Number of substantiated complaints');

	const tip = d3.select(container).append('div').attr('class', 'tooltip').style('display', 'none');
	svg.selectAll('.bar').on('mouseover', (event, d) => {
		tip.style('display', 'block')
			.html(`<strong>${d.name}</strong><br/>Substantiated: ${d.substantiated}<br/>Total complaints: ${d.total}<br/>Rate: ${(d.rate*100).toFixed(1)}%`)
			.style('left', (event.pageX + 10) + 'px')
			.style('top', (event.pageY + 10) + 'px');
	}).on('mouseout', () => tip.style('display', 'none'));

	d3.select(container).append('div')
		.style('font-size', '12px')
		.style('color', '#6b7280')
		.style('margin-top', '12px')
		.html('<strong>White Hat Methodology:</strong> Shows highest substantiated complaint totals for officers. The axis starts at zero and each bar includes both substantiated and total complaint counts.');
}

function drawTopOfficersBlack(container, rows, settings){
	d3.select(container).selectAll('*').remove();
	const margin = {top:20, right:20, bottom:80, left:100};
	const containerWidth = document.getElementById('black-vis').offsetWidth;
	const totalWidth = Math.max(containerWidth - 10, 400);
	const totalHeight = 380;
	const w = totalWidth - margin.left - margin.right;
	const h = totalHeight - margin.top - margin.bottom;

	const officers = new Map();
	rows.forEach(r => {
		const id = r.unique_mos_id;
		const name = `${r.first_name || ''} ${r.last_name || ''}`.trim() || id;
		const entry = officers.get(id) || {id, name, total: 0, substantiated: 0};
		entry.total += 1;
		if (r.board_disposition && r.board_disposition.toLowerCase().includes('substantiated')) entry.substantiated += 1;
		officers.set(id, entry);
	});

	const sorted = Array.from(officers.values())
		.map(d => ({ ...d, rate: d.total ? d.substantiated / d.total : 0 }))
		.sort((a, b) => b.total - a.total || b.substantiated - a.substantiated)
		.slice(0, 10);

	const minTotal = d3.min(sorted, d => d.total);
	const axisStart = Math.max(0, minTotal - 2);

	const svg = d3.select(container).append('svg')
		.attr('width', totalWidth)
		.attr('height', totalHeight)
		.style('display', 'block')
		.style('margin', '0 auto')
		.append('g')
		.attr('transform', `translate(${margin.left},${margin.top})`);

	const x = d3.scaleLinear().domain([axisStart, d3.max(sorted, d => d.total) || 1]).range([0, w]);
	const y = d3.scaleBand().domain(sorted.map(d => d.name)).range([0, h]).padding(0.2);

	svg.selectAll('.bar')
		.data(sorted)
		.enter().append('rect')
		.attr('class', 'bar')
		.attr('x', d => x(axisStart))
		.attr('y', d => y(d.name))
		.attr('width', d => x(d.total) - x(axisStart))
		.attr('height', y.bandwidth())
		.attr('fill', '#dc2626');

	svg.selectAll('.label')
		.data(sorted)
		.enter().append('text')
		.attr('x', d => x(d.total) - 8)
		.attr('y', d => y(d.name) + y.bandwidth() / 2 + 4)
		.attr('text-anchor', 'end')
		.text(d => `${d.total}`)
		.style('font-size', '12px')
		.attr('fill', 'white');

	svg.append('g').call(d3.axisLeft(y).tickSize(0)).selectAll('text').style('font-size', '12px');
	svg.append('g').attr('transform', `translate(0,${h})`).call(d3.axisBottom(x).ticks(4).tickFormat(d3.format('d'))).style('font-size', '12px');

	svg.append('text')
		.attr('x', w / 2)
		.attr('y', h + 50)
		.attr('text-anchor', 'middle')
		.style('font-size', '13px')
		.style('font-weight', '600')
		.text('Total complaint count (truncated axis)');

	const tip = d3.select(container).append('div').attr('class', 'tooltip').style('display', 'none');
	svg.selectAll('.bar').on('mouseover', (event, d) => {
		tip.style('display', 'block')
			.html(`<strong>${d.name}</strong><br/>Total complaints: ${d.total}<br/>Substantiated: ${d.substantiated}<br/>Rate: ${(d.rate*100).toFixed(1)}%`)
			.style('left', (event.pageX + 10) + 'px')
			.style('top', (event.pageY + 10) + 'px');
	}).on('mouseout', () => tip.style('display', 'none'));

	d3.select(container).append('div')
		.style('font-size', '12px')
		.style('color', '#6b7280')
		.style('margin-top', '12px')
		.html('<strong>Black Hat Issues:</strong> This version highlights officers with the most complaints and truncates the axis to make the bars look more different. ' +
			  'It hides substantiated rate context and presents total complaints as if that alone proves the story.');
}

function attachControlListeners(){
	['exampleScenario', 'whiteRange', 'blackYears', 'blackAxis', 'showPoints', 'blackShowPoints'].forEach(id => {
		const element = document.getElementById(id);
		if (element) {
			element.addEventListener('change', render);
		}
	});
}

attachControlListeners();

render();
