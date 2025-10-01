<template>
<header class="header-2">
    <div class="page-header min-vh-75 relative" v-bind:style="{ 'background-image': 'url(' + require('@/assets/images/home-page-background.png') + ')' }">
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
                    <use xlink:href="#gentle-wave" x="48" y="16" fill="rgba(248,249,250,0.95)" />
                </g>
            </svg>
        </div>
    </div>
</header>
<div class="background-home-view">
    <section class="pt-3 pb-4" id="count-stats">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 z-index-2 border-radius-xl mt-7 mx-auto py-5 blur shadow-blur">
                    <div class="row justify-content-center">
                        <div class="col-md-8 text-center">
                            <img src="../assets/images/pavelbetiu.jpg" alt="Pavel Betiu" class="img-fluid border-radius-lg mb-4" style="width: 200px; height: 200px; object-fit: cover;" />
                            <h1 class="text-gradient text-primary mb-3">Pavel Bețiu</h1>
                            <h4 class="text-muted mb-4">Associate Cloud Application Systems Engineer</h4>
                            <p class="lead text-dark mb-4">
                                Cloud applications engineer at Finastra with a Master's degree in Computer Science specializing in Graphics, Multimedia, and Virtual Reality. 
                                Experienced in complex web applications, machine learning technologies, and system architecture.
                            </p>
                            <div class="row mt-5">
                                <div class="col-md-3">
                                    <h3 class="text-gradient text-primary">3+</h3>
                                    <h6 class="mt-2">Years Experience</h6>
                                </div>
                                <div class="col-md-3">
                                    <h3 class="text-gradient text-primary">4</h3>
                                    <h6 class="mt-2">Professional Roles</h6>
                                </div>
                                <div class="col-md-3">
                                    <h3 class="text-gradient text-primary">6+</h3>
                                    <h6 class="mt-2">Programming Languages</h6>
                                </div>
                                <div class="col-md-3">
                                    <h3 class="text-gradient text-primary">2</h3>
                                    <h6 class="mt-2">Teaching Positions</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="d-flex justify-content-center mb-7 position-relative">
        <div class="container">
            <div class="row mb-6">
                <div class="row justify-content-center text-center my-sm-7">
                    <div class="col-lg-8">
                        <div class="row">
                            <div class="col-md-6 mb-4">
                                <a href="/about">
                                    <div class="page-header section-height-75 m-3 border-radius-xl move-on-hover" style="background-image: url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80');">
                                        <span class="mask bg-gradient-dark"></span>
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-lg-10 my-auto mx-auto text-center">
                                                    <h3 class="text-white fadeIn2 fadeInBottom">About Me</h3>
                                                    <p class="lead text-white opacity-8 fadeIn3 fadeInBottom">Learn more about my journey, education, and passion for technology</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-md-6 mb-4">
                                <a href="/projects">
                                    <div class="page-header section-height-75 m-3 border-radius-xl move-on-hover" style="background-image: url('https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80');">
                                        <span class="mask bg-gradient-dark"></span>
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-lg-10 my-auto mx-auto text-center">
                                                    <h3 class="text-white fadeIn2 fadeInBottom">My Projects</h3>
                                                    <p class="lead text-white opacity-8 fadeIn3 fadeInBottom">Explore my portfolio of software development and AI research projects</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="py-5">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-10">
                    <h2 class="text-gradient text-primary text-center mb-5">Technical Skills</h2>
                    <div class="row">
                        <div class="col-md-6 mb-4">
                            <div class="card shadow-lg">
                                <div class="card-body text-center p-4">
                                    <div class="icon icon-lg bg-gradient-primary border-radius-lg mb-3 mx-auto">
                                        <i class="fas fa-code text-white"></i>
                                    </div>
                                    <h5 class="text-gradient text-primary">Full-Stack Development</h5>
                                    <p class="text-sm">Vue.js, React, Node.js, Python, TypeScript, Java</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 mb-4">
                            <div class="card shadow-lg">
                                <div class="card-body text-center p-4">
                                    <div class="icon icon-lg bg-gradient-primary border-radius-lg mb-3 mx-auto">
                                        <i class="fas fa-brain text-white"></i>
                                    </div>
                                    <h5 class="text-gradient text-primary">Machine Learning & AI</h5>
                                    <p class="text-sm">NLP, Deep Learning, TensorFlow, PyTorch, Transformers</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 mb-4">
                            <div class="card shadow-lg">
                                <div class="card-body text-center p-4">
                                    <div class="icon icon-lg bg-gradient-primary border-radius-lg mb-3 mx-auto">
                                        <i class="fas fa-database text-white"></i>
                                    </div>
                                    <h5 class="text-gradient text-primary">Data Engineering</h5>
                                    <p class="text-sm">SQL, MongoDB, Data Analysis, ETL Pipelines</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 mb-4">
                            <div class="card shadow-lg">
                                <div class="card-body text-center p-4">
                                    <div class="icon icon-lg bg-gradient-primary border-radius-lg mb-3 mx-auto">
                                        <i class="fas fa-cloud text-white"></i>
                                    </div>
                                    <h5 class="text-gradient text-primary">Cloud & DevOps</h5>
                                    <p class="text-sm">AWS, Docker, CI/CD, Git, Linux</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- <section class="my-5 py-5">
    <div class="container">
        <div class="row mb-6">
            <div class="row justify-content-center text-center my-sm-5">
                <div class="col-lg-6">
                    <h2 class="text-dark mb-0">Results – Top Research in AI</h2>
                </div>
            </div>
        </div>
    </div>
