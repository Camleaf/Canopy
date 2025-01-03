<!-- this module handles custom implementations of scroll which aren't linked to the general window-->
<script lang="ts">

    let {scroll, type, max=0,min=0} = $props();
    let lastScrollPosition = 0
    function onScroll(event:any){
        let currentScrollposition = window.scrollY || document.documentElement.scrollTop; //Get current scroll position
        let newVector = scroll + currentScrollposition - lastScrollPosition
        if (newVector < max && newVector > min){
            scroll += currentScrollposition - lastScrollPosition;
        }
        lastScrollPosition = currentScrollposition

    }
</script>

<svelte:window 
    on:scroll={onScroll}
/>