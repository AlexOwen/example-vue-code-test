<template>
  <div class="about">
    <h1>About this project</h1>
    <p>This is a code test in Vue.js, Vuex. It is unit tested with mocha and chai,
      and uses Nightwatch for e2e testing.</p>
    <p>It was written using TDD, and should contain tests for all parts of all components.</p>
    <p>It was written with these assumptions:</p>
    <ul>
      <li>This is an MVP and should meet the brief without scope creep or implied features</li>
      <li>Chart.js and other dependencies have been thoroughly tested, so do not need additional
        testing</li>
      <li>The data from the JSON file is always correct, both in format ans structure</li>
      <li>Data does not need to persist between reloads</li>
      <li>There is a global stylesheet that would ensure the design is consistent with other parts
        of a larger project</li>
    </ul>
  </div>
</template>

<style lang="scss">
.about {
  margin: auto;
  width: 600px;
  max-width: 90%;

  p, ul {
    text-align: left;
  }
}
</style>
