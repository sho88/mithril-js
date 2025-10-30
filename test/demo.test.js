import m from "mithril";
import { getByText } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import DemoComponent from "../src/components/demo/demo.js";

test("DemoComponent renders and updates name on click", async () => {
  document.body.innerHTML = "<div id='app'></div>";
  const container = document.getElementById("app");
  m.mount(container, DemoComponent);

  // initial render check
  expect(getByText(document.body, "Demo Component")).toBeInTheDocument();
  expect(getByText(document.body, "Name: Mithril Demo")).toBeInTheDocument();

  // click button and force synchronous redraw
  const btn = getByText(document.body, "Greet");
  await userEvent.click(btn);
  m.redraw.sync();

  expect(getByText(document.body, "Name: Mithril Updated!")).toBeInTheDocument();

  m.mount(container, null); // cleanup
});
