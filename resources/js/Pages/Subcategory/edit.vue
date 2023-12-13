<template>
    <AppLayout title="Categories">
     <a-affix :offset-top="0">
            <a-page-header :ghost="false" title="Update SubCategory" @back="() => $inertia.visit(route('subcategory.index'))">
            </a-page-header>
        </a-affix>
    <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '539px' }"
      >
      <a-row>
                <a-col :span="12" :offset="6">
                    <a-form :model="formState" v-bind="layout" name="nest-messages" :validate-messages="validateMessages"
                        @finish="submit">


            <a-form-item label="Category Name">
              <a-select placeholder="Choose Category" v-model:value="formState.category_id">
              <a-select-option :value="category.id" v-for="category in categories">{{ category.name }}</a-select-option>
              </a-select>
            </a-form-item>
                        <a-form-item label="SubCategory Name" name="name" :rules="[{ required: true }]">
                            <a-input v-model:value="formState.name" placeholder="Enter SubCategory Name">
                            </a-input>
                        </a-form-item>
                        <a-form-item label="Description" name="description" :rules="[{ required: true }]">
                            <a-textarea v-model:value="formState.description" placeholder="Enter Description" :rows="4" />
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
import AppLayout from '@/Layouts/AppLayout.vue';
import { LayoutContent, Space  } from 'ant-design-vue';
import {  UserOutlined, PlusCircleOutlined  } from '@ant-design/icons-vue';
import { Head, Link, useForm, router } from '@inertiajs/vue3';
import { Input, Select, FormItem, SelectOption, Textarea, Button, Form, Menu, MenuItem, Dropdown, Table, Affix, Row, Col,  PageHeader} from 'ant-design-vue';
import { ref, defineComponent } from 'vue';

export default defineComponent({
  inject: ['validateMessages'],
  components: {
  AppLayout, UserOutlined, PlusCircleOutlined, Head, Link ,
  'a-layout-content': LayoutContent,
  'a-space' : Space,
  'a-col' : Col,
  'a-select': Select,
  'a-textarea' : Textarea,
  'a-input': Input,
  'a-form': Form,
  'a-dropdown' : Dropdown,
  'a-table' : Table,
  'a-row' : Row,
  'a-page-header' : PageHeader,
  'a-affix' : Affix, 
  'a-form-item': FormItem,
  'a-button': Button,
  'a-menu-item': MenuItem,
  'a-menu': Menu,
  'a-select-option' : SelectOption,
  },
  props: {
    subcategory:Object,
    categories: Object,
    errors: Object,
  },
  setup(props) {
        const loading = ref(false);
        const layout = {
            labelCol: { span: 8 },
            wrapperCol: { span: 16 },
        };
        const formState = useForm({
            name: props.subcategory.name,
            description: props.subcategory.description,
            category_id: props.subcategory.category_id,
        });
        return {
            formState,
            loading,
            layout,
        };
  },
    methods: {
        submit() {
            this.formState.put(route("subcategory.update",this.subcategory.id));
        },
    },
});
</script>
<style>
@import './resources/css/style.css';
</style>
