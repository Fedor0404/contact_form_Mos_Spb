<template>
  <div v-if="isVisible">
    <div class="overlay"></div>
    <div class="modal_wrapper">
      <div
        class="bg-white z-30 relative w-[355px] h-[475px] px-[24px] p-[24px] rounded sm:w-[669px] sm:h-[254px] lg:w-[793px] lg:h-[216px]"
      >
        <button
          @click="onCloseModal"
          class="absolute top-[2%] left-[96%] text-lg"
        >
          x
        </button>
        <div class="modal__footer font-medium text-[24px]">Заказать звонок</div>
        <form @submit.prevent="onSubmit" class="modal__form mt-[44px] w-[100%]">
          <div class="modalForm">
            <div class="relative modal__input lg:col-start-2 lg:row-start-1">
              <input
                class="input"
                v-model="form.tel"
                name="tel"
                id="tel"
                type="tel"
                v-mask="'+7(###)###-##-##'"
                placeholder="+7 (_ _ _) _ _ _-_ _-_ _"
                required
              />

              <label class="label" for="name">Телефон*</label>
            </div>
            <div class="relative modal__input lg:col-start-1 lg:row-start-1">
              <input
                class="input"
                name="name"
                id="name"
                type="text"
                placeholder="Иван Иванов"
                required
                v-model="form.name"
              />
              <label class="label" for="name">Имя*</label>
            </div>

            <div class="relative modal__input">
              <input
                class="input"
                name="emil"
                id="name"
                type="email"
                placeholder="you@example.com"
                required
                v-model="form.email"
              />
              <label class="label" for="name">Email*</label>
            </div>
            <div
              class="relative sm:row-start-2 sm:col-start-1 sm:col-end-3 lg:row-start-1 lg:col-start-4 lg:col-end-5"
            >
              <select class="select w-[160px]" v-model="isSelect">
                <option
                  name="city"
                  ref="select"
                  v-for="city in cities"
                  :key="city.id"
                  :value="city.id"
                >
                  {{ city.name }}
                </option>
                {{
                  value
                }}
              </select>
              <label class="label" for="name">Город*</label>
            </div>

            <button
              class="bg-[#16A34A] rounded sm:row-start-2 sm:col-start-3 lg:row-start-2 lg:col-start-4"
            >
              <a class="text-center text-white">Отправить</a>
            </button>
            <v-popup v-if="okResponse" @ClosePopup="onClose">
              <template v-slot:header>
                <p>Запрос обработан успешно</p></template
              >
              <template v-slot:body>
                <span v-html="okResponse"></span>
              </template>
            </v-popup>

            <v-popup v-if="errorResponse" @ClosePopup="onClose">
              <template v-slot:header> <p>Ошибка в форме</p></template>
              <template v-slot:body>
                <span v-html="errorResponse"></span>
              </template>
            </v-popup>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";
  import axios from "axios";
  import vPopup from "./pop-up.vue";
  import { mapActions } from "vuex";

  export default {
    components: {
      vPopup,
    },
    data() {
      return {
        okResponse: null,
        errorResponse: null,
        form: {
          name: "",
          tel: "",
          email: "",
          city: "",
        },
        cities: [
          {
            id: 1,
            name: "Москва",
          },
          {
            id: 2,
            name: "Санкт-Петербург",
          },
          {
            id: 3,
            name: "Казань",
          },
        ],
      };
    },

    computed: {
      ...mapGetters("state", ["isSelect", "isVisible"]),
    },

    methods: {
      onClose() {
        this.okResponse = false;
        this.errorResponse = false;
      },
      ...mapActions("state", ["toggleModal"]),
      onCloseModal(e) {
        this.toggleModal(e.target.id);
        console.log(e.target.id);
      },
      async onSubmit() {
        var tel = "+" + this.form.tel.replace(/[^0-9]/g, "");
        console.log(+tel);

        var city = this.isSelect;
        console.log(city);

        await axios
          .post("http://hh.autodrive-agency.ru/test-tasks/front/task-7/", {
            name: this.form.name,
            phone: tel,
            email: this.form.email,
            city_id: city,
          })

          .then((response) => {
            console.log(response);
            this.okResponse = response.data;
            this.form.name =
              this.form.email =
              this.form.tel =
              this.form.city =
                "";
          })

          .catch((error) => {
            console.log(error.response.data);
            this.errorResponse = error.response.data;
          });
      },
    },
  };
</script>

<style lang="scss"></style>
