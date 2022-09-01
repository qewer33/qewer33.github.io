<script>
    import SkillCard from "../SkillCard.svelte";
    import LogoLabel from "../LogoLabel.svelte";

    import rust from "../../assets/svg/rust.svg";
    import ruby from "../../assets/svg/ruby.svg";
    import bash from "../../assets/svg/bash.svg";
    import qt from "../../assets/svg/qt.svg";
    import vscode from "../../assets/svg/vscode.svg";
    import neovim from "../../assets/svg/neovim.svg";
    import processing from "../../assets/svg/processing.svg";
    import p5js from "../../assets/svg/p5js.svg";
    import arch from "../../assets/svg/arch.svg";
    import kde from "../../assets/svg/kde.svg";
    import html from "../../assets/svg/html.svg";
    import css from "../../assets/svg/css.svg";
    import javascript from "../../assets/svg/javascript.svg";
    import svelte from "../../assets/svg/svelte.svg";
    import godot from "../../assets/svg/godot.svg";
    import figma from "../../assets/svg/figma.svg";
    import inkscape from "../../assets/svg/inkscape.svg";
    import gimp from "../../assets/svg/gimp.svg";
    import freecad from "../../assets/svg/freecad.svg";
    import kicad from "../../assets/svg/kicad.svg";
    import cura from "../../assets/svg/cura.svg";
    import amd from "../../assets/svg/amd.svg";

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
                <LogoLabel logoImage={rust} text="rust" />
                <LogoLabel logoImage={ruby} text="ruby" />
                <LogoLabel logoImage={bash} text="bash" />
                <LogoLabel logoImage={qt} text="qml" />
                <LogoLabel logoImage={neovim} text="neovim" />
                <LogoLabel logoImage={vscode} text="vscode" />
            </span>
        </SkillCard>

        <SkillCard knowledgeLevel={50}>
            <span slot="title">Computer Graphics & Creative Coding</span>
            <span slot="labels" style="display: flex; flex-wrap: wrap;">
                <LogoLabel logoImage={processing} text="processing" />
                <LogoLabel logoImage={p5js} text="p5.js" />
            </span>
        </SkillCard>

        <SkillCard knowledgeLevel={85}>
            <span slot="title">Linux & Free Software</span>
            <span slot="labels" style="display: flex; flex-wrap: wrap;">
                <LogoLabel logoImage={arch} text="arch linux" />
                <LogoLabel logoImage={kde} text="kde" />
                <LogoLabel logoImage={bash} text="bash" />
            </span>
        </SkillCard>

        <SkillCard knowledgeLevel={60}>
            <span slot="title">Web Development</span>
            <span slot="labels" style="display: flex; flex-wrap: wrap;">
                <LogoLabel logoImage={html} text="html" />
                <LogoLabel logoImage={css} text="css" />
                <LogoLabel logoImage={javascript} text="javascript" />
                <LogoLabel logoImage={svelte} text="svelte" />
            </span>
        </SkillCard>

        <SkillCard knowledgeLevel={30}>
            <span slot="title">Game Development</span>
            <span slot="labels" style="display: flex; flex-wrap: wrap;">
                <LogoLabel logoImage={godot} text="godot game engine" />
            </span>
        </SkillCard>

        <SkillCard knowledgeLevel={60}>
            <span slot="title">Graphic Design</span>
            <span slot="labels" style="display: flex; flex-wrap: wrap;">
                <LogoLabel logoImage={figma} text="figma" />
                <LogoLabel logoImage={inkscape} text="inkscape" />
                <LogoLabel logoImage={gimp} text="gimp" />
            </span>
        </SkillCard>

        <SkillCard knowledgeLevel={40}>
            <span slot="title">Computer Aided Design & 3D Printing</span>
            <span slot="labels" style="display: flex; flex-wrap: wrap;">
                <LogoLabel logoImage={freecad} text="freecad" />
                <LogoLabel logoImage={kicad} text="kicad" />
                <LogoLabel logoImage={cura} text="cura" />
            </span>
        </SkillCard>

        <SkillCard knowledgeLevel={20}>
            <span slot="title">PC Building</span>
            <span slot="labels" style="display: flex; flex-wrap: wrap;">
                <LogoLabel logoImage={amd} text="Ryzen 5 5600" />
                <LogoLabel logoImage={amd} text="Radeon RX 6500 XT" />
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
