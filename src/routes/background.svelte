<script lang="ts">
    function generate_starts(){
        let starts:any[] = []
        let bubbles:number[] = [
                            11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,11,12,13,14,15,16,17,18,19,20,21,22,23,24,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,11,12,13,14,15,16,17,18,19,20,21,22,23,24,24
                            ].sort(() => 0.5 - Math.random());
        for (let i:number = 0; i<bubbles.length; i++){
            starts.push([bubbles[i],Math.floor(Math.random()*8)])
        }
        return starts
    }
    const bubbles = generate_starts()   
</script>

<div class="background">
<div class="container">
    <div class="bubbles">
        {#each bubbles as [speed,start]}
            <span style="--start:{start};--i:{speed};"></span>
        {/each}
        
    </div>
</div>
</div>


<style>

*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}
.background{
    position: fixed;
    display: flex;
    z-index: -100;
    top:0px;
}
.container{
    position: relative;
    width: 100%;
    height:100vh;
    overflow: hidden;
}
.bubbles {
    position: relative;
    display: flex;
    z-index: -100;
}
.bubbles span{
    position: relative;
    width:30px;
    height: 30px;
    background: #4fc3dc;
    margin: 0 4px;
    border-radius: 50%;
    box-shadow: 0 0 0 10px #4fc3dc44,
    0 0 50px #4fc3dc,
    0 0 100px #4fc3dc;
    animation: animate calc(200s/var(--i)) linear infinite;
    animation-delay: calc(-1s * var(--start)); 

}
.bubbles span:nth-child(even){
    background:#53d681;
    box-shadow: 0 0 0 10px #53d68144,
    0 0 50px #53d681,
    0 0 100px #53d681;
}
@keyframes animate {
    0% {
        transform: translateY(120vh) translateX(-200vh) scale(0);
    }
    100% {
        transform: translateY(-10vh) translateX(100vh) scale(1);
    }
}
@media (max-width: 650px) {
    @keyframes animate {
    0% {
        transform: translateY(100vh) translateX(-10vh) scale(0);
    }
    100% {
        transform: translateY(-10vh) translateX(100vh) scale(1);
    }
}
}
</style>