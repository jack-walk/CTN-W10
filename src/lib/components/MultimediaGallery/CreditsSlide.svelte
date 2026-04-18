<!--
@component
CreditsSlide.svelte — A closing credits slide rendered via a children snippet.

Provides a flexible container for credits, acknowledgments, or any closing
content at the end of a multimedia gallery.

USAGE EXAMPLE:
<CreditsSlide>
  <h2>Credits</h2>
  <p>Photography by Jane Doe</p>
  <p>Text by John Smith</p>
</CreditsSlide>
-->
<script>
  let {
    children, // Content rendered inside the credits slide
  } = $props();
</script>

<div class="slide" data-slide>
  <div class="content">
    {@render children()}
  </div>
</div>

<style>
  .slide {
    height: 100%;
    flex: 0 0 100%;
    background: #bebfb5;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .content {
    max-width: 600px;
    padding: 2rem;
    color: var(--color-accent);
  }

  .content :global(h2) {
    font-size: 1.5rem;
    margin: 0 0 1rem;
    color: var(--color-accent);
  }

  .content :global(p) {
    font-size: 0.9375rem;
    line-height: 1.6;
    opacity: 0.85;
    margin: 0 0 1rem;
  }

  .content :global(a) {
    color: var(--color-accent);
    opacity: 0.7;
  }

  .content :global(a:hover),
  .content :global(a:focus-visible) {
    opacity: 1;
  }

  .content :global(a:focus-visible) {
    outline: 2px solid var(--color-white);
    outline-offset: 2px;
  }
</style>
