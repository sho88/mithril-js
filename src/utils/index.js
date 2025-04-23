import htm from "htm";
import m from "mithril";
import { Actions, State } from "./../actions"
import Wrapper from "../components/wrapper";


export const asyncify = promise => promise.then(data => [null, data]).catch(error => [error]);

// initialise the state and the corresponding actions
export const state = State()
export const actions = Actions(state)
export const html = htm.bind(m);

export const bind = component => Wrapper(component)(state, actions, html)
