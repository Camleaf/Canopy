<script lang="ts">

    let {substate, substatehandler} = $props();
    import PlaceHolder from "./placeHolder.svelte"
    //fix skillsdata
    import { json } from '@sveltejs/kit';
    import skillsraw from './jsondata/skillsdata.json';
    const skillsdata: {[key:string]:any} = skillsraw
    const images: any = import.meta.glob(['$lib/assets/svg/skillsimages/*.svg'], { eager: true, as: 'url' });
</script>

<div class="container">
    <div class="captiontext">
        <div class="CanopyFont">
            <h1> I'm Alex</h1>
        </div>
        <h3 class="jetbrainsmono">
            I'm a highschool hobbyist programmer who loves everything STEM, as well as coding and designing. 
            <br /> 
            <br /> 
            I code primarily in Python and Node.js, however I have been learning Svelte and Typescript.
            <br />
            <br />
            This year in school I am taking more advanced classes such as Pre-AP Math and grade 11 Computer Science
        </h3>
    </div>
    <div class="gamecontainer">
        {#each Object.entries(skillsdata) as [key,page]} <!-- add dynamic data-->
            <a href={page.sitelink}>
                <div class="cell" tabindex="0" onkeyup={()=>{}} role="button" > <!--add onclick event-->
                    <img src={images["/src/" + page.imagelink]}/>
                </div>
            </a>
        {/each}
    </div>
    <div class="resetbutton">
        <button class="reset CanopyFont" onclick={() => substatehandler(0)}>Return</button>
    </div>
</div>

<!-- make scrolling animation on a stationary div where elements which go below or above its contents fade-->

<style>
img {
    display:block;
    width:65%;  
    height:65%;
    border-radius:20px;
}
.captiontext {
    position:fixed;
    left:60%;
    font-size: 1rem;
}
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
.gamecontainer{
    display:grid;
    grid-template-columns: repeat(4,auto);
    width:320px;
    height:300px;
    margin-top: 10px;
    margin-bottom:-10px;
}
.cell{
    display: flex;
    justify-content: center;
    align-items: center;
    width:100px;
    height:100px;
    margin-right:5px;
    margin-bottom:5px;
    background: rgb(33, 21, 52);
    border-radius:10px;
    cursor: pointer;
    
}
.cell:hover{
    transition: transform 50ms ease-in-out;
    transform: scale(1.05);
}
/* add return button for mobile*/
</style>