<template>
<!-- TODO: create logic with isActive prop for BottomNavigationItems -->
  <SfBottomNavigation class="navigation-bottom smartphone-only">
    <nuxt-link to="/">
      <SfBottomNavigationItem :class="$route.path == '/' ? 'sf-bottom-navigation__item--active' : ''" icon="home" size="20px" label="Home"/>
    </nuxt-link>
    <SfBottomNavigationItem icon="profile" size="20px" label="Account" @click="handleAccountClick"/>
    <SfBottomNavigationItem icon="menu" size="20px" label="Menu" @click="toggleCategorySidebar"/>
    <SfBottomNavigationItem icon="heart" size="20px" label="Wishlist" @click="toggleWishlistSidebar"/>
    <!-- TODO: add logic for label - if on Home then Basket, if on PDC then AddToCart etc. -->
    <SfBottomNavigationItem
      label="Basket"
      icon="add_to_cart"
      @click="toggleCartSidebar"
    >
      <template #icon>
        <SfCircleIcon aria-label="Chọn mua">
          <SfIcon
            icon="add_to_cart"
            color="white"
            size="25px"
            :style="{margin: '0 0 0 -2px'}"
          />
        </SfCircleIcon>
      </template>
    </SfBottomNavigationItem>
  </SfBottomNavigation>
</template>

<script>
import { SfBottomNavigation, SfIcon, SfCircleIcon } from '@storefront-ui/vue';
import { useUiState } from '~/composables';
import { useUser } from '@vue-storefront/vendure';

export default {
  components: {
    SfBottomNavigation,
    SfIcon,
    SfCircleIcon
  },
  setup(props, { root }) {
    const { toggleCartSidebar, toggleWishlistSidebar, toggleCategorySidebar, toggleLoginModal } = useUiState();
    const { isAuthenticated } = useUser();

    const handleAccountClick = async () => {
      if (isAuthenticated.value) {
        return root.$router.push('/my-account');
      }
      toggleLoginModal();
    };

    return {
      toggleWishlistSidebar,
      toggleCategorySidebar,
      toggleCartSidebar,
      handleAccountClick
    };
  }
};
</script>
<style lang="scss" scoped>
.navigation-bottom {
  --bottom-navigation-z-index: 3;
}
</style>
