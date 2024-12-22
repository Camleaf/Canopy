<!-- In this folder make like a bottom section saying that this was made by me with svelte or something other-->
<script>    
    let Sveltesite = 'https://Svelte.dev'
    let Typescriptsite = 'https://www.typescriptlang.org'
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
                        Student at @WCI
                    </li>
                    <li> <!-- todo: style button -->
                        <button class="jetbrainsmono"> See full about-me</button>
                    </li>
                </ul>
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
button {
    font-size:1rem;
    border-radius: 25px;
    border:none;
    color:white;
    background-color:#77c4d5;

}
button:hover{
    font-size:1rem;
    border-radius: 25px;
    border:none;
    color: white;
    background-color:#98f8b9;

}
</style>    