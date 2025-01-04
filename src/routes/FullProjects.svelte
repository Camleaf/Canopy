<script lang="ts">
    import { json } from '@sveltejs/kit';
    import projectsraw from './jsondata/projectsdata.json';
    import {fade} from 'svelte/transition';
    import { cubicIn, cubicOut } from 'svelte/easing';
    let {substate, substatehandler} = $props();
    const projectsdata: {[key:string]:any} = projectsraw
    const images: any = import.meta.glob(['$lib/assets/projectimages/*.svg'], { eager: true, as: 'url' });
    
    
</script>
<!-- this works for now however i could do a splice on my each loop to simulate scrolling but then i get the fade in and out-->
<div class="container">
    <div class="captiontext">
        <div class="CanopyFont">
            <h1> Projects</h1>
        </div>
    </div>      
    <div class="center">
        <div class="gamecontainer">
            {#each Object.entries(projectsdata) as [key,page], index (key)} <!-- add dynamic data-->
                <div in:fade={{ duration: 200 }} class="data">
                    <a href={page.sitelink} target="_blank">
                        <div class="cell" tabindex="0" onkeyup={()=>{}} role="button" > <!--add onclick event-->
                            <img src={images["/src/" + page.imagelink]}/>
                        </div>
                    </a>
                    <div class="textfilter">
                        {#each page.textdata.split("<br>") as textdata}
                                <h3 class="jetbrainsmono">
                                    {textdata}
                                </h3>
                        {/each}
                    </div>
                </div>
            {/each}
        </div>
    </div>
    <div class="resetbutton">
        <button class="reset CanopyFont" onclick={() => substatehandler(0)}>Return</button>
    </div>
</div>

<!-- make scrolling animation on a stationary div where elements which go below or above its contents fade-->

<style>
img {
    width:65%;  
    height:65%;
    border-radius:20px;
}
a {
    height:140px;
}
.data {
    display: grid;
    grid-template-columns: 120px 1fr;
    max-height:150px;
    column-gap: 5px;
}
.textfilter {
    max-width: 790px;
    transform: translateY(-15px) translateX(30px);
}
.captiontext {
    position:fixed;
    left:40%;
    top:-20%;
    font-size: 1rem;
}
.center {
    position:fixed;
    left:-9%;
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
.gamecontainer{
    display:grid;
    grid-template-columns: repeat(1,auto);
    width:930px;
    height:450px;
    margin-top: 10px;
    margin-bottom:-10px;
    overflow: scroll;   
    -ms-overflow-style: none;
    scrollbar-width: none;
}
.gamecontainer::-webkit-scrollbar { 
    display: none;
}
.cell{
    display: flex;
    justify-content: center;
    align-items: center;
    width:140px;
    height:140px;
    margin-top:5px;
    margin-left:5px;
    margin-right:0px;
    margin-bottom:25px;
    background: rgb(33, 21, 52);
    border-radius:10px;
    cursor: pointer;
    
}
.cell:hover{
    transition: transform 50ms ease-in-out;
    transform: scale(1.05);
    filter: brightness(1.2);
}
/* add return button for mobile*/
</style>