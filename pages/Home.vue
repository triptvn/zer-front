<template>
  <div id="home">
    <LazyHydrate when-idle>
      <SfHero class="hero">
        <SfHeroItem
          v-for="(hero, i) in heroes"
          :key="i"
          :title="hero.title"
          :subtitle="hero.subtitle"
          :background="hero.background"
          :image="hero.image"
          :class="hero.className"
          :url="hero.link"
        />
      </SfHero>
    </LazyHydrate>

    <LazyHydrate when-visible>
      <SfBannerGrid :banner-grid="1" class="banner-grid">
        <!-- <template v-for="item in banners" v-slot:[item.slot]>
          <SfBanner
            :key="item.slot"
            :title="item.title"
            :subtitle="item.subtitle"
            :description="item.description"
            :button-text="item.buttonText"
            :link="localePath(item.link)"
            :image="item.image"
            :class="item.class"
          />
        </template> -->
      </SfBannerGrid>
    </LazyHydrate>

    <LazyHydrate when-visible>
      <div class="similar-products">
        <nuxt-link :to="localePath('/c/business')" ><SfHeading title="Dành cho Doanh Nhân" :level="2"/>
        </nuxt-link>
      </div>
    </LazyHydrate>

    <LazyHydrate when-visible>
        <SfCarousel class="carousel" :settings="{ peek: 16, breakpoints: { 1023: { peek: 0, perView: 2 } } }">
          <template #prev="{go}">
            <SfArrow
              aria-label="prev"
              class="sf-arrow--left sf-arrow--long"
              @click="go('prev')"
            />
          </template>
          <template #next="{go}">
            <SfArrow
              aria-label="next"
              class="sf-arrow--right sf-arrow--long"
              @click="go('next')"
            />
          </template>
          <SfCarouselItem class="carousel__item" v-for="(product, i) in products" :key="i">
            <SfProductCard
              :title="product.title"
              :image="product.image"
              :regular-price="product.price.regular"
              :max-rating="product.rating.max"
              :score-rating="product.rating.score"
              :show-add-to-cart-button="true"
              :is-on-wishlist="product.isInWishlist"
              :link="localePath(product.link)"
              class="carousel__item__product"
              @click:wishlist="toggleWishlist(i)"
            />
          </SfCarouselItem>
        </SfCarousel>
    </LazyHydrate>

    <!-- <LazyHydrate when-visible>
      <SfCallToAction
        title="Subscribe to Newsletters"
        description="Be aware of upcoming sales and events. Receive gifts and special offers!"
        image="/homepage/newsletter.webp"
        class="call-to-action"
      />
    </LazyHydrate> -->

    <LazyHydrate when-visible>
      <InstagramFeed />
    </LazyHydrate>

  </div>
</template>
<script>
import {
  SfHero,
  SfBanner,
  SfCallToAction,
  SfSection,
  SfCarousel,
  SfProductCard,
  SfImage,
  SfBannerGrid,
  SfHeading,
  SfArrow,
  SfButton
} from '@storefront-ui/vue';
import InstagramFeed from '~/components/InstagramFeed.vue';
import LazyHydrate from 'vue-lazy-hydration';

