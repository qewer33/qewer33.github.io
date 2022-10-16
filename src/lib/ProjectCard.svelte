<script>
    import LanguageLabel from "./LanguageLabel.svelte";

    export let thumbnailImage = "";
    export let thumbnailScale = "1";
    export let visitURL = "";
    export let language = "";
</script>

<main data-animate>
    <button />
    <img src={thumbnailImage} alt="" style="transform: translate(-50%, -50%) scale({thumbnailScale});" />

    <div id="content">
        <div style="display: flex;">
            <a class="button" style="transform: none;" href={visitURL} target="_blank" rel="noopener noreferrer">
                VISIT
            </a>
            {#if language !== ""}
                <LanguageLabel bind:language />
            {/if}
        </div>
        <p><slot name="description" /></p>
        <h1><slot name="title" /></h1>
    </div>
</main>

<style>
    main {
        display: flex;
        flex-wrap: wrap;
        width: 500px;
        height: 250px;
        margin-right: 30px;
        margin-top: 30px;
        background-color: var(--background-secondary);
        padding: 20px;
        transform: skew(-5deg);
        overflow: hidden;
        border: 2px solid var(--background-secondary);
    }

    main:hover > img,
    button:focus ~ img {
        opacity: 45%;
        filter: blur(2px);
    }

    main:hover > div,
    button:focus ~ div {
        z-index: 2 !important;
        opacity: 100% !important;
        transform: translateX(0%) !important;
    }

    button {
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: none;
        border: none;
        outline: none;
    }

    img {
        position: absolute;
        z-index: 0;
        top: 50%;
        left: 50%;
        transition: 250ms;
    }

    #content {
        z-index: 0;
        display: flex;
        flex-direction: column-reverse;
        opacity: 0%;
        transform: translateX(-20%);
        transition: 250ms;
    }

    h1 {
        margin-bottom: 5px;
    }

    p {
        font-size: var(--fsize-text-body);
        margin-bottom: 20px;
    }

    @media only screen and (max-width: 800px) {
        main {
            transform: none;
        }

        h1 {
            word-break: break-all;
        }

        p {
            word-wrap: break-word;
        }
    }
</style>
