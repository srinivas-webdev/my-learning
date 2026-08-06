<script setup>
import categories from '../../data/contractions.json'
let openedPanel = null

const onClickAccordion = (e) => {
  const activePanelButton = e.target.closest("button");
  if (!activePanelButton) return;
  if (openedPanel && openedPanel !== activePanelButton) {
    toggleAccordion(openedPanel);
  }
  toggleAccordion(activePanelButton);
}


function toggleAccordion(activePanelButton) {
  const icon = activePanelButton.querySelector("svg")
  const activePanelContent = activePanelButton.nextElementSibling
  
  if (icon.getAttribute("aria-hidden") === "true") {
    activePanelContent.setAttribute("aria-hidden", false)
    icon.setAttribute("aria-hidden", false)
    openedPanel = activePanelButton
  } else {
    activePanelContent.setAttribute("aria-hidden", true)
    icon.setAttribute("aria-hidden", true)
    openedPanel = null
  }
}


</script>

<template>
  <div class="accordion my-4 mx-2">
    <menu @click="onClickAccordion">
      <section 
        v-for="category in categories" 
        :key="category.name"
        class="accordion-panel flex flex-col gap-1"
      >
        <button 
          class="accordion-trigger" 
          aria-expanded="true"
        >
          <p class="header-title font-medium text-xl">
            {{ category.name }}
          </p>
          <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="2em" 
          height="2em" 
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path fill="green" d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z"/>
        </svg>
        </button>
        <table class="accordion-content table-fixed px-2 pb-1 text-xl font-medium border-separate">
          <tbody>
            <tr
              v-for="item in category.items"
              :key="item[0]"
              class="mx-4 px-2"
            >
              <td 
                class="bg-orange-100 dark:text-gray-500 rounded-md shadow-md px-2 m-2"
              >
                {{ item[0] }}
              </td>
              <td 
                class="bg-sky-200 dark:text-gray-500 rounded-md shadow-md px-2"
              >
                {{ item[1] }}
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </menu>
  </div>
</template>

<style scoped>
.accordion-content {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 500ms ease-in-out;
}

.accordion-content[aria-hidden=false] {
  grid-template-rows: 1fr;
}

.accordion-content > tbody {
  overflow: hidden;
}

.accordion-trigger {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: yellowgreen;
  border-radius: .5rem;
  border-style: solid;
}

.accordion-trigger:hover {
  background-color: paleturquoise;
  cursor: pointer;
}

.accordion-trigger > td {
  font-weight: 700;
  font-size: large;
}

.accordion-trigger > svg {
  transition: transform 500ms ease-in-out;  
}

.accordion-trigger > svg[aria-hidden=false] {
  transform: rotate(-180deg);
}

.accordion-panel {
  margin: 0%;
}

.accordion-panel * {
  margin: inherit;
}

.header-title {
  color: black;
  padding-left: 1rem;
  padding-block: .25rem;
}

menu {
  padding: 0px;
  margin: .25rem;
}
</style>