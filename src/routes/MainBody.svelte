<script lang="ts">
</script>




{#snippet body_element({subtitle,text,image,imgloc,link,title}:{
    title:string;subtitle:string; text:string; image:string; imgloc:string; link:string;
})}<!--add body element maker here-->
        <div class='inlineelement CanopyFont'>
                <div class="CanopyFont"><h1>{title}</h1></div>
                
        </div>
        <div class='inlineelement'>
            <h3 class='jetbrainsmono'>{text}</h3>
        </div><!--add image and some conditionals-->
        <!--make text bigger-->
{/snippet}



<style>
h1 {
    line-height:0;
    vertical-align: middle;
    display: inline-block;
    font-weight: 400;
}

div {
    display:inline-block;
    margin: 0 auto;
}
.inlineelement {
    display:block;
    margin:auto;
    max-width: 50%;
}
</style>