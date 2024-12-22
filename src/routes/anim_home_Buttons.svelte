<script lang="ts">
    import homeimage from "$lib/assets/png/bx-home.png"
    import runimage from "$lib/assets/png/bxs-right-arrow.png"
    import projects from "$lib/assets/png/bxs-flask.png"
    import myinfo from "$lib/assets/png/bxs-id-card.png"
    import circle from "$lib/assets/png/bx-circle.png"
    const randomstart = Math.floor(Math.random()*200)
</script>





<div class="container">
    <a class="button" style="--delay:{0+randomstart}"    
    href='./' draggable="false"><!-- svelte-ignore a11y_missing_attribute -->
        <img class="icon" src={circle} draggable="false">
        <img class="icon" src={homeimage} draggable="false"> 

    </a>
    <a class="button" style="--delay:{50+randomstart}"
    href='./' draggable="false"><!-- svelte-ignore a11y_missing_attribute -->
        <img class="icon" src={circle} draggable="false">
        <img class="icon" src={myinfo} draggable="false"> 

    </a>
    <a class="button" style="--delay:{100+randomstart}"
    href='./' draggable="false"><!-- svelte-ignore a11y_missing_attribute -->
        <img class="icon" src={circle} draggable="false">
        <img class="icon" src={projects} draggable="false"> 

    </a>
    <a class="button" style="--delay:{150+randomstart}"
    href='./' draggable="false"><!-- svelte-ignore a11y_missing_attribute -->
        <img class="icon" src={circle} draggable="false"> 
        <img class="icon" src={runimage} draggable="false"> 
    </a>
</div>







<style>
.container {
    position:fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.button {
    position:relative;
    display: flex;
    opacity: 50%;
    justify-content: center;
    align-items: center;
    animation: orbit 200s linear infinite;
    animation-delay: calc(-1s*var(--delay));
}

.icon::before{
}
.icon:nth-child(1){
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
    opacity: 100%;
    filter: contrast(40%) sepia(1) hue-rotate(60deg) saturate(100%);
}
.button:hover:nth-child(even){
    filter: contrast(40%) sepia(1) hue-rotate(120deg) saturate(100%);
}

@-webkit-keyframes orbit {
    from {  -webkit-transform: rotate(0deg) translateX(225px) rotate(0deg); }
    to   {  -webkit-transform: rotate(360deg) translateX(225px) rotate(-360deg); }
}
</style>