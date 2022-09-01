<script>
    import mouseIcon from "/src/assets/svg/mouse.svg";
    import github from "/src/assets/svg/github.svg";
    import discord from "/src/assets/svg/discord.svg";
    import reddit from "/src/assets/svg/reddit.svg";
</script>

<main>
    <span id="dot" />

    <div id="title-block">
        <p id="title-hi">
            <span style="color: var(--accent-primary);">HI</span> THERE! I'M
        </p>
        <p id="title-name">qewer</p>
        <p id="title-aka">aka. qewer33, qewer3322, qewer3333</p>

        <ul id="title-list">
            <li>developer</li>
            <li>designer</li>
            <li>linux enthusiast</li>
        </ul>

        <div class="button"><a href="#projects">PROJECTS</a></div>

        <div id="title-socials">
            <img src={github} alt="github" />
            <img src={discord} alt="discord" />
            <img src={reddit} alt="reddit" />
        </div>
    </div>

    <img src={mouseIcon} alt="mouse" id="scroll-img" />
    <p id="scroll-text">SCROLL FOR MORE</p>
</main>

<style>
    main {
        width: 80vw;
        height: 100vh;
        display: flex;
        align-items: center;
        border-left: 3px solid;
        border-image: linear-gradient(to top, var(--accent-primary) 60%, transparent 40%) 1;
    }

    #dot {
        position: relative;
        left: -12px;
        top: -135px;
        width: 20px;
        height: 20px;
        transform: rotate(45deg);
        background-color: var(--accent-primary);
    }

    #title-block {
        margin-left: 75px;
    }

    #title-hi {
        font-size: 19px;
        font-weight: 800;
        letter-spacing: 1px;
    }

    #title-name {
        font-size: 72px;
        margin-top: -20px;
        margin-left: -3px;
    }

    #title-aka {
        color: var(--text-secondary);
        font-size: 18px;
        margin-bottom: 15px;
        margin-left: 5px;
    }

    #title-list {
        list-style: none;
        margin-bottom: 20px;
    }

    #title-list li {
        color: var(--accent-primary);
        font-size: 24px;
        margin-top: 5px;
    }

    #title-list li::before {
        content: "-";
        font-weight: 400;
        margin-right: 5px;
    }

    #scroll-img {
        width: 40px;
        height: 40px;
        position: absolute;
        left: calc(50vw - 20px);
        bottom: 50px;
        animation: scroll-img-anim 2s ease-in-out infinite;
    }

    @keyframes scroll-img-anim {
        0% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-35px);
        }
        100% {
            transform: translateY(0);
        }
    }

    #scroll-text {
        width: 200px;
        text-align: center;
        position: absolute;
        right: 50%;
        left: 50%;
        transform: translateX(-50%);
        bottom: 50px;
        animation: scroll-text-anim 2s ease-in-out infinite;
    }

    @keyframes scroll-text-anim {
        0% {
            opacity: 0;
        }
        25% {
            opacity: 0;
        }
        50% {
            opacity: 100%;
        }
        100% {
            opacity: 0;
        }
    }

    #title-socials {
        display: flex;
        margin-top: 20px;
    }

    #title-socials img {
        margin-right: 10px;
        transform: scale(0.8);
        opacity: 60%;
        transition: 250ms;
    }

    #title-socials img:hover {
        opacity: 100%;
    }

    .button {
        width: 120px;
    }

    @media only screen and (max-width: 800px) {
        main {
            width: 100vw;
            border: none;
        }

        #title-block {
            position: absolute;
            left: 0;
            right: 0;
        }

        #dot,
        #scroll-img,
        #scroll-text {
            display: none;
        }
    }
</style>
