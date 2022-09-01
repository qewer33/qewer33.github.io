<script>
    import HomeSection from "./lib/sections/HomeSection.svelte";
    import ProjectsSection from "./lib/sections/ProjectsSection.svelte";
    import SkillsSection from "./lib/sections/SkillsSection.svelte";
    import FooterSection from "./lib/sections/FooterSection.svelte";
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
        width: 100vw;
        height: 100%;
        overflow: hidden;
    }
</style>
