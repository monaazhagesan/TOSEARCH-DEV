

<template>
    <AppLayout title="SubCategories">
    <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '539px' }"
      >
       <a-space direction="vertical" :style="{ width: '100%' }">
       <a-form name="customized_form_controls" layout="inline" :model="formState" @finish="search">
          <a-form-item>
            <a-input v-model:value="formState.term"  placeholder="Search SubCategory Name"></a-input>
          </a-form-item>
          <a-form-item>
            <a-button type="primary" html-type="submit">Search</a-button>
          </a-form-item>
          <a-form-item>
            <Link :href="route('subcategory.create')">
            <a-button type="primary" shape="round">
              <template #icon>
                <plus-circle-outlined />
              </template>
              Add SubCategory
            </a-button>
            </Link>
          </a-form-item>
        </a-form>

        <a-table :columns="columns" :row-key="subcategory => subcategory.id" :data-source="subcategories.data"
          :pagination="pagination" :loading="loading" @change="handleTableChange">
          <template #bodyCell="{ column, text, record }">
            <template v-if="column.key === 'parent_category'">
              {{ (record.parent) ? record.parent.name : '-' }}
            </template>
          
            <template v-if="column.key === 'action'">
              <a-dropdown>
                <template #overlay>
                  <a-menu>
                    <Link :href="route('subcategory.edit', record.id)">
                    <a-menu-item key="1">
                      Edit SubCategory
                    </a-menu-item>
                    </Link>
                    <a-popconfirm title="Are you sure？" @confirm="deleteSubCategory(record.id)">
                      <template #icon><question-circle-outlined style="color: red" /></template>
                      <a-menu-item key="2">
                        Delete SubCategory
                      </a-menu-item>
                    </a-popconfirm>
                  </a-menu>
                </template>
                <a-button>
                  <more-outlined />
                  <DownOutlined />
                </a-button>
              </a-dropdown>
            </template>
          </template>
        </a-table>
       </a-space>
      </a-layout-content>
        
    </AppLayout>
</template>
<script>
import AppLayout from '@/Layouts/AppLayout.vue';
import { LayoutContent, Space  } from 'ant-design-vue';
import { PlusCircleOutlined, DownOutlined, MoreOutlined, QuestionCircleOutlined } from '@ant-design/icons-vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
import { Input, FormItem, Button, Form, Menu, MenuItem, Dropdown, Table, Popconfirm} from 'ant-design-vue';

const columns = [
  {
    title: 'Category Name',
    key: 'parent_category',
    dataIndex: '',
    sorter: false,
    width: '20%',
  },
  {
    title: 'SubCategory Name',
    key: 'name',
    dataIndex: 'name',
    sorter: false,
    width: '20%',
  }, 
  {
    title: 'Description',
    key: 'description',
    dataIndex: 'description',
    sorter: false,
    width: '20%',
  },
  {
    title: 'Action',
    key: 'action',
    fixed: 'right',
    width: '2%',
  },
];

export default {
  components: {
  AppLayout, DownOutlined, PlusCircleOutlined, MoreOutlined, Head, Link ,
  'a-layout-content': LayoutContent, QuestionCircleOutlined, 
  'a-space' : Space,
  'a-input': Input,
  'a-form': Form,
  'a-dropdown' : Dropdown,
  'a-table' : Table,
  'a-popconfirm' : Popconfirm,
  'a-form-item': FormItem,
  'a-button': Button,
  'a-menu-item': MenuItem,
  'a-menu': Menu,
  },
  props: {
    subcategories: Object,
    pagination: Object,
    errors: Object,
  },
  setup(props) {
    return {
      columns,
    };
  },
  data() {
    const loading = false;
    const formState = useForm({
      term: '',
    });
    return {
      loading,
      formState
    };
  },
  methods: {
    search() {
      this.$inertia.get("/subcategory", { s: this.formState.term }, { preserveState: true });
    },
    handleTableChange(val) {
      this.$inertia.get(
        "/subcategory",
        { page: val.current },
        { preserveState: true }
      );
    },
    deleteSubCategory(id) {
      this.$inertia.delete(route("subcategory.destroy", id));
    },
  }
};
</script>
<style>
@import './resources/css/style.css';
</style>
