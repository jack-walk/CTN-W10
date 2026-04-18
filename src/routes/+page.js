// Page settings
// These values are passed to the layout to control what appears on the page.
import story from '$lib/components/Data/story.json';

export function load() {
  return {
    showHeader: false,
    showFooter: false,
    story,
  };
}