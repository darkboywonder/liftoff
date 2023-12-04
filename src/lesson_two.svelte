<script lang="ts">
	import { Presentation, Slide } from '@components'
	import { signal } from '@motion'

	const circle = signal(
		{ x: 0, y: 200, r: 80, fill: '#00ffff' },
		{ duration: 2000 }
	)

	async function animate() {
		await circle.to({ x: 400, fill: '#ffff00' }, { delay: 600 })
		await circle.to({ x: 0, fill: '#00ffff' }, { delay: 300 })
	}

	function resetAnimation() {
		circle.reset()
	}
</script>

<Presentation>
	<Slide animate>
		<p class="font-bold text-8xl">💻 Tech Lesson 2</p>
	</Slide>

	<Slide animate>
		<p class="font-bold text-8xl mb-8">📋 Agenda</p>
	</Slide>

	<Slide animate>
		<p class="font-bold text-4xl mb-8" data-id="1">📋 Agenda</p>

		<ul class="list-disc space-y-4">
			<li class="text-left text-3xl">User Stories</li>
			<li class="text-left text-3xl">Wireframes</li>
			<li class="text-left text-3xl">Git Projects</li>
		</ul>
	</Slide>

	<Slide animate>
		<p class="font-bold text-8xl mb-8" data-id="1">User Stories</p>
	</Slide>

	<Slide animate>
		<p class="font-bold text-8xl mb-8">User Stories</p>

		<p class="leading-snug">
			A user story is an informal, general explanation of a software feature
			written from the perspective of the end user.
		</p>
	</Slide>

	<Slide animate>
		<p class="font-bold text-8xl mb-8">User Stories</p>

		<p class="leading-snug">
			The purpose of a user story is to articulate how a piece of work (usually
			a feature) will deliver value back to the end user.
		</p>
	</Slide>

	<Slide animate>
		<p class="font-bold text-8xl mb-8">User Stories</p>

		<p class="leading-snug">
			User stories are driven by a couple of sentences that outline the desired
			outcome. They don't go into detail. Requirements are added later once
			agreed upon by the team.
		</p>
	</Slide>

	<Slide animate>
		<p class="font-bold text-8xl mb-8">User Stories</p>

		<p class="text-left text-3xl mb-8">
			User stories in this format provide key benefits:
		</p>
	</Slide>

	<Slide animate>
		<p class="font-bold text-8xl mb-8">User Stories</p>

		<p class="text-left text-3xl mb-8">
			User stories in this format provide key benefits:
		</p>
		<ul class="list-disc space-y-4 pl-6">
			<li class="text-left text-3xl">Stories keep the focus on the user</li>
		</ul>
	</Slide>

	<Slide animate>
		<p class="font-bold text-8xl mb-8">User Stories</p>

		<p class="text-left text-3xl mb-8">
			User stories in this format provide key benefits:
		</p>
		<ul class="list-disc space-y-4 pl-6">
			<li class="text-left text-3xl">Stories keep the focus on the user</li>
			<li class="text-left text-3xl">Stories enable collaboration</li>
		</ul>
	</Slide>

	<Slide animate>
		<p class="font-bold text-8xl mb-8">User Stories</p>

		<p class="text-left text-3xl mb-8">
			User stories in this format provide key benefits:
		</p>
		<ul class="list-disc space-y-4 pl-6">
			<li class="text-left text-3xl">Stories keep the focus on the user</li>
			<li class="text-left text-3xl">Stories enable collaboration</li>
			<li class="text-left text-3xl">Stories drive creative solutions</li>
		</ul>
	</Slide>

	<Slide animate>
		<p class="font-bold text-8xl mb-8">User Stories</p>

		<p class="text-left text-3xl mb-8">
			User stories in this format provide key benefits:
		</p>
		<ul class="list-disc space-y-4 pl-6">
			<li class="text-left text-3xl">Stories keep the focus on the user</li>
			<li class="text-left text-3xl">Stories enable collaboration</li>
			<li class="text-left text-3xl">Stories drive creative solutions</li>
			<li class="text-left text-3xl">Stories create momentum</li>
		</ul>
	</Slide>

	<Slide animate>
		<p class="font-bold text-8xl mb-8">User Stories</p>

		<p class="text-left text-3xl mb-8">
			Often expressed in a simple sentence, user stories use this template:
		</p>
	</Slide>

	<Slide animate>
		<p class="font-bold text-8xl mb-8">User Stories</p>

		<p class="text-left text-3xl mb-8">
			Often expressed in a simple sentence, user stories use this template:
		</p>

		<blockquote>"As a [persona], I [want to], [so that]."</blockquote>
	</Slide>

	<Slide animate>
		<p class="font-bold text-8xl mb-8">User Stories</p>

		<p class="text-3xl mb-8">Example</p>
	</Slide>

	<Slide animate>
		<p class="font-bold text-8xl mb-8">User Stories</p>

		<p class="text-3xl mb-8">Example</p>

		<blockquote class="leading-snug">
			"As a new user, I want to register a new account, so I can login to the
			site."
		</blockquote>
	</Slide>

	<Slide animate>
		<p class="font-bold text-8xl mb-8">User Stories</p>

		<p class="text-3xl mb-8">Example</p>
		<blockquote class="leading-snug">
			"As a user, I want to create an store recipes, so I can reference them
			when I need them."
		</blockquote>
	</Slide>

	<Slide animate>
		<p class="font-bold text-8xl mb-8">User Stories</p>

		<p class="text-3xl mb-8">Example</p>
		<blockquote class="leading-snug">
			"As an admin user, I want to have access to an admin dashboard, so I can
			track user interactions."
		</blockquote>
	</Slide>

	<Slide animate>
		<p class="font-bold text-8xl mb-8">User Stories</p>

		<p class="text-left text-3xl mb-8">
			The following can be added to the user story once the team decides the
			task can and should be addressed in an upcoming sprint:
		</p>
	</Slide>
	<Slide animate>
		<p class="font-bold text-8xl mb-8">User Stories</p>

		<p class="text-left text-3xl mb-8">
			The following can be added to the user story once the team decides the
			task can and should be addressed in an upcoming sprint:
		</p>
		<ul class="list-disc space-y-4 pl-6">
			<li class="text-left text-3xl">Definition of done</li>
		</ul>
	</Slide>
	<Slide animate>
		<p class="font-bold text-8xl mb-8">User Stories</p>

		<p class="text-left text-3xl mb-8">
			The following can be added to the user story once the team decides the
			task can and should be addressed in an upcoming sprint:
		</p>
		<ul class="list-disc space-y-4 pl-6">
			<li class="text-left text-3xl">Definition of done</li>
			<li class="text-left text-3xl">Outline subtasks or tasks</li>
		</ul>
	</Slide>
	<Slide animate>
		<p class="font-bold text-8xl mb-8">User Stories</p>

		<p class="text-left text-3xl mb-8">
			The following can be added to the user story once the team decides the
			task can and should be addressed in an upcoming sprint:
		</p>
		<ul class="list-disc space-y-4 pl-6">
			<li class="text-left text-3xl">Definition of done</li>
			<li class="text-left text-3xl">Outline subtasks or tasks</li>
			<li class="text-left text-3xl">User personas</li>
		</ul>
	</Slide>
	<Slide animate>
		<p class="font-bold text-8xl mb-8">User Stories</p>

		<p class="text-left text-3xl mb-8">
			The following can be added to the user story once the team decides the
			task can and should be addressed in an upcoming sprint:
		</p>
		<ul class="list-disc space-y-4 pl-6">
			<li class="text-left text-3xl">Definition of done</li>
			<li class="text-left text-3xl">Outline subtasks or tasks</li>
			<li class="text-left text-3xl">User personas</li>
			<li class="text-left text-3xl">Ordered steps</li>
		</ul>
	</Slide>
	<Slide animate>
		<p class="font-bold text-8xl mb-8">User Stories</p>

		<p class="text-left text-3xl mb-8">
			The following can be added to the user story once the team decides the
			task can and should be addressed in an upcoming sprint:
		</p>
		<ul class="list-disc space-y-4 pl-6">
			<li class="text-left text-3xl">Definition of done</li>
			<li class="text-left text-3xl">Outline subtasks or tasks</li>
			<li class="text-left text-3xl">User personas</li>
			<li class="text-left text-3xl">Ordered steps</li>
			<li class="text-left text-3xl">Added feedback from user</li>
		</ul>
	</Slide>
	<Slide animate>
		<p class="font-bold text-8xl mb-8">User Stories</p>

		<p class="text-left text-3xl mb-8">
			The following can be added to the user story once the team decides the
			task can and should be addressed in an upcoming sprint:
		</p>
		<ul class="list-disc space-y-4 pl-6">
			<li class="text-left text-3xl">Definition of done</li>
			<li class="text-left text-3xl">Outline subtasks or tasks</li>
			<li class="text-left text-3xl">User personas</li>
			<li class="text-left text-3xl">Ordered steps</li>
			<li class="text-left text-3xl">Added feedback from user</li>
			<li class="text-left text-3xl">Time</li>
		</ul>
	</Slide>

	<Slide animate>
		<p class="font-bold text-6xl mb-8" data-id="1">User Stories</p>
		<p class="font-bold text-2xl mb-8">What we'll practice</p>

		<ul class="list-disc space-y-4 pl-6">
			<li class="text-left text-lg">
				Write user stories using "As a [persona], I [want to], [so that]"
				template
			</li>
			<li class="text-left text-lg">
				<strong>Bonus:</strong> outline criteria for any stories that seem vague
			</li>
		</ul>
	</Slide>

	<Slide animate>
		<p class="font-bold text-6xl mb-8" data-id="1">User Story 🙋🏾‍♂️</p>
	</Slide>

	<Slide animate>
		<p class="font-bold text-4xl mb-8" data-id="1">📋 Agenda</p>

		<ul class="list-disc space-y-4">
			<li class="text-left text-3xl">✅ User Stories</li>
			<li class="text-left text-3xl">Wireframes</li>
		</ul>
	</Slide>

	<Slide animate>
		<p class="font-bold text-6xl mb-8" data-id="1">Wireframes</p>
	</Slide>

	<Slide animate>
		<p class="font-bold text-6xl mb-8" data-id="1">Wireframes</p>

		<p class="leading-snug">
			A wireframe is a low-fidelity schematic or blueprint that is useful in
			helping programmers, designers, and owners think and communicate about the <strong
				>structure</strong
			> of the software or website they’re building.
		</p>
	</Slide>

	<Slide animate>
		<p class="font-bold text-6xl mb-8" data-id="1">Wireframes</p>

		<p class="leading-snug">
			Wireframes typically come before a finalized design allowing owners,
			engineers, and other collaborators to provide feedback on customer needs
			before the final design is implemented.
		</p>
	</Slide>

	<Slide animate>
		<p class="font-bold text-6xl mb-8" data-id="1">Wireframes</p>

		<p class="leading-snug">
			Doing wireframing work before any code is written and before the visual
			design is finalized will save you lots of time and avoid painful
			adjustment work later.
		</p>
	</Slide>

	<Slide animate>
		<p class="font-bold text-6xl mb-8" data-id="1">Wireframes</p>

		<p class="mb-8 text-left text-3xl leading_snug">
			Wireframes typically have an intentional <strong>low-fidelity</strong> look
			and feel to them so they can:
		</p>
	</Slide>

	<Slide animate>
		<p class="font-bold text-6xl mb-8" data-id="1">Wireframes</p>

		<p class="mb-8 text-left text-3xl leading_snug">
			Wireframes typically have an intentional <strong>low-fidelity</strong> look
			and feel to them so they can:
		</p>

		<ul class="list-disc space-y-4 pl-6">
			<li class="text-left text-3xl">
				Ensure collaborators that the design is not final encouraging
				individuals that all visuals are up for discussion and adjustment
			</li>
		</ul>
	</Slide>
	<Slide animate>
		<p class="font-bold text-6xl mb-8" data-id="1">Wireframes</p>

		<p class="mb-8 text-left text-3xl leading_snug">
			Wireframes typically have an intentional <strong>low-fidelity</strong> look
			and feel to them so they can:
		</p>

		<ul class="list-disc space-y-4 pl-6">
			<li class="text-left text-3xl">
				Ensure collaborators that the design is not final encouraging
				individuals that all visuals are up for discussion and adjustment
			</li>

			<li class="text-left text-3xl">
				Allow collaborators to focus more on available features for the end user
				than stylistic decisions
			</li>
		</ul>
	</Slide>
	<Slide animate>
		<p class="font-bold text-6xl mb-8" data-id="1">Wireframes</p>
		<p class="mb-8 text-left text-3xl leading_snug">
			Wireframes typically have an intentional <strong>low-fidelity</strong> look
			and feel to them so they can:
		</p>

		<ul class="list-disc space-y-4 pl-6">
			<li class="text-left text-3xl">
				Ensure collaborators that the design is not final encouraging
				individuals that all visuals are up for discussion and adjustment
			</li>

			<li class="text-left text-3xl">
				Allow collaborators to focus more on available features for the end user
				than stylistic decisions
			</li>

			<li class="text-left text-3xl">
				Keep focus on content flow and layout while avoid getting into the weeds
				with colors, radius styles, etc.
			</li>
		</ul>
	</Slide>

	<Slide animate>
		<p class="font-bold text-6xl mb-8" data-id="1">Wireframes</p>
		<p class="font-bold text-2xl mb-8">Available Tools</p>
		<a href="https://www.figma.com/wireframe-tool">
			<img
				src="img/figma_wireframe_tool.png"
				alt="screenshot of figma wireframe tool website"
			/>
		</a>
	</Slide>

	<Slide animate>
		<p class="font-bold text-6xl mb-8" data-id="1">Wireframes</p>
		<p class="font-bold text-2xl mb-8">Available Tools</p>
		<a href="https://adobexdplatform.com/">
			<img
				src="img/adobe_xd_wireframe_tool.png"
				alt="screenshot of adobe xd wireframe tool website"
			/>
		</a>
	</Slide>

	<Slide animate>
		<p class="font-bold text-6xl mb-8" data-id="1">Wireframes</p>
		<p class="font-bold text-2xl mb-8">Available Tools</p>
		<a href="https://balsamiq.com/">
			<img
				src="img/balsamiq_wireframe_tool.png"
				alt="screenshot of balsamiq wireframe tool website"
			/>
		</a>
	</Slide>

	<Slide animate>
		<p class="font-bold text-6xl mb-8" data-id="1">Wireframes</p>
		<p class="font-bold text-2xl mb-8">Available Tools</p>
		<a href="https://www.tldraw.com/">
			<img src="img/tldraw_tool.png" alt="screenshot of tldraw website" />
		</a>
	</Slide>

	<Slide animate>
		<p class="font-bold text-6xl mb-8" data-id="1">Wireframes</p>

		<p class="leading-snug">
			Although you are not required to do any wireframing, I encourage you to
			use this tool when the direction of your feature is vague and you need a
			visual of the idea to better comprehend the task.
		</p>
	</Slide>

	<Slide animate>
		<p class="font-bold text-6xl mb-8" data-id="1">Wireframe 🙋🏾‍♂️</p>
	</Slide>

	<Slide animate>
		<p class="font-bold text-4xl mb-8" data-id="1">📋 Agenda</p>

		<ul class="list-disc space-y-4">
			<li class="text-left text-3xl">✅ Agile</li>
			<li class="text-left text-3xl">✅ Minimum Viable Product (MVP)</li>
			<li class="text-left text-3xl">Git Projects</li>
		</ul>
	</Slide>

	<!-- <Slide on:in={animate} on:out={resetAnimation} animate>
		<p class="font-bold text-6xl">🪄 Animotion</p>

		<svg class="w-full h-[400px] mx-auto" viewBox="0 0 400 400">
			<circle cx={$circle.x} cy={$circle.y} r={$circle.r} fill={$circle.fill} />
			<text
				x={$circle.x}
				y={$circle.y}
				font-size={$circle.r * 0.4}
				font-family="JetBrains Mono"
				text-anchor="middle"
				dominant-baseline="middle"
			>
				{$circle.x.toFixed(0)}
			</text>
		</svg>
	</Slide> -->
</Presentation>
