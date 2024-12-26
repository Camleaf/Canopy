<!-- In this folder make like a bottom section saying that this was made by me with svelte or something other-->
<script lang=ts>    
    import githublogo from '$lib/assets/svg/bxl-github.svg'
    import instagramlogo from '$lib/assets/svg/bxl-instagram-alt.svg'
    let Sveltesite = 'https://Svelte.dev'
    let Typescriptsite = 'https://www.typescriptlang.org'
    import discordlogo from '$lib/assets/svg/bxl-discord.svg'
    import Header from "./Header.svelte"
    let {cur_page, pagestatehandler} = $props()
    let windowwidth = $state(window.innerWidth)

    //tic tac toe function calls
    
    let grid:string[] = $state(['','','','','','','','','']);
    let cur_turn:string = $state("X");
    let gamestate:string = $state(" to Play")
    const winconds = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]

    function boardpress(cell:number){
        if (grid[cell] == '' && gamestate == " to Play"){
            grid[cell] = cur_turn
            cur_turn = (cur_turn==="X") ? "O": "X";
            for (let i:number = 0;i<8;i++){
                let condition:number[] = winconds[i];
                console.log(condition)
                let a:string = grid[condition[0]]
                let b:string = grid[condition[1]]
                let c:string = grid[condition[2]]
                if (a === '' || b === '' || c ===''){
                    continue
                }
                if (a == b && b == c) {
                    gamestate = " Wins"
                    cur_turn = (cur_turn==="X") ? "O": "X";
                    break
                }
            } 
        
        //check for wins aswell
        }
    }   
    function resetboard(){
        grid = ['','','','','','','','','']
        cur_turn = "X"
        gamestate = " to Play"
    }

    const textcolor:{[id:string]:string }= {
        "X":'#77ffa6',
        "O":'#64e3ff',
    }



</script> 
     <div class = "container" style="--width:{windowwidth}px;">
        <div class="gametext CanopyFont">
            <h1>{cur_turn} {gamestate}</h1>
        </div>
        <div class="gamecontainer">
            {#each [0,1,2,3,4,5,6,7,8] as cell}
                <div class="cell TTTfont" tabindex="0" onkeyup={()=>{}} onclick={() => boardpress(cell)} role="button" >
                    <h1 class="colorswap" style="--color:{textcolor[grid[cell]]}">
                        {grid[cell]}
                    </h1>
                </div>
            {/each}
        </div>
        <div class="resetbutton">
            <button class="reset CanopyFont" onclick={() => resetboard()}>Reset</button>
            <button class="return CanopyFont" onclick={() => pagestatehandler(1)}>Return</button>
        </div>
    </div>
<style>
.container {
    position: fixed;
    top:-90%;
    left:5%;
    transform: translateX(calc(var(--width)/3));
}
.gamecontainer{
    display:grid;
    grid-template-columns: repeat(3,auto);
    width:320px;
    height:300px;
    margin-top: 10px;
    margin-bottom:10px;
}
.cell{
    width:100px;
    height:100px;
    text-align:center;
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


h1 {
    margin:0;
    padding:0;
    display: block;
    font-weight: 400;
    font-size: 3rem;
}
.colorswap {
    color:var(--color);
}

div {
    align-content:center;
}
.gametext {
    position:fixed;
    width:320px;
    text-align:center;
    transform: translateY(-60px);
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
    font-size: 1.8rem;
    border-radius: 10px;
}
.return{
    font-size: 0;
    border-radius: 10px;
    border:none;
}
@media (max-width: 1662px) {
    .container {
        position: fixed;
        top:-90%;
        left:5%;
        transform: translateX(calc(var(--width)/2.6));
    }
}
@media (max-width: 1430px) {
    .container {
        position: fixed;
        top:-90%;
        left:5%;    
        transform: translateX(200vh);
    }
    .return {
        font-size: 1.8rem;
        border:black 2px outset;
        background-color: black;
        border-radius: 10px;

        
    }
    .return:hover{
        transform: scale(1.05);
        filter: brightness(0.75);
        transition: transform 50ms ease-in-out;
    }
}
@media (max-height: 530px) {
    @media(max-width:290px){
        .container {
            position: fixed;
            top:-90%;
            left:5%;
            transform: translateX(calc(var(--width)/2.6)) translateY(100px);
        }   
        .gamecontainer{
            display:grid;
            grid-template-columns: repeat(3,auto);
            width:260px;
            height:240px;
            margin-top: 10px;
            margin-bottom:10px; 
        }
        .cell{
            width:80px;
            height:80px;
            text-align:center;
            margin-right:5px;
            margin-bottom:5px;
            background: rgb(33, 21, 52);
            border-radius:10px;
            cursor: pointer;
            
        }
        .container {
            position: fixed;
            top:-50%;
            left:5%;    
            transform: translateX(200vh);
        }
        .resetbutton {
            position:fixed;
            width:260px;
            text-align:center;
        }
        .gametext {
            position:fixed;
            width:260px;
            text-align:center;
            transform: translateY(-60px);
        }
    }
}
</style>