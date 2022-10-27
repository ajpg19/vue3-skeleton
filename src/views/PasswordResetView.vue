<template>
  <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="w-full max-w-md space-y-8">
      <div>
        <LogoMain/>
        <h3 class="mt-6 text-2xl tracking-tight text-gray-900">New password!</h3>
        <p class="mt-2 text-sm text-gray-600">
          Type a new password
        </p>
        <p class="mt-6 text-sm flex content-center">
          <I18nButton/>
        </p>
      </div>
      <form class="mt-6 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" value="true"/>
        <div class="-space-y-px rounded-md shadow-sm">
          <div>
            <label for="email-address" class="sr-only">New password</label>
            <input id="email-address" name="email" type="email" autocomplete="email" required=""
                   class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-primary-800 focus:outline-none focus:ring-primary-800 sm:text-sm"
                   placeholder="New password"/>
          </div>
          <div>
            <label for="password" class="sr-only">Repeat new password</label>
            <input id="password" name="password" type="password" autocomplete="current-password" required=""
                   class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-primary-800 focus:outline-none focus:ring-primary-800 sm:text-sm"
                   placeholder="Repeat new password"/>
          </div>
        </div>

        <div>
          <p class="mt-2 text-sm text-gray-600">
            If you don't have a user account or are having trouble to accessing it, contact your administrator
          </p>
        </div>
        <div>
          <button type="submit"
                  class="w-2/5 mr-2 justify-center rounded-full border border-transparent bg-sky-700 py-2 px-4 text-sm font-medium text-white hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2">
            Update
          </button>
          <router-link :to="{name:'Login'}">
            <button type="button"
                    class="w-1/5 justify-center rounded-full border border-neutral-500 text-primary-800 py-2 px-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2">
              Log in
            </button>
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { LogoMain } from "@/components";
</script>