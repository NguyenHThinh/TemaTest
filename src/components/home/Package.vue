<script lang="ts" setup></script>

<template>
  <div class="section_container home-package">
    <h2 class="home-package__title">{{ $t("choosePackage") }}</h2>
    <h3 class="home-package__desc">
      {{ $t("weProvidePackage") }}
    </h3>
    <div class="mt-28 lg:mt-20 flex flex-col lg:flex-row gap-8 justify-center items-center lg:items-end">
      <div class="home-package__box">
        <div>
          <h4 class="home-package__box-title">{{ $t("development") }}</h4>
          <p class="home-package__box-price">
            <span class="text-xl font-medium mr-2 align-super">$</span>10
          </p>
          <div class="home-package__box-detail">
            <p>{{ `1 ${$t("moduleJS")}` }}</p>
            <p>{{ `1 ${$t("moduleHr")}` }}</p>
          </div>
        </div>
        <button class="home-package__box-btn">{{ $t("buyNow") }}</button>
      </div>
      <div class="home-package__box active">
        <div>
          <h4 class="home-package__box-title">{{ $t("itSoftware") }}</h4>
          <p class="home-package__box-price">
            <span class="text-xl font-medium mr-2 align-super">$</span>30
          </p>
          <div class="home-package__box-detail">
            <p>{{ `1 ${$t("moduleJS")}` }}</p>
            <p>{{ `1 ${$t("moduleJS")}` }}</p>
            <p>{{ `2 ${$t("moduleSalesTeam")}` }}</p>
            <p>{{ `2 ${$t("packMarketingSkill")}` }}</p>
            <p>{{ `5 ${$t("moduleStudyCase")}` }}</p>
          </div>
        </div>
        <button class="home-package__box-btn">{{ $t("buyNow") }}</button>
      </div>
      <div class="home-package__box">
        <div>
          <h4 class="home-package__box-title">{{ $t("business") }}</h4>
          <p class="home-package__box-price">
            <span class="text-xl font-medium mr-2 align-super">$</span>30
          </p>
          <div class="home-package__box-detail">
            <p>{{ `1 ${$t("moduleJS")}` }}</p>
            <p>{{ `1 ${$t("moduleJS")}` }}</p>
            <p>{{ `2 ${$t("moduleSalesTeam")}` }}</p>
          </div>
        </div>
        <button class="home-package__box-btn">{{ $t("buyNow") }}</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-package {
  @apply py-20 lg:px-[50px] px-5;

  &__title {
    @apply font-bold text-5xl leading-[57.6px] tracking-[0%] text-center;
  }
  
  &__desc {
    @apply font-[250] text-[22px] leading-[26.4px] tracking-[0%] text-center mt-5;
  }
  
  &__box {
    @apply w-[343px] lg:w-[393px] flex flex-col justify-between h-[488px] bg-[#f4f4f4] text-center px-9 pb-10 pt-16 rounded-[10px];
    
    &-title {
      @apply font-normal text-2xl leading-[28.8px] tracking-[0.25px];
    }
  
    &-price {
      @apply font-bold text-5xl leading-[57.6px] tracking-[0%] mt-10 mb-[60px];
    }
  
    &-detail {
      @apply font-[250] text-[22px] leading-[26.4px] tracking-[0%] text-center;
    }
  
    &-btn {
      @apply w-full text-[#ddf247] font-medium text-[22px] leading-[26.4px] tracking-[0%] text-center px-[30px] py-[15px] rounded-[10px] bg-white lg:hover:shadow-md transition-all;
    }
  
    &.active {
      @apply h-[548px] bg-black text-white;
      
      .home-package__box-price {
        @apply my-10;
      }
      .home-package__box-btn {
        @apply text-black bg-[#ddf247] lg:hover:shadow-md lg:hover:bg-opacity-90 transition-all;
      }
    }
  }
}

@media (max-width: 1024px) {
  .home-package {
    &__title {
      @apply max-w-[320px] mx-auto text-[34px] leading-[40.8px] tracking-[0.25px];
    }
  
    &__desc {
      @apply max-w-[220px] mx-auto font-normal text-base leading-[22px] tracking-[0.1px];
    }
  }
}

</style>
