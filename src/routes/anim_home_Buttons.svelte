<script lang="ts">
    import homeimage from "$lib/assets/png/bx-home.png"
    import runimage from "$lib/assets/png/bxs-right-arrow.png"
    import projects from "$lib/assets/png/bxs-flask.png"
    import myinfo from "$lib/assets/png/bxs-id-card.png"
    import circle from "$lib/assets/png/bx-circle.png"
</script>





<div class="container">
    <div class="button" style="--delay:0"    >
        <img class="icon" src={circle}>
        <img class="icon" src={homeimage}> 

    </div>
    <div class="button" style="--delay:50">
        <img class="icon" src={circle}>
        <img class="icon" src={myinfo}> 

    </div>
    <div class="button" style="--delay:100">
        <img class="icon" src={circle}>
        <img class="icon" src={projects}> 

    </div>
    <div class="button" style="--delay:150">
        <img class="icon" src={circle}>
        <img class="icon" src={runimage}> 
    </div>
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

.icon {
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
}

@-webkit-keyframes orbit {
    from {  -webkit-transform: rotate(0deg) translateX(225px) rotate(0deg); }
    to   {  -webkit-transform: rotate(360deg) translateX(225px) rotate(-360deg); }
}
</style>