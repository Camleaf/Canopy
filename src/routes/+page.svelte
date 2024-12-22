<script lang="ts">
    import Footer from './Footer.svelte';
    import MainBody from './MainBody.svelte';
    import Background from './background.svelte';
    import AnimButtons from './animHomeButtons.svelte';
    import AboutMe from "./aboutMe.svelte"
    import Placeholder from "./placeholdertext.svelte"
    import {
	blur,
	crossfade,
	draw,
	fade,
	fly,
	scale,
	slide
    } from 'svelte/transition';
    import { onMount } from 'svelte'
    let ready = $state(false);
    onMount(() => ready = true);
    let cur_page = $state(1)
    function pagestatehandler(new_page:number): void{
        cur_page = new_page
    }
    //this onmount stops the background animation from flashing before javascript hydrates DOM

//figure out how to get stuff to fade so it looks like navbar is kinda there
</script>
{#if ready}
<div class="background">
    <Background></Background>
</div>
<div class = 'body' >
    <div>
        <div>
        <MainBody> </MainBody>
        </div>
        
        <div>
            <AnimButtons {cur_page} {pagestatehandler}></AnimButtons>
        </div>

        <div class="footer">
        {#if (cur_page == 1)}
            <Footer></Footer>
        {:else if (cur_page == 2)}
             <AboutMe> </AboutMe>
        {:else}
            <Placeholder></Placeholder>
        {/if}
        </div>
    </div>
</div>
{/if}
<style>

:global(body) {
    background-color:rgb(19, 12, 30);
    min-height: 100vh; /*make this gradient have a lighter edge or something, like a light source, maybe yellow*/
    overflow: hidden; 
}
div {
    display:block;
}

.body {

}
.footer {
    position:fixed;
    max-width: 350px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>