<template>
  <header class="header-2">
    <div class="page-header min-vh-75 relative" v-bind:style="{ 'background-image': 'url(' + require('@/assets/img/curved-images/curved.jpg') + ')' }">
      <div class="container">
        <div class="row">
          <div class="col-lg-7 text-center mx-auto">
            <h1 class="text-white pt-3 mt-n5">ReaderBench</h1>
            <p class="lead text-white mt-3">An Open-Source Framework</p>
          </div>
        </div>
      </div>
      <div class="position-absolute w-100 z-index-1 bottom-0">
        <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 40" preserveAspectRatio="none" shape-rendering="auto">
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g class="moving-waves">
            <use xlink:href="#gentle-wave" x="48" y="-1" fill="rgba(255,255,255,0.40" />
            <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.35)" />
            <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.25)" />
            <use xlink:href="#gentle-wave" x="48" y="8" fill="rgba(255,255,255,0.20)" />
            <use xlink:href="#gentle-wave" x="48" y="13" fill="rgba(255,255,255,0.15)" />
            <use xlink:href="#gentle-wave" x="48" y="16" fill="rgba(255,255,255,0.95" />
          </g>
        </svg>
      </div>
    </div>
  </header>
  <section class="pt-3 pb-4" id="count-stats">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 z-index-2 border-radius-xl mt-n10 mx-auto py-3 blur shadow-blur">
          <div class="row">
            <div class="col-md-4 position-relative">
              <div class="p-3 text-center">
                <h1 class="text-gradient text-primary"><span id="state1" countTo="70"></span>40+</h1>
                <h5 class="mt-3">Years</h5>
                <p class="text-sm">Of combined experience in Artificial Intelligence and Natural Language Processing</p>
              </div>
              <hr class="vertical dark">
            </div>
            <div class="col-md-4 position-relative">
              <div class="p-3 text-center">
                <h1 class="text-gradient text-primary"> <span id="state2" countTo="15">500</span>+</h1>
                <h5 class="mt-3">Publications</h5>
                <p class="text-sm">In scientific panels all around the world</p>
              </div>
              <hr class="vertical dark">
            </div>
            <div class="col-md-4">
              <div class="p-3 text-center">
                <h1 class="text-gradient text-primary" id="state3" countTo="4">50+</h1>
                <h5 class="mt-3">Projects</h5>
                <p class="text-sm">Built using top edge tools and AI libraries</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="my-5 py-5">
    <div class="container">
      <div class="row mb-6">
        <div class="row justify-content-center text-center my-sm-5">
          <div class="col-lg-6">
            <h2 class="text-dark mb-0">The team behind ReaderBench</h2>
            <p class="lead mb-4">Our team is made up of a diverse range of people who are passionate about Natural Language Processing. </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="row">
        <div class="col-lg-9 z-index-2 border-radius-xl mt-n10 mx-auto py-3 blur shadow-blur">
          <div class="row mt-6">
            <div class="col-md-3 position-relative">
              <div class="p-3 text-center">
                <h1 class="text-gradient text-primary"><span id="state1" countTo="70"></span>2</h1>
                <h5 class="mt-3">Profs</h5>
              </div>
              <hr class="vertical dark">
            </div>
            <div class="col-md-3 position-relative">
              <div class="p-3 text-center">
                <h1 class="text-gradient text-primary"> <span id="state2" countTo="15">3</span></h1>
                <h5 class="mt-3">Assoc. Profs</h5>
              </div>
              <hr class="vertical dark">
            </div>
            <div class="col-md-3 position-relative">
              <div class="p-3 text-center">
                <h1 class="text-gradient text-primary" id="state3" countTo="4">3</h1>
                <h5 class="mt-3">Lecturers</h5>
                <hr class="vertical dark">
              </div>
            </div>
            <div class="col-md-3 position-relative">
              <div class="p-3 text-center">
                <h1 class="text-gradient text-primary" id="state3" countTo="4">3</h1>
                <h5 class="mt-3">Post-Docs</h5>
                <hr class="vertical dark">
              </div>
            </div>
            <div class="col-md-3 position-relative">
              <div class="p-3 text-center">
                <h1 class="text-gradient text-primary" id="state3" countTo="4">3</h1>
                <h5 class="mt-3">TAs</h5>
                <hr class="vertical dark">
              </div>
            </div>
            <div class="col-md-3 position-relative">
              <div class="p-3 text-center">
                <h1 class="text-gradient text-primary" id="state3" countTo="4">5+</h1>
                <h5 class="mt-3">Research assistants</h5>
                <hr class="vertical dark">
              </div>
            </div>
            <div class="col-md-3 position-relative">
              <div class="p-3 text-center">
                <h1 class="text-gradient text-primary" id="state3" countTo="4">5+</h1>
                <h5 class="mt-3">PhD students</h5>
                <hr class="vertical dark">
              </div>
            </div>
            <div class="col-md-3 position-relative">
              <div class="p-3 text-center">
                <h1 class="text-gradient text-primary" id="state3" countTo="4">5+</h1>
                <h5 class="mt-3">MSc & Undergrad studs</h5>
                <hr class="vertical dark">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="my-5 py-5">
    <div class="container">
      <div class="row mb-6">
        <div class="row justify-content-center text-center my-sm-5">
          <div class="col-lg-6">
            <h2 class="text-dark mb-0">Results – Top Research in AI</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-lg-9 z-index-2 border-radius-xl mt-n10 mx-auto py-3 blur shadow-blur">
          <div class="row mt-6">
            <div class="col-md-4 position-relative">
              <div class="p-3 text-center">
                <h1 class="text-gradient text-primary"><span id="state1" countTo="70"></span>500+</h1>
                <h5 class="mt-3">Publications</h5>
              </div>
              <hr class="vertical dark">
            </div>
            <div class="col-md-4 position-relative">
              <div class="p-3 text-center">
                <h1 class="text-gradient text-primary"> <span id="state2" countTo="15">7900+</span></h1>
                <h5 class="mt-3">Citations of top 3 members</h5>
              </div>
              <hr class="vertical dark">
            </div>
            <div class="col-md-4 position-relative">
              <div class="p-3 text-center">
                <h1 class="text-gradient text-primary"> <span id="state2" countTo="15">40+</span></h1>
                <h5 class="mt-3">A & A+ conference papers
                </h5>
              </div>
              <hr class="vertical dark">
            </div>
            <div class="col-md-4 position-relative">
              <div class="p-3 text-center">
                <h1 class="text-gradient text-primary"> <span id="state2" countTo="15">10+</span></h1>
                <h5 class="mt-3">Q1 Journal
                </h5>
              </div>
              <hr class="vertical dark">
            </div>
            <div class="col-md-4 position-relative">
              <div class="p-3 text-center">
                <h1 class="text-gradient text-primary"> <span id="state2" countTo="15">20+</span></h1>
                <h5 class="mt-3">Books
                </h5>
              </div>
              <hr class="vertical dark">
            </div>
            <div class="col-md-4 position-relative">
              <div class="p-3 text-center">
                <h1 class="text-gradient text-primary"> <span id="state2" countTo="15">50+</span></h1>
                  <h5>Book chapters</h5>
              </div>
              <hr class="vertical dark">
            </div>
            <div class="col-md-4 position-relative">
              <div class="p-3 text-center">
                <h1 class="text-gradient text-primary" id="state3" countTo="4">200+</h1>
                <h5 class="mt-3">ISI publications
                  <br>(Thomson Reuters Web of Knowledge)
                </h5>
                <hr class="vertical dark">
              </div>
            </div>
            <div class="col-md-4 position-relative">
              <div class="p-3 text-center">
                <h1 class="text-gradient text-primary"> <span id="state2" countTo="15">5</span></h1>
                <h5 class="mt-3"> Patents & Applications
                </h5>
              </div>
              <hr class="vertical dark">
            </div>
            <div class="col-md-4 position-relative">
              <div class="p-3 text-center">
                <h1 class="text-gradient text-primary"> <span id="state2" countTo="15">2</span></h1>
                <h5 class="mt-3"> US Patents
                </h5>
              </div>
              <hr class="vertical dark">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="my-5 py-5">
    <div class="container">
      <div class="row mb-6">
        <div class="row justify-content-center text-center my-sm-5">
          <div class="col-lg-6">
            <h2 class="text-dark mb-0">Research Projects(8+ Million Euro managed funds) </h2>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-lg-9 z-index-2 border-radius-xl mt-n10 mx-auto py-3 blur shadow-blur">
          <div class="row mt-6">
            <div class="col-md-12 position-relative">
              <div class="p-3 text-center">
                <h1 class="text-gradient text-primary"><span id="state1" countTo="70"></span></h1>
                <h5 class="mt-3">PTI OPTIMIZE</h5>
              </div>
              <hr class="vertical dark">
            </div>
            <div class="col-md-4 position-relative">
              <div class="p-3 text-center">
                <h5 class="mt-3">POC Cloud Precis</h5>
              </div>
              <hr class="vertical dark">
            </div>
            <div class="col-md-4 position-relative">
              <div class="p-3 text-center">
                <h5 class="mt-3">PN3 Odin112</h5>
              </div>
              <hr class="vertical dark">
            </div>
            <div class="col-md-4 position-relative">
              <div class="p-3 text-center">
                <h5 class="mt-3">PCE ARCAN</h5>
              </div>
              <hr class="vertical dark">
            </div>
            <div class="col-md-4 position-relative">
              <div class="p-3 text-center">
                <h5 class="mt-3">TE ATES, FAKEROM</h5>
              </div>
              <hr class="vertical dark">
            </div>
            <div class="col-md-4 position-relative">
              <div class="p-3 text-center">
                <h5 class="mt-3">PTE Yggdrasil</h5>
              </div>
              <hr class="vertical dark">
            </div>
            <div class="col-md-4 position-relative">
              <div class="p-3 text-center">
                <h5 class="mt-3">PC ROBIN, INTELLIT, Lib2Life</h5>
              </div>
              <hr class="vertical dark">
            </div>
            <div class="col-md-4 position-relative">
              <div class="p-3 text-center">
                <h5 class="mt-3">POD G NETIO (subsidiary contracts PIAM & Semantic)</h5>
              </div>
              <hr class="vertical dark">
            </div>
            <div class="col-md-4 position-relative">
              <div class="p-3 text-center">
                <a href="">
                <h5 class="mt-3">POC D Hub-TECH, IAV-PLN</h5>
                </a>
              </div>
              <hr class="vertical dark">
            </div>
            <div class="col-md-4 position-relative">
              <div class="p-3 text-center">
                <h5 class="mt-3">POC ReadME</h5>
              </div>
              <hr class="vertical dark">
            </div>
            <div class="col-md-4 position-relative">
              <div class="p-3 text-center">
                <h5 class="mt-3">PN III PTE Text2NeuralQL</h5>
              </div>
              <hr class="vertical dark">
            </div>
            <div class="col-md-4 position-relative">
              <div class="p-3 text-center">
                <h5 class="mt-3">H2020 RAGE</h5>
              </div>
              <hr class="vertical dark">
            </div>
            <div class="col-md-4 position-relative">
              <div class="p-3 text-center">
                <h5 class="mt-3">ERASMUS+ ENeA-SEA</h5>
              </div>
              <hr class="vertical dark">
            </div>
          </div>
        </div>s
      </div>
    </div>
  </section>
  <section class="my-5 py-5">
    <div class="container">
      <div class="row mb-6">
        <div class="row justify-content-center text-center my-sm-5">
          <div class="col-lg-6">
            <h2 class="text-dark mb-0">International Collaborations</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-lg-9 z-index-2 border-radius-xl mt-n10 mx-auto py-3 blur shadow-blur">
          <div class="row mt-6">
            <div class="col-md-4 position-relative">
              <div class="p-3 text-center">
                <h3 class="text-gradient text-primary"><span id="state1" countTo="70"></span>55+ joint papers</h3>
                <div class="card-header p-0 mx-3 mt-3 position-relative z-index-1 d-flex justify-content-center mb-3">
                  <a href="javascript:;" class="d-flex justify-content-center">
                    <img src="../assets/images/ASU.png" class="img-fluid border-radius-lg">
                  </a>
                </div>
              </div>
              <hr class="vertical dark">
            </div>
            <div class="col-md-4 position-relative">
              <div class="p-3 text-center">
                <h3 class="text-gradient text-primary">50+ joint papers</h3>
                <div class="card-header p-0 mx-3 mt-3 position-relative z-index-1 d-flex justify-content-center mb-3">
                  <a href="javascript:;" class="d-flex justify-content-center">
                    <img src="../assets/images/UGA.png" class="img-fluid border-radius-lg">
                  </a>
                </div>
              </div>
              <hr class="vertical dark">
            </div>
            <div class="col-md-4 position-relative">
              <div class="p-3 text-center">
                <h3 class="text-gradient text-primary">40+ joint papers</h3>
                <div class="card-header p-0 mx-3 mt-3 position-relative z-index-1 d-flex justify-content-center mb-3">
                  <a href="javascript:;" class="d-flex justify-content-center">
                    <img src="../assets/images/GSU.png" class="img-fluid border-radius-lg">
                  </a>
                </div>
              </div>
              <hr class="vertical dark">
            </div>
            <div class="col-md-6 position-relative">
              <div class="p-3 text-center">
                <h3 class="text-gradient text-primary">30+ joint papers</h3>
                <div class="card-header p-0 mx-3 mt-3 position-relative z-index-1 d-flex justify-content-center mb-3">
                  <a href="javascript:;" class="d-flex justify-content-center">
                    <img src="../assets/images/LMU.jpg" class="img-fluid border-radius-lg">
                  </a>
                </div>
              </div>
              <hr class="vertical dark">
            </div>
            <div class="col-md-6 position-relative">
              <div class="p-3 text-center">
                <h3 class="text-gradient text-primary">10+ joint papers</h3>
                <div class="card-header p-0 mx-3 mt-3 position-relative z-index-1 d-flex justify-content-center mb-3">
                  <a href="javascript:;" class="d-flex justify-content-center">
                    <img src="../assets/images/MPT.png" class="img-fluid border-radius-lg">
                  </a>
                </div>
              </div>
              <hr class="vertical dark">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    name: 'home',
    components: {
      
    },
  };
</script>
<style lang="scss" scoped>
  .hero {
    text-align: center;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 400px;
  }
  .hero-body .title {
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.6);
    padding: 40px 0 20px 0;
    font-size: 60px;
  }
  .subtitle {
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.7);
    font-size: 30px;
  }
  .button-block {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    position: absolute;
    bottom: -150px;
    .button {
      margin-right: 50px;
      padding-left: 50px;
      padding-right: 50px;
    }
    .welcome {
      width: 400px;
      padding: 10px;
      margin-left: auto;
      margin-right: auto;
    }
  }
  .is-xl {
    font-size: 1.7rem;
  }
</style>