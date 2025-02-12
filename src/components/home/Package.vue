<template>
  <div class="section_container py-20 lg:px-[50px] px-5">
    <h2 class="home-package__title">Choose your package</h2>
    <h3 class="home-package__desc">
      We provide various types of packages just for you
    </h3>
    <div class="mt-16 flex flex-col lg:flex-row gap-8 justify-center items-center lg:items-end">
      <div class="home-package__box">
        <div>
          <h4 class="home-package__box-title">DEVELOPMENT</h4>
          <p class="home-package__box-price">
            <span class="text-xl font-medium mr-2 align-super">$</span>10
          </p>
          <div class="home-package__box-detail">
            <p>1 Module Javascript</p>
            <p>1 Module Human Resources</p>
          </div>
        </div>
        <button class="home-package__box-btn">Buy Now</button>
      </div>
      <div class="home-package__box active">
        <div>
          <h4 class="home-package__box-title">IT & SOFTWARE</h4>
          <p class="home-package__box-price">
            <span class="text-xl font-medium mr-2 align-super">$</span>30
          </p>
          <div class="home-package__box-detail">
            <p>1 Module Javascript</p>
            <p>1 Module Human Resources</p>
            <p>2 Module Sales Teams</p>
            <p>Pack Marketing Skills</p>
            <p>5 Module Study Case</p>
          </div>
        </div>
        <button class="home-package__box-btn">Buy Now</button>
      </div>
      <div class="home-package__box">
        <div>
          <h4 class="home-package__box-title">BUSINESS</h4>
          <p class="home-package__box-price">
            <span class="text-xl font-medium mr-2 align-super">$</span>30
          </p>
          <div class="home-package__box-detail">
            <p>1 Module Javascript</p>
            <p>1 Module Human Resources</p>
            <p>2 Module Sales Teams</p>
          </div>
        </div>
        <button class="home-package__box-btn">Buy Now</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.home-package__title {
  @apply font-bold text-5xl leading-[57.6px] tracking-[0%] text-center;
}

.home-package__desc {
  @apply font-[250] text-[22px] leading-[26.4px] tracking-[0%] text-center mt-5;
}

.home-package__box {
  @apply w-[343px] lg:w-[393px] flex flex-col justify-between h-[488px] bg-[#f4f4f4] text-center px-9 pb-10 pt-16 rounded-[10px];
  
  .home-package__box-title {
    @apply font-normal text-2xl leading-[28.8px] tracking-[0.25px];
  }

  .home-package__box-price {
    @apply font-bold text-5xl leading-[57.6px] tracking-[0%] mt-10 mb-[60px];
  }

  .home-package__box-detail {
    @apply font-[250] text-[22px] leading-[26.4px] tracking-[0%] text-center;
  }

  .home-package__box-btn {
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

@media (max-width: 1024px) {
  .home-package__title {
    @apply max-w-[320px] mx-auto text-[34px] leading-[40.8px] tracking-[0.25px];
  }

  .home-package__desc {
    @apply max-w-[220px] mx-auto font-normal text-base leading-[22px] tracking-[0.1px];
  }
}

</style>
