import { component$, useSignal, $ } from "@builder.io/qwik";
import Modal from "~/components/modal/modal";
// import AboutStyles from "./about.css?inline";

export default component$(() => {
  // useStyles$(AboutStyles);

  const modalVisible = useSignal(false);

  const closeModal = $(() => {
    modalVisible.value = false;
  });

  return (
    <article class="bg-red-400">
      <h2>About</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
        consectetur quidem impedit voluptate nostrum ex, quis aliquid. Eos,
        cumque facere!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
        consectetur quidem impedit voluptate nostrum ex, quis aliquid. Eos,
        cumque facere!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
        consectetur quidem impedit voluptate nostrum ex, quis aliquid. Eos,
        cumque facere!
      </p>
      <button onClick$={() => (modalVisible.value = true)}>open modal</button>

      {modalVisible.value && (
        <Modal size="sm" frosted={true} close={closeModal}>
          <div q:slot="content">
            <h2>great news</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit,
              aliquid!
            </p>
          </div>
          <div q:slot="footer">footer cool</div>
        </Modal>
      )}
    </article>
  );
});
