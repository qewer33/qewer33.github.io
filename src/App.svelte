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
    <div id="alert-banner">
        <div id="alert-banner-text">Help Türkiye recover from the devastating earthquakes!</div>
        <div id="alert-banner-buttons">
            <a
                class="alert-banner-button"
                href="https://www.google.com/search?q=T%C3%BCrkiye+earthquakes"
                target="_blank"
                rel="noopener noreferrer"
            >
                More Info
            </a>
            <a
                class="alert-banner-button"
                href="https://www.kizilay.org.tr/Bagis/BagisYap/405/donations-for-earthquake-in-pazarcik"
                target="_blank"
                rel="noopener noreferrer"
            >
                Donate to the Red Crescent
            </a>
            <a
                class="alert-banner-button"
                href="https://ahbap.org/disasters-turkey"
                target="_blank"
                rel="noopener noreferrer"
            >
                Donate to AHBAP
            </a>
            <a
                class="alert-banner-button"
                href="https://en.afad.gov.tr/earthquake-campaign"
                target="_blank"
                rel="noopener noreferrer"
            >
                Donate to AFAD
            </a>
        </div>
        <div id="alert-banner-text" style="font-size: 18px; margin-bottom: 0; margin-top: 15px; opacity: 0.75;">
            If you have spare cash, please consider donating to one of the organizations above to help more than 10
            million victims in eastern Türkiye
        </div>
    </div>
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

    #alert-banner {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        padding: 20px;
        background-color: #e30a17;
        text-align: center;
    }

    #alert-banner-text {
        color: white;
        margin-bottom: 15px;
        font-size: 24px;
    }

    #alert-banner-buttons {
        display: flex;
    }

    .alert-banner-button {
        color: white;
        background-color: black;
        text-decoration: none;
        border-radius: 999px;
        padding: 5px 15px;
        margin-left: 10px;
    }

    .alert-banner-button:first-child {
        margin-left: 0;
    }
</style>
