<script>
  import SlideGallery from '$lib/components/MultimediaGallery/SlideGallery.svelte';
  import TitleSlide from '$lib/components/MultimediaGallery/TitleSlide.svelte';
  import PhotoSlide from '$lib/components/MultimediaGallery/PhotoSlide.svelte';
  import TextSlide from '$lib/components/MultimediaGallery/TextSlide.svelte';
  import CreditsSlide from '$lib/components/MultimediaGallery/CreditsSlide.svelte';

  let { data } = $props();
</script>

<SlideGallery>
  <TitleSlide
    headline="Gateway to the Mountains"
    intro="The covered bridges of Thurmont, Maryland."
  />

  {#each data.story as slide (slide.id)}
    {#if slide.type === 'photo'}
      <PhotoSlide photo={slide} />
    {:else if slide.type === 'text'}
      <TextSlide {slide} />
    {/if}
  {/each}

  <CreditsSlide>
    <h2>About These Photographs</h2>
    <p>
      These photos were taken by Carol M. Highsmith, a photographer who has donated more than 100,000 photographs to the <a href="https://www.loc.gov/pictures/collection/highsm/" target="_blank">Library of Congress</a> since 1990.
    </p>
  </CreditsSlide>
</SlideGallery>