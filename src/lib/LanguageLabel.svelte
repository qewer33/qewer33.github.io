<script>
    export let language = "";

    const languages = {
        default: "#999999",
        rust: "#A58060",
        ruby: "#AE2828",
        qml: "#4B872F",
        svelte: "#ff4500",
        "p5.js": "#C53B70",
        python: "#FFC13A",
        html: "#D84923",
    };

    function getLanguageColor() {
        if (language.toLowerCase() in languages) return languages[language.toLowerCase()];
        else return languages.default;
    }
</script>

<main>
    <div style="background-color: {getLanguageColor()};" />
    <p>{language.toUpperCase()}</p>
</main>

<style>
    main {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 15px 30px;
        font-family: "JetBrains Mono";
        font-size: var(--fsize-text-body);
        font-weight: 800;
        letter-spacing: 3px;
        color: var(--text-primary);
        background-color: var(--background-secondary);
        margin-left: 20px;
    }

    div {
        width: 18px;
        height: 18px;
        margin-right: 15px;
        transform: rotate(45deg);
    }
</style>
