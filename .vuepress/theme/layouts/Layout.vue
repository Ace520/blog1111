<template>
  <div>
    <FrontmatterPagination v-if="$pagination" />
    <Content v-else />
  </div>
</template>
export default {
};
<style lang="stylus" scoped></style>