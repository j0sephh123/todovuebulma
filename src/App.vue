<template>
<div id="app"> <!-- #app is being mounted in main.js. Don't remove the id ! -->
  <nav class="navbar is-transparent is-fixed-top">
    <div class="navbar-brand">
      <a class="navbar-item" @click="$store.dispatch('ideas/test')">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
      </a>
    </div>

    <div class="navbar-start">
      <router-link class="navbar-item" to="/" exact>Home</router-link>
      <router-link class="navbar-item" to="/books" exact>books</router-link>
    </div>


  </nav><br><br><br><br>

  <p class="title is-3">Just creating a habbit of finishing what I started</p>

  <quick-add></quick-add>
  
  <add-comment :show="showCommentModal"></add-comment>

  <div class="columns">
    <!-- <div class="column is-2">
      Sidebar
    </div> -->
    <div class="column is-12">
      <router-view/>
    </div>
  </div>
  

</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AddCommentVue from './components/AddComment.vue';
import QuickAddVue from './components/QuickAdd.vue';

export default {
  components: {
    addComment: AddCommentVue,
    quickAdd: QuickAddVue,
  },
  data() {
    return {
      
    };
  },
  methods: {
    ...mapActions({

    }),
  },
  computed: {
    ...mapGetters({
      showCommentModal: 'ideas/showCommentModal',
    }),
  },
  watch: {
    
  },
  async mounted() {
    
  }
};
</script>

<style>
.router-link-active {
  text-decoration: underline;
}
.border {
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  border-radius: 6px;
  color: #4a4a4a;
  padding: 5px;
  white-space: pre-line
}
</style>
