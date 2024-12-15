<script>
    import Header from './Header.svelte';
    import githublogo from '$lib/assets/pngegg.png'
    import projectlogo from '$lib/assets/Projects.png'
    import logo from '$lib/assets/Logo.png'
    let aboutme = './'
</script>


<nav class="Nav"> 
    <div class = "container">
        <ul class="navlist" >
            <li class="CanopyFont">
            <a href='./' style="text-align:left;">
                <h1 style="font-size:3rem;">canopy</h1>
            </a><!--find a good image-->
            </li>
        </ul>
    </div>
    <div class = "container" style='min-width:15%;'>

    </div>
    <div class = "container jetbrainsmono">
        <ul class="navlist" style='text-align:right;min-width:50%;'>
            <li class="small_link">
                <a href={aboutme}> about me</a>
            </li>
            <li class="small_link">
                <a href='./'> run</a>
            </li>
            <li class="small_link">
                 <a href='./'> projects </a>
            </li>
            <li>
    
            </li>
        </ul>
    </div>
</nav>

<style>

a {
    line-height:0;
    text-decoration: none;
    padding: 10px 10px 10px 10px;
    color: white;
    vertical-align: middle;
    text-align: right;
}
.Nav{
    height: 90;
    display: flex;
    justify-content: center;
    font-size: 1.5rem;
    position: fixed;
    top: 0px;
    padding: 0 0 100px 0px;
    z-index: 2;
    background-color:rgb(19, 12, 30);
    width:100%;
}

.container{
    vertical-align: middle;
    display: inline-block;
    justify-content: space-between;
    height: 10px;
    z-index: 1;
    min-width: 40%;
    margin: 0 auto;
    padding-right: 0;
    white-space: nowrap;
}

.navlist{
    display:inline-block;
    list-style-position: inside;
    font-weight: 200;
    list-style-type: none;
}
li {
    
    display: inline-block;
    margin:0;
    padding:0;
}


h1 {
    line-height:0;
    vertical-align: middle;
    display: inline-block;
    font-weight: 400;
}

.logo{
    display:inline-block;
    vertical-align: middle;
    height:20%;
    width:20%;
    filter: brightness(0.2);
    filter: drop-shadow(2px 2px 2px #53d681);
}

.logo:hover{

    filter: brightness(0.001);
    filter: drop-shadow(0px 0px 0px rgb(19, 12, 30));
}
.small_link {
    text-decoration: none;
    padding: 10px 10px 10px 10px;
    color: white;
    vertical-align: middle;
    text-align: right;
}
.small_link:hover {
    transition: transform 100ms ease-in;
    background: linear-gradient(to right, #21f36b, 
                    #53d681, #46d0d5ef, #1023a1); 
            -webkit-text-fill-color: transparent; 
            -webkit-background-clip: text; 
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
</style>