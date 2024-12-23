<!-- In this folder make like a bottom section saying that this was made by me with svelte or something other-->
<script>    
    import githublogo from '$lib/assets/svg/bxl-github.svg'
    import instagramlogo from '$lib/assets/svg/bxl-instagram-alt.svg'
    let Sveltesite = 'https://Svelte.dev'
    let Typescriptsite = 'https://www.typescriptlang.org'
    import discordlogo from '$lib/assets/svg/bxl-discord.svg'
    import Header from "./Header.svelte"
</script> 
<div>

        <div class="small_text">
            <div class="titlediv"> <h1 class="CanopyFont"> TicTacToe </h1></div>
            <h3 class="jetbrainsmono">Why don't you give it a shot?</h3>
        </div>
</div>
<style>

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
@media (max-width: 650px) {
    .small_text {
        text-align:center;
        z-index: 2;
        position:relative;
        transform: translateY(-100px)
    }
}
</style>