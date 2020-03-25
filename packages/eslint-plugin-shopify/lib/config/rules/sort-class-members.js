// see https://github.com/bryanrsmith/eslint-plugin-sort-class-members

module.exports = {
  'sort-class-members/sort-class-members': [
    'error',
    {
      order: [
        '[static-members]',
        '[properties]',
        '[conventional-private-properties]',
        'constructor',
        '[methods]',
        '[conventional-private-methods]',
        '[everything-else]',
      ],
      groups: {
        'static-members': [{static: true}],
      },
      accessorPairPositioning: 'getThenSet',
    },
  ],
};
