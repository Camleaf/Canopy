<script lang="ts">
</script>


<div class="container">
    <div class="bubbles">
        
        <span style="--i:21"></span>
        <span style="--i:24"></span>
        <span style="--i:12"></span>
        <span style="--i:16"></span>
        <span style="--i:14"></span>
        <span style="--i:16"></span>
        <span style="--i:19"></span>
        <span style="--i:22"></span>
        <span style="--i:21"></span>
        <span style="--i:11"></span>
        <span style="--i:13"></span>
        <span style="--i:14"></span>
        <span style="--i:25"></span>
        <span style="--i:13"></span>
        <span style="--i:24"></span>
        <span style="--i:20"></span>
        <span style="--i:15"></span>
        <span style="--i:16"></span>
        <span style="--i:11"></span>
        <span style="--i:17"></span>
        <span style="--i:26"></span>
        <span style="--i:18"></span>
        <span style="--i:13"></span>
        <span style="--i:21"></span>
        <span style="--i:24"></span>
        <span style="--i:12"></span>
        <span style="--i:16"></span>
        <span style="--i:14"></span>
        <span style="--i:16"></span>
        <span style="--i:19"></span>
        <span style="--i:22"></span>
        <span style="--i:21"></span>
        <span style="--i:11"></span>
        <span style="--i:13"></span>
        <span style="--i:14"></span>
        <span style="--i:25"></span>
        <span style="--i:13"></span>
        <span style="--i:24"></span>
        <span style="--i:20"></span>
        <span style="--i:15"></span>
        <span style="--i:16"></span>
        <span style="--i:11"></span>
        <span style="--i:17"></span>
        <span style="--i:26"></span>
        <span style="--i:18"></span>
        <span style="--i:13"></span>
    </div>
</div>



<style>

*{
    margin:0;
    padding:0;
    box-sizing: border-box;
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
    animation: animate 15s linear infinite;
    animation-duration: calc(200s/var(--i));

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
</style>