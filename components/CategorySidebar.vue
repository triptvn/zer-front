<template>
  <div id="category" class="sf-menu">
    <SfSidebar
      :visible="isCategorySidebarOpen"
      :button="false"
      title="Danh mục sản phẩm"
      @close="toggleCategorySidebar"
      class="sidebar sf-sidebar--right"
    >

      <SfList class="sf-sidebar__bottom">
        <div class="filters__buttons">

          <SfButton
              type="button"
              class="sf-button--full-width category__button"
              @click="handleCateogoryClick('/c/laptop')"
          >
            {{ $t('Laptop') }}
          </SfButton>

          <SfButton
              type="button"
              class="sf-button--full-width category__button"
              @click="handleCateogoryClick('/c/thiet-bi-am-thanh')"
          >
            {{ $t('Thiết bị âm thanh') }}
          </SfButton>

          <SfButton
              type="button"
              class="sf-button--full-width category__button"
              @click="handleCateogoryClick('/c/chuot-may-tinh')"
          >
            {{ $t('Chuột máy tính') }}
          </SfButton>

          <SfButton
              type="button"
              class="sf-button--full-width category__button"
              @click="handleCateogoryClick('/c/do-dien-tu')"
          >
            {{ $t('Phụ kiện khác') }}
          </SfButton>
        </div>


        <!-- <SfListItem class="list__item">
            <router-link to="/c/laptop" exact>
              <SfMenuItem @click="toggleCategorySidebar"
                :label="$t('Laptop')"
              />
            </router-link>
          </SfListItem>
          <SfListItem class="list__item">
            <router-link to="/c/thiet-bi-am-thanh" exact>
              <SfMenuItem @click="toggleCategorySidebar"
                :label="$t('Thiết bị âm thanh')"
              />
            </router-link>
          </SfListItem>
          <SfListItem class="list__item">
            <router-link to="/c/chuot-may-tinh" exact>
              <SfMenuItem @click="toggleCategorySidebar"
                :label="$t('Chuột máy tính')"
              />
            </router-link>
          </SfListItem>
          <SfListItem class="list__item">
            <router-link to="/c/do-dien-tu" exact>
              <SfMenuItem @click="toggleCategorySidebar"
                class=""
                :label="$t('Phụ kiện khác')"
              />
            </router-link>
          </SfListItem> -->
      </SfList>
    </SfSidebar>
  </div>
</template>
<script>
import {
  SfSidebar,
  SfHeading,
  SfButton,
  SfIcon,
  SfProperty,
  SfPrice,
  SfCollectedProduct,
  SfImage,
  SfFooter,
  SfList,
  SfMenuItem
} from '@storefront-ui/vue';
import { computed } from '@vue/composition-api';
// import { useWishlist, useUser, wishlistGetters } from '@vue-storefront/vendure';
import { useUiState } from '~/composables';
export default {
  name: 'Menu',
  components: {
    SfSidebar,
    SfButton,
    SfHeading,
    SfIcon,
    SfProperty,
    SfPrice,
    SfCollectedProduct,
    SfImage,
    SfFooter,
    SfList,
    SfMenuItem
  },
  setup(props, { root }) {
    const { isCategorySidebarOpen, toggleCategorySidebar } = useUiState();
    // const { wishlist, removeItem, load: loadWishlist } = useWishlist();
    // const { isAuthenticated } = useUser();
    // const products = computed(() => wishlistGetters.getItems(wishlist.value));
    // const totals = computed(() => wishlistGetters.getTotals(wishlist.value));
    // const totalItems = computed(() => wishlistGetters.getTotalItems(wishlist.value));
    const totalItems = 0;
    // loadWishlist();

    const handleCateogoryClick = ($url) => {
      toggleCategorySidebar();
      return root.$router.push($url);
    };

    return {
      isCategorySidebarOpen,
      toggleCategorySidebar,
      handleCateogoryClick,
    };
  }
};
</script>

<style lang="scss" scoped>
.sidebar {
  --sidebar-z-index: 3;
  --overlay-z-index: 3;
  --sidebar-top-padding: var(--spacer-lg) var(--spacer-base) 0 var(--spacer-base);
  --sidebar-content-padding: var(--spacer-lg) var(--spacer-base);
}


.heading {
  &__wrapper {
    --heading-title-color: var(--c-link);
    --heading-title-font-weight: var(--font-weight--semibold);
    display: flex;
    justify-content: space-between;
  }
}
.sidebar-bottom {
  margin: auto 0 0 0;
}
.collected-product {
  margin: var(--spacer-base) 0;
  &__properties {
    margin: var(--spacer-sm) 0 0 0;
  }
}

.category{
  &__button {
    --button-background: var(--c-primary);
    --button-color: var(--c-light-variant);
    margin: var(--spacer-xs) 0 0 0;
  }
}
</style>
