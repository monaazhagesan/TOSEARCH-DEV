

<template>
    <AppLayout title="Sliders">
     <a-affix :offset-top="0">
            <a-page-header :ghost="false" title="Update" @back="() => $inertia.visit(route('sliders.index'))">
            </a-page-header>
        </a-affix>
    <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '539px' }"
      >
      <a-row>
                <a-col :span="12" :offset="6">
                    <a-form :model="formState" v-bind="layout" name="nest-messages" :validate-messages="validateMessages"
                        @finish="submit">
                        <a-form-item label="Title" name="title" :rules="[{ required: true }]">
                            <a-input v-model:value="formState.title" placeholder="Enter Title">
                            </a-input>
                        </a-form-item>
                        <a-form-item label="Images">
                        <div class="form-group">
    <input type="file" class="hidden" ref="images" id="image" multiple @change="updatePreview" />
    
    <!-- Display new image previews -->
    <div v-show="imagePreview">
        <span class="block w-20 h-20 rounded-full imgpreview" v-for="(imagePre, index) in imagePreview" :style="
            'width: 5rem; height: 5rem; border-radius: 999px; display: inline-block; background-size: cover; background-repeat: no-repeat; background-position: center center; background-image: url(\'' +
            imagePre +
            '\');'
        ">
            <i @click="removeImage(index)" style="color: red; cursor: pointer;">Remove</i>
        </span>
    </div>

    <!-- Display old image previews -->
    <div v-show="formState.oldimages">
        <span v-for="(image, index) in formState.oldimages" :key="index" class="block w-20 h-20 rounded-full imgpreview" 
        :style="{
            'width': '5rem',
            'height': '5rem',
            'borderRadius': '999px',
            'display': 'inline-block',
            'backgroundSize': 'cover',
            'backgroundRepeat': 'no-repeat',
            'backgroundPosition': 'center center',
            'backgroundImage': `url('${image}')`
        }">
        <i @click="removeOldImage(index)" style="color: red; cursor: pointer;">Remove</i>
    </span>
    </div>
</div>
                        </a-form-item>

                        <a-form-item :wrapper-col="{ span: 12, offset: 6 }">
                            <a-button type="primary" html-type="submit">Update</a-button>
                        </a-form-item>
                    </a-form>
                </a-col>
            </a-row>
      </a-layout-content>
        
    </AppLayout>
</template>
<script>
import { reactive, inject } from 'vue';
import AppLayout from '@/Layouts/AppLayout.vue';
import { LayoutContent, Space  } from 'ant-design-vue';
import {  UserOutlined, UploadOutlined  } from '@ant-design/icons-vue';
import { Head, Link, useForm, router } from '@inertiajs/vue3';
import { Input, FormItem, Textarea, Button, Form, Menu, MenuItem, Dropdown, Table, Affix, Row, Col,  PageHeader, Upload} from 'ant-design-vue';
import { ref, defineComponent } from 'vue';

export default defineComponent({
  inject: ['validateMessages'],
  components: {
  AppLayout, UserOutlined, UploadOutlined, Head, Link ,
  'a-layout-content': LayoutContent,
  'a-space' : Space,
  'a-col' : Col,
  'a-textarea' : Textarea,
  'a-input': Input,
  'a-form': Form,
  'a-dropdown' : Dropdown,
  'a-table' : Table,
  'a-upload' : Upload,
  'a-row' : Row,
  'a-page-header' : PageHeader,
  'a-affix' : Affix, 
  'a-form-item': FormItem,
  'a-button': Button,
  'a-menu-item': MenuItem,
  'a-menu': Menu,
  },
  props: {
    slider: Object,
  },
  setup(props) {
      const imagePreview = ref([]);
      const slider = ref(props.slider);
      const loading = ref(false);
      const layout = {
            labelCol: { span: 8 },
            wrapperCol: { span: 16 },
      };
      const formState = useForm({
            title: props.slider.title,
            images: [],
            oldimages: props.slider.images,
      });
        return {
            formState,
            imagePreview,
            loading,
            layout,
            slider,
        };
  },
    methods: {
    updatePreview() {
  this.newFileList = Array.from(this.$refs.images.files);
  let i = 0;
  for (i = 0; i < this.$refs.images.files.length; i++) {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.imagePreview.push(e.target.result);
    };
    reader.readAsDataURL(this.$refs.images.files[i]);
  }
},
  submit() {
  if (this.$refs.images) {
    this.formState.images = this.newFileList;
  }
  this.formState.post(route("sliders.update", this.slider.id));
  },
    removeImage(index) {
      this.newFileList.splice(index, 1);
      this.imagePreview.splice(index, 1);
    },
    removeOldImage(index) {
       this.formState.oldimages.splice(index, 1);
    },
    destroy() {
      if (confirm("are you sure?")) {
        this.$inertia.delete(route("sliders.delete", this.slider.id));
      }
    },
    },
});
</script>
<style>
@import './resources/css/style.css';
.imgpreview {
    position: relative;
    margin-bottom: 25px;
    display: inline-block!important;
    text-align: center;
    padding-top: 5rem!important;
}
</style>
