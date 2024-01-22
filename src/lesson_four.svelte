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
        <p class="font-bold text-8xl">💻 Tech Lesson 4</p>
    </Slide>

    <Slide animate>
        <p class="font-bold text-8xl mb-8">📋 Agenda</p>
    </Slide>

    <Slide animate>
        <p class="font-bold text-4xl mb-8" data-id="1">📋 Agenda</p>

        <ul class="list-disc space-y-4">
            <li class="text-left text-3xl">
                Overview of different jobs in tech
            </li>
            <li class="text-left text-3xl">Reviewing PR's</li>
            <li class="text-left text-3xl">
                Presenting your project contributions
            </li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8" data-id="1">
            Overview of different jobs in tech
        </p>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">
            Overview of different jobs in tech
        </p>

        <p class="leading-snug">Software Engineer/Development</p>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">
            Overview of different jobs in tech
        </p>

        <p class="leading-snug">Software Engineer/Development</p>
        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">
                Software Engineers design, develop and maintain the architecture
                of the entirety of a computer software system.
            </li>
        </ul>
    </Slide>
    <Slide animate>
        <p class="font-bold text-6xl mb-8">
            Overview of different jobs in tech
        </p>

        <p class="leading-snug">Software Engineer/Development</p>
        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">
                Software Engineers design, develop and maintain the architecture
                of the entirety of a computer software system.
            </li>
            <li class="text-left text-3xl">
                Software Developers design, build and improve specific parts of
                a software program or application using programming languages &
                frameworks such as Java, JavaScript and React.
            </li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">
            Overview of different jobs in tech
        </p>

        <p class="leading-snug">
            Data (Data Science (Stats), Data Engineering)
        </p>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">
            Overview of different jobs in tech
        </p>

        <p class="leading-snug">
            Data (Data Science (Stats), Data Engineering)
        </p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">
                Data Scientists utilize data to identify the questions a team
                should be answering to drive the process improvements of an
                organization.
            </li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">
            Overview of different jobs in tech
        </p>

        <p class="leading-snug">
            Data (Data Science (Stats), Data Engineering)
        </p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">
                Data Scientists utilize data to identify the questions a team
                should be answering to drive the process improvements of an
                organization.
            </li>

            <li class="text-left text-3xl">
                Data Engineers design, maintain and optimize the infrastructure
                of the collection of data using tools such as SQL and Python.
            </li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">
            Overview of different jobs in tech
        </p>

        <p class="leading-snug">Business Analyst/Intelligence</p>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">
            Overview of different jobs in tech
        </p>

        <p class="leading-snug">Business Analyst/Intelligence</p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">
                Business Analysts assess data to develop and present solutions
                for organizational problems to executives and stakeholders.
            </li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">
            Overview of different jobs in tech
        </p>

        <p class="leading-snug">Business Analyst/Intelligence</p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">
                Business Analysts assess data to develop and present solutions
                for organizational problems to executives and stakeholders.
            </li>

            <li class="text-left text-3xl">
                Business Intelligence utilizes software such as Tableau or Excel
                to scan comprehensive business data and present the information
                in user-friendly formats such as reports, dashboards, charts and
                graphs.*
            </li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">
            Overview of different jobs in tech
        </p>

        <p class="leading-snug">Networking (Routers, switches, Comptia+)</p>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">
            Overview of different jobs in tech
        </p>

        <p class="leading-snug">Networking (Routers, switches, Comptia+)</p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">
                Network Engineers maintain and optimize an organization’s
                computer networks through the installation and configuration of
                software/hardware, network security and troubleshooting of
                network issues.
            </li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">
            Overview of different jobs in tech
        </p>

        <p class="leading-snug">Mainframe (Linux, COBOL, DB2, z/OS)</p>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">
            Overview of different jobs in tech
        </p>

        <p class="leading-snug">Mainframe (Linux, COBOL, DB2, z/OS)</p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">
                Mainframe developers create and maintain software for large
                computer systems, and typically work in large companies which
                are dependent upon these systems for their business.
            </li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">
            Overview of different jobs in tech
        </p>

        <p class="leading-snug">BizOps (Java, SQL)</p>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">
            Overview of different jobs in tech
        </p>

        <p class="leading-snug">BizOps (Java, SQL)</p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">
                BizOps Strategists work across the engineering, marketing and
                product teams to identify areas of improvements and develop
                strategies to better streamline operations driving revenue and
                growth.
            </li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">
            Overview of different jobs in tech
        </p>

        <p class="leading-snug">DevOps</p>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">
            Overview of different jobs in tech
        </p>

        <p class="leading-snug">DevOps</p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">
                DevOps Engineers work cross functionally alongside the
                Development and Operations teams to ensure efficient deployment,
                implementation and management of software.
            </li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">
            Overview of different jobs in tech
        </p>

        <p class="leading-snug">QA (Manual and Automation.)</p>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">
            Overview of different jobs in tech
        </p>

        <p class="leading-snug">QA (Manual and Automation.)</p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">
                Manual QA engineers create and run custom test cases for
                applications and continue to update test cases throughout the
                development cycle. QA automation engineers use scripts and
                developer tools to process repeated tests.
            </li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">
            Overview of different jobs in tech
        </p>

        <p class="leading-snug">IT/Technical Support</p>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">
            Overview of different jobs in tech
        </p>

        <p class="leading-snug">IT/Technical Support</p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">
                IT Support maintains the overall efficiency of an organization’s
                network through technical support, software/hardware
                installations & configuration, as well as, improving IT systems.
            </li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">
            Overview of different jobs in tech
        </p>

        <p class="leading-snug">Scrum/Product/TPM</p>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">
            Overview of different jobs in tech
        </p>

        <p class="leading-snug">Scrum/Product/TPM</p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">
                Scrum Masters lead agile teams through process improvements by
                utilizing the scrum framework to facilitate the communication
                between product owners and the development team.
            </li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">
            Overview of different jobs in tech
        </p>

        <p class="leading-snug">Scrum/Product/TPM</p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">
                Scrum Masters lead agile teams through process improvements by
                utilizing the scrum framework to facilitate the communication
                between product owners and the development team.
            </li>

            <li class="text-left text-3xl">
                Product Managers supervise the entire life cycle of a product
                from development through execution while employing business
                strategy to ensure the product’s success.
            </li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">
            Overview of different jobs in tech
        </p>

        <p class="leading-snug">Scrum/Product/TPM</p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">
                Scrum Masters lead agile teams through process improvements by
                utilizing the scrum framework to facilitate the communication
                between product owners and the development team.
            </li>

            <li class="text-left text-3xl">
                Product Managers supervise the entire life cycle of a product
                from development through execution while employing business
                strategy to ensure the product’s success.
            </li>

            <li class="text-left text-3xl">
                Technical Program Managers oversee all of the technical aspects
                of product development from idea to completion.
            </li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">Questions 🙋🏾‍♂️</p>
    </Slide>

    <Slide animate>
        <p class="font-bold text-4xl mb-8" data-id="1">📋 Agenda</p>

        <ul class="list-disc space-y-4">
            <li class="text-left text-3xl">
                ✅ Overview of different jobs in tech
            </li>
            <li class="text-left text-3xl">Reviewing PR's</li>
            <li class="text-left text-3xl">
                Presenting your project contributions
            </li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8" data-id="1">Reviewing PR's</p>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">Questions 🙋🏾‍♂️</p>
    </Slide>

    <Slide animate>
        <p class="font-bold text-4xl mb-8" data-id="1">📋 Agenda</p>

        <ul class="list-disc space-y-4">
            <li class="text-left text-3xl">
                ✅ Overview of different jobs in tech
            </li>
            <li class="text-left text-3xl">✅ Reviewing PR's</li>
            <li class="text-left text-3xl">
                Presenting your project contributions
            </li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8" data-id="1">
            Presenting your project contributions
        </p>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8" data-id="1">
            Presenting your project contributions
        </p>

        <p class="leading-snug">
            A big part of advocating for yourself at work is knowing how to talk
            about your individual contributions. This is also incredibly
            important for y'all as you transition into the Apprenticeship
            program because you’ll need to be able to talk about the work that
            you did on your group project to help yourself stand out from other
            potential candidates.
        </p>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8" data-id="1">
            Presenting your project contributions
        </p>

        <p class="leading-snug">
            When talking about your work, you should be able to:
        </p>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8" data-id="1">
            Presenting your project contributions
        </p>

        <p class="leading-snug">
            When talking about your work, you should be able to:
        </p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">
                Clearly explain the entire project
            </li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8" data-id="1">
            Presenting your project contributions
        </p>

        <p class="leading-snug">
            When talking about your work, you should be able to:
        </p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">
                Clearly explain the entire project
            </li>

            <li class="text-left text-3xl">
                Identify the features that you focused on with a high-level
                explanation
            </li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8" data-id="1">
            Presenting your project contributions
        </p>

        <p class="leading-snug">
            When talking about your work, you should be able to:
        </p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">
                Clearly explain the entire project
            </li>

            <li class="text-left text-3xl">
                Identify the features that you focused on with a high-level
                explanation
            </li>

            <li class="text-left text-3xl">
                Talk through the tech stack that you used for your features
            </li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8" data-id="1">
            Presenting your project contributions
        </p>

        <p class="leading-snug">
            When talking about your work, you should be able to:
        </p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">
                Clearly explain the entire project
            </li>

            <li class="text-left text-3xl">
                Identify the features that you focused on with a high-level
                explanation
            </li>

            <li class="text-left text-3xl">
                Talk through the tech stack that you used for your features
            </li>

            <li class="text-left text-3xl">
                Talk through the blockers that you overcame while working on the
                project
            </li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8" data-id="1">
            Presenting your project contributions
        </p>

        <p class="leading-snug">
            When talking about your work, you should be able to:
        </p>

        <ul class="list-disc space-y-4 pl-6 mt-8">
            <li class="text-left text-3xl">
                Clearly explain the entire project
            </li>

            <li class="text-left text-3xl">
                Identify the features that you focused on with a high-level
                explanation
            </li>

            <li class="text-left text-3xl">
                Talk through the tech stack that you used for your features
            </li>

            <li class="text-left text-3xl">
                Talk through the blockers that you overcame while working on the
                project
            </li>

            <li class="text-left text-3xl">
                Be able to identify the ways that you would improve on the MVP
            </li>
        </ul>
    </Slide>

    <Slide animate>
        <p class="font-bold text-6xl mb-8">Questions 🙋🏾‍♂️</p>
    </Slide>
</Presentation>
