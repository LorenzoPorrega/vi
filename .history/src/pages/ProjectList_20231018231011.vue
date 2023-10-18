<script>
import axios from "axios";
  export default{
    return
  }
</script>

<template>
  <div class="content">
  <div class="container p-5">
    <div class="row g-3">

        <div class="col-12 col-sm-6 col-md-4 col-lg-3"
        v-for="project in projects">
          <a class="text-decoration-none text-white h-100 w-100" href="">
            <div class="card bg-transparent overflow-hidden h-100 position-relative">
              <div class="card-content-box h-100">
                <img src="" class="card-img-top border-0 rounded-0" alt="" title="">
                <div class="card-body posionated-box text-white position-absolute d-flex flex-column justify-content-center align-items-center h-100">
                  <p class="card-text text-uppercase fw-bold fs-5 text-center"></p>
                  <div class="d-flex ">
                    <a href="" class="text-decoration-none"><button type="button" class="btn btn-primary btn-sm">Edit</button></a>
                    <form action="" method="POST">
                      <button type="submit" class="btn btn-danger btn-sm ms-2">Delete</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>

</style>