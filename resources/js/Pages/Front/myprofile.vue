 <template>
<AuthenticatedLayout>  
<div id="titlebar" class="gradient">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h2>My Profile</h2>
          <nav id="breadcrumbs">
            <ul>
              <li><a :href="route('home')">Home</a></li>
              <li>My Profile</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
<section class="fullwidth_block padding-bottom-15">
<div class="container">
  <div class="row"> 
   <form @submit.prevent="submit">
        <div class="col-lg-12 col-md-12">
          <div class="utf_dashboard_list_box margin-top-0">
            <h4 class="gray"><i class="sl sl-icon-user"></i> Profile Details</h4>
            <div class="utf_dashboard_list_box-static"> 
              <div class="edit-profile-photo"> <img src="images/user-avatar.jpg" alt="">
                <div class="change-photo-btn">
                  <div class="photoUpload"> <span><i class="fa fa-upload"></i> Upload Photo</span>
                    <input type="file" class="upload" />
                  </div>
                </div>
              </div>
              <div class="row  padding-bottom-35" style="display: inline-flex;">
                <div class="contentss"> 
                  <div class="iconss pdding bg_green" style="margin-left: 390px;"><i class="fa fa-fw">&#xf274;</i></div>
                    <div class="mem">
                      <div id="nm">Member Since</div>
                      <div id="dur">5 Years</div>
                    </div>
                  </div>  
                  <div class="contentss">  
                    <div class="iconss bg_green" style="margin-left: 100px;"> <span class="im im-icon-Starfish"></span></div>
                      <div class="mem">
                         <div id="nm">Rating</div>
                         <div id="val">--</div>
                      </div>
                    </div>    
            </div>
          <div class="my-profile">
          <div class="row with-forms">
          <div class="col-md-4">
            <label>Name</label>           
            <input type="text" class="input-text" placeholder="" v-model="user[0].name">
          </div>
          <div class="col-md-4">
            <label>Primary Mobile</label>            
            <input type="text" class="input-text" placeholder="(123) 123-456" value="">
          </div>
          <div class="col-md-4">
            <label>Alternative Mobile</label>            
            <input type="text" class="input-text" placeholder="(123) 123-433" value="">
          </div>
          <div class="col-md-4">
            <label>Whatsapp Number</label>            
            <input type="text" class="input-text" placeholder="(123) 123-433" value="">
          </div>
          <div class="col-md-4">
            <label>Email</label>            
            <input type="text" class="input-text" placeholder="test@example.com" value="">
          </div>
          <div class="col-md-4">
            <label>Alternative Email</label>            
            <input type="text" class="input-text" placeholder="test3@example.com" value="">
          </div>
          <div class="col-md-4">
            <label>Country</label>            
            <input type="text" class="input-text" placeholder="India" value="">
          </div>
          <div class="col-md-4">
            <label>State</label>
            <select class="input-text" data-selected-text-format="count" data-size="7" title="Select State">
            <option>Tamil Nadu</option>
            <option>Bihar</option>
            <option>Maharashtra</option>
            <option>Goa</option>
            <option>Chhattisgarh</option>
            <option>Andhra Pradesh</option>           
            </select>
            </div>
            <div class="col-md-4">
            <label>City</label>
            <select class="input-text" data-selected-text-format="count" data-size="7" title="Select State">
            <option>Salem</option>
            <option>Chennai</option>
            <option>Madurai</option>
            <option>Coimbatore</option>
            <option>Thoothukudi</option>
            <option>Nagapattinam</option>           
            </select>
                </div>
          <div class="col-md-4">
            <label>Flat/House No</label>           
            <input type="text" class="input-text" placeholder="" value="">
          </div>
          <div class="col-md-4">
            <label>Address</label>           
            <input type="text" class="input-text" placeholder="" value="">
          </div>
           <div class="col-md-4">
            <label>Pincode</label>           
            <input type="text" class="input-text" placeholder="" value="">
          </div>
          <div class="col-md-4">
            <label>Facebook(optional)</label>           
            <input type="text" class="input-text" placeholder="https://www.facebook.com" value="">
          </div>
          <div class="col-md-4">
            <label>Twitter (optional)</label>            
            <input type="text" class="input-text" placeholder="https://www.twitter.com" value="">
          </div>                    
          <div class="col-md-4">
            <label>Linkedin (optional)</label>
            <input type="text" class="input-text" placeholder="https://www.linkedin.com" value="">            
          </div>
          <div class="col-md-4">
            <label>Google+ (optional)</label>
            <input type="text" class="input-text" placeholder="https://plus.google.com" value="">           
          </div>
          <div class="col-md-4">
            <label>Instagram (optional)</label>
            <input type="text" class="input-text" placeholder="http://instagram.com" value="">            
          </div>
          <div class="col-md-4">
            <label>Skype (optional)</label>
            <input type="text" class="input-text" placeholder="https://www.skype.com" value="">           
          </div>
          </div>  
              </div>
              <button class="button preview btn_center_item margin-top-15">Save Changes</button>
            </div>
          </div>


           <div class="utf_dashboard_list_box margin-top-0">
            <h4 class="gray"> <i class="fa fa-fw">&#xf0f7;</i> Company Details</h4>
            <div class="utf_dashboard_list_box-static"> 
          <div class="my-profile">
          <div class="row with-forms">
          <div class="col-md-4">
            <label>Company Name</label>           
            <input type="text" class="input-text" placeholder="ABC Company" value="">
          </div>
          <div class="col-md-4">
            <label>Company Website</label>            
            <input type="text" class="input-text" placeholder="https://abc.com" value="">
          </div>
          <div class="col-md-4">
            <label>Company Mobile</label>            
            <input type="text" class="input-text" placeholder="(123) 123-433" value="">
          </div>
          <div class="col-md-4">
            <label>Company Email</label>            
            <input type="text" class="input-text" placeholder="test@example.com" value="">
          </div>
          <div class="col-md-4">
            <label>GSTIN</label>            
            <input type="text" class="input-text" placeholder="--" value="">
          </div>
          <div class="col-md-4">
            <label>PAN</label>            
            <input type="text" class="input-text" placeholder="--" value="">
          </div>
          <div class="col-md-4">
            <label>Country</label>            
            <input type="text" class="input-text" placeholder="India" value="">
          </div>
          <div class="col-md-4">
            <label>State</label>
            <select class="input-text" data-selected-text-format="count" data-size="7" title="Select State">
            <option>Tamil Nadu</option>
            <option>Bihar</option>
            <option>Maharashtra</option>
            <option>Goa</option>
            <option>Chhattisgarh</option>
            <option>Andhra Pradesh</option>           
            </select>
            </div>
            <div class="col-md-4">
            <label>City</label>
            <select class="input-text" data-selected-text-format="count" data-size="7" title="Select State">
            <option>Salem</option>
            <option>Chennai</option>
            <option>Madurai</option>
            <option>Coimbatore</option>
            <option>Thoothukudi</option>
            <option>Nagapattinam</option>           
            </select>
                </div>
          <div class="col-md-4">
            <label>Flat/House No</label>           
            <input type="text" class="input-text" placeholder="" value="">
          </div>
          <div class="col-md-4">
            <label>Address</label>           
            <input type="text" class="input-text" placeholder="" value="">
          </div>
           <div class="col-md-4">
            <label>Pincode</label>           
            <input type="text" class="input-text" placeholder="" value="">
          </div>
          <div class="col-md-4">
            <label>GST</label>           
            <input type="text" class="input-text" placeholder="" value="">
          </div>
          <div class="col-md-4">
            <label>PAN Card</label>           
            <input type="text" class="input-text" placeholder="" value="">
          </div>
           <div class="col-md-4">
            <label>Aadhar card</label>           
            <input type="text" class="input-text" placeholder="" value="">
          </div>
          <div class="col-md-4">
            <label>Facebook(optional)</label>           
            <input type="text" class="input-text" placeholder="https://www.facebook.com" value="">
          </div>
          <div class="col-md-4">
            <label>Twitter (optional)</label>            
            <input type="text" class="input-text" placeholder="https://www.twitter.com" value="">
          </div>                    
          <div class="col-md-4">
            <label>Linkedin (optional)</label>
            <input type="text" class="input-text" placeholder="https://www.linkedin.com" value="">            
          </div>
          <div class="col-md-4">
            <label>Google+ (optional)</label>
            <input type="text" class="input-text" placeholder="https://plus.google.com" value="">           
          </div>
          <div class="col-md-4">
            <label>Instagram (optional)</label>
            <input type="text" class="input-text" placeholder="http://instagram.com" value="">            
          </div>
          <div class="col-md-4">
            <label>Skype (optional)</label>
            <input type="text" class="input-text" placeholder="https://www.skype.com" value="">           
          </div>
          </div>  
              </div>
              <button class="button preview btn_center_item margin-top-15">Save Changes</button>
            </div>
          </div>

          <div class="utf_dashboard_list_box margin-top-0">
            <h4 class="gray"><i class="fa fa-fw">&#xf19c;</i>Bank Account Details</h4>
            <div class="utf_dashboard_list_box-static"> 
          <div class="my-profile">
          <div class="row with-forms">
          <div class="col-md-4">
            <label>Bank Name</label>            
            <input type="text" class="input-text" placeholder="--" value="">
          </div>
          <div class="col-md-4">
            <label>Bank Holder Name</label>            
            <input type="text" class="input-text" placeholder="--" value="">
          </div>
          <div class="col-md-4">
            <label>Branch Name</label>            
            <input type="text" class="input-text" placeholder="--" value="">
          </div>
          <div class="col-md-4">
            <label>Account Number</label>            
            <input type="text" class="input-text" placeholder="--" value="">
          </div>
          <div class="col-md-4">
            <label>IFSC Code</label>           
            <input type="text" class="input-text" placeholder="--" value="">
          </div>
          <div class="col-md-4">
            <label>Account Type</label>            
            <input type="text" class="input-text" placeholder="--" value="">
          </div>
          <div class="col-md-4">
            <label>Cancel Cheque </label>            
            <input type="text" class="input-text" placeholder="--" value="">
          </div>
          </div>  
              </div>
              <button class="button preview btn_center_item margin-top-15">Save Changes</button>
            </div>
          </div>
        </div>
        </form>
      </div>
      </div>
</section>

</AuthenticatedLayout>
</template>

<script>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link, useForm, router } from '@inertiajs/vue3';

export default {
  components: {
    AuthenticatedLayout,
  },
  props: {
    user: Object,
  },
  remember: 'form',
    setup(props) {
        const form = useForm({
           _method: 'PUT',
           name: props.user.name,
           email: props.user.email,
        });

        return {
            props,
            form,
        };
    },
  mounted() {
    // Log the user data in the mounted hook
    console.log('User Data in mounted hook:', this.user);
  },
}
</script>