<script lang="ts">
    import Footer from './pageFooter.svelte';
    import Background from './background.svelte';
    import AnimButtons from './animHomePage.svelte';
    import AboutMe from "./aboutMe.svelte"
    import Placeholder from "./placeHolder.svelte"
    import GameInfo from "./gameInfo.svelte"
    import TTTgame from "./TTTgame.svelte"
    import {
	blur,
	crossfade,
	draw,
	fade,
	fly,
	scale,
	slide
    } from 'svelte/transition';
    import { cubicIn, cubicOut } from 'svelte/easing';
    import { onMount } from 'svelte'
    let ready = $state(false);
    onMount(() => {
        let tictactoemode:string = $derived((window.innerWidth > 1429) ? "both":"replace")
        ready = true;
    });
    let cur_page = $state(1)
    function pagestatehandler(new_page:number): void{
        cur_page = new_page
    }
    let containerstate = $derived((cur_page == 4) ? "left": "")
    
    //this onmount stops the background animation from flashing before javascript hydrates DOM
    //tic tac toe works on desktop at minimum 1430px width and 680 height
    //main view animation works at minimum 680 height
    //
//figure out how to get stuff to fade so it looks like navbar is kinda there
</script>
{#if ready}
<div class="background">
    <Background></Background>
</div>
<div class = 'body' style="--height:{window.innerHeight}">
    <div class = "container{containerstate}" style="--pos:-{window.innerWidth/4}px;"in:fade={{ easing: cubicIn, duration: 300, delay: 500}} out:fade>
            <AnimButtons {cur_page} {pagestatehandler}></AnimButtons>
            {#if (cur_page == 1)}
                <div class="footer" in:fade={{ easing: cubicIn, duration: 300, delay: 500}} out:fade>
                <Footer></Footer>
                </div>
            {:else if (cur_page == 2)}
                <div class="footer" in:fade={{ easing: cubicIn, duration: 300, delay: 500}} out:fade>
                    <AboutMe> </AboutMe>
                    </div>
            {:else if (cur_page == 3)}
                <div class="footer" in:fade={{ easing: cubicIn, duration: 300, delay: 500}} out:fade>
                    <Placeholder></Placeholder>
                </div>
            {:else}
            <div class="footer" style="--pos:-{window.innerWidth/4}px;" in:fade={{ easing: cubicIn, duration: 300, delay: 500}} out:fade>
                <GameInfo></GameInfo>
                <TTTgame {cur_page} {pagestatehandler}></TTTgame>
            </div>
            {/if}
    </div>
</div>
{/if}
<style>

:global(body) {
    background-color:rgb(19, 12, 30);
    min-height: calc(1px*var(--height));
    max-height: calc(1px*var(--height));
    max-width:100%;
    overflow: hidden; 
}
div {
    display:block;
}

.body {
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
}
.footer {
    position:fixed;
    min-width: 350px;
    max-width: 350px;
    top: 50%;
    left: 50%;
    transition: transform 1000ms ease-in-out;
    transform: translate(-50%, -50%);
}
.container {
    position:fixed;
    top: 50%;
    left: 50%;
    transition: transform 1000ms ease-in-out;
    transform: translate(-50% -50%);
}
.containerleft {
    position:fixed;
    top: 50%;
    left: 50%;
    transition: transform 1000ms ease-in-out;
    transform: translateX(calc(var(--pos)/1.5));
    

}
@media (max-width: 1430px) {
    .container {
        position:fixed;
        top: 50%;
        left: 50%;
        transition: transform 1000ms ease-in-out;
        transform: translate(-50% -50%);
    }
    .containerleft {
        position:fixed;
        top: 50%;
        left: 50%;
        transition: transform 1000ms ease-in-out;
        transform: translateX(-200vh);
    }

}
</style>