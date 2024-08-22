<main class="section" id="about">
    <span id="dot" />

    <div id="title-block">
        <p data-animate id="title-name">about me</p>
        <p data-animate id="title-sub">who I am and what I do</p>
    </div>

    <ul id="about-list">
        <li data-animate>I am a university student, studying Computer Engineering.</li>
        <li data-animate>
            I am bilingual, speaking fluent 🇬🇧 English and my native language 🇹🇷 Turkish. I am also currently learning
            🇩🇪 German.
        </li>
        <li data-animate>I thoroughly enjoy 🖥️ computers, 🔧 engineering and 📝 scientific research.</li>
        <li data-animate>
            I enjoy contributing to free and open source software (FOSS) projects and getting involved in their
            communities.
        </li>
        <li data-animate>
            As a developer, I maintain a few small-scale open source projects and I also open source my experimental
            software and hardware projects.
        </li>
        <li data-animate>I have a keen eye on 🎨 graphic design. I enjoy software UI/UX research.</li>
        <li data-animate>
            I am also interested and have knowledge in subjects related to other engineering areas such as ⚡
            electronics and PCB design, ⚙️ mechanical CAD and 3D printing, 🪵 woodworking and whittling etc.
        </li>
        <li data-animate>
            For more info, check out my <a href="#projects">projects</a> and
            <a href="#skills">skills and interests</a>.
        </li>
        <li data-animate>
            If you wish to contact me, you can send an 📧 email to <a href="mailto:qewer@qewer.dev">qewer@qewer.dev</a>.
            You can also contact me via Discord (@qewer33) or Reddit (u/qewer3333).
        </li>
    </ul>
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

    #about-list {
        max-width: 75%;
        margin-left: 75px;
        margin-bottom: 100px;
    }

    #about-list li {
        font-size: var(--fsize-text-subheading);
        color: var(--text-primary);
        margin-bottom: 20px;
        padding-left: 10px;
    }

    #about-list li::marker {
        color: var(--accent-primary);
        content: "◆";
        font-size: 0.75em;
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

        #about-list {
            margin-left: 25px;
            align-items: center;
            justify-content: center;
            max-width: 90%;
        }

        #dot {
            display: none;
        }
    }
</style>
