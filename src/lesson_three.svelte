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
        <p class="font-bold text-8xl">💻 Tech Lesson 3</p>
    </Slide>

    <Slide animate>
        <p class="font-bold text-8xl mb-8">📋 Agenda</p>
    </Slide>

    <Slide animate>
        <p class="font-bold text-4xl mb-8" data-id="1">📋 Agenda</p>

        <ul class="list-disc space-y-4">
            <li class="text-left text-3xl">Asking technical questions</li>
            <li class="text-left text-3xl">Giving good feedback</li>
            <li class="text-left text-3xl">Creating pull requests</li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8" data-id="1">
            Asking Technical Questions
        </p>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">Asking Technical Questions</p>

        <p class="leading-snug">
            What can be considered a good technical question?
        </p>
    </Slide>
    <Slide animate>
        <p class="font-bold text-6xl mb-8">Asking Technical Questions</p>

        <p class="leading-snug">
            What can be considered a good technical question?
        </p>
        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">
                When the question is scoped to a specific issue
            </li>
        </ul>
    </Slide>
    <Slide animate>
        <p class="font-bold text-6xl mb-8">Asking Technical Questions</p>

        <p class="leading-snug">
            What can be considered a good technical question?
        </p>
        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">
                When the question is scoped to a specific issue
            </li>
            <li class="text-left text-3xl">
                When the question is backed by confidence from the programmer
                that alternate avenues aren’t available and the problem still
                exists
            </li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">Asking Technical Questions</p>

        <p class="leading-snug">
            The question might not be the right question if:
        </p>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">Asking Technical Questions</p>

        <p class="leading-snug">
            The question might not be the right question if:
        </p>
        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">
                Starts with “How do you do _____”
            </li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">Asking Technical Questions</p>

        <p class="leading-snug">
            The question might not be the right question if:
        </p>
        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">
                Starts with “How do you do _____”
            </li>
            <li class="text-left text-3xl">
                Starts with “I don’t know how to _____”
            </li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">Asking Technical Questions</p>

        <p class="leading-snug">How do we get to the right question?</p>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">Asking Technical Questions</p>

        <p class="leading-snug text-3xl">
            How do we get to the right question?
        </p>

        <p class="leading-snug text-3xl">
            If we’re debugging / asking about a concept we can:
        </p>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">Asking Technical Questions</p>

        <p class="leading-snug text-3xl">
            How do we get to the right question?
        </p>

        <p class="leading-snug text-3xl">
            If we’re debugging / asking about a concept we can:
        </p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">test your hypothesis (concept)</li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">Asking Technical Questions</p>

        <p class="leading-snug text-3xl">
            How do we get to the right question?
        </p>

        <p class="leading-snug text-3xl">
            If we’re debugging / asking about a concept we can:
        </p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">test your hypothesis (concept)</li>
            <li class="text-left text-3xl">Do the basics</li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">Asking Technical Questions</p>

        <p class="leading-snug text-3xl">
            How do we get to the right question?
        </p>

        <p class="leading-snug text-3xl">
            If we’re debugging / asking about a concept we can:
        </p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">test your hypothesis (concept)</li>
            <li class="text-left text-3xl">Do the basics</li>
            <li class="text-left text-3xl">
                Try to understand what’s going on
            </li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">Asking Technical Questions</p>

        <p class="leading-snug text-3xl">
            How do we get to the right question?
        </p>

        <p class="leading-snug text-3xl">
            If we’re debugging / asking about a concept we can:
        </p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">test your hypothesis (concept)</li>
            <li class="text-left text-3xl">Do the basics</li>
            <li class="text-left text-3xl">
                Try to understand what’s going on
            </li>
            <li class="text-left text-3xl">Prep to share your code</li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">Asking Technical Questions</p>

        <p class="leading-snug text-3xl">
            How do we get to the right question?
        </p>

        <p class="leading-snug text-3xl">
            If we’re debugging / asking about a concept we can:
        </p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">test your hypothesis (concept)</li>
            <li class="text-left text-3xl">Do the basics</li>
            <li class="text-left text-3xl">
                Try to understand what’s going on
            </li>
            <li class="text-left text-3xl">Prep to share your code</li>
            <li class="text-left text-3xl">
                prep your question based on your findings
            </li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">Asking Technical Questions</p>

        <p class="leading-snug text-3xl">
            How do we get to the right question?
        </p>

        <p class="leading-snug text-3xl">
            If we’re debugging / asking about a concept we can:
        </p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">test your hypothesis (concept)</li>
            <li class="text-left text-3xl">Do the basics</li>
            <li class="text-left text-3xl">
                Try to understand what’s going on
            </li>
            <li class="text-left text-3xl">Prep to share your code</li>
            <li class="text-left text-3xl">
                prep your question based on your findings
            </li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">Asking Technical Questions</p>

        <p class="text-3xl mb-8">Test your hypothesis</p>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">Asking Technical Questions</p>

        <p class="text-3xl mb-8">Test your hypothesis</p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">
                Recreate what you’re trying to answer
            </li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">Asking Technical Questions</p>

        <p class="text-3xl mb-8">Test your hypothesis</p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">
                Recreate what you’re trying to answer
            </li>

            <li class="text-left text-3xl">Run it in real-time</li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">Asking Technical Questions</p>

        <p class="text-3xl mb-8">Do the basics:</p>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">Asking Technical Questions</p>

        <p class="text-3xl mb-8">Do the basics:</p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">
                Check your code for typos and syntax errors
            </li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">Asking Technical Questions</p>

        <p class="text-3xl mb-8">Do the basics:</p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">
                Check your code for typos and syntax errors
            </li>
            <li class="text-left text-3xl">
                Check your logs for written errors
            </li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">Asking Technical Questions</p>

        <p class="text-3xl mb-8">Do the basics:</p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">
                Check your code for typos and syntax errors
            </li>
            <li class="text-left text-3xl">
                Check your logs for written errors
            </li>
            <li class="text-left text-3xl">
                <strong>READ YOUR ERRORS IF THERE ARE ERRORS</strong>
            </li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">Asking Technical Questions</p>

        <p class="text-3xl mb-8">Try to understand what's going on</p>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">Asking Technical Questions</p>

        <p class="text-3xl mb-8">Try to understand what's going on</p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl mt-8">
                create context to pose the right question by reviewing each line
            </li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">Asking Technical Questions</p>

        <p class="text-3xl mb-8">Try to understand what's going on</p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">
                create context to pose the right question by reviewing each line
            </li>
            <li class="text-left text-3xl">
                test your expectations at each line
            </li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">Asking Technical Questions</p>

        <p class="text-3xl mb-8">Try to understand what's going on</p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">
                create context to pose the right question by reviewing each line
            </li>
            <li class="text-left text-3xl">
                test your expectations at each line
            </li>
            <li class="text-left text-3xl">
                The issue might pop out at you and be an easy fix.
            </li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">Asking Technical Questions</p>

        <p class="text-3xl mb-8">Try to understand what's going on</p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">
                create context to pose the right question by reviewing each line
            </li>
            <li class="text-left text-3xl">
                test your expectations at each line
            </li>
            <li class="text-left text-3xl">
                The issue might pop out at you and be an easy fix.
            </li>
            <li class="text-left text-3xl">
                Google to get better understanding
            </li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">Asking Technical Questions</p>

        <p class="text-3xl mb-8">Try to understand what's going on</p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">
                create context to pose the right question by reviewing each line
            </li>
            <li class="text-left text-3xl">
                test your expectations at each line
            </li>
            <li class="text-left text-3xl">
                The issue might pop out at you and be an easy fix.
            </li>
            <li class="text-left text-3xl">
                Google to get better understanding
            </li>
            <li class="text-left text-3xl">
                Recreate the issue in another part of the project or in a
                different project
            </li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">Asking Technical Questions</p>

        <p class="text-3xl mb-8">Prepare to share your code</p>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">Asking Technical Questions</p>

        <p class="text-3xl mb-8">Prepare to share your code</p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">
                Make sure it’s formatted to standard
            </li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">Asking Technical Questions</p>

        <p class="text-3xl mb-8">Prepare to share your code</p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">
                Make sure it’s formatted to standard
            </li>
            <li class="text-left text-3xl">
                Ensure the current code recreates the error
            </li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">Asking Technical Questions</p>

        <p class="text-3xl mb-8">Prepare to share your code</p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">
                Make sure it’s formatted to standard
            </li>
            <li class="text-left text-3xl">
                Ensure the current code recreates the error
            </li>
            <li class="text-left text-3xl">
                Push up your current state to Github incase the other developer
                wants to work with it first-hand
            </li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8" data-id="1">
            Questions on asking questions 🙋🏾‍♂️
        </p>
    </Slide>

    <Slide animate>
        <p class="font-bold text-4xl mb-8" data-id="1">📋 Agenda</p>

        <ul class="list-disc space-y-4">
            <li class="text-left text-3xl">✅ Asking technical questions</li>
            <li class="text-left text-3xl">Giving good feedback</li>
            <li class="text-left text-3xl">Creating pull requests</li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8" data-id="1">Giving Good Feedback</p>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8" data-id="1">Giving Good Feedback</p>

        <p class="leading-snug">
            Giving good feedback for a pull request rides a fine line between
            being helpful and being opinionated. We should lead with kindness
            and reduce opinions as much as we can, as for most of us, how we
            write code is an extension of ourselves.
        </p>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8" data-id="1">Giving Good Feedback</p>

        <p class="leading-snug text-3xl">Before giving feedback</p>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8" data-id="1">Giving Good Feedback</p>

        <p class="leading-snug text-3xl">Before giving feedback</p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">
                Understand the full purpose of the pull request
            </li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8" data-id="1">Giving Good Feedback</p>

        <p class="leading-snug text-3xl">Before giving feedback</p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">
                Understand the full purpose of the pull request
            </li>
            <li class="text-left text-3xl">Run the work locally</li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8" data-id="1">Giving Good Feedback</p>

        <p class="leading-snug text-3xl">Before giving feedback</p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">
                Understand the full purpose of the pull request
            </li>
            <li class="text-left text-3xl">Run the work locally</li>
            <li class="text-left text-3xl">
                look at every line/change and research if we don’t know
            </li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8" data-id="1">Giving Good Feedback</p>

        <p class="leading-snug text-3xl">Areas to give feedback</p>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8" data-id="1">Giving Good Feedback</p>

        <p class="leading-snug text-3xl">Areas to give feedback</p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">
                Suggest in areas to improve areas where there are bugs or could
                be bugs
            </li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8" data-id="1">Giving Good Feedback</p>

        <p class="leading-snug text-3xl">Areas to give feedback</p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">
                Suggest in areas to improve areas where there are bugs or could
                be bugs
            </li>
            <li class="text-left text-3xl">
                Suggest in areas to make the code more developer friendly
            </li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8" data-id="1">Giving Good Feedback</p>

        <p class="leading-snug text-3xl">Areas to give feedback</p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">
                Suggest in areas to improve areas where there are bugs or could
                be bugs
            </li>
            <li class="text-left text-3xl">
                Suggest in areas to make the code more developer friendly
            </li>
            <li class="text-left text-3xl">
                Suggest in areas to help reduce complexity
            </li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8" data-id="1">Giving Good Feedback</p>

        <p class="leading-snug text-3xl">Areas to give feedback</p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">
                Suggest in areas to improve areas where there are bugs or could
                be bugs
            </li>
            <li class="text-left text-3xl">
                Suggest in areas to make the code more developer friendly
            </li>
            <li class="text-left text-3xl">
                Suggest in areas to help reduce complexity
            </li>
            <li class="text-left text-3xl">
                Suggest in areas that nudge the dev to adhere to agreed upon
                conventions
            </li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8" data-id="1">Giving Good Feedback</p>

        <p class="leading-snug text-3xl">Areas to avoid feedback</p>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8" data-id="1">Giving Good Feedback</p>

        <p class="leading-snug text-3xl">Areas to avoid feedback</p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">
                Suggesting an update to the dev’s coding styles to match your
                style
            </li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8" data-id="1">Giving Good Feedback</p>

        <p class="leading-snug text-3xl">Areas to avoid feedback</p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">
                Suggesting an update to the dev’s coding styles to match your
                style
            </li>
            <li class="text-left text-3xl">
                Suggesting alternative approaches to solving the problem just
                because you don’t like how the current path looks
            </li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8" data-id="1">Giving Good Feedback</p>

        <p class="leading-snug">How to give good feedback</p>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8" data-id="1">Giving Good Feedback</p>

        <p class="leading-snug text-3xl">How to give good feedback</p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">Suggest/ask don’t demand</li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8" data-id="1">Giving Good Feedback</p>

        <p class="leading-snug text-3xl">How to give good feedback</p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">Suggest/ask don’t demand</li>
            <li class="text-left text-3xl">
                Lead with compliments before suggesting
            </li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8" data-id="1">Giving Good Feedback</p>

        <p class="leading-snug text-3xl">How to give good feedback</p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">Suggest/ask don’t demand</li>
            <li class="text-left text-3xl">
                Lead with compliments before suggesting
            </li>
            <li class="text-left text-3xl">
                Lead with clarification before suggesting
            </li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8" data-id="1">Giving Good Feedback</p>

        <p class="leading-snug text-3xl">How to give good feedback</p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">Suggest/ask don’t demand</li>
            <li class="text-left text-3xl">
                Lead with compliments before suggesting
            </li>
            <li class="text-left text-3xl">
                Lead with clarification before suggesting
            </li>
            <li class="text-left text-3xl">
                Leave code suggestions that can be applied to the code
            </li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8" data-id="1">Giving Good Feedback</p>

        <p class="leading-snug text-3xl">Example</p>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8" data-id="1">Giving Good Feedback</p>

        <p class="leading-snug text-3xl">Example</p>

        <p class="leading-snug mt-8">
            “I think we can simplify the code here if we do… <strong
                >[suggestion]</strong
            >
            simplifying it here could be helpful for newcomers in the future.”
        </p>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8" data-id="1">Giving Good Feedback</p>

        <p class="leading-snug text-3xl">Example</p>

        <p class="leading-snug mt-8">
            “This work looks solid. One thing I would suggest is maybe we
            extract this to a named method so others know what this code block
            is trying to accomplish?”
        </p>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8" data-id="1">Giving Good Feedback</p>

        <p class="leading-snug text-3xl">Example</p>

        <p class="leading-snug mt-8">
            “Are we trying to do <strong>[x]</strong> here? If so, I think we
            can simplify this approach by doing <strong>[x]</strong>. This way
            we might help alleviate the n+1 issue I'm seeing.”
        </p>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8" data-id="1">Feedback 🙋🏾‍♂️</p>
    </Slide>

    <Slide animate>
        <p class="font-bold text-4xl mb-8" data-id="1">📋 Agenda</p>

        <ul class="list-disc space-y-4">
            <li class="text-left text-3xl">✅ Asking Technical Questions</li>
            <li class="text-left text-3xl">✅ Giving Good Feedback</li>
            <li class="text-left text-3xl">Creating Pull Requests</li>
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
