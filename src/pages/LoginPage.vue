<template>
<q-page class="flex flex-center">
    <div class="q-pa-md" style="max-width: 400px">
        <h4>Login</h4>
        <q-form
        @submit="submit()"
        @reset="reset()"
        class="q-gutter-md"
            >
            <q-input
                filled
                v-model="email"
                label="Your email *"
            />

            <q-input
                filled
                type="password"
                v-model="password"
                label="Your password *"
            />

            <div>
                <q-btn label="Submit" type="submit" color="primary"/>
                <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
                <router-link to="/register">Or register</router-link>
            </div>
        </q-form>

    </div>
</q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { signInWithEmail, signUpNewUser } from '../scripts/auth'

export default defineComponent({
    name: 'LoginPage',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        submit() {
            signInWithEmail(this.email, this.password).then((result) => {
                console.log(result)
                this.$router.push({path: '/'})
            })
        },
        reset() {
            this.email = ''
            this.password = ''
        }
    }
})
</script>
  