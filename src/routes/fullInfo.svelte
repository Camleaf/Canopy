<script lang="ts">

    let {substate, substatehandler} = $props();
    import PlaceHolder from "./placeHolder.svelte"
</script>


<div class="container">
    <div class="center">
    <PlaceHolder></PlaceHolder>
    </div>
    <div class="resetbutton">
        <button class="reset CanopyFont" onclick={() => substatehandler(0)}>Return</button>
    </div>
</div>

<!-- make scrolling animation on a stationary div where elements which go below or above its contents fade-->

<style>
.center {
    position:fixed;
    top:20%;
    left:20%;
}
.resetbutton {
    position:fixed;
    text-align:center;
    top:100%;
    left:42%;
}
.reset:hover {
    transform: scale(1.05);
    filter: brightness(0.75);
    transition: transform 50ms ease-in-out;
}
.reset {
    font-size: 2rem;
    border-radius: 10px;
}
.container{
    position:fixed;
    top: 50%;
    left: 50%;
    min-width: 750px;
    max-width: 750px;
    min-height: 450px;
    max-height: 450px;
    border-radius: 40px;
    border-width:30px;
    transition: transform 1000ms ease-in-out;
    transform: translate(-50%, -50%);
}
/* add return button for mobile*/
</style>