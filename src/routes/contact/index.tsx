import { component$, useStylesScoped$ } from "@builder.io/qwik";
import ContactStyles from "./contact.css?inline"

export default component$(() => {
    useStylesScoped$(ContactStyles)
    return (
        <article>
            <h2>Contact</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt consectetur quidem impedit voluptate nostrum ex, quis aliquid. Eos, cumque facere!</p>
        </article>
    )
})