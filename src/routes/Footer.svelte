<!-- In this folder make like a bottom section saying that this was made by me with svelte or something other-->
<script>    
    import {
        blur
    }from 'svelte/transition'
    import githublogo from '$lib/assets/pngegg.png'
    import instagramlogo from '$lib/assets/instagram-icon-white-on-gradient.png'
    let Sveltesite = 'https://Svelte.dev'
    let Typescriptsite = 'https://www.typescriptlang.org'
    import discordlogo from '$lib/assets/Discord-logo.png'
</script>   S
<div>

        <div class="small_text">
            <div class="titlediv"><a href='./' style="text-align:center;"> <h1 class="CanopyFont"> canopy </h1></a></div>
            <hr>
            <h3 class="jetbrainsmono">Built with <a href={Sveltesite}><span class="SvelteColor">Svelte</span></a>, <a href={Typescriptsite}><span class="TypescriptColor">Typescript</span></a></h3>
            <ul>
                <li>
                    <a href='https://www.instagram.com/_alexcedw/'><img class="socials" width={65/1.5} height={50/1.5} src={instagramlogo} /></a>
                </li>
                <li>
                    <a href='https://github.com/Camleaf'><img class="socials" width={70/1.5} height={70/1.5} src={githublogo} /></a>
                </li>
                <li>
                    <a href='https://discordapp.com/users/750381544035581972/'><img class="socials" width={55/1.5} height={55/1.5} src={discordlogo} /></a>
                </li>
            </ul>
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
.socials {
    height:75;
    width:75;
    transform: scale(1);
    transition: transform 125ms ease-in-out;
}
.socials:hover {
    transform: scale(1.25);
    transition: transform 100ms ease-in;
    filter: drop-shadow(0px 0px 0px rgb(19, 12, 30));
}
li {
    display:inline-block;
}
.instalogo {

    background: linear-gradient(to right, #21f36b, 
                    #53d681, #46d0d5ef, #1023a1); 
            -webkit-text-fill-color: transparent; 
            -webkit-background-clip: text; 
}
</style>