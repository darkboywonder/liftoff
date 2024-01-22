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
        <p class="font-bold text-8xl">💻 Tech Lesson 6</p>
    </Slide>

    <Slide animate>
        <p class="font-bold text-8xl mb-8">📋 Agenda</p>
    </Slide>

    <Slide animate>
        <p class="font-bold text-4xl mb-8" data-id="1">📋 Agenda</p>

        <ul class="list-disc space-y-4">
            <li class="text-left text-3xl">What is a retrospective?</li>
            <li class="text-left text-3xl">What is a project close-out?</li>
            <li class="text-left text-3xl">Planning project work post-class</li>
            <li class="text-left text-3xl">Celebrate</li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8" data-id="1">
            What is a retrospective?
        </p>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">What is a retrospective?</p>

        <p class="leading-snug">
            A retrospective or retro is an opportunity for agile development
            teams to reflect on past work together and identify ways to improve.
            Agile teams hold retrospective meetings after a time-boxed period of
            work is complete.
        </p>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">What is a retrospective?</p>

        <p class="leading-snug">
            During the retrospective, the team discusses what went well, what
            did not go as planned, and how to make the next work period better.
        </p>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">
            Reasons to have a retrospective(retro)
        </p>

        <ul class="list-disc space-y-4 pl-6 mt-8"></ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">
            Reasons to have a retrospective(retro)
        </p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">
                Review end of sprint/project launch
                <ul class="list-disc space-y-3 pl-8 mt-2"></ul>
            </li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">
            Reasons to have a retrospective(retro)
        </p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">
                Review end of sprint/project launch
                <ul class="list-disc space-y-3 pl-8">
                    <li>Fix miscommunications</li>
                </ul>
            </li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">
            Reasons to have a retrospective(retro)
        </p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">
                Review end of sprint/project launch
                <ul class="list-disc space-y-3 pl-8">
                    <li>Fix miscommunications</li>
                    <li>Address missed deadlines/expectations</li>
                </ul>
            </li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">
            Reasons to have a retrospective(retro)
        </p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">
                Review end of sprint/project launch
                <ul class="list-disc space-y-3 pl-8">
                    <li>Fix miscommunications</li>
                    <li>Address missed deadlines/expectations</li>
                    <li>Record lessons to learn from</li>
                </ul>
            </li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">
            Reasons to have a retrospective(retro)
        </p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">
                Review end of sprint/project launch
                <ul class="list-disc space-y-3 pl-8">
                    <li>Fix miscommunications</li>
                    <li>Address missed deadlines/expectations</li>
                    <li>Record lessons to learn from</li>
                </ul>
            </li>
            <li class="text-left text-3xl">Team building</li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">Retrospective best practices</p>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">Retrospective best practices</p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">
                Be as blameless as possible
                <ul class="list-disc space-y-3 pl-8">
                    <li>Use "we" language</li>
                </ul>
            </li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">Retrospective best practices</p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">
                Be as blameless as possible
                <ul class="list-disc space-y-3 pl-8">
                    <li>Use "we" language</li>
                </ul>
            </li>
            <li class="text-left text-3xl">Enact changes discussed</li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">Retrospective best practices</p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">
                Be as blameless as possible
                <ul class="list-disc space-y-3 pl-8">
                    <li>Use "we" language</li>
                </ul>
            </li>
            <li class="text-left text-3xl">Enact changes discussed</li>
            <li class="text-left text-3xl">Pros/Cons</li>
        </ul>
    </Slide>
    <Slide animate>
        <p class="font-bold text-6xl mb-8">Retrospective best practices</p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">
                Be as blameless as possible
                <ul class="list-disc space-y-3 pl-8">
                    <li>Use "we" language</li>
                </ul>
            </li>
            <li class="text-left text-3xl">Enact changes discussed</li>
            <li class="text-left text-3xl">Pros/Cons</li>
            <li class="text-left text-3xl">Start - Stop - Continue</li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="leading-snug">
            I encourage every group to take the time to conduct a retrospective
            while using the start/stop/continue process if time allows. Any
            feedback received should be kept in mind for when you work with your
            group again or future teams.
        </p>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">Retro questions 🙋🏾‍♂️</p>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8" data-id="1">📋 Agenda</p>

        <ul class="list-disc space-y-4">
            <li class="text-left text-3xl">✅ What is a retrospective?</li>
            <li class="text-left text-3xl">What is a project close-out?</li>
            <li class="text-left text-3xl">Planning project work post-class</li>
            <li class="text-left text-3xl">celebrate</li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">What is a project close-out?</p>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">What is a project close-out?</p>

        <p class="leading-snug">
            The practice of a close-out finalizes all associated activities
            across all phases in order to formally close the project and
            transfer the completed or cancelled project as appropriate.
        </p>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">What is a project close-out?</p>

        <p class="leading-snug">
            While the goal of a retrospective is to reduce existing issues and
            improve team collaboration for the upcoming sprint, the goal of
            project close-out is to provide closure to the project before its
            next transition.
        </p>
    </Slide>
    <Slide animate>
        <p class="font-bold text-6xl mb-8">
            Reasons to have a project close-out
        </p>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">
            Reasons to have a project close-out
        </p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">
                Project enters Launch or new phase
            </li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">
            Reasons to have a project close-out
        </p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">
                Project enters Launch or new phase
            </li>
            <li class="text-left text-3xl">
                Project transitions to a new team
            </li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">
            Reasons to have a project close-out
        </p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">
                Project enters Launch or new phase
            </li>
            <li class="text-left text-3xl">
                Project transitions to a new team
            </li>
            <li class="text-left text-3xl">Project/feature sunsets</li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">Project close-out best practices</p>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">Project close-out best practices</p>
        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">
                Queue up final working environments
            </li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">Project close-out best practices</p>
        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">
                Queue up final working environments
            </li>
            <li class="text-left text-3xl">
                Exchange ownership of servers/services
            </li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">Project close-out best practices</p>
        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">
                Queue up final working environments
            </li>
            <li class="text-left text-3xl">
                Exchange ownership of servers/services
            </li>
            <li class="text-left text-3xl">Triage tasks on project board</li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">Project close-out best practices</p>
        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">
                Queue up final working environments
            </li>
            <li class="text-left text-3xl">
                Exchange ownership of servers/services
            </li>
            <li class="text-left text-3xl">Triage tasks on project board</li>
            <li class="text-left text-3xl">Update documentation</li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">Project close-out best practices</p>
        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">
                Queue up final working environments
            </li>
            <li class="text-left text-3xl">
                Exchange ownership of servers/services
            </li>
            <li class="text-left text-3xl">Triage tasks on project board</li>
            <li class="text-left text-3xl">Update documentation</li>
            <li class="text-left text-3xl">
                hold final meeting to answer any questions
            </li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">Close-out your projects</p>
    </Slide>
    <Slide animate>
        <p class="font-bold text-6xl mb-8">Close-out your projects</p>
        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">
                Merge any final approved work into main
            </li>
        </ul>
    </Slide>
    <Slide animate>
        <p class="font-bold text-6xl mb-8">Close-out your projects</p>
        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">
                Merge any final approved work into main
            </li>
            <li class="text-left text-3xl">
                Ensure everything is working locally for each member of your
                group.
            </li>
        </ul>
    </Slide>
    <Slide animate>
        <p class="font-bold text-6xl mb-8">Close-out your projects</p>
        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">
                Merge any final approved work into main
            </li>
            <li class="text-left text-3xl">
                Ensure everything is working locally for each member of your
                group.
            </li>
            <li class="text-left text-3xl">Triage tasks</li>
        </ul>
    </Slide>
    <Slide animate>
        <p class="font-bold text-6xl mb-8">Close-out your projects</p>
        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">
                Merge any final approved work into main
            </li>
            <li class="text-left text-3xl">
                Ensure everything is working locally for each member of your
                group.
            </li>
            <li class="text-left text-3xl">Triage tasks</li>
            <li class="text-left text-3xl">Update documentation</li>
        </ul>
    </Slide>
    <Slide animate>
        <p class="font-bold text-6xl mb-8">Close-out your projects</p>
        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">
                Merge any final approved work into main
            </li>
            <li class="text-left text-3xl">
                Ensure everything is working locally for each member of your
                group.
            </li>
            <li class="text-left text-3xl">Triage tasks</li>
            <li class="text-left text-3xl">Update documentation</li>
            <li class="text-left text-3xl">
                Update application keys for third-party API’s
            </li>
        </ul>
    </Slide>
    <Slide animate>
        <p class="font-bold text-6xl mb-8">Close-out your projects</p>
        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">
                Merge any final approved work into main
            </li>
            <li class="text-left text-3xl">
                Ensure everything is working locally for each member of your
                group.
            </li>
            <li class="text-left text-3xl">Triage tasks</li>
            <li class="text-left text-3xl">Update documentation</li>
            <li class="text-left text-3xl">
                Update application keys for third-party API’s
            </li>
            <li class="text-left text-3xl">
                Share domain knowledge on parts of the app that were siloed
            </li>
        </ul>
    </Slide>
    <Slide animate>
        <p class="font-bold text-6xl mb-8">Close-out your projects</p>
        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">
                Merge any final approved work into main
            </li>
            <li class="text-left text-3xl">
                Ensure everything is working locally for each member of your
                group.
            </li>
            <li class="text-left text-3xl">Triage tasks</li>
            <li class="text-left text-3xl">Update documentation</li>
            <li class="text-left text-3xl">
                Update application keys for third-party API’s
            </li>
            <li class="text-left text-3xl">
                Share domain knowledge on parts of the app that were siloed
            </li>
            <li class="text-left text-3xl">
                Call out any features that are still in flux
            </li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">Close-out your projects</p>
        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">
                Merge any final approved work into main
            </li>
            <li class="text-left text-3xl">
                Ensure everything is working locally for each member of your
                group.
            </li>
            <li class="text-left text-3xl">Triage tasks</li>
            <li class="text-left text-3xl">Update documentation</li>
            <li class="text-left text-3xl">
                Update application keys for third-party API’s
            </li>
            <li class="text-left text-3xl">
                Share domain knowledge on parts of the app that were siloed
            </li>
            <li class="text-left text-3xl">
                Call out any features that are still in flux
            </li>
            <li class="text-left text-3xl">Fork your GitHub repo</li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">Close-out questions 🙋🏾‍♂️</p>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8" data-id="1">📋 Agenda</p>

        <ul class="list-disc space-y-4">
            <li class="text-left text-3xl">✅ What is a retrospective?</li>
            <li class="text-left text-3xl">✅ What is a project close-out?</li>
            <li class="text-left text-3xl">Planning project work post-class</li>
            <li class="text-left text-3xl">celebrate</li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">Planning project work post-class</p>
    </Slide>
    <Slide animate>
        <p class="font-bold text-6xl mb-8">Planning project work post-class</p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">
                Work on projects that excite you and try to commit to committing
            </li>
            <li class="text-left text-3xl">
                If you agree to continue working with a group, try to create a
                weekly cadence
            </li>
            <li class="text-left text-3xl">
                Try to work on projects where you're forced to learn something
                new
            </li>
            <li class="text-left text-3xl">
                Tackle the hardest thing right out the gate and then build
                around it
            </li>
            <li class="text-left text-3xl">Tinker, don't build</li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">Questions 🙋🏾‍♂️</p>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">🎂🎉🥳 Celebrate! 🥳🎉🎂</p>
    </Slide>
</Presentation>
