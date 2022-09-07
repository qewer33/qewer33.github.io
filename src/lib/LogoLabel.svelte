<script>
    export let logoImage = "";
    export let text = "";
</script>

<main>
    <img src={logoImage} alt="" />
    <p>{text.toUpperCase()}</p>
</main>

<style>
    main {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 15px 20px;
        font-family: "JetBrains Mono";
        font-size: var(--fsize-text-body);
        font-weight: 800;
        letter-spacing: 3px;
        color: var(--text-primary);
        background-color: var(--background-primary);
        margin-right: 20px;
        margin-bottom: 20px;
    }

    img {
        width: 28px;
        height: 28px;
        margin-right: 15px;
    }

    @media only screen and (max-width: 800px) {
        main {
            padding: 10px 15px;
        }
    }
</style>
