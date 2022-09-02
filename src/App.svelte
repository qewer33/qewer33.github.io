<script>
    import HomeSection from "./lib/sections/HomeSection.svelte";
    import ProjectsSection from "./lib/sections/ProjectsSection.svelte";
    import SkillsSection from "./lib/sections/SkillsSection.svelte";
    import FooterSection from "./lib/sections/FooterSection.svelte";
    import { onMount } from "svelte";

    onMount(() => {
        const observer = new IntersectionObserver((e) => {
        for (let i = 0; i < e.length; i++) {
            if (e[i].isIntersecting) setTimeout(() => {
            // if (e[i].intersectionRatio > 0) setTimeout(() => {
                e[i].target.classList.add("animated");
                observer.unobserve(e[i].target);
            }, i * 350);
        };
    });

        document.querySelectorAll('[data-animate]').forEach((e) => observer.observe(e));
        scrollBy(0, 1);
    })

</script>

<main>
    <HomeSection />
    <ProjectsSection />
    <SkillsSection />
    <FooterSection />
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        overflow: hidden;
    }
</style>
