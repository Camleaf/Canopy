<script lang="ts">


    import Footer from './pageFooter.svelte';
    import Background from './background.svelte';
    import AnimButtons from './animHomePage.svelte';
    import AboutMe from "./aboutMe.svelte"
    import Placeholder from "./placeHolder.svelte"
    import GameInfo from "./gameInfo.svelte"
    import TTTgame from "./TTTgame.svelte"
    import EventHandling from './EventHandling/KeyHandle.svelte';
    import { cubicIn, cubicOut } from 'svelte/easing';
    import { onMount } from 'svelte'
	import FullInfo from './fullInfo.svelte';
	import Header from './Header.svelte';
    import ProjectsPage from './ProjectsPage.svelte';
    import {
	blur,
	crossfade,
	draw,
	fade,
	fly,
	scale,
	slide
    } from 'svelte/transition';
	import FullProjects from './FullProjects.svelte';



    let ready = $state(false);
    onMount(() => {
        let tictactoemode:string = $derived((window.innerWidth > 1429) ? "both":"replace")
        ready = true;
    });
    //function and reactive state definitions
    let cur_page = $state(1)
    let substate = $state(0)
    function pagestatehandler(new_page:number): void{
        if (substate==0){
            cur_page = new_page
        }
    }



    function substatehandler(new_state:number): void{
        substate = new_state
    }



    let containerstate = $derived((cur_page == 4) ? "left": "")

</script>


<EventHandling {substate} {substatehandler}> </EventHandling>


{#if ready}
<div class="background">
    <Background></Background>
</div>
<div class = 'body' style="--height:{window.innerHeight}">

    <div class = "container{containerstate}" style="--pos:-{window.innerWidth/4}px;"in:fade={{ easing: cubicIn, duration: 300, delay: 500}} out:fade>
            
            <AnimButtons {substate} {cur_page} {pagestatehandler}></AnimButtons>

            <!-- render substate before normal state-->

            {#if (cur_page==2&&substate==1)}
                <div style="opacity:20%" class="footer" out:fade={{ easing: cubicOut, duration: 300, delay: 700}}>
                    <AboutMe {substate} {substatehandler}> </AboutMe>
                </div>

                <div in:fade={{ easing: cubicIn, duration: 300, delay: 500}} out:fade>
                    <FullInfo {substate} {substatehandler}></FullInfo>
                </div>



            {:else if (cur_page==3&&substate==1)}
                <div style="opacity:20%" class="footer" out:fade={{ easing: cubicOut, duration: 300, delay: 700}}>
                    <ProjectsPage {substate} {substatehandler}> </ProjectsPage>
                </div>

                <div in:fade={{ easing: cubicIn, duration: 300, delay: 500}} out:fade>
                    <FullProjects {substate} {substatehandler}></FullProjects>
                </div>


            <!-- render normal state--> 
            {:else if (cur_page == 1)}a
                <div class="footer" in:fade={{ easing: cubicIn, duration: 300, delay: 500}} out:fade>
                <Footer></Footer>
                </div>
            




            {:else if (cur_page == 2)}
                <div class="footer" in:fade={{ easing: cubicIn, duration: 300, delay: 500}} out:fade>
                    <AboutMe {substate} {substatehandler}> </AboutMe>
                </div>



            {:else if (cur_page == 3)}
                <div class="footer" in:fade={{ easing: cubicIn, duration: 300, delay: 500}} out:fade>
                    <ProjectsPage {substate} {substatehandler}> </ProjectsPage>
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
    overflow: scroll; 
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
@media (max-width: 1200px) {
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
@media (max-height: 530px) {
    @media(max-width:290px){
        .footer {
            position:fixed;
            min-width: 290px;
            max-width: 290px;
            top: 45%;
            left: 50%;
            transition: transform 1000ms ease-in-out;
            transform: translate(-50%, -50%);
        }
        .container {
            position:fixed;
            top: 45%;
            left: 50%;
            transition: transform 1000ms ease-in-out;
            transform: translate(-50% -50%);
        }
        .containerleft {
            position:fixed;
            top: 45%;
            left: 50%;
            transition: transform 1000ms ease-in-out;
            transform: translateX(-200vh);
        }
    }
}
</style>