<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import type { furnace } from '@/Interface';
import { faker } from '@faker-js/faker';

const MetGroups = ref([])
const FurnaceGroups = ref([])
const Furnaces = ref([])
const isLoading = ref(false)

onMounted(() => {
  isLoading.value = true
  Promise.all([
    axios.get('/api/met-groups'),
    axios.get('/api/furnace-groups'),
    axios.get('/api/furnace')
  ]).then((res) => {
    MetGroups.value = res[0].data.metGroups
    FurnaceGroups.value = res[1].data.furnaceGroups
    Furnaces.value = res[2].data.furnaces
    isLoading.value = false
  }
  ).catch((err) => {
    console.log("Dashboard data fetching error:=>", err)
  })
})

const getStatusCount = () => {
  let RunningCount = 0;
  let IdleCount = 0;
  let BreakdownCount = 0;
  Furnaces.value.forEach((furnace: furnace) => {
    if (furnace.status === 'running') {
      RunningCount++;
    }
    else if (furnace.status === 'idle') {
      IdleCount++;
    }
    else if (furnace.status === 'breakdown') {
      BreakdownCount++;
    }
  })
  return { RunningCount, IdleCount, BreakdownCount }
}

</script>

<template>
  <v-container class="bg-transparent">
    <v-row no-gutters class="mx-auto">
      <v-col cols="12" sm="6" md="6" lg="3">
        <v-card class="ma-2 text-center bg-1 cards" elevation="5" height="200" @click="$router.push('/met-groups')">
          <div v-if="isLoading">
            <v-progress-circular indeterminate color="primary"></v-progress-circular>
          </div>
          <div v-else>
            <p class="text-white count">{{ MetGroups.length }}</p>
            <p class="text-h5 font-weight-bold text-white">Met Groups</p>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="3">
        <v-card class="ma-2 text-center bg-2 cards" elevation="5" height="200"
          @click="$router.push('/furnace-groups')">
          <div v-if="isLoading">
            <v-progress-circular indeterminate color="primary" class="text-center color-primary"></v-progress-circular>
          </div>
          <div v-else>
            <p class="text-white count">{{ FurnaceGroups.length }}</p>
            <p class="text-h5 font-weight-bold text-white">Furnace Groups</p>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="3">
        <v-card class="ma-2 text-center bg-3 cards" elevation="5" height="200"
          @click="$router.push('/metallurgist')">
          <v-card-title class="text-h5 font-weight-bold metTitle">Metallurgists</v-card-title>
          <div class="mx-4">
            <div v-if="isLoading">
              <v-progress-circular indeterminate color="primary"></v-progress-circular>
            </div>
            <div v-else>
              <p class="text-white text-start mx-2">
                <v-row class="metaRowBackground my-1">
                  <v-col cols="6" lg="9" class="metItems">
                    Assigned
                  </v-col>
                  <v-col cols="6" lg="3">
                    <v-chip
                      class="px-5 py-1 align-center justify-center bg-indigo-darken-1 rounded-xl float-right" size="small">{{ faker.datatype.number({ min: 1, max: 100 }) }}</v-chip>
                  </v-col>
                </v-row>
              </p>

              <p class="text-white text-start mx-2">
                <v-row class="metaRowBackground my-1">
                  <v-col cols="6" lg="9" class="metItems">
                    Available
                  </v-col>
                  <v-col cols="6" lg="3">
                    <v-chip class="px-5 py-1 align-center justify-center bg-indigo-darken-1 rounded-xl float-right" size="small"> 
                    {{ faker.datatype.number({ min: 1, max: 100 })}}
                    </v-chip>
                  </v-col>
                </v-row>
              </p>

              <p class="text-white text-start mb-3 mx-2">
                <v-row class="metaRowBackground my-1">
                  <v-col cols="6" lg="9" class="metItems">
                    Unavailable
                  </v-col>
                  <v-col cols="6" lg="3">
                    <v-chip class="px-5 py-1 align-center justify-center bg-indigo-darken-1 rounded-xl float-right" size="small"> {{ faker.datatype.number({ min: 1, max: 50 })
                    }}</v-chip>
                  </v-col>
                </v-row>
              </p>
            </div>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="3">
        <v-card class="ma-2 text-center furnaceCard cards" elevation="5" height="200"
          @click="$router.push('/furnace')">
          <v-card-title class="text-h5 text-center font-weight-bold text-white">Furnaces</v-card-title>
          <div class="mx-4">
            <div v-if="isLoading">
              <v-progress-circular indeterminate color="primary"></v-progress-circular>
            </div>
            <div v-else>
              <p class="text-white text-start mx-2">
                <v-row class="furnaceRowBackground my-1">
                  <v-col cols="6" lg="9">
                    Running
                  </v-col>
                  <v-col cols="6" lg="3">
                    <v-chip class="px-5 py-1 align-center justify-center bg-indigo-darken-1 rounded-xl float-right" size="small">
                    {{ getStatusCount().RunningCount }}
                    </v-chip>
                  </v-col>
                </v-row>
              </p>

              <p class="text-white text-start mx-2">
                <v-row class="furnaceRowBackground my-1">
                  <v-col cols="6" lg="9">
                    Idle
                  </v-col>
                  <v-col cols="6" lg="3">
                    <v-chip class="px-5 py-1 align-center justify-center bg-indigo-darken-1 rounded-xl float-right" size="small"> {{ getStatusCount().IdleCount }}</v-chip>
                  </v-col>
                </v-row>
              </p>

              <p class="text-white text-start mb-3 mx-2">
                <v-row class="furnaceRowBackground my-1">
                  <v-col cols="6" lg="9">
                    Breakdown
                  </v-col>
                  <v-col cols="6" lg="3">
                    <v-chip class="px-5 py-1 align-center justify-center bg-indigo-darken-1 rounded-xl float-right" size="small"> {{ getStatusCount().BreakdownCount}}</v-chip>
                  </v-col>
                </v-row>
              </p>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.cards {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.count {
  font-size: 3rem;
}

.v-row {
  max-height: 40px;
}

.v-chip:hover {
  cursor: pointer;
}

.furnaceCard {
  background-color: #74a4ef;
}
.metTitle{
  color:#8484e8
}
.metItems{
  color:#5d5dd2
}
.bg-1 {
  background: linear-gradient(45deg, #2ed8b6, #59e0c5)
}

.bg-2 {
  background: linear-gradient(45deg, #FFB64D, #ffcb80);
}

.bg-3 {
  /* background: linear-gradient(45deg, #FF5370, #ff869a); */
  background:#ffff;
  border: 1px solid #9393d8;
}
.metaRowBackground{
  align-content: center;
  border-radius: 10px;
  background-color: #c4d4f7;
}
.furnaceRowBackground {
  align-content: center;
  border-radius: 10px;
  background-color: #8bafd8;
}
</style>