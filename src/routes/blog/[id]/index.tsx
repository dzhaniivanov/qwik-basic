import { component$, Resource } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

interface BlogData {
  id: string;
  title: string;
  content: string;
}

export const useBlogData = routeLoader$(async ({ params }) => {
  const res = await fetch("http://localhost:3000/blogs/" + params.id);

  if (!res.ok) {
    console.log(params);
  }

  const data = (await res.json()) as BlogData;

  return data;
});

export default component$(() => {
  const blogData = useBlogData();

  return (
    <div class="blog">
      <Resource
        value={blogData}
        onPending={() => <div>loading</div>}
        onResolved={(blog) => (
          <div>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
          </div>
        )}
      />
    </div>
  );
});
