
<script lang="ts">

    let {substate, substatehandler} = $props();

    function on_key_down(event:any){
        if (event.repeat) return;
        switch (event.key) {
                case "Escape":
                    substatehandler(0)
                    event.preventDefault();
                    break;
        }
    }
</script>

<svelte:window
    on:keydown={on_key_down}
/>