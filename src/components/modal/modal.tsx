import { component$, Slot, useStylesScoped$ } from "@builder.io/qwik";
import type { PropFunction } from "@builder.io/qwik";
import ModalStyles from "./modal.css?inline";

interface ModalProps {
  size: "lg" | "sm";
  frosted?: boolean;
  close: PropFunction<() => void>;
}

export default component$((props: ModalProps) => {
  useStylesScoped$(ModalStyles);
  return (
    <div class={`modal ${props.size} ${props.frosted && "frosted"}`}>
      <div class="modal-content">
        <div class="close" onClick$={props.close}>
          close
        </div>
        <main class="main-content">
          <Slot name="content" />
        </main>
        <footer>
          <Slot name="footer" />
        </footer>
      </div>
    </div>
  );
});
