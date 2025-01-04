<script lang="ts">
    import homeimage from "$lib/assets/genericpng/bx-home.png"
    import runimage from "$lib/assets/genericpng/bxs-right-arrow.png"
    import projects from "$lib/assets/genericpng/bxs-flask.png"
    import myinfo from "$lib/assets/genericpng/bxs-id-card.png"
    import circle from "$lib/assets/genericpng/bx-circle.png"
    const randomstart = Math.floor(Math.random()*200);
    let { substate, cur_page=0, pagestatehandler } = $props();
</script>

<div>
    <button onclick={() => pagestatehandler(1)} class="button" style="--delay:{0+randomstart};--opc:{(substate==1)?0.15:0.5}"
     draggable="false"><!-- svelte-ignore a11y_missing_attribute -->
        <img class="icon" src={circle} draggable="false">
        <img class="icon" src={homeimage} draggable="false"> 

    </button>
    <button onclick={() => pagestatehandler(2)} class="button" style="--delay:{50+randomstart};--opc:{(substate==1)?0.15:0.5}"
     draggable="false"><!-- svelte-ignore a11y_missing_attribute -->
        <img class="icon" src={circle} draggable="false">
        <img class="icon" src={myinfo} draggable="false"> 

    </button>
    <button onclick={() => pagestatehandler(3)} class="button" style="--delay:{100+randomstart};--opc:{(substate==1)?0.15:0.5}"
    draggable="false"><!-- svelte-ignore a11y_missing_attribute -->
        <img class="icon" src={circle} draggable="false">
        <img class="icon" src={projects} draggable="false"> 

    </button>
    <button onclick={() => pagestatehandler(4)} class="button" style="--delay:{150+randomstart};--opc:{(substate==1)?0.15:0.5}"
    draggable="false"><!-- svelte-ignore a11y_missing_attribute -->
        <img class="icon" src={circle} draggable="false"> 
        <img class="icon" src={runimage} draggable="false"> 
    </button>
</div>  






<style>
.button {
    position:relative;
    display: flex;
    opacity: 50%;
    justify-content: center;
    align-items: center;
    background: transparent;
    border: none;
    animation: orbit 200s linear infinite;
    animation-delay: calc(-1s*var(--delay));
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    opacity:var(--opc);
    transition:
        width 1000ms,
        height 1000ms,
        opacity 1000ms;
}

.icon {
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
}
.icon:nth-child(1){
    border-radius:200%;
    width:150px;
    height:150px;  
    position:absolute;
}
.icon:nth-child(2){
    width:80px;
    height:80px;   
    position:absolute;
    

}
.button:hover {
    filter: contrast(40%) sepia(1) hue-rotate(60deg) saturate(100%);
}
.button:hover:nth-child(even){
    filter: contrast(40%) sepia(1) hue-rotate(120deg) saturate(100%);
}
.button:focus {
    opacity: 100%;
    filter: contrast(40%) sepia(1) hue-rotate(60deg) saturate(100%);
}
.button:focus:nth-child(even){
    filter: contrast(40%) sepia(1) hue-rotate(120deg) saturate(100%);
}
@-webkit-keyframes orbit {
    from {  -webkit-transform: rotate(0deg) translateX(250px) rotate(0deg);}
    to   {  -webkit-transform: rotate(360deg) translateX(250px) rotate(-360deg);}
}
@media (max-height: 530px) {
    @media(max-width:290px){
        .icon:nth-child(1){
            border-radius:200%;
            width:112px;
            height:112px;  
            position:absolute;
        }
        .icon:nth-child(2){
            width:60px;
            height:60px;   
            position:absolute;
        }
        .button:nth-child(1) {
            display:flex;
            opacity: 50%;
            transform:translateY(80px) translateX(70px);
        }
        .button:nth-child(2) {
            display:flex;
            opacity: 50%;
            transform:translateY(80px) translateX(-70px);
        }
        .button:nth-child(4) {
            display:flex;
            opacity: 50%;
            transform:translateY(200px);
        }
    }
}
@media (max-width: 650px) {
    .button {
        position:relative;
        display: none;
        opacity: 50%;
        justify-content: center;
        align-items: center;
        background: transparent;
        border: none;
        animation: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        user-select: none;
    }
    .button:nth-child(1) {
        display:flex;
        opacity: 50%;
        transform:translateY(80px) translateX(70px);
    }
    .button:nth-child(2) {
        display:flex;
        opacity: 50%;
        transform:translateY(80px) translateX(-70px);
    }
    .button:nth-child(4) {
        display:flex;
        opacity: 50%;
        transform:translateY(200px);
    }
}
</style>