<template>
    <main>
        <header class="bg-secondary py-5">
            <div class="container px-5">
                <div class="row gx-5 align-items-center justify-content-center">
                    <div class="col-lg-8 col-xl-7 col-xxl-6">
                        <div class="my-5 text-center text-xl-start">
                            <h1 class="display-5 fw-bolder text-white mb-2">Sprintesc Travel and Tours Inc.</h1>
                            <p class="lead fw-normal text-white-50 mb-4">Sprintesc Travel and Tours, Inc. offers a variety
                                of buses which are comfortable and</p>
                            <div class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                                <a class="btn btn-primary btn-lg px-4 me-sm-3" href="/reserve">Get Started</a>
                                <a class="btn btn-outline-light btn-lg px-4" href="/about">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-5 col-xxl-6 d-none d-xl-block text-center"><img class="img-fluid rounded-3 my-5"
                            src="https://en.higer.com/uploadfiles/2021/01/20210126164744761.png?S0xRNjEyN0EucG5n"
                            alt="..." /></div>
                </div>
            </div>
        </header>
        <!-- Features section-->
        <section class="py-5" id="features">
            <div class="container px-5 my-5">
                <div class="row gx-5">
                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <h2 class="fw-bolder mb-0">A better way to start your journey.</h2>
                    </div>
                    <div class="col-lg-8">
                        <div class="row gx-5 row-cols-1 row-cols-md-2">
                            <div class="col mb-5 h-100">
                                <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i
                                        class="bi bi-collection"></i></div>
                                <h2 class="h5">Mission</h2>
                                <p class="mb-0">Sprintesc Travel and Tours, Inc. is committed to providing exceptional
                                    travel experiences to our customers. We strive to exceed their expectations by offering
                                    customized travel packages that cater to their unique needs and preferences. Our mission
                                    is to be the preferred travel partner for our customers, providing them with seamless
                                    and hassle-free travel experiences that create lasting memories.</p>
                            </div>
                            <div class="col mb-5 h-100">
                                <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i
                                        class="bi bi-building"></i></div>
                                <h2 class="h5">Vision</h2>
                                <p class="mb-0">Our vision is to be the leading travel and tours company in the region,
                                    known for our exceptional customer service and personalized travel packages. We aim to
                                    establish a strong and loyal customer base by delivering unique and memorable travel
                                    experiences that exceed their expectations. We aspire to be a company that is trusted
                                    and respected for our commitment to quality, innovation, and excellence in all aspects
                                    of our business.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Testimonial section-->
        <div class="py-5 bg-info">
            <div class="container px-5 my-5">
                <div class="row gx-5 justify-content-center">
                    <div class="col-lg-10 col-xl-7">
                        <div class="text-center">
                            <div class="fs-4 mb-4 fst-italic">"We are grateful for the trust our customers have placed in
                                us. It is our pleasure to provide quality service, affordable rates and reliable
                                transportation for all your needs"</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Blog preview section-->
        <section class="py-5">
            <div class="container px-5 my-5">
                <div class="row gx-5 justify-content-center">
                    <div class="col-lg-8 col-xl-6">
                        <div class="text-center">
                            <h2 class="fw-bolder">From our blog</h2>
                            <p class="lead fw-normal text-muted mb-5">Sprintesc's blogs provide insights and
                                tips on car rentals, road trips, and travel to help you make the most out of your
                                adventures.</p>
                        </div>
                    </div>
                </div>
                <div class="row gx-5">
                    <div class="col-lg-4 mb-5">
                        <div class="card h-100 shadow border-0">
                            <img class="card-img-top"
                                src="https://www.ecooil.ph/storage/ckeditor-images/XMxInV1PL978bIHVR48RU1NyrpsKKjRv1T4Yo6br.jpg"
                                alt="..." />
                            <div class="card-body p-4">
                                <div class="badge bg-primary bg-gradient rounded-pill mb-2">News</div>
                                <a class="text-decoration-none link-dark stretched-link" href="#!">
                                    <h5 class="card-title mb-3">Sprintesc: B.L.O.W.B.A.G.E.T.S</h5>
                                </a>
                                <p class="card-text mb-0">Curious about how Sprintesc maintain its cars? This article will
                                    give you an overview of it. </p>
                            </div>
                            <div class="card-footer p-4 pt-0 bg-transparent border-top-0">
                                <div class="d-flex align-items-end justify-content-between">
                                    <div class="d-flex align-items-center">
                                        <img class="rounded-circle me-3" src="https://dummyimage.com/40x40/ced4da/6c757d"
                                            alt="..." />
                                        <div class="small">
                                            <div class="fw-bold">Kelly Rowan</div>
                                            <div class="text-muted">April 20, 2023 &middot; 6 min read</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
  
<script>
export default {
    name: 'Home',
    data() {
        return {}
    }
}
</script>
  
<style>
main {
    min-height: 100vh;
}
</style>
  