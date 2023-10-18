<script>
import axios from "axios";
export default {
  return: {
    data() {
      return {
        projects: [],
        pagination: {},
      };
    },
  },
  methods: {
    fetchProjects(url) {
      axios.get(url ?? "http://127.0.0.1:8000/api/projects").then((response) => {
        this.projects = response.data.data;
        delete response.data.data;
        this.pagination = response.data;
        console.log(this.projects);
      });
      setTimeout(console.log("Ciao"), 5000)
    },
  },
  mounted() {
    this.fetchProjects("http://127.0.0.1:8000/api/projects");
  },
};
</script>

<template>
  <div class="content">
    <div class="container p-5">
      <div class="row g-3"
      >
        <div
          class="col-12 col-sm-6 col-md-4 col-lg-3"
          v-if="projects"
          v-for="project in projects"
        >
          <a
            class="text-decoration-none text-white h-100 w-100"
            :href="project.thumb"
          >
            <div
              class="card bg-transparent overflow-hidden h-100 position-relative"
            >
              <div class="card-content-box h-100">
                <img
                  src=""
                  class="card-img-top border-0 rounded-0"
                  alt=""
                  title=""
                />
                <div
                  class="card-body posionated-box text-white position-absolute d-flex flex-column justify-content-center align-items-center h-100"
                >
                  <p
                    class="card-text text-uppercase fw-bold fs-5 text-center"
                  ></p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
