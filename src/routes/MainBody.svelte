<script lang="ts">
    let {data}:{
        data:any;
    } = $props()
</script>

{#each data as {subtitle,text,image,imgloc,link,title}}


{/each}



{#snippet body_element({subtitle,text,image,imgloc,link,title}:{
    title:string;subtitle:string; text:string; image:string; imgloc:string; link:string;
})}

{/snippet}



<style>

</style>