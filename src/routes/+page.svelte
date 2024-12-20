<script lang="ts">
	import Navbar from './navbar.svelte';
    import Footer from './Footer.svelte';
    import MainBody from './MainBody.svelte';
    import Background from './background.svelte';
    import projectimage from '$lib/assets/18784.jpg'
    import fade from './animations.svelte'
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

//work on fade animations
</script>

<div class="background">
<Background></Background>
</div>
<div id = 'navbar'>
<Navbar></Navbar>
</div>

<div>
    <div>
    <MainBody {data}> </MainBody>
    </div>


    <div>
    <Footer></Footer>
    </div>
</div>
<style>

:global(body) {
    background-color:rgb(19, 12, 30);
    min-height: 100vh;
}
div {
    display:block;
}

#navbar {
    margin-bottom: 110px;
}
.background {
    position: fixed;
    display: flex;
    z-index: -100;
}
</style>