<template>
    <q-page class="flex flex-center">
        <div class="q-pa-md" style="max-width: 400px">
            <h4>Register</h4>
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
                </div>
            </q-form>
    
        </div>
    </q-page>
    </template>
    
    <script>
    import { defineComponent } from 'vue'
    import { signUpNewUser } from '../scripts/auth'
    
    export default defineComponent({
        name: 'RegisterPage',
        data() {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            submit() {
                signUpNewUser(this.email, this.password).then((result) => {
                    console.log(result)
                })
            },
            reset() {
                this.email = ''
                this.password = ''
            }
        }
    })
    </script>
      