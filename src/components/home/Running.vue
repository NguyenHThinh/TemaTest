<template>
  <div class="section_container home-running">
    <div>
      <h2 class="home-running__title">Get up and running fast together</h2>
      <div class="flex flex-col sm:flex-row mt-20 mb-20 lg:mb-0">
        <div
          class="flex flex-col items-center text-center lg:text-left lg:items-start"
        >
          <NuxtImg src="/images/ic-sound.png" class="w-11 h-10" />
          <div class="space-y-4 mt-14">
            <h3 class="home-running__box-title">University</h3>
            <p class="home-running__box-desc">
              Browse hundreds of in-depth videos, courses, and guides to get up
              and running fast
            </p>
          </div>
        </div>
        <div
          class="h-px w-[220px] mx-auto my-14 sm:my-0 sm:w-px sm:h-[220px] sm:mx-14 bg-[#E4E4E4]"
        ></div>
        <div
          class="flex flex-col items-center text-center lg:text-left lg:items-start"
        >
          <NuxtImg src="/images/ic-rubic.png" class="w-8 h-9" />
          <div class="space-y-4 mt-14">
            <h3 class="home-running__box-title">Showcase</h3>
            <p class="home-running__box-desc">
              Get inspired by the incredible websites built by members of the
              community
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="home-running__pic">
      <div class="home-running__pic-contain">
        <h2 class="home-running__pic-contain--title">TUTORS</h2>
        <h3 class="home-running__pic-contain--name">Anthoney Mills</h3>
        <NuxtImg
          src="/images/people-2.png"
          class="absolute bottom-0 right-0 w-[249px] h-[300px] lg:w-[380px] lg:h-[466px]"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { NuxtImg } from "#components";
</script>

<style lang="scss" scoped>
.home-running {
  @apply flex flex-col lg:flex-row items-center justify-between p-5 lg:p-[50px];

  .home-running__title {
    @apply max-w-[430px] mx-auto lg:mx-0 font-bold text-5xl leading-[57.6px] tracking-[0%];
  }

  .home-running__box-title {
    @apply font-bold text-[34px] leading-[40.8px] tracking-[0.25px];
  }

  .home-running__box-desc {
    @apply max-w-[224px] font-normal text-base leading-[22px] tracking-[0.1px];
  }

  .home-running__pic {
    @apply w-[343px] lg:w-[520px];

    &:before {
      content: "";
      @apply w-[343px] h-[323px] lg:w-[520px] lg:h-[490px] bg-black rounded-xl absolute;
    }

    .home-running__pic-contain {
      @apply w-[313px] h-[377px] lg:w-[475px] lg:h-[575px] p-5 bg-[#DDF247] rounded-xl mx-auto mt-5 relative overflow-hidden;
      
      .home-running__pic-contain--title {
        @apply text-black font-bold text-[34px] leading-[40.8px] tracking-[0.25px] opacity-30;
      }
  
      .home-running__pic-contain--name {
        @apply max-w-[218px] text-black font-bold text-5xl leading-[57.6px] tracking-[0%] mt-5 opacity-20;
      }
    }

  }
}

@media (max-width: 1024px) {
  .home-running {
    .home-running__title {
      @apply font-medium text-[34px] leading-[40.8px] tracking-[0.25px] text-center;
    }

    .home-running__box-title {
      @apply font-bold text-[34px] leading-[40.8px] tracking-[0.25px];
    }
    
    .home-running__pic {
      .home-running__pic-contain {
        .home-running__pic-contain--title {
          @apply text-[23px] leading-[27.6px] tracking-[0.16px];
        }

        .home-running__pic-contain--name {
          @apply max-w-[145px] text-[32px] leading-[38.4px];
        }
      }
    }
  }
}
</style>
