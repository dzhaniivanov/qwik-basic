import { component$, useSignal, useStore } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';



export default component$(() => {
  const name = useSignal('mario')

  const person = useStore({ name: 'peach', age: 30 })

  const blogs = useStore([
    { id: 1, title: 'first blog' },
    { id: 2, title: 'second blog' },
    { id: 3, title: 'third blog' }
  ])
  return (
    <div>
      <h2>hohoho mohohoo</h2>
      <p>Hello, {name.value}</p>
      <p>Hello,{person.name}</p>
      <p>Age,{person.age}</p>

      <button onClick$={() => name.value = "luis"}>click me</button>
      <button onClick$={() => person.name = "john"}>click me again</button>

      {blogs.map(blog => (
        <div key={blog.id}>
          {blog.title}
        </div>
      ))}
      <button onClick$={() => blogs.pop()}>remove a blog</button>

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
