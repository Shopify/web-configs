// see https://github.com/bryanrsmith/eslint-plugin-sort-class-members

module.exports = {
  'sort-class-members/sort-class-members': [
    'warn',
    {
      order: [
        '[static-members]',
        '[properties]',
        '[conventional-private-properties]',
        'constructor',
        '[public-instance-members]',
        '[conventional-private-methods]',
        '[everything-else]',
      ],
      groups: {
        'static-members': [{static: true}],
        'public-instance-members': [{
          static: false,
          name: '/[^_].+/',
        }],
      },
      accessorPairPositioning: 'getThenSet',
    },
  ],
};
