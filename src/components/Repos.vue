<template>
  <div v-if="repos.length">
    <div class="repo" v-for="(repo, i) in repos" :key="i">
      <div class="repo-title">
        <a class="repo__link" :href="repo.html_url">{{ repo.name }}</a>
        {{ repo.created_at.substring(0, 10) }}
      </div>
      <div class="repo-description" v-if="repo.description">
        {{ repo.description }}
      </div>
    </div>
  </div>
  <div class="not-found" v-else>
    Sorry, no repositories were found for this request.
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["repos"]),
  },
};
</script>

<style>
.repo {
  border-radius: 8px;
  border: 1px solid #aaa;
  margin-bottom: 16px;
  overflow: hidden;
}

.repo-title {
  display: flex;
  justify-content: space-between;
  padding: 8px;
  background-color: #f0f0f0;
}

.repo__link {
  color: #000;
}

.repo-description {
  border-top: 1px solid #aaa;
  padding: 16px;
}

.not-found {
  text-align: center;
}
</style>
