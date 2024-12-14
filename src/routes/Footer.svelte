<!-- In this folder make like a bottom section saying that this was made by me with svelte or something other-->
<script>    
    import {
        blur
    }from 'svelte/transition'
    let Sveltesite = 'https://Svelte.dev'
    let Typescriptsite = 'https://www.typescriptlang.org'
</script>   
<div>

        <div class="small_text">
            <div class="titlediv"><a href='./' style="text-align:center;"> <h1 class="CanopyFont"> canopy </h1></a></div>
            <hr>
            <h3 class="jetbrainsmono">Built with <a href={Sveltesite}><span class="SvelteColor">Svelte</span></a>, <a href={Typescriptsite}><span class="TypescriptColor">Typescript</span></a></h3>
        </div>
</div>

<style>
a {
    text-decoration: none;
    padding: 0px;
    color: white;
    vertical-align: middle;
    text-align: right;
} 
h1 {
    margin:0;
    padding:0;
    display: block;
    font-weight: 400;
    font-size: 2.2rem;
}
.titlediv {
    display:block;
    text-align:center;
    align-content:center;
    max-width:10%;
    margin:auto
}

hr {
    max-width: 20%;
}
div {
    align-content:center;
}
.small_text {
    text-align:center;
    z-index: 2;
    position:relative;
}
</style>