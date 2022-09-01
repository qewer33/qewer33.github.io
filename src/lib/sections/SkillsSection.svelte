<script>
    import SkillCard from "../SkillCard.svelte";
    import LogoLabel from "../LogoLabel.svelte";

    import projectsJSON from "../data/projects.json";

    let projects = projectsJSON.projects;
</script>

<main id="projects">
    <span id="dot" />

    <div id="title-block">
        <p id="title-name">skills and interests</p>
        <p id="title-sub">my skills & knowledge as a computer enthusiast and topics I'm interested in</p>
    </div>

    <div id="cards">
        <SkillCard knowledgeLevel={88}>
            <span slot="title">Programming & Software Development</span>
            <span slot="labels" style="display: flex; flex-wrap: wrap;">
                <LogoLabel logoImage="/src/assets/svg/rust.svg" text="rust" />
                <LogoLabel logoImage="/src/assets/svg/ruby.svg" text="ruby" />
                <LogoLabel logoImage="/src/assets/svg/bash.svg" text="bash" />
                <LogoLabel logoImage="/src/assets/svg/qt.svg" text="qml" />
                <LogoLabel logoImage="/src/assets/svg/neovim.svg" text="neovim" />
                <LogoLabel logoImage="/src/assets/svg/vscode.svg" text="vscode" />
            </span>
        </SkillCard>

        <SkillCard knowledgeLevel={50}>
            <span slot="title">Computer Graphics & Creative Coding</span>
            <span slot="labels" style="display: flex; flex-wrap: wrap;">
                <LogoLabel logoImage="/src/assets/svg/processing.svg" text="processing" />
                <LogoLabel logoImage="/src/assets/svg/p5js.svg" text="p5.js" />
            </span>
        </SkillCard>

        <SkillCard knowledgeLevel={85}>
            <span slot="title">Linux & Free Software</span>
            <span slot="labels" style="display: flex; flex-wrap: wrap;">
                <LogoLabel logoImage="/src/assets/svg/arch.svg" text="arch linux" />
                <LogoLabel logoImage="/src/assets/svg/kde.svg" text="kde" />
                <LogoLabel logoImage="/src/assets/svg/bash.svg" text="bash" />
            </span>
        </SkillCard>

        <SkillCard knowledgeLevel={60}>
            <span slot="title">Web Development</span>
            <span slot="labels" style="display: flex; flex-wrap: wrap;">
                <LogoLabel logoImage="/src/assets/svg/html.svg" text="html" />
                <LogoLabel logoImage="/src/assets/svg/css.svg" text="css" />
                <LogoLabel logoImage="/src/assets/svg/javascript.svg" text="javascript" />
                <LogoLabel logoImage="/src/assets/svg/svelte.svg" text="svelte" />
            </span>
        </SkillCard>

        <SkillCard knowledgeLevel={30}>
            <span slot="title">Game Development</span>
            <span slot="labels" style="display: flex; flex-wrap: wrap;">
                <LogoLabel logoImage="/src/assets/svg/godot.svg" text="godot game engine" />
            </span>
        </SkillCard>

        <SkillCard knowledgeLevel={60}>
            <span slot="title">Graphic Design</span>
            <span slot="labels" style="display: flex; flex-wrap: wrap;">
                <LogoLabel logoImage="/src/assets/svg/figma.svg" text="figma" />
                <LogoLabel logoImage="/src/assets/svg/inkscape.svg" text="inkscape" />
                <LogoLabel logoImage="/src/assets/svg/gimp.svg" text="gimp" />
            </span>
        </SkillCard>

        <SkillCard knowledgeLevel={40}>
            <span slot="title">Computer Aided Design & 3D Printing</span>
            <span slot="labels" style="display: flex; flex-wrap: wrap;">
                <LogoLabel logoImage="/src/assets/svg/freecad.svg" text="freecad" />
                <LogoLabel logoImage="/src/assets/svg/kicad.svg" text="kicad" />
                <LogoLabel logoImage="/src/assets/svg/cura.svg" text="cura" />
            </span>
        </SkillCard>

        <SkillCard knowledgeLevel={20}>
            <span slot="title">PC Building</span>
            <span slot="labels" style="display: flex; flex-wrap: wrap;">
                <LogoLabel logoImage="/src/assets/svg/amd.svg" text="Ryzen 5 5600" />
                <LogoLabel logoImage="/src/assets/svg/amd.svg" text="Radeon RX 6500 XT" />
            </span>
        </SkillCard>
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
