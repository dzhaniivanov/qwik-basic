import { component$, useSignal, useStore, useStylesScoped$ } from "@builder.io/qwik";
import ContactStyles from "./contact.css?inline"

export default component$(() => {
    useStylesScoped$(ContactStyles)

    const formVisible = useSignal(false)
    const formState = useStore({
        name: '', message: ''
    })

    return (
        <article>
            <h2>Contact</h2>

            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt consectetur quidem
                impedit voluptate nostrum ex, quis aliquid. Eos, cumque facere!
            </p>
            <button onClick$={() => formVisible.value = !formVisible.value}>contact me</button>

            {formVisible.value &&
                (
                    <form preventdefault:submit onSubmit$={() => {
                        console.log(formState.name, formState.message)
                        formState.name = ""
                        formState.message = ""
                    }}>
                        <label>
                            <span>your name</span>
                            <input value={formState.name} type="text" onInput$={(e) => formState.name = (e.target as HTMLInputElement).value} />
                        </label>
                        <label>
                            <span>your message</span>
                            <textarea value={formState.message} onInput$={(e) => formState.message = (e.target as HTMLInputElement).value}></textarea>
                        </label>
                        <button>send</button>
                        <p>{formState.name}</p>
                        <p>{formState.message}</p>
                    </form>
                )}
        </article>


    )
})