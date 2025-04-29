<!-- In this folder make like a bottom section saying that this was made by me with svelte or something other-->
<script>    
    import githublogo from '$lib/assets/genericsvg/bxl-github.svg'
    import instagramlogo from '$lib/assets/genericsvg/bxl-instagram-alt.svg'
    let Sveltesite = 'https://Svelte.dev'
    let Typescriptsite = 'https://www.typescriptlang.org'
    import discordlogo from '$lib/assets/genericsvg/bxl-discord.svg'
    import Header from "./Header.svelte"
</script> 
<div>

        <div class="small_text">
            <div class="titlediv"><a href='./' style="text-align:center;"> <h1 class="CanopyFont titlehover"> canopy </h1></a></div>
            <h3 class="jetbrainsmono">Built with <a target="_blank" href={Sveltesite}><span class="SvelteColor">Svelte</span></a>, <a target="_blank" href={Typescriptsite}><span class="TypescriptColor">Typescript</span></a></h3>
                    
                    <a target="_blank" class = "linkdefault" href='https://github.com/Camleaf'><img class="socials"  src={githublogo} /></a>
                    <a target="_blank" class = "disc" href='https://discordapp.com/users/750381544035581972/'><img class="socials"  src={discordlogo} /></a>
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
    text-align: right;
}
.titlehover:hover {
    filter: brightness(0.5);
    transition: transform 125ms ease-in-out;
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
    text-align:center;
    align-content:center;
    min-width:fit-content;
    max-width:fit-content;
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
.socials {
    display:inline-block;
    width:45px;
    height:45px;
    transform: scale(1);
    transition: transform 125ms ease-in-out;
    background-clip: text;
    
}
.socials:hover {
    transition: transform 100ms ease-in;
    transform: scale(1.25);
}
.linkdefault:hover {
    filter: invert(0.5);
}
.insta:hover {
    filter: contrast(40%) sepia(1) hue-rotate(300deg) saturate(100%);
}
.disc:hover {
    filter: contrast(40%) sepia(1) hue-rotate(140deg) saturate(100%);
}
@media (max-width: 650px) {
    .small_text {
        text-align:center;
        z-index: 2;
        position:relative;
        transform: translateY(-100px)
    }
}
</style>