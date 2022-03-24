<template>
  <SfFooter :column="3" multiple class="footer">
    <SfFooterColumn :title="$t('')">
      <img src="/icons/zer-logo-2022.png" style="margin-bottom: 10px;"><p>Thiết bị công nghệ thế hệ Z</p>

    </SfFooterColumn>
    <SfFooterColumn :title="$t('Contact us')">
      <i class="fa fa-location-arrow" style="width: 15px; text-align: center; margin-right: 4px;"></i> 413/29 Nguyễn Kiệm, phường 9, quận Phú Nhuận, TP. Hồ Chí Minh<br><br>
      <i class="fa fa-mobile" style="width: 15px; text-align: center; margin-right: 4px;"></i> Hotline: 096.433.863<br>

    </SfFooterColumn>

    <SfFooterColumn :title="$t('Categories')">
      <SfList>
        <SfListItem>
            <router-link to="/c/laptop" exact>
              <SfMenuItem
                class="sf-footer__menu-item"
                :label="$t('Laptop')"
              />
            </router-link>
          </SfListItem>
          <SfListItem>
            <router-link to="/c/thiet-bi-am-thanh" exact>
              <SfMenuItem
                class="sf-footer__menu-item"
                :label="$t('Thiết bị âm thanh')"
              />
            </router-link>
          </SfListItem>
          <SfListItem>
            <router-link to="/c/chuot-may-tinh" exact>
              <SfMenuItem
                class="sf-footer__menu-item"
                :label="$t('Chuột máy tính')"
              />
            </router-link>
          </SfListItem>
          <SfListItem>
            <router-link to="/c/do-dien-tu" exact>
              <SfMenuItem
                class="sf-footer__menu-item"
                :label="$t('Thiết bị khác')"
              />
            </router-link>
          </SfListItem>
      </SfList>
    </SfFooterColumn>
  </SfFooter>
</template>

<script>
import { SfFooter, SfList, SfImage, SfMenuItem } from '@storefront-ui/vue';
export default {
  components: {
    SfFooter,
    SfList,
    SfImage,
    SfMenuItem
  },
  data() {
    return {
      departments: ['Women fashion', 'Men fashion', 'Kidswear', 'Home'],
      social: ['facebook', 'pinterest', 'google', 'twitter', 'youtube'],
      isMobile: false,
      desktopMin: 1024
    };
  }
};
</script>

<style lang="scss">
.footer {
  margin-bottom: 1.75rem;
  @include for-desktop {
    margin-bottom: 0;
  }
  &__socials {
    display: flex;
    justify-content: space-between;
    margin: 0 auto var(--spacer-lg);
    padding: var(--spacer-base) var(--spacer-xl);
    @include for-desktop {
      justify-content: flex-start;
      padding: var(--spacer-xs) 0;
      margin: 0 auto;
    }
  }
  &__social-image {
    margin: 0 var(--spacer-2xs) 0 0;
  }
}
.sf-footer {
  @include for-desktop {
    border-top: var(--spacer-xs) solid var(--c-primary);
    padding-bottom: 0;
    // margin-top: var(--spacer-2xl);
  }
  &__container {
    margin: var(--spacer-sm);
    @include for-desktop {
      max-width: rem;
      margin: 0 auto;
    }
  }
}
</style>
