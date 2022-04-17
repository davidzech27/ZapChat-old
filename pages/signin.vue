<!--import components, defineEmits(), defineProps(), ref(), computed, methods, watchers-->
<script>
</script>



<template>
<div>
    <div class="h-2/3 w-1/2 bg-blue absolute left-0 bottom-[-32.4%]" style="border-radius: 50% 100%;"></div>
    <div class="h-screen w-[23.3%] bg-gradient-to-r from-purple to-blue absolute"></div>
    <div class="h-2/3 w-1/4 bg-background absolute rounded-bl-full"></div>
    <div class="h-[1024px] w-1/2 bg-gradient-to-r from-purple to-blue absolute left-3/4 -top-56px animate-wiggle"></div>

    <div v-tilt class="h-[64%] w-[34%] left-[33%] top-[18%] bg-white rounded-2xl shadow-5xl opacity-100 backdrop-filter backdrop-blur-xl absolute flex items-center text-center text-3xl transition-opacity duration-500 text-opacity-100 px-16 hover:opacity-8">
        <button @click="signin"><a href="/api/auth">
            <div class="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple via-black to-blue">Sign in with Google account</div>
        </a></button>
    </div>

</div>
</template>