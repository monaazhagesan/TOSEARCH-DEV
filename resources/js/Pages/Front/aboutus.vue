 <template>
<AuthenticatedLayout> 
   <div id="titlebar" class="gradient">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h2>About Us</h2>
        </div>
      </div>
    </div>
  </div>
  <div class="container" style="margin-top: -80px;">
    <div class="row utf_sticky_main_wrapper">
      <div class="col-lg-12 col-md-12">
        <div id="titlebar" class="utf_listing_titlebar">
          <div class="utf_listing_titlebar_title">
           <h2>About Us</h2>
              <div v-html="page_content"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</AuthenticatedLayout>
</template>

<!-- Scripts -->
<script>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';

export default {
    components: {
        Head,
        AuthenticatedLayout,
    },
    props: {
        page_content: String,
    },
}
</script>