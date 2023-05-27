<template>
  <div>
    <form
      v-on:submit.prevent="buy"
      class="flex flex-col space-y-4 max-w-xl mx-auto p-5"
    >
      <input
        v-model="email"
        placeholder="email"
        class="text-center p-0.5 bg-secondary focus:outline-none disabled:text-secondarytext disabled:bg-secondary"
        pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$"
        required
        :disabled="loadingStripe"
      />
      <input
        v-model="firstName"
        placeholder="first name"
        class="p-0.5 text-center bg-secondary focus:outline-none disabled:text-secondarytext disabled:bg-secondary"
        required
        :disabled="loadingStripe"

      />
      <input
        v-model="lastName"
        placeholder="last name"
        class="p-0.5 text-center bg-secondary focus:outline-none disabled:text-secondarytext disabled:bg-secondary"
        required
        :disabled="loadingStripe"

      />
      <div
        class="flex flex-row items-center justify-center space-x-3 text-primarytext"
      >
        <label for="checkbox" class="font-light">Do you want to receive our newsletter?</label>
        <input
          type="checkbox"
          id="checkbox"
          checked
          v-model="receiveNewsletter"
          :disabled="loadingStripe"

        />
      </div>
      <div class="flex justify-center">
        <button
          :disabled="loadingStripe || store.numberProducts == 0"
          class="w-32 btn text-center flex items-center justify-center"
          type="submit"
        >
        <div v-if="!loadingStripe">
          Buy
        </div>
        <div v-else class="text-center">
          ...Loading
        </div>
          
        </button>
      </div>
    </form>
    <!-- Error -->
    <div v-if="error" class="flex items-center justify-center">
      <h4 class="text-danger mx-auto">Something went wrong - please try again later.</h4>
    </div>
  </div>
</template>

<script setup>
import { useProductStore } from "~/stores/productStore.js";
const store = useProductStore();

const error = ref("");
const loadingStripe = useState("loadingStripe", () => {
  return false;
});
const firstName = ref("");
const lastName = ref("");
const email = ref("");
const receiveNewsletter = ref(true);
const answer = ref("");

const data = ref({});
async function buy() {
  console.log("BUY");
  if (store.total == 0) {
    throw "Basket Empty";
  }
  loadingStripe.value = true;
  data.value = await useFetch("/api/stripe/checkout", {
    headers: { "Content-type": "application/json" },
    method: "POST",
    body: {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      receiveNewsletter: receiveNewsletter.value,
      shoppingBasket: store.basket.map((e) => {
        return { product_id: e.id, quantity: e.qty };
      }),
    },
  })
    .then((data) => {
      loadingStripe.value = false;
      if (data && data.data && data.data.value && data.data.value.url) {
        error.value=false
        navigateTo(data.data.value.url, {
        external: true
        })
      } else {

        error.value = "Something went wrong";
      }
    })
    .catch((e) => {
      loadingStripe.value = false;
      error.value = "Something went wrong";
    });
}
</script>
