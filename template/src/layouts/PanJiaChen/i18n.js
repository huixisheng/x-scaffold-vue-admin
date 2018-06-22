// translate router.meta.title, be used in breadcrumb sidebar tagsview
export function generateTitle(title) {
  // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions
  if (title.match(/^\w*$/)) {
    const hasKey = this.$te('route.' + title);
    const translatedTitle = this.$t('route.' + title); // $t :this method from vue-i18n, inject in src/lang/index.js

    if (hasKey) {
      return translatedTitle;
    }
  }
  return title;
}
