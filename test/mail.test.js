import m from "mithril";
import { getByText } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import MailComponent from "../src/components/mail/mail";

describe("MailComponent", () => {
  beforeEach(() => {
    document.body.innerHTML = "<div id='app'></div>";
    const container = document.getElementById("app");
    m.mount(container, MailComponent);
  });

  afterEach(() => {
    const container = document.getElementById("app");
    m.mount(container, null); // cleanup
  });

  test("IT SHOULD load", () => {
    expect(getByText(document.body, "Search...")).toBeInTheDocument();
    expect(getByText(document.body, "Email Subject 1")).toBeInTheDocument();
    expect(getByText(document.body, "Email Subject 10")).toBeInTheDocument();
  })
});

/*
test("DemoComponent renders and updates name on click", async () => {
  document.body.innerHTML = "<div id='app'></div>";
  const container = document.getElementById("app");
  m.mount(container, DemoComponent);

  // initial render check
  expect(getByText(document.body, "Demo Component")).toBeInTheDocument();
  expect(getByText(document.body, "Name: Mithril Demo")).toBeInTheDocument();

  // click button and force synchronous redraw
  const button = getByText(document.body, "Greet");
  await userEvent.click(button);

  m.redraw.sync();

  expect(getByText(document.body, "Name: Mithril Updated!")).toBeInTheDocument();

  m.mount(container, null); // cleanup
});
*/
