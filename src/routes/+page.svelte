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
    headline="Harlem, 1943"
    intro="How the street photography of Gordon Parks captured the spirit of black New York"
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
      The Harlem negatives are held by the Library of Congress and are free for anyone to
      download and reuse. High-resolution scans are available in the
      <a href="https://www.loc.gov/pictures/search/?q=gordon+parks+harlem&co=fsa" target="_blank">
        Prints &amp; Photographs Division</a>'s digital collection.
    </p>
  </CreditsSlide>
</SlideGallery>