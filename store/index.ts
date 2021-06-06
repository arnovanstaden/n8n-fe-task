import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { Person, PersonsState } from "../types/state";

export const state: () => PersonsState = () => ({
  persons: [
    { firstName: "Jill", lastName: "Smith" },
    { firstName: "Eve", lastName: "Jackson" },
  ],
});

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<PersonsState, RootState> = {
  allPersons: (state: PersonsState): Person[] => state.persons
};

export const mutations: MutationTree<RootState> = {
  addPerson(state: PersonsState, payload: Person) {
    const newState = [...state.persons, payload]
    state.persons = newState;
  },
  removePerson(state: PersonsState, payload: Person) {
    const newPersons = state.persons.filter(
      (item) =>
        item.firstName !== payload.firstName &&
        item.lastName !== payload.lastName
    ); // Would use unique id here in production
    state.persons = newPersons;
  }
}