import S from '@sanity/desk-tool/structure-builder'

const hiddenDocTypes=listItem =>
  !['campaign'].includes(listItem.getId())

export default () =>
  S.documentList()
    .title('Campaigns')
    .filter('_type == $type')
    .params({ type: 'campaign' })
    .child(
      S.editor()
    )