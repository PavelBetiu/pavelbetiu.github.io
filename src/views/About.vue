<template>
<header class="bg-gradient-dark">
    <div class="page-header min-vh-75 relative" v-bind:style="{ 'background-image': 'url(' + require('@/assets/img/curved-images/curved14.jpg') + ')' }">
        <span class="mask bg-gradient-dark opacity-8"></span>

        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8 text-center mx-auto my-auto">
                    <h1 class="text-white">About Pavel Betiu</h1>
                    <p class="lead mb-4 text-white opacity-8">Passionate about technology, AI, and building innovative solutions that make a difference.</p>
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
                    <use xlink:href="#gentle-wave" x="48" y="16" fill="rgba(255,255,255,1" />
                </g>
            </svg>
        </div>
    </div>
</header>

<div class="py-5" style="background-color: #f8f9fa;">
    <section>
        <div class="container mt-7">
            <div class="row">
                <div class="col-lg-12 z-index-2 border-radius-xl mt-n10 mx-auto py-5 blur shadow-blur" style="background-color: white;">
                    <!-- Personal Introduction -->
                    <div class="row mb-5">
                        <div class="col-md-4 text-center">
                            <img src="../assets/images/pavelbetiu.jpg" alt="Pavel Betiu" class="img-fluid border-radius-lg mb-4" style="width: 300px; height: 300px; object-fit: cover;" />
                            <div class="mt-3">
                                <a href="https://www.linkedin.com/in/dumitru-pavel-betiu-015289208/" target="_blank" class="btn btn-outline-primary btn-sm me-2">
                                    <i class="fab fa-linkedin"></i> LinkedIn
                                </a>
                                <a href="https://github.com/PavelBetiu" target="_blank" class="btn btn-outline-dark btn-sm">
                                    <i class="fab fa-github"></i> GitHub
                                </a>
                            </div>
                        </div>
                        <div class="col-md-8">
                            <h2 class="text-gradient text-primary mb-4">Hello, I'm Pavel Bețiu</h2>
                            <p class="text-lg mb-4">
                                I'm <strong>Bețiu Dumitru Pavel</strong>, an Associate Cloud Application Systems Engineer at Finastra 
                                with a Master's degree in Computer Science from the University Politehnica of Bucharest, specializing in 
                                <strong>Graphics, Multimedia, and Virtual Reality</strong>. I have extensive experience in both 
                                <strong>web application development</strong> and <strong>machine learning technologies</strong>.
                            </p>
                            <p class="text-md mb-4">
                                My professional journey spans from embedded systems during my bachelor's studies to modern cloud applications 
                                and ML solutions. I've worked as a Systems Engineer implementing complex solutions, and served as a Teaching Assistant 
                                for fundamental computer science courses, helping students master Data Structures, Algorithms, and Programming at UPB.
                            </p>
                            <p class="text-md">
                                I'm passionate about creating innovative technical solutions, from embedded systems to modern cloud applications, 
                                always staying at the forefront of technology trends. My experience spans multiple programming languages including 
                                C, C++, Java, and Python, with strong knowledge of version control systems and modern development practices.
                            </p>
                        </div>
                    </div>

                    <!-- Education Section -->
                    <div class="row mb-5">
                        <div class="col-12">
                            <h3 class="text-gradient text-primary mb-4">Education</h3>
                            <div class="row">
                                <div class="col-md-6 mb-4">
                                    <div class="card h-100">
                                        <div class="card-body p-4">
                                            <h5 class="text-primary">Master's Degree in Computer Science and Information Technology</h5>
                                            <p class="text-sm text-muted mb-2">University Politehnica of Bucharest</p>
                                            <p class="text-sm text-muted mb-3">October 2022 - June 2024</p>
                                            <p class="text-sm">
                                                Specialization: GMRV - Graphics, Multimedia, and Virtual Reality. 
                                                Faculty of Automatic Control and Computers.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 mb-4">
                                    <div class="card h-100">
                                        <div class="card-body p-4">
                                            <h5 class="text-primary">Bachelor's Degree in Computer Science and Information Technology</h5>
                                            <p class="text-sm text-muted mb-2">University Politehnica of Bucharest</p>
                                            <p class="text-sm text-muted mb-3">September 2018 - September 2022</p>
                                            <p class="text-sm">
                                                Specialization: Computers C2 - Embedded Systems. 
                                                Faculty of Automatic Control and Computers.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 mb-4">
                                    <div class="card h-100">
                                        <div class="card-body p-4">
                                            <h5 class="text-primary">Baccalaureate Diploma</h5>
                                            <p class="text-sm text-muted mb-2">National College Frații Buzești, Craiova</p>
                                            <p class="text-sm text-muted mb-3">September 2014 - June 2018</p>
                                            <p class="text-sm">
                                                Profile: Mathematics - Informatics. Strong foundation in mathematics and computer science.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Experience Section -->
                    <div class="row mb-5">
                        <div class="col-12">
                            <h3 class="text-gradient text-primary mb-4">Experience</h3>
                            <div class="row">
                                <div class="col-12 mb-4">
                                    <div class="card">
                                        <div class="card-body p-4">
                                            <h5 class="text-primary">Associate Cloud Application Systems Engineer</h5>
                                            <p class="text-sm text-muted mb-2">Finastra</p>
                                            <p class="text-sm text-muted mb-3">June 2025 - Present</p>
                                            <ul class="text-sm">
                                                <li>Working with cloud-based financial technology solutions</li>
                                                <li>Developing and maintaining enterprise-grade applications</li>
                                                <li>Implementing scalable system architectures</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 mb-4">
                                    <div class="card">
                                        <div class="card-body p-4">
                                            <h5 class="text-primary">Substitute Teaching Assistant - Data Structures and Algorithms</h5>
                                            <p class="text-sm text-muted mb-2">Politehnica University of Bucharest, Faculty of Automatic Control and Computers</p>
                                            <p class="text-sm text-muted mb-3">February 2024 - June 2024</p>
                                            <ul class="text-sm">
                                                <li>Teaching fundamental computer science concepts to undergraduate students</li>
                                                <li>Conducting practical sessions on algorithms and data structures</li>
                                                <li>Mentoring students in problem-solving techniques</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 mb-4">
                                    <div class="card">
                                        <div class="card-body p-4">
                                            <h5 class="text-primary">Substitute Teaching Assistant - Computer Programming</h5>
                                            <p class="text-sm text-muted mb-2">Politehnica University of Bucharest, Faculty of Automatic Control and Computers</p>
                                            <p class="text-sm text-muted mb-3">October 2023 - February 2024</p>
                                            <ul class="text-sm">
                                                <li>Teaching programming fundamentals to first-year students</li>
                                                <li>Guiding students through practical programming exercises</li>
                                                <li>Providing support for learning programming languages and concepts</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 mb-4">
                                    <div class="card">
                                        <div class="card-body p-4">
                                            <h5 class="text-primary">Systems Engineer</h5>
                                            <p class="text-sm text-muted mb-2">Research Technology SRL, Bucharest</p>
                                            <p class="text-sm text-muted mb-3">October 2022 - June 2024</p>
                                            <ul class="text-sm">
                                                <li>Implementation of complex solutions involving web application development</li>
                                                <li>Working with machine learning-based technologies</li>
                                                <li>Developing innovative technical solutions for research projects</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 mb-4">
                                    <div class="card">
                                        <div class="card-body p-4">
                                            <h5 class="text-primary">Software Development Intern</h5>
                                            <p class="text-sm text-muted mb-2">Various Projects & Freelance</p>
                                            <p class="text-sm text-muted mb-3">2022 - 2023</p>
                                            <ul class="text-sm">
                                                <li>Developed web applications using modern JavaScript frameworks</li>
                                                <li>Implemented responsive designs and user-friendly interfaces</li>
                                                <li>Worked with databases and API integrations</li>
                                                <li>Gained experience in agile development methodologies</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Specializations -->
                    <div class="row mb-5">
                        <div class="col-12">
                            <h3 class="text-gradient text-primary mb-4">Specializations</h3>
                            <div class="row">
                                <div class="col-md-4 mb-3">
                                    <div class="card border-0 shadow-sm">
                                        <div class="card-body text-center p-3">
                                            <i class="fas fa-cloud text-primary fa-2x mb-3"></i>
                                            <h6 class="text-primary">Cloud Applications</h6>
                                            <p class="text-sm">Enterprise-grade cloud-based systems and architectures</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card border-0 shadow-sm">
                                        <div class="card-body text-center p-3">
                                            <i class="fas fa-cube text-primary fa-2x mb-3"></i>
                                            <h6 class="text-primary">Graphics & Multimedia</h6>
                                            <p class="text-sm">Virtual reality, multimedia processing, and visualization</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card border-0 shadow-sm">
                                        <div class="card-body text-center p-3">
                                            <i class="fas fa-microchip text-primary fa-2x mb-3"></i>
                                            <h6 class="text-primary">Embedded Systems</h6>
                                            <p class="text-sm">Low-level programming and hardware-software integration</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Skills -->
                    <div class="row">
                        <div class="col-12">
                            <h3 class="text-gradient text-primary mb-4">Technical Skills</h3>
                            <div class="row">
                                <div class="col-md-3 mb-3">
                                    <h6 class="text-primary">Programming Languages</h6>
                                    <ul class="text-sm">
                                        <li>C</li>
                                        <li>C++</li>
                                        <li>Java</li>
                                        <li>Python</li>
                                    </ul>
                                </div>
                                <div class="col-md-3 mb-3">
                                    <h6 class="text-primary">Technologies</h6>
                                    <ul class="text-sm">
                                        <li>Cloud Applications</li>
                                        <li>Web Development</li>
                                        <li>Machine Learning</li>
                                        <li>Embedded Systems</li>
                                    </ul>
                                </div>
                                <div class="col-md-3 mb-3">
                                    <h6 class="text-primary">Tools & Skills</h6>
                                    <ul class="text-sm">
                                        <li>Git Version Control</li>
                                        <li>ECDL Certified</li>
                                        <li>Software Engineering</li>
                                        <li>System Architecture</li>
                                    </ul>
                                </div>
                                <div class="col-md-3 mb-3">
                                    <h6 class="text-primary">Languages</h6>
                                    <ul class="text-sm">
                                        <li>Romanian (Native)</li>
                                        <li>English (B2)</li>
                                        <li>Technical Communication</li>
                                        <li>Academic Writing</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
    // Add any necessary initialization logic here
});
</script>

<style module>
.people-color-background {
    background-color: #f8f9fa;
}
</style>