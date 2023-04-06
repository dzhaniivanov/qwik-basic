import { component$, Resource } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$, Link } from "@builder.io/qwik-city";
import Card from "~/components/card/card";

interface BlogData {
  id: string;
  title: string;
  content: string;
}

export const useBlogData = routeLoader$(async () => {
  const res = await fetch("http://localhost:3000/blogs");
  const data = (await res.json()) as BlogData[];

  return data;
});

export default component$(() => {
  const blogsData = useBlogData();
  return (
    <div>
      <h2>hohoho mohohoo</h2>
      {/* {blogs.value.map((blog) => (
        <div key={blog.id}>
          <p>{blog.title}</p>
        </div>
      ))} */}
      <Resource
        value={blogsData}
        onPending={() => <div>loading</div>}
        onResolved={(blogs) => (
          <div class="blogs">
            {blogs &&
              blogs.map((blog) => (
                <Card key={blog.id}>
                  <h3 q:slot="title">{blog.title}</h3>
                  <p q:slot="content">{blog.content.slice(0, 50)}...</p>
                  <Link q:slot="footer" href={"/blog/" + blog.id}>
                    <button>Read More</button>
                  </Link>
                </Card>
              ))}
          </div>
        )}
      />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Mario",
  meta: [
    {
      name: "description",
      content: "everything about mario",
    },
  ],
  links: [
    {
      rel: "stylesheet",
      href: "somestylesheet.com/styles.css",
    },
  ],
};
