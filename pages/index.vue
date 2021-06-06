<template>
  <div>
    <div class="table-container">
      <table style="width: 100%">
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Action</th>
        </tr>
        <tr
          v-for="(person, index) in allPersons"
          :key="person.firstName + person.lastName + index"
        >
          <td>{{ person.firstName }}</td>
          <td>{{ person.lastName }}</td>
          <td><el-button @click="remove(person)">Remove</el-button></td>
        </tr>
      </table>
    </div>
    <div class="input-container">
      <el-input v-model="firstNameValue" placeholder="Firstname"></el-input>
      <el-input v-model="lastNameValue" placeholder="Lastname"></el-input>
      <el-button @click="add">Add</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "nuxt-property-decorator";
import { mapGetters, mapMutations } from "vuex";
import { Person } from "@/types/state";

export default Vue.extend({
  data() {
    return {
      firstNameValue: "",
      lastNameValue: "",
    };
  },
  computed: mapGetters(["allPersons"]),
  methods: {
    ...mapMutations(["addPerson", "removePerson"]),
    add() {
      if (this.firstNameValue === "" || this.lastNameValue === "") {
        return alert("Please ensure you've entered both a first and last name");
      }

      const newPerson = {
        firstName: this.firstNameValue,
        lastName: this.lastNameValue,
      };

      this.addPerson(newPerson);

      this.firstNameValue = "";
      this.lastNameValue = "";
    },
    remove(person: Person) {
      this.removePerson(person);
    },
  },
});
</script>

<style scoped>
.table-container {
  margin: 0 auto;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.input-container {
  margin: 0 auto;
  width: 50%;
  display: flex;
  justify-content: space-evenly;
}

.el-input {
  margin-right: 2rem;
}

table,
th,
td {
  border: 1px solid black;
  padding: 15px;
}
</style>
