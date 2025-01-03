<!-- In this folder make like a bottom section saying that this was made by me with svelte or something other-->
<script>    
    let Sveltesite = 'https://Svelte.dev'
    let Typescriptsite = 'https://www.typescriptlang.org'
    let {substate, substatehandler} = $props();
</script> 
<div>

        <div class="small_text">
            <div class="titlediv"><a href='./' style="text-align:center;"> <h1 class="CanopyFont"> I'm Alex </h1></a></div>
            <h3 class="jetbrainsmono" style="text-align:left;">
                <ul>
                    <li>
                        Hobbyist programmer
                    </li>
                    <li>
                       Highschool Student
                    </li>
                    <li>
                        Preffered programming language: Python
                    </li>
                </ul>
                <div class="resetbutton">
                    <button class="reset CanopyFont" onclick={() => substatehandler(1)}>See full info</button>
                </div>
            </h3>
            </div>
</div>
<style>
a {
    text-decoration: none;
    padding: 0px;
    width:45px;
    height:45px;
    color: white;
    vertical-align: middle;
    text-align: left;
}
h1 {
    margin:0;
    padding:0;
    display: block;
    font-weight: 400;
    font-size: 3rem;
}
.titlediv {
    display:block;
    text-align:left;
    align-content:center;
    min-width:fit-content;
    max-width:fit-content;
    margin:auto
}

div {
    align-content:center;
}
.small_text {
    text-align:center;
    z-index: 2;
    position:relative;
}
.resetbutton {
    position:fixed;
    width:320px;
    text-align:center;
}
.reset:hover {
    transform: scale(1.05);
    filter: brightness(0.75);
    transition: transform 50ms ease-in-out;
}
.reset {
    font-size: 1.2rem;
    border-radius: 10px;
}
@media (max-width: 700px) {
    .small_text {
        text-align:center;
        z-index: 2;
        position:relative;
        transform: translateY(-100px)
    }
    .reset {
        border: none !important;
        font-size:0;
        
    }
}
</style>    