export default {
  name: 'Home',
  components: {
    InstagramFeed,
    SfHero,
    SfBanner,
    SfCallToAction,
    SfSection,
    SfCarousel,
    SfProductCard,
    SfImage,
    SfBannerGrid,
    SfHeading,
    SfArrow,
    SfButton,
    LazyHydrate
  },
  data() {
    return {
      heroes: [
        {
          title: 'Xu hướng thiết bị công nghệ 2022',
          subtitle: 'Làm việc trực tuyến hiệu quả',
          background: '#fbf0dd',
          image: '/homepage/sony_accessories.jpg',
          link: '/c/sony/thiet-bi-am-thanh?itemsPerPage=100'
        },
        {
          title: '',
          subtitle: '',
          background: '#a4a5a9',
          image: '/homepage/ms_banner_img1.webp',
          className:
            'sf-hero-item--position-bg-top-left sf-hero-item--align-right',
          link: '/c/zenbook'
        },
        {
          title: '',
          subtitle: '',
          background: '#fce4ec',
          image: '/homepage/ms_banner_img4.webp',
          link: '/p/117/asus-zenbook-flip-13-ux363ea-hp740w-i7-1165g7-16gb-512gb-ssd-13-3fhd-touch-vga-on-win11-pine-grey-tui-sleeve-pen-cap-numpad'
        }
      ],
      // banners: [
      //   {
      //     slot: 'banner-A',
      //     subtitle: 'Dresses',
      //     title: 'Cocktail & Party',
      //     description:
      //       'Find stunning women\'s cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses from all your favorite brands.',
      //     buttonText: 'Shop now',
      //     image: {
      //       mobile: this.$config.theme.home.bannerA.image.mobile,
      //       desktop: this.$config.theme.home.bannerA.image.desktop
      //     },
      //     class: 'sf-banner--slim desktop-only',
      //     link: this.$config.theme.home.bannerA.link
      //   },
      //   {
      //     slot: 'banner-B',
      //     subtitle: 'Dresses',
      //     title: 'Linen Dresses',
      //     description:
      //       'Find stunning women\'s cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses from all your favorite brands.',
      //     buttonText: 'Shop now',
      //     image: this.$config.theme.home.bannerB.image,
      //     class: 'sf-banner--slim banner-central desktop-only',
      //     link: this.$config.theme.home.bannerB.link
      //   },
      //   {
      //     slot: 'banner-C',
      //     subtitle: 'T-Shirts',
      //     title: 'The Office Life',
      //     image: this.$config.theme.home.bannerC.image,
      //     class: 'sf-banner--slim banner__tshirt',
      //     link: this.$config.theme.home.bannerC.link
      //   },
      //   {
      //     slot: 'banner-D',
      //     subtitle: 'Summer Sandals',
      //     title: 'Eco Sandals',
      //     image: this.$config.theme.home.bannerD.image,
      //     class: 'sf-banner--slim',
      //     link: this.$config.theme.home.bannerD.link
      //   }
      // ],
      products: [
        {
          title: 'Asus ZenBook Flip 13.3inch i7 16Bb',
          image: '/homepage/asus-zenbook-13-ux363ea-hp163t__preview.jpg',
          price: { regular: '33,990k' },
          rating: { max: 5, score: 4 },
          isInWishlist: true,
          link: '/p/107/asus-zenbook-flip-13-ux363ea-hp163t-core-i7-1165g7-16gb-512gb-intel-iris-13-3-inch-fhd-oled-win-10-xam'
        },
        {
          title: 'Sennheiser CX Plus TW',
          image: '/homepage/3891_sennheiser_cx_plus_true_wireless_black_1__preview.jpg',
          price: { regular: '4.699k' },
          rating: { max: 5, score: 4 },
          isInWishlist: false,
          link: '/p/76/sennheiser-cx-plus-true-wireless'
        },
        {
          title: 'Sony WI-C310',
          image: '/homepage/wi-c310-lc-e-sony-headphone-wi-c310-lc-e__preview.jpg',
          price: { regular: '950 k' },
          rating: { max: 5, score: 4 },
          isInWishlist: false,
          link: '/p/64/tai-nghe-bluetooth-sony-wi-c310'
        },
        {
          title: 'Pin Zendure 10k mAh',
          image: '/homepage/pin-du-phong-10.000mah-18w-qc-3__preview.jpg',
          price: { regular: '499 k' },
          rating: { max: 5, score: 4 },
          isInWishlist: false,
          link: '/p/77/pin-sac-du-phong-zendure-zdjp221-b'
        },
        {
          title: 'Loa Bluetooth SRS-RA5000',
          image: '/homepage/srs-ra5000-msp1-sony-speaker-srs-ra5000-msp1__02__preview.png',
          price: { regular: '14,490 k' },
          rating: { max: 5, score: 4 },
          isInWishlist: false,
          link: '/p/86/loa-khong-day-cao-cap-srs-ra5000'
        },
        {
          title: 'Asus Vivobook 14inch i7 RAM8Gb',
          image: '/homepage/vivobook-14-a415ep-eb118t-2__preview.jpg',
          price: { regular: '21.190 k' },
          rating: { max: 5, score: 4 },
          isInWishlist: false,
          link: '/p/106/laptop-asus-vivobook-a415ep-eb118t-i7-1165g78gb512gb-ssd14fhdmx330-2gbwin10silver'
        },
        {
          title: 'Sony WF-1000XM4',
          image: '/homepage/wf1000xm4-bme-sony-headphone-wf1000xm4-bme__preview.jpg',
          price: { regular: '5,490 k' },
          rating: { max: 5, score: 4 },
          isInWishlist: false,
          link: '/p/59/tai-nghe-sony-wf-1000xm4-'
        },
        {
          title: 'Tai nghe JVC HA-S31BT-B-U',
          image: '/homepage/jvc-ha-s31bt-b-u-jvc-headphone-ha-s31bt-b-u__preview.jpg',
          price: { regular: '1.290 k' },
          rating: { max: 5, score: 4 },
          isInWishlist: false,
          link: '/p/81/tai-nghe-jvc-khong-day-ha-s31bt-b-u'
        }
      ]
    };
  },
  methods: {
    toggleWishlist(index) {
      this.products[index].isInWishlist = !this.products[index].isInWishlist;
    }
  }
};
</script>

<style lang="scss" scoped>
#home {
  box-sizing: border-box;
  padding: 0 var(--spacer-sm);
  @include for-desktop {
    max-width: 1240px;
    padding: 0;
    margin: 0 auto;
  }
}

.hero {
  margin: var(--spacer-xl) auto var(--spacer-lg);
  --hero-item-background-position: center;
  @include for-desktop {
    margin: var(--spacer-xl) auto var(--spacer-2xl);
  }
  .sf-hero-item {
    &:nth-child(even) {
      --hero-item-background-position: left;
      @include for-mobile {
        --hero-item-background-position: 30%;
        ::v-deep .sf-hero-item__subtitle,
        ::v-deep .sf-hero-item__title {
          text-align: right;
          width: 100%;
          padding-left: var(--spacer-sm);
        }
      }
    }
  }
  ::v-deep .sf-hero__control {
    &--right, &--left {
      display: none;
    }
  }
}

.banner-grid {
  --banner-container-width: 50%;
  margin: var(--spacer-xl) 0;
  ::v-deep .sf-link:hover {
    color: var(--c-white);
  }
  @include for-desktop {
    margin: var(--spacer-2xl) 0;
    ::v-deep .sf-link {
      --button-width: auto;
      text-decoration: none;
    }
  }
}

.banner {
  &__tshirt {
    background-position: left;
  }
  &-central {
    @include for-desktop {
      --banner-container-flex: 0 0 0%;
    }
  }
}

.similar-products {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: var(--spacer-2xs);
  --heading-padding: 0;
  border-bottom: 1px var(--c-light) solid;
  @include for-desktop {
    border-bottom: 0;
    justify-content: center;
    padding-bottom: 0;
  }
}

.call-to-action {
  background-position: right;
  margin: var(--spacer-xs) 0;
  @include for-desktop {
    margin: var(--spacer-xl) 0 var(--spacer-2xl) 0;
  }
}

.carousel {
    margin: 0 calc(-1 * var(--spacer-sm)) 0 0;
  @include for-desktop {
    margin: 0;
  }
  &__item {
    margin: 1.375rem 0 2.5rem 0;
    @include for-desktop {
      margin: var(--spacer-xl) 0 var(--spacer-xl) 0;
    }
    &__product {
      --product-card-add-button-transform: translate3d(0, 30%, 0);
    }
  }
  ::v-deep .sf-arrow--long .sf-arrow--right {
    --arrow-icon-transform: rotate(180deg);
     -webkit-transform-origin: center;
     transform-origin: center;
  }
}

</style>
