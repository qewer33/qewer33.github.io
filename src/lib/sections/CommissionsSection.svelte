<script>
    import ProjectCard from "../ProjectCard.svelte";

    import commissionsJSON from "../data/commissions.json";

    let commissions = commissionsJSON.commissions;
</script>

<main class="section" id="projects">
    <span id="dot" />

    <div id="title-block">
        <p data-animate id="title-name">commissions</p>
        <p data-animate id="title-sub">yes, I also do commissions sometimes (<i>whenever I feel like it</i>)</p>
    </div>

    <div id="cards">
        {#each commissions as commission}
            <ProjectCard
                thumbnailImage={commission.thumbnailImage}
                thumbnailScale={commission.thumbnailScale}
                visitURL={commission.url}
                language={commission.language}
            >
                <span slot="title">{commission.name}</span>

                <span slot="description">{commission.description}</span>
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
