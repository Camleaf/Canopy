<script lang="ts">
	import Navbar from './navbar.svelte';
    import Footer from './Footer.svelte';
    import MainBody from './MainBody.svelte';
    const data = [
        {
        title: "Portfolio",
        subtitle: "-Tech and Projects",
        text: "--> Tech Stack + Projects",
        image: "",
        imgloc: "left",
        link: ""
        }
    ]


</script>




<div id = 'navbar'>
<Navbar></Navbar>
</div>

<div>
<MainBody {data}> </MainBody>
</div>


<div>
<Footer></Footer>

</div>

<style>

:global(body) {
    background-color:rgb(19, 12, 30);
}
div {
    display:block;
}

#navbar {
    margin-bottom: 110px;
}
</style>