<script>
    import HomeSection from "./lib/sections/HomeSection.svelte";
    import ProjectsSection from "./lib/sections/ProjectsSection.svelte";
    import SkillsSection from "./lib/sections/SkillsSection.svelte";
    import FooterSection from "./lib/sections/FooterSection.svelte";
    import { onMount } from "svelte";

    onMount(() => {
        const observer = new IntersectionObserver((e) => {
            for (let i = 0; i < e.length; i++) {
                if (e[i].isIntersecting)
                    setTimeout(() => {
                        e[i].target.classList.add("animated");
                        observer.unobserve(e[i].target);
                    }, i * 350);
            }
        });

        document.querySelectorAll("[data-animate]").forEach((e) => observer.observe(e));
        scrollTo(0, 0);
    });
</script>

<main>
    <HomeSection />
    <ProjectsSection />
    <SkillsSection />
    <FooterSection />
</main>

<style>
    :global([data-animate]) {
        opacity: 0;
        position: relative;
        left: -30%;
        transition-duration: 350ms;
        transition-delay: 50ms;
    }

    :global(.animated) {
        opacity: 1;
        left: 0;
    }

    :global([data-animate="fade"]) {
        opacity: 0;
        position: relative;
        transition-duration: 500ms;
        transition-delay: 100ms;
    }

    :global(.animated[data-animate="fade"]) {
        opacity: 1;
    }

    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        overflow: hidden;
    }
</style>
