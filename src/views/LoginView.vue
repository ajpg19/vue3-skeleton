<template>
  <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8  bg-neutral-99 dark:bg-neutral-10">
    <div class="w-full max-w-md space-y-8">
      <div>
        <LogoMain/>
        <h3 class="mt-6 text-2xl tracking-tight text-gray-900 dark:text-[#E1E2E4]">{{ $t('greeting') }}</h3>
        <p class="mt-2 text-sm text-gray-600 dark:text-[#C0C8CD]">
          {{ $t('use_your_credentials') }}
        </p>
        <p class="mt-6 text-sm flex content-center">

        </p>
      </div>
      <form class="mt-6 space-y-6" @submit.prevent="login">
        <input type="hidden" name="remember" value="true"/>

        <div class="-space-y-px rounded-md shadow-sm">
          <div>
            <label
                for="email-address"
                class="sr-only"
                :class="[loginError ? 'dark:border-red-500 border-red-600' : 'dark:border-gray-300 border-gray-900']"
            >
              Email address</label>
            <input id="email-address" name="email" type="email" autocomplete="email" required v-model="email" class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Email address" />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input id="password" name="password" type="password" autocomplete="current-password" required v-model="password" class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Password" />
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input id="remember-me" name="remember-me" type="checkbox"
                   class="h-4 w-4 rounded border-gray-300 text-primary-800 focus:ring-primary-800"
                   v-model="rememberMe"
            />
            <label for="remember-me" class="ml-2 block text-sm text-gray-900 dark:text-primary-80">Remember me</label>
          </div>

          <div class="text-sm">
            <RouterLink :to="{name:'PasswordRecovery'}"
                        class="font-medium text-primary-800 dark:text-primary-80
                        hover:underline hover:text-primary-700 dark:hover:text-primary-100">
              {{ $t('forgot_password') }}
            </RouterLink>
          </div>
        </div>

        <div>
          <p class="mt-2 text-sm text-gray-600 dark:text-[#8A9297]">
            {{ $t('contact_your_admin') }}
          </p>
        </div>
        <div>
          <button type="submit"
                  class="w-full py-2 px-4 justify-center rounded-full border border-transparent text-sm font-medium
                  bg-sky-700 hover:bg-sky-600 dark:bg-primary-80 dark:hover:bg-primary-80/90 text-white dark:text-[#003546]
                  focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2">
            {{ $t('access') }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { LogoMain } from "@/components";
import {useAuth} from "@/composables/useAuth.js";

const {email, password, rememberMe, loginError, login} = useAuth()

</script>