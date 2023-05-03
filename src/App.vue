<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">Sprintesc</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link class="nav-link active" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/reserve">Reserve</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/view">Status</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- <div class="container mt-5">
      <router-view></router-view>
    </div> -->
    <div class = "spacer"><router-view/></div>
    <footer>
      <div class="container px-5">
        <div class="row align-items-center justify-content-between flex-column flex-sm-row">
          <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 class="text-uppercase">Sprintesc Travel and Tours, Inc.</h5>
            <p>
              We are a travel and tour agency dedicated to providing quality services to our clients.
            </p>
          </div>
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase">Links</h5>
            <ul class="list-unstyled mb-0">
              <li class="nav-item">
                <router-link class="nav-link active" to="/">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/about">About</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/reserve">Reserve</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/view">Status</router-link>
              </li>
            </ul>
          </div>
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase">Contact</h5>
            <ul class="list-unstyled mb-0">
              <li>
                <p class="text-dark">Address: Avenida, Manila Philippines</p>
              </li>
              <li>
                <p class="text-dark">Phone: (0912) 345 6789</p>
              </li>
              <li>
                <p class="text-dark">Email: info@sprintesctravel.com</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
        &copy; 2023 Sprintesc Travel and Tours, Inc. All rights reserved.
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
footer {
  position: relative;
  display: block;
  bottom: 0;
  width: 100%;
  height: 30px;
  /* background-color: #ffffff; */
  /* border-top: 1px solid #ddd; */
  text-align: center;
  line-height: 50px;
}
</style>

<style>
  h1{
    margin-top: -20px;
    margin-bottom: 15px;
    color: aliceblue;
  }
</style>