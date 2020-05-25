<template>
  <div>
    <FrontmatterPagination v-if="$pagination" />
    <Content v-else />
  </div>
</template>
import FrontmatterPagination from '@theme/layouts/FrontmatterPagination.vue'
export default {
    components: {
      FrontmatterPagination
  },
};
<style lang="stylus" scoped></style>