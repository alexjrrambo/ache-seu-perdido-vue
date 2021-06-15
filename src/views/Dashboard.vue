<template>
  <div class="wrapper">
    <div class="info-content">
      <h1>Ache seu perdido</h1>
      <span>Perdeu? Não sabe onde encontrar?</span>
      <span>Nós te ajudamos.</span>
    </div>

    <form class="form-content" autocomplete="none" @submit.prevent="onSubmit">
      <QInput ref="estado" v-model="form.estado" label="Estado" />
      <QInput ref="cidade" v-model="form.cidade" label="Cidade" />
      <QInput
        ref="nomeObjeto"
        v-model="form.nomeObjeto"
        label="Nome do objeto"
      />

      <QPrimaryButton
        class="user-form__submit"
        text="Buscar"
        type="submit"
        link
        :to="{ name: 'results' }"
      ></QPrimaryButton>
    </form>
  </div>
</template>

<script>
import { QInput, QPrimaryButton } from '@/components/widgets/lib'

function initialState() {
  return {
    form: {
      estado: '',
      cidade: '',
      nomeObjeto: ''
    }
  }
}

export default {
  name: 'Dashboard',
  components: {
    QInput,
    QPrimaryButton
  },
  data() {
    return initialState()
  },
  methods: {
    onSubmit() {
      this.$v.$touch()

      if (!this.$v.$invalid) {
        this.submit()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/config/device.scss';

.wrapper {
  width: 100%;
}

.info-content {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
}

.form-content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
