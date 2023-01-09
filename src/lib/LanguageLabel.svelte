<script>
    export let language = "";
</script>

<main>
    {#if language.toLowerCase() === "rust"}
        <div style="background-color: #A58060;" />
    {:else if language.toLowerCase() === "ruby"}
        <div style="background-color: #AE2828;" />
    {:else if language.toLowerCase() === "qml"}
        <div style="background-color: #4B872F;" />
    {:else if language.toLowerCase() === "svelte"}
        <div style="background-color: #ff4500;" />
    {:else if language.toLowerCase() === "p5.js"}
        <div style="background-color: #C53B70;" />
    {:else}
        <div style="background-color: #999999;" />
    {/if}
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
