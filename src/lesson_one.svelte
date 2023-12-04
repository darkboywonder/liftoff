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
		<p class="font-bold text-8xl">💻 Tech Lesson 1</p>
	</Slide>

	<Slide animate>
		<p class="font-bold text-4xl mb-8">👋🏾 Hi! I'm Shawn!</p>

		<div class="grid grid-cols-2 gap-8">
			<div class="col-span-1">
				<img src="/shawn.jpg" alt="headshot of the instructor" />
			</div>

			<div class="col-span-1 pl-6">
				<ul class="list-disc space-y-4">
					<li class="disk text-left text-3xl">2014 LaunchCode gradutate</li>
					<li class="text-left text-3xl">Teaching assistant since 2016</li>
					<li class="text-left text-3xl">Instructor since 2018</li>
					<li class="text-left text-3xl">Active in tech industry since 2015</li>
				</ul>
			</div>
		</div>
	</Slide>

	<Slide animate>
		<p class="font-bold text-8xl mb-8">📋 Agenda</p>
	</Slide>

	<Slide animate>
		<p class="font-bold text-4xl mb-8" data-id="1">📋 Agenda</p>

		<ul class="list-disc space-y-4">
			<li class="text-left text-3xl">Agile</li>
			<li class="text-left text-3xl">Minimum Viable Product (MVP)</li>
			<li class="text-left text-3xl">Project Scope</li>
			<li class="text-left text-3xl">Git</li>
		</ul>
	</Slide>

	<Slide animate>
		<p class="font-bold text-8xl mb-8" data-id="1">Agile</p>
	</Slide>

	<Slide animate>
		<p class="font-bold text-8xl mb-8">Agile</p>

		<p class="leading-snug">
			A methodology birthed in 2001, agile is a project management approach that
			involves breaking the project into phases and emphasizes continuous
			collaboration and improvement. Teams follow a cycle of planning,
			executing, and evaluating.
		</p>
	</Slide>

	<Slide animate>
		<p class="font-bold text-8xl mb-8">Agile</p>

		<p class="leading-snug">
			Whereas the traditional "waterfall" approach has one discipline contribute
			to the project, then "throw it over the wall" to the next contributor,
			agile calls for collaborative cross-functional teams.
		</p>
	</Slide>

	<Slide animate>
		<p class="font-bold text-8xl mb-8">Agile</p>

		<p class="leading-snug">
			Open communication, collaboration, adaptation, and trust amongst team
			members are at the heart of agile. Although the project lead or product
			owner typically prioritizes the work to be delivered, the team takes the
			lead on deciding how the work will get done, self-organizing around
			granular tasks and assignments.
		</p>
	</Slide>

	<Slide animate>
		<p class="font-bold text-8xl mb-8">Agile</p>

		<p class="text-left text-3xl mb-8">
			Folks working in projects utilizing agile have come to value:
		</p>
	</Slide>

	<Slide animate>
		<p class="font-bold text-8xl mb-8">Agile</p>

		<p class="text-left text-3xl mb-8">
			Folks working in projects utilizing agile have come to value:
		</p>
		<ul class="list-disc space-y-4 pl-6">
			<li class="text-left text-3xl">
				Individuals and interactions over processes and tools
			</li>
		</ul>
	</Slide>

	<Slide animate>
		<p class="font-bold text-8xl mb-8">Agile</p>

		<p class="text-left text-3xl mb-8">
			Folks working in projects utilizing agile have come to value:
		</p>
		<ul class="list-disc space-y-4 pl-6">
			<li class="text-left text-3xl">
				Individuals and interactions over processes and tools
			</li>
			<li class="text-left text-3xl">
				Working software over comprehensive documentation
			</li>
		</ul>
	</Slide>
	<Slide animate>
		<p class="font-bold text-8xl mb-8">Agile</p>

		<p class="text-left text-3xl mb-8">
			Folks working in projects utilizing agile have come to value:
		</p>
		<ul class="list-disc space-y-4 pl-6">
			<li class="text-left text-3xl">
				Individuals and interactions over processes and tools
			</li>
			<li class="text-left text-3xl">
				Working software over comprehensive documentation
			</li>
			<li class="text-left text-3xl">
				Customer collaboration over contract negotiation
			</li>
		</ul>
	</Slide>

	<Slide animate>
		<p class="font-bold text-8xl mb-8">Agile</p>

		<p class="text-left text-3xl mb-8">
			Folks working in projects utilizing agile have come to value:
		</p>
		<ul class="list-disc space-y-4 pl-6">
			<li class="text-left text-3xl">
				Individuals and interactions over processes and tools
			</li>
			<li class="text-left text-3xl">
				Working software over comprehensive documentation
			</li>
			<li class="text-left text-3xl">
				Customer collaboration over contract negotiation
			</li>
			<li class="text-left text-3xl">
				Responding to change over following a plan
			</li>
		</ul>
	</Slide>

	<Slide animate>
		<p class="font-bold text-6xl mb-8">Agile</p>
		<p class="font-bold text-2xl mb-8">12 agile principles</p>

		<div class="grid grid-cols-2 gap-6">
			<div class="col-span-1">
				<ul class="list-disc space-y-4 pl-6">
					<li class="text-left text-lg">
						Our highest priority is to satisfy the customer through early and
						continuous delivery of valuable software.
					</li>
					<li class="text-left text-lg">
						Welcome changing requirements, even late in development. Agile
						processes harness change for the customer's competitive advantage.
					</li>
					<li class="text-left text-lg">
						Deliver working software frequently, from a couple of weeks to a
						couple of months, with a preference to the shorter timescale.
					</li>
					<li class="text-left text-lg">
						Business people and developers must work together daily throughout
						the project.
					</li>
					<li class="text-left text-lg">
						Build projects around motivated individuals. Give them the
						environment and support they need, and trust them to get the job
						done.
					</li>
					<li class="text-left text-lg">
						The most efficient and effective method of conveying information to
						and within a development team is face-to-face conversation.
					</li>
				</ul>
			</div>
			<div class="col-span-1">
				<ul class="list-disc space-y-4 pl-6">
					<li class="text-left text-lg">
						Working software is the primary measure of progress.
					</li>
					<li class="text-left text-lg">
						Agile processes promote sustainable development. The sponsors,
						developers, and users should be able to maintain a constant pace
						indefinitely.
					</li>
					<li class="text-left text-lg">
						Continuous attention to technical excellence and good design
						enhances agility.
					</li>
					<li class="text-left text-lg">
						Simplicity--the art of maximizing the amount of work not done--is
						essential.
					</li>
					<li class="text-left text-lg">
						The best architectures, requirements, and designs emerge from
						self-organizing teams.
					</li>
					<li class="text-left text-lg">
						At regular intervals, the team reflects on how to become more
						effective, then tunes and adjusts its behavior accordingly.
					</li>
				</ul>
			</div>
		</div>
	</Slide>

	<Slide animate>
		<p class="font-bold text-6xl mb-8">Agile</p>
		<p class="font-bold text-2xl mb-8">Common agile cycles & practices</p>
	</Slide>

	<Slide animate>
		<p class="font-bold text-6xl mb-8">Agile</p>
		<p class="font-bold text-2xl mb-8">Common agile cycles & practices</p>

		<ul class="list-disc space-y-4 pl-6">
			<li class="text-left text-lg">T-shirt sizing sessions</li>
			<li class="text-left text-lg">Backlog grooming sessions</li>
			<li class="text-left text-lg">Sprint planning sessions</li>
			<li class="text-left text-lg">Sprint refinement sessions</li>
			<li class="text-left text-lg">Active Development</li>
			<li class="text-left text-lg">Repeat</li>
		</ul>
	</Slide>
	<Slide animate>
		<p class="font-bold text-6xl mb-8">Agile</p>
		<p class="font-bold text-2xl mb-8">Common agile cycles & practices</p>
		<p class="font-bold text-2xl mb-8">Sprint Refinement</p>
		<ul class="list-disc space-y-4 pl-6">
			<li class="text-left text-lg">
				Engineers ensures all tasks within a sprint are clearly defined
			</li>
			<li class="text-left text-lg">
				Engineers ensures acceptance criteria can be worked within the time
				allowed
			</li>
			<li class="text-left text-lg">
				Fibonacci weights are decided upon as a group and applied to all tasks
				(1, 2, 3, 5, 8, 13, 21, 34...)
			</li>
			<li class="text-left text-lg">
				The sum amount of weighted tasks isn't allowed to surpass max velocity
				of a sprint.
			</li>
		</ul>
	</Slide>

	<Slide animate>
		<p class="font-bold text-6xl mb-8">Agile</p>
		<p class="font-bold text-2xl mb-8">Common agile cycles & practices</p>
		<p class="font-bold text-2xl mb-8">Active Development</p>
		<ul class="list-disc space-y-4 pl-6">
			<li class="text-left text-lg">
				Tasks are actively pulled from todo column on kanban board
			</li>
			<li class="text-left text-lg">
				normal march for tasks are todo -> doing -> code review -> staging ->
				design review -> QA -> approved
			</li>
			<li class="text-left text-lg">
				Task/feature is either immediately released once finished or released at
				the end of the sprint
			</li>
		</ul>
	</Slide>

	<Slide animate>
		<p class="font-bold text-6xl mb-8" data-id="1">Agile</p>
		<p class="font-bold text-2xl mb-8">What we'll practice</p>

		<ul class="list-disc space-y-4 pl-6">
			<li class="text-left text-lg">Backlog grooming session</li>
			<li class="text-left text-lg">Sprint planning session</li>
			<li class="text-left text-lg">modified sprint refinement</li>
			<li class="text-left text-lg">Active Development</li>
		</ul>
	</Slide>

	<Slide animate>
		<p class="font-bold text-6xl mb-8" data-id="1">Agile 🙋🏾‍♂️</p>
	</Slide>

	<Slide animate>
		<p class="font-bold text-4xl mb-8" data-id="1">📋 Agenda</p>

		<ul class="list-disc space-y-4">
			<li class="text-left text-3xl">✅ Agile</li>
			<li class="text-left text-3xl">Minimum Viable Product (MVP)</li>
			<li class="text-left text-3xl">Project Scope</li>
			<li class="text-left text-3xl">Git</li>
		</ul>
	</Slide>

	<Slide animate>
		<p class="font-bold text-6xl mb-8" data-id="1">
			Minimum Viable Product (MVP)
		</p>
	</Slide>

	<Slide animate>
		<p class="font-bold text-6xl mb-8" data-id="1">
			Minimum Viable Product (MVP)
		</p>

		<p class="leading-snug">
			an early, basic version of a product (typically a computer program or
			piece of technology) that meets the minimum necessary requirements for use
			but can be adapted and improved in the future, especially after customer
			feedback.
		</p>
	</Slide>

	<Slide animate>
		<p class="font-bold text-6xl mb-8" data-id="1">
			Minimum Viable Product (MVP)
		</p>

		<p>Examples?</p>
	</Slide>

	<Slide animate>
		<p class="font-bold text-6xl mb-8" data-id="1">
			Minimum Viable Product (MVP)
		</p>
		<p class="mb-8 text-left">Questions to consider while drafting features:</p>
	</Slide>

	<Slide animate>
		<p class="font-bold text-6xl mb-8" data-id="1">
			Minimum Viable Product (MVP)
		</p>
		<p class="mb-8 text-left">Questions to consider while drafting features:</p>

		<ul class="list-disc space-y-4 pl-6">
			<li class="text-left text-3xl">What problem are you trying to solve?</li>
		</ul>
	</Slide>
	<Slide animate>
		<p class="font-bold text-6xl mb-8" data-id="1">
			Minimum Viable Product (MVP)
		</p>
		<p class="mb-8 text-left">Questions to consider while drafting features:</p>

		<ul class="list-disc space-y-4 pl-6">
			<li class="text-left text-3xl">What problem are you trying to solve?</li>
			<li class="text-left text-3xl">
				Is the feature a “need” or “want” for the end user?
			</li>
		</ul>
	</Slide>
	<Slide animate>
		<p class="font-bold text-6xl mb-8" data-id="1">
			Minimum Viable Product (MVP)
		</p>
		<p class="mb-8 text-left">Questions to consider while drafting features:</p>

		<ul class="list-disc space-y-4 pl-6">
			<li class="text-left text-3xl">What problem are you trying to solve?</li>
			<li class="text-left text-3xl">
				Is the feature a “need” or “want” for the end user?
			</li>
			<li class="text-left text-3xl">
				Is there a simpler version nested within the main idea?
			</li>
		</ul>
	</Slide>
	<Slide animate>
		<p class="font-bold text-6xl mb-8" data-id="1">
			Minimum Viable Product (MVP)
		</p>
		<p class="mb-8 text-left">Questions to consider while drafting features:</p>

		<ul class="list-disc space-y-4 pl-6">
			<li class="text-left text-3xl">What problem are you trying to solve?</li>
			<li class="text-left text-3xl">
				Is the feature a “need” or “want” for the end user?
			</li>
			<li class="text-left text-3xl">
				Is there a simpler version nested within the main idea?
			</li>
			<li class="text-left text-3xl">
				If it’s a large need, is there an alternative you could do instead?
			</li>
		</ul>
	</Slide>

	<Slide animate>
		<p class="font-bold text-6xl mb-8" data-id="1">
			Minimum Viable Product (MVP)
		</p>
		<p class="font-bold text-2xl mb-8">Suggestion</p>
		<p class="leading-snug">
			Add a sub focus to your app when deciding a direction if the sector isn't
			unique.
		</p>
	</Slide>

	<Slide animate>
		<p class="font-bold text-6xl mb-8" data-id="1">
			Minimum Viable Product (MVP)
		</p>
		<p class="leading-snug">
			You’re goal is to create an MVP, not the end all be all product. Create a
			start and a place you can continue.
		</p>
	</Slide>

	<Slide animate>
		<p class="font-bold text-6xl mb-8" data-id="1">MVP 🙋🏾‍♂️</p>
	</Slide>

	<Slide animate>
		<p class="font-bold text-4xl mb-8" data-id="1">📋 Agenda</p>

		<ul class="list-disc space-y-4">
			<li class="text-left text-3xl">✅ Agile</li>
			<li class="text-left text-3xl">✅ Minimum Viable Product (MVP)</li>
			<li class="text-left text-3xl">Project Scope</li>
			<li class="text-left text-3xl">Git</li>
		</ul>
	</Slide>

	<Slide animate>
		<p class="font-bold text-6xl mb-8" data-id="1">Project Scope</p>
	</Slide>

	<Slide animate>
		<p class="font-bold text-6xl mb-8" data-id="1">Project Scope</p>

		<p class="leading-snug">
			During Liftoff, you'll choose a project to build as a group. For this
			project, you'll need to identify a project scope and what your minimum
			viable product (MVP) will be.
		</p>
	</Slide>

	<Slide animate>
		<p class="font-bold text-6xl mb-8" data-id="1">Project Scope</p>

		<p class="leading-snug">
			It can be easy to dream big and want to have a highly complex project to
			have a lot of features, but it's important to remember that you only have
			6-8 weeks to complete your project, so you'll need to pick the features
			that you can complete within this timeframe.
		</p>
	</Slide>

	<Slide animate>
		<p class="font-bold text-6xl mb-8" data-id="1">Project Scope</p>

		<p class="leading-snug">
			What you'll do tonight is decide on your project and start to outline the
			features that you want to build. The decisions you make tonight will
			define your project scope.
		</p>
	</Slide>

	<Slide animate>
		<p class="font-bold text-6xl mb-8" data-id="1">Project Scope</p>
		<p class="mb-8 text-left">Here are some example features:</p>

		<ul class="list-disc space-y-4 pl-6">
			<li class="text-left text-3xl">
				Feature 1: The website must allow users to create an account and log in.
			</li>
			<li class="text-left text-3xl">
				Feature 2: The user must be able to purchase projects that are
				associated with their profile.
			</li>
			<li class="text-left text-3xl">
				Feature 3: The user must be able to add a review to a product, edit
				their review and delete their review.
			</li>
			<li class="text-left text-3xl">
				Feature 4: The user must be able to view a summary of inventory and
				sales (utilizing some form of data visualization).
			</li>
			<li class="text-left text-3xl">
				Feature 5 (stretch goal): The website must allow for multiple roles, the
				inventory and sales view is restricted based on user role (customer or
				store owner).
			</li>
		</ul>
	</Slide>

	<Slide animate>
		<p class="font-bold text-6xl mb-8" data-id="1">Project Scope 🙋🏾‍♂️</p>
	</Slide>

	<Slide animate>
		<p class="font-bold text-4xl mb-8" data-id="1">📋 Agenda</p>

		<ul class="list-disc space-y-4">
			<li class="text-left text-3xl">✅ Agile</li>
			<li class="text-left text-3xl">✅ Minimum Viable Product (MVP)</li>
			<li class="text-left text-3xl">✅ Project Scope</li>
			<li class="text-left text-3xl">Git</li>
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
