<template>
  <!--h1>Arctic</h1-->
  <div class="h-screen flex  justify-content-center">
    <div class="grid" style="max-width: 1000px">
      <div class="col-12">
        <div class="card elative flex z-2 surface-0 shadow-2 p-3 border-round-lg align-items-center justify-content-center">
          <img :src="'arctic.svg'" height="100" class="mr-2" @click="show = !show"/>
          <div class="card">
            <div class="text-6xl">Arctic</div>
            <div class="text-2xl">Validator</div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="card relative flex z-2 surface-0 shadow-2 p-3 border-round-lg align-items-center justify-content-center">
          <card-view>
            <template #title>Our Validators</template>
            <template #content>
              <div class="grid">
                <div class="col-6">
                  <div class="card relative flex z-2 surface-0 shadow-2 p-3 border-round-lg">
                    <validate-net name="Band" apr="10%" img="band.png" stake="https://ping.pub/band/staking/bandvaloper1c34u63fdagur6xfmnu2d50242d3kszl9wnulk8"/>
                  </div>
                </div>
                <div class="col-6">
                  <div class="card relative flex z-2 surface-0 shadow-2 p-3 border-round-lg">
                    <validate-net name="Evmos" apr="36%" img="evmos.jpeg" stake="https://ping.pub/evmos/staking/evmosvaloper1tk9m4drzupjpsdfr99t5pkhtl0w57ykpvvsvcm"/>
                  </div>
                </div>
                <div class="col-6">
                  <div class="card relative flex z-2 surface-0 shadow-2 p-3 border-round-lg">
                    <validate-net name="Bitcanna" apr="40%" img="bitcanna.svg" stake="https://ping.pub/bitcanna/staking/bcnavaloper1r0cvwdwkz24qm390cvdx68uxedt6ua77l5d7uq"/>
                  </div>
                </div>
                <div class="col-6">
                  <div class="card relative flex z-2 surface-0 shadow-2 p-3 border-round-lg">
                    <validate-net name="Concordium" apr="13%" img="ccd.svg" stake="https://ccdscan.io/staking"/>
                  </div>
                </div>
              </div>
            </template>
          </card-view>
        </div>
      </div>
      <div class="col-12">
        <div class="card relative flex z-2 surface-0 shadow-2 p-3 border-round-lg align-items-center justify-content-center">
          <card-view>
            <template #title>About</template>
            <template #content>
              <div class="grid">
                <div class="col-12">
                  <div class="card relative z-2 surface-0 shadow-2 p-3 border-round-lg align-items-center justify-content-center">
                    <div class="text-2xl flex">Description</div>
                    <divider-view/>
                    <div class="text-left">ARCTIC validators work on our own servers in a reliable data center. We support decentralization.</div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="card relative z-2 surface-0 shadow-2 p-3 border-round-lg">
                    <div class="text-2xl flex">Team</div>
                    <divider-view/>
                    <div class="flex">
                      <chip-show label="HalfBear" image="halfbear.jpg"/>
                      <chip-show label="Hilonom" image="hilonom.png"/>
                    </div> 
                  </div>
                </div>
              </div>
            </template>
          </card-view>
        </div>
      </div>
      <div class="col-12">
        <div class="card relative w-full flex z-2 surface-0 shadow-2 p-3 border-round-lg align-items-center justify-content-center">
          <card-view class="w-full">
            <template #title>Utils</template>
            <template #content>
              <div class="grid">
                <div class="col-12">
                  <div class="card relative z-2 surface-0 shadow-2 p-3 border-round-lg align-items-center justify-content-center">
                    <div class="flex flex-row flex-wrap gap-3">
                      <div class="flex align-items-center justify-content-center">
                        <a href="https://explorer.arctics.wtf/" target="_blank" rel="noopener noreferrer">
                          <button-click icon="pi pi-search" class="bg-orange-500" rounded aria-label="Search" />
                        </a>
                      </div>
                      <div class="flex align-items-center justify-content-center">Explorer for supported networks in Cosmos</div>                      
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </card-view>
        </div>
      </div>
      <div class="col-12" v-show="show">
        <div class="card relative w-full flex z-2 surface-0 shadow-2 p-3 border-round-lg align-items-center justify-content-center">
          <card-view class="w-full">
            <template #title>Monitoring</template>
            <template #content>
              <div class="grid">
                <div class="col-12">
                  <div class="card relative z-2 surface-0 shadow-2 p-3 border-round-lg align-items-center justify-content-center">
                    <div class="flex flex-row flex-wrap gap-3">
                      <div class="flex align-items-center justify-content-center">
                        <a href="http://185.103.132.4:8888/" target="_blank" rel="noopener noreferrer">
                          <button-click icon="pi pi-bell" class="bg-blue-500" rounded aria-label="Search" />
                        </a>
                      </div>
                      <div class="flex align-items-center justify-content-center">Monitoring tender duty</div>                      
                    </div>
                  </div>
                  <div class="card relative z-2 surface-0 shadow-2 p-3 border-round-lg align-items-center justify-content-center">
                    <div class="flex flex-row flex-wrap gap-3">
                      <div class="flex align-items-center justify-content-center">
                        <a href="http://185.103.132.4:3000/" target="_blank" rel="noopener noreferrer">
                          <button-click icon="pi pi-bell" class="bg-red-500" rounded aria-label="Search" />
                        </a>
                      </div>
                      <div class="flex align-items-center justify-content-center">Monitoring Grafana</div>                      
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </card-view>
        </div>
      </div>
      <div class="col-12">
        <div class="card relative flex z-2 surface-0 shadow-2 p-3 border-round-lg">
          <a href="https://github.com/Arctic-Validator" target="_blank" rel="noopener noreferrer">
            <button-click icon="pi pi-github" severity="secondary" text rounded aria-label="Github" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  data: function(){
      return{
          show: false
      }
  }
}
</script>

<style>
#app {
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

body {
  background-color: #2c3e50;
}
</style>