</section> -->

    <section class="d-flex justify-content-center mb-7 position-relative">
        <div class="container">
            <div class="row mb-6">
                <div class="row justify-content-center text-center my-sm-7">
                    <div class="col-lg-6">
                        <div class="page-header section-height-75 m-3 border-radius-xl move-on-hover" style="background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/tasks.jpg');">
                            <span class="mask bg-gradient-dark"></span>
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-6 my-auto">
                                        <h1 class="text-white fadeIn2 fadeInBottom">Results – Top Research in AI</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                                <h1 class="text-gradient text-primary"> <span id="state2" countTo="15">8000+</span></h1>
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

    <section class="d-flex justify-content-center mb-7 position-relative">
        <div class="container">
            <div class="row mb-6">
                <div class="row justify-content-center text-center my-sm-7">
                    <div class="col-lg-6">
                        <div class="page-header section-height-75 m-3 border-radius-xl move-on-hover" style="background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/team-working.jpg');">
                            <span class="mask bg-gradient-dark"></span>
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-6 my-auto">
                                        <h1 class="text-white fadeIn2 fadeInBottom">Research Projects</h1>
                                        <p class="text-white fadeIn2 fadeInBottom">8+ Million Euro managed funds</p>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                                <h5 class="mt-3">POC D Hub-TECH, IAV-PLN</h5>
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
                </div>
            </div>
        </div>
    </section>

    <!-- <section class="my-5 py-5">
    <div class="container">
        <div class="row mb-6">
            <div class="row justify-content-center text-center my-sm-5">
                <div class="col-lg-6">
                    <h2 class="text-dark mb-0">International Collaborations</h2>
                </div>
            </div>
        </div>
    </div>
</section> -->

    <section class="d-flex justify-content-center mb-7 position-relative">
        <div class="container">
            <div class="row mb-6">
                <div class="row justify-content-center text-center my-sm-7">
                    <div class="col-lg-6">
                        <div class="page-header section-height-75 m-3 border-radius-xl move-on-hover" style="background-image: url('https://images.unsplash.com/photo-1552793494-111afe03d0ca?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1920&amp;q=80');">
                            <span class="mask bg-gradient-dark"></span>
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-6 my-auto">
                                        <h1 class="text-white fadeIn2 fadeInBottom">International Collaborations</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                                    <img src="../assets/images/ASU.png" class="img-fluid border-radius-lg">
                                </div>
                            </div>
                            <hr class="vertical dark">
                        </div>
                        <div class="col-md-4 position-relative">
                            <div class="p-3 text-center">
                                <h3 class="text-gradient text-primary">50+ joint papers</h3>
                                <div class="card-header p-0 mx-3 mt-3 position-relative z-index-1 d-flex justify-content-center mb-3">
                                    <img src="../assets/images/UGA.png" class="img-fluid border-radius-lg">
                                </div>
                            </div>
                            <hr class="vertical dark">
                        </div>
                        <div class="col-md-4 position-relative">
                            <div class="p-3 text-center">
                                <h3 class="text-gradient text-primary">40+ joint papers</h3>
                                <div class="card-header p-0 mx-3 mt-3 position-relative z-index-1 d-flex justify-content-center mb-3">
                                    <img src="../assets/images/GSU.png" class="img-fluid border-radius-lg">
                                </div>
                            </div>
                            <hr class="vertical dark">
                        </div>
                        <div class="col-md-6 position-relative">
                            <div class="p-3 text-center">
                                <h3 class="text-gradient text-primary">30+ joint papers</h3>
                                <div class="card-header p-0 mx-3 mt-3 position-relative z-index-1 d-flex justify-content-center mb-3">
                                    <img src="../assets/images/LMU.jpg" class="img-fluid border-radius-lg" width="256" height="256">
                                </div>
                            </div>
                            <hr class="vertical dark">
                        </div>
                        <div class="col-md-6 position-relative">
                            <div class="p-3 text-center">
                                <h3 class="text-gradient text-primary">10+ joint papers</h3>
                                <div class="card-header p-0 mx-3 mt-3 position-relative z-index-1 d-flex justify-content-center mb-3">
                                    <img src="../assets/images/MPT.png" class="img-fluid border-radius-lg">
                                </div>
                            </div>
                            <hr class="vertical dark">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
export default {
    name: 'home',
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

.background-home-view {
    background-color: #f8f9fa
}
</style>
