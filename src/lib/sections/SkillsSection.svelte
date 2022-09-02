<script>
    import SkillCard from "../SkillCard.svelte";
    import LogoLabel from "../LogoLabel.svelte";

    import skillsJSON from "../data/skills.json";

    let skills = skillsJSON.skills;
</script>

<main id="projects">
    <span id="dot" />

    <div id="title-block">
        <p id="title-name" data-animate>skills and interests</p>
        <p id="title-sub" data-animate>my skills & knowledge as a computer enthusiast and topics I'm interested in</p>
    </div>

    <div id="cards">
        {#each skills as skill}
            <SkillCard knowledgeLevel={skill.knowledgeLevel}>
                <span slot="title">{skill.name}</span>
                <span slot="labels" style="display: flex; flex-wrap: wrap;">
                    {#each skill.labels as label}
                        <LogoLabel logoImage={`/static_assets/svg/${label}.svg`} text={label} />
                    {/each}
                </span>
            </SkillCard>
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
        font-size: 72px;
        margin-top: -20px;
        margin-left: -3px;
    }

    #title-sub {
        font-size: 20px;
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
        }

        #cards {
            margin-left: 10px;
        }

        #dot {
            display: none;
        }
    }
</style>
