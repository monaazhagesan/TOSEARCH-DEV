<template>
    <ActionSection class="mt-2">
        <template #title>
            Browser Sessions
        </template>

        <template #description>
            Manage and log out your active sessions on other browsers and devices.
        </template>

        <template #content>
            <div class="max-w-xl text-sm text-gray-600">
                If necessary, you may log out of all of your other browser sessions across all of your devices. Some of your recent sessions are listed below; however, this list may not be exhaustive. If you feel your account has been compromised, you should also update your password.
            </div>

            <!-- Other Browser Sessions -->
            <div v-if="sessions.length > 0"  class="mt-2">
                <div v-for="(session, i) in sessions" :key="i" class="flex items-center">

                    <div  class="mt-2">
                        <div class="text-sm text-gray-600">
                            {{ session.agent.platform ? session.agent.platform : 'Unknown' }} - {{ session.agent.browser ? session.agent.browser : 'Unknown' }}
                        </div>

                        <div>
                            <div class="text-xs text-gray-500">
                                {{ session.ip_address }},

                                <span v-if="session.is_current_device" class="text-green-500 font-semibold">This device</span>
                                <span v-else>Last active {{ session.last_active }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-2">
             <a-button type="primary" @click="confirmLogout" class="login-form-button">Log Out Other Browser SessionsSessions</a-button>

                <ActionMessage :on="form.recentlySuccessful" class="ms-3">
                    Done.
                </ActionMessage>
            </div>

            <!-- Log Out Other Devices Confirmation Modal -->
            <DialogModal :show="confirmingLogout" @close="closeModal">
                <template #title>
                    Log Out Other Browser Sessions
                </template>

                <template #content>
                    Please enter your password to confirm you would like to log out of your other browser sessions across all of your devices.

                    <div class="mt-4">
                        <TextInput
                            ref="passwordInput"
                            v-model="form.password"
                            type="password"
                            class="mt-1 block w-3/4"
                            placeholder="Password"
                            autocomplete="current-password"
                            @keyup.enter="logoutOtherBrowserSessions"
                        />

                        <InputError :message="form.errors.password" class="mt-2" />
                    </div>
                </template>

                <template #footer>
                    <SecondaryButton @click="closeModal">
                        Cancel
                    </SecondaryButton>

                    <PrimaryButton
                        class="ms-3"
                        :class="{ 'opacity-25': form.processing }"
                        :disabled="form.processing"
                        @click="logoutOtherBrowserSessions"
                    >
                        Log Out Other Browser Sessions
                    </PrimaryButton>
                </template>
            </DialogModal>
        </template>
    </ActionSection>
</template>

<script>
import { Input, FormItem, Button} from 'ant-design-vue';
import { ref, defineComponent } from 'vue';
import { useForm } from '@inertiajs/vue3';
import ActionMessage from '@/Components/ActionMessage.vue';
import ActionSection from '@/Components/ActionSection.vue';
import DialogModal from '@/Components/DialogModal.vue';
import InputError from '@/Components/InputError.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import TextInput from '@/Components/TextInput.vue';

const confirmingLogout = ref(false);
const passwordInput = ref(null);


const confirmLogout = () => {
    confirmingLogout.value = true;

    setTimeout(() => passwordInput.value.focus(), 250);
};

export default defineComponent({
    props: {
      sessions: Array,
    },
    components: {
        'a-input': Input,
        'a-form-item': FormItem,
        'a-button': Button,
        ActionMessage,
        ActionSection,
        DialogModal,
        InputError,
        PrimaryButton,
        SecondaryButton,
        TextInput,
    },
    setup(props) {
        const form = useForm({
            password: '',
        });
        const logoutOtherBrowserSessions = () => {
            form.delete(route('other-browser-sessions.destroy'), {
                preserveScroll: true,
                onSuccess: () => closeModal(),
                onError: () => passwordInput.value.focus(),
                onFinish: () => form.reset(),
            });
        };
        const closeModal = () => {
            confirmingLogout.value = false;
            form.reset();
        };
        return {
            confirmingLogout,
            passwordInput,
            form,
            confirmLogout,
            logoutOtherBrowserSessions,
            closeModal,
        };
    },
});
</script>