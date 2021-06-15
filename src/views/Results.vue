<template>
  <div class="wrapper">
    <h1>Resultados da busca</h1>

    <v-card
      v-for="object in objectsList"
      :key="object.objectName"
      class="card-content"
    >
      <div class="image-content">
        Image placeholder
      </div>
      <div class="infos-content">
        <h2>{{ object.objectName }}</h2>
        <span>{{ object.location }}</span>
        <span
          >Contato: {{ object.contact.phone }} falar com
          {{ object.contact.name }}</span
        >
      </div>
    </v-card>
  </div>
</template>

<script>
function initialState() {
  return {
    objectsList: []
  }
}

export default {
  name: 'Results',
  data() {
    return initialState()
  },
  mounted() {
    this.queryObjects()
  },
  methods: {
    async queryObjects() {
      this.objectsList = [
        {
          objectName: 'Carteira de motorista',
          location: 'Objeto encontrado perto do parque do trabalhador.',
          contact: {
            name: 'Alex Jr Rambo',
            phone: '(51) 99392-2719'
          }
        },
        {
          objectName: 'Casaco de couro',
          location: 'Objeto encontrado no pub do centro da cidade.',
          contact: {
            name: 'Alex Jr Rambo',
            phone: '(51) 99392-2719'
          }
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/config/device.scss';

.wrapper {
  height: 100%;
  h1 {
    text-align: center;
  }
}

.card-content {
  padding: 1rem;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.image-content {
  height: 10rem;
  width: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ccc;
}

.infos-content {
  display: flex;
  flex-direction: column;
  margin: 1rem;
}
</style>
