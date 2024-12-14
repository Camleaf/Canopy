<script lang="ts">
	import Navbar from './navbar.svelte';
    import Footer from './Footer.svelte'
    
</script>

<div id = 'navbar'>
<Navbar></Navbar>
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