import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';



export default component$(() => {
  return (
    <div>
      <h2>hohoho mohohoo</h2>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Mario',
  meta: [
    {
      name: 'description',
      content: 'everything about mario',
    },
  ],
  links: [
    {
      rel: 'stylesheet',
      href: 'somestylesheet.com/styles.css'
    }
  ]
};
