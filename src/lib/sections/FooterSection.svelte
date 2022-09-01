<script>
    import logo from "/src/assets/png/logo_no_bg.png";
</script>

<main>
    <span id="dot" />

    <div id="content">
        <img src={logo} alt="logo" />
        <div id="text">
            <p>
                this website is designed by
                <a href="https://lynithdev.github.io">lynith</a>
                and developed by
                <a href="https://www.qewer.dev">me (qewer)</a>
            </p>
            <p>
                you can find the source code
                <a href="https://github.com/qewer33/qewer33.github.io">here on github</a>
            </p>
            <p>
                licensed under the
                <a href="https://www.gnu.org/licenses/gpl-3.0.en.html"> gplv3 free software license </a>
            </p>
        </div>
    </div>
</main>

<style>
    main {
        width: 80vw;
        height: 600px;
        display: flex;
        align-items: center;
        border-left: 3px solid;
        border-image: linear-gradient(to bottom, var(--accent-primary) 60%, transparent 40%) 1;
    }

    #dot {
        position: relative;
        left: -12px;
        top: 65px;
        width: 20px;
        height: 20px;
        transform: rotate(45deg);
        background-color: var(--accent-primary);
    }

    #content {
        display: flex;
        align-items: center;
        margin-left: 25px;
        margin-top: 125px;
    }

    img {
        width: 72px;
        height: 72px;
        margin-right: 10px;
    }

    p {
        color: var(--text-secondary);
    }

    p,
    a {
        font-size: 20px;
    }

    @media only screen and (max-width: 800px) {
        main {
            width: 100vw;
            border: none;
        }

        #dot {
            display: none;
        }
    }
</style>
