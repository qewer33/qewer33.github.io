<script>
    import ProjectCard from "../ProjectCard.svelte";

    import projectsJSON from "../data/projects.json";

    let projects = projectsJSON.projects;
</script>

<main id="projects">
    <span id="dot" />

    <div id="title-block">
        <p data-animate id="title-name">projects</p>
        <p data-animate id="title-sub">here are my most notable projects, hover or tap over them to get more info!</p>
    </div>

    <div id="cards">
        {#each projects as project, i}
            <ProjectCard
                thumbnailImage={project.thumbnailImage}
                thumbnailScale={project.thumbnailScale}
                visitURL={project.url}
                language={project.language}
            >
                <span slot="title">{project.name}</span>

                <span slot="description">{project.description}</span>
            </ProjectCard>
        {/each}
    </div>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        width: 80vw;
        border-left: 3px solid var(--accent-primary);
    }

    #dot {
        position: relative;
        left: -12px;
        top: 150px;
        width: 20px;
        height: 20px;
        transform: rotate(45deg);
        background-color: var(--accent-primary);
    }

    #title-block {
        margin-left: 75px;
        margin-top: 100px;
        margin-bottom: 50px;
    }

    #title-name {
        font-size: var(--fsize-title);
        margin-top: -20px;
        margin-left: -3px;
    }

    #title-sub {
        font-size: var(--fsize-text-body);
        color: var(--text-secondary);
    }

    #cards {
        display: flex;
        flex-wrap: wrap;
        max-width: 100%;
        margin-left: 75px;
        margin-bottom: 200px;
    }

    @media only screen and (max-width: 800px) {
        main {
            width: 100vw;
            border: none;
        }

        #title-block {
            margin-left: 10px;
            padding: 20px;
        }

        #cards {
            margin-left: 25px;
            align-items: center;
            justify-content: center;
        }

        #dot {
            display: none;
        }
    }
</style>
