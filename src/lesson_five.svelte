<script lang="ts">
    import { Presentation, Slide } from "@components";
    import { signal } from "@motion";

    const circle = signal(
        { x: 0, y: 200, r: 80, fill: "#00ffff" },
        { duration: 2000 },
    );

    async function animate() {
        await circle.to({ x: 400, fill: "#ffff00" }, { delay: 600 });
        await circle.to({ x: 0, fill: "#00ffff" }, { delay: 300 });
    }

    function resetAnimation() {
        circle.reset();
    }
</script>

<Presentation>
    <Slide animate>
        <p class="font-bold text-8xl">💻 Tech Lesson 5</p>
    </Slide>

    <Slide animate>
        <p class="font-bold text-8xl mb-8">📋 Agenda</p>
    </Slide>

    <Slide animate>
        <p class="font-bold text-4xl mb-8" data-id="1">📋 Agenda</p>

        <ul class="list-disc space-y-4">
            <li class="text-left text-3xl">Re-scoping a Project</li>
            <li class="text-left text-3xl">
                Importance of GitHub Activity Post-Class
            </li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8" data-id="1">Re-scoping a Project</p>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">Re-scoping a Project</p>

        <p class="leading-snug">
            Part of project development is paying attention to the flow of your
            work. There will be times when the deadline approaches faster than
            the progress that you’re making.
        </p>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">Re-scoping a Project</p>

        <p class="leading-snug">
            In those times, it will be helpful to know when it’s time to shift
            to a different plan or when it’s worth it to keep working and get as
            much done as you can.
        </p>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">Re-scoping a Project</p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">
                Re-evaluate core features for your project
            </li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">Re-scoping a Project</p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">
                Re-evaluate core features for your project
            </li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">Re-scoping a Project</p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">
                Re-evaluate core features for your project
            </li>
            <li class="text-left text-3xl">
                Identify what can be shifted into a stretch goal
            </li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">Re-scoping a Project</p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">
                Re-evaluate core features for your project
            </li>
            <li class="text-left text-3xl">
                Identify what can be shifted into a stretch goal
            </li>
            <li class="text-left text-3xl">Move forward with the new plan</li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">Re-scoping a Project</p>

        <p class="leading-snug">Re-evaluate core features for your project</p>
    </Slide>
    <Slide animate>
        <p class="font-bold text-6xl mb-8">Re-scoping a Project</p>

        <p class="leading-snug">Re-evaluate core features for your project</p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">Features completed</li>
        </ul>
    </Slide>
    <Slide animate>
        <p class="font-bold text-6xl mb-8">Re-scoping a Project</p>

        <p class="leading-snug">Re-evaluate core features for your project</p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">Features completed</li>
            <li class="text-left text-3xl">Features in progress</li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">Re-scoping a Project</p>

        <p class="leading-snug">Re-evaluate core features for your project</p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">Features completed</li>
            <li class="text-left text-3xl">Features in progress</li>
            <li class="text-left text-3xl">Features not started</li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">Re-scoping a Project</p>

        <p class="leading-snug">Re-evaluate core features for your project</p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">Features completed</li>
            <li class="text-left text-3xl">Features in progress</li>
            <li class="text-left text-3xl">Features not started</li>
            <li class="text-left text-3xl">
                Identify what should still be considered a core feature
            </li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">Re-scoping a Project</p>

        <p class="leading-snug">
            Identify what can be shifted into a stretch goal
        </p>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">Re-scoping a Project</p>

        <p class="leading-snug">
            Identify what can be shifted into a stretch goal
        </p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">Have we started the feature?</li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">Re-scoping a Project</p>

        <p class="leading-snug">
            Identify what can be shifted into a stretch goal
        </p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">Have we started the feature?</li>
            <li class="text-left text-3xl">If so, why are we not done?</li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">Re-scoping a Project</p>

        <p class="leading-snug">
            Identify what can be shifted into a stretch goal
        </p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">Have we started the feature?</li>
            <li class="text-left text-3xl">If so, why are we not done?</li>
            <li class="text-left text-3xl">
                If not, can we complete it within our timeline?
            </li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">Re-scoping a Project</p>

        <p class="leading-snug">
            Identify what can be shifted into a stretch goal
        </p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">Have we started the feature?</li>
            <li class="text-left text-3xl">If so, why are we not done?</li>
            <li class="text-left text-3xl">
                If not, can we complete it within our timeline?
            </li>
            <li class="text-left text-3xl">
                Is the feature a blocker for other work?
            </li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">Re-scoping a Project</p>

        <p class="leading-snug">
            Identify what can be shifted into a stretch goal
        </p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">Have we started the feature?</li>
            <li class="text-left text-3xl">If so, why are we not done?</li>
            <li class="text-left text-3xl">
                If not, can we complete it within our timeline?
            </li>
            <li class="text-left text-3xl">
                Is the feature a blocker for other work?
            </li>
            <li class="text-left text-3xl">
                Can the work be shared in the time allowed?
            </li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">Re-scoping a Project</p>

        <p class="leading-snug">Move forward with a new plan</p>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">Questions 🙋🏾‍♂️</p>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8" data-id="1">📋 Agenda</p>

        <ul class="list-disc space-y-4">
            <li class="text-left text-3xl">✅ Re-scoping a Project</li>
            <li class="text-left text-3xl">
                Importance of GitHub Activity Post-Class
            </li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-5xl mb-8" data-id="1">
            Importance of GitHub Activity Post-Class
        </p>
    </Slide>

    <Slide animate>
        <p class="font-bold text-5xl mb-8" data-id="1">
            Importance of GitHub Activity Post-Class
        </p>

        <p class="leading-snug">
            GitHub is the place where potential employers are going to look to
            see if you have been keeping up with your coding skills.
        </p>
    </Slide>

    <Slide animate>
        <p class="font-bold text-5xl mb-8" data-id="1">
            Importance of GitHub Activity Post-Class
        </p>

        <p class="leading-snug">
            While you have done a lot of work and learned a lot in your time at
            LaunchCode, it’s also very important that you continue to work on
            developing your skills after class and showcasing what you’re
            working on by pushing your work to GitHub.
        </p>
    </Slide>

    <Slide animate>
        <p class="font-bold text-5xl mb-8" data-id="1">
            Importance of GitHub Activity Post-Class
        </p>

        <p class="leading-snug">Ways you can get your activity up</p>
    </Slide>

    <Slide animate>
        <p class="font-bold text-5xl mb-8" data-id="1">
            Importance of GitHub Activity Post-Class
        </p>

        <p class="leading-snug">Ways you can get your activity up</p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">Join an Open Source Project</li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-5xl mb-8" data-id="1">
            Importance of GitHub Activity Post-Class
        </p>

        <p class="leading-snug">Ways you can get your activity up</p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">Join an Open Source Project</li>

            <li class="text-left text-3xl">
                Continue developing your Liftoff project
            </li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-5xl mb-8" data-id="1">
            Importance of GitHub Activity Post-Class
        </p>

        <p class="leading-snug">Ways you can get your activity up</p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">Join an Open Source Project</li>

            <li class="text-left text-3xl">
                Continue developing your Liftoff project
            </li>
            <li class="text-left text-3xl">
                Practice coding exercises on sites like HackerRank or Code Wars
            </li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-5xl mb-8" data-id="1">
            Importance of GitHub Activity Post-Class
        </p>

        <p class="leading-snug">Ways you can get your activity up</p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">Join an Open Source Project</li>

            <li class="text-left text-3xl">
                Continue developing your Liftoff project
            </li>
            <li class="text-left text-3xl">
                Practice coding exercises on sites like HackerRank or Code Wars
            </li>
            <li class="text-left text-3xl">
                If you had a project idea that wasn’t selected for your Liftoff
                group project, start working on that project!
            </li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">Questions 🙋🏾‍♂️</p>
    </Slide>
</Presentation>
