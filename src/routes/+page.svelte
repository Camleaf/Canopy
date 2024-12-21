<script lang="ts">
	import Navbar from './navbar.svelte';
    import Footer from './Footer.svelte';
    import MainBody from './MainBody.svelte';
    import Background from './background.svelte';
    import projectimage from '$lib/assets/18784.jpg'
    import {
	blur,
	crossfade,
	draw,
	fade,
	fly,
	scale,
	slide
    } from 'svelte/transition';
        const data = [
        {
        title: "Portfolio",
        subtitle: "-Tech and Projects",
        text: "--> Tech Stack + Projects",
        image: projectimage,
        imgloc: "left",
        link: ""
        }
    ]
    import { onMount } from 'svelte'
    let ready = false;
    onMount(() => ready = true);
    //this onmount stops the background animation from flashing before javascript hydrates DOM

//figure out how to get stuff to fade so it looks like navbar is kinda there
</script>
{#if ready}
<div class="background">
    <Background></Background>
</div>
<div id = 'navbar'>
    <Navbar></Navbar>
</div>

<div class = 'body' >
    <div>
        <div>
        <MainBody {data}> </MainBody>
        </div>


        <div>
        <Footer></Footer>
        </div>
    </div>
</div>
{/if}
<style>

:global(body) {
    background-color:rgb(19, 12, 30);
    background-image: radial-gradient(ellipse at 0% 100% , #ffffff2c 0%,#5c5c9355 5%, rgb(19, 12, 30) 80%,rgb(25, 18, 36) 100%);
    min-height: 100vh; /*make this gradient have a lighter edge or something, like a light source, maybe yellow*/
}
div {
    display:block;
}

#navbar {
    margin-bottom: 150px;
    z-index:1
}
.body {

}
</style>