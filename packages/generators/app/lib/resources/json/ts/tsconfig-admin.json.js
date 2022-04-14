'use strict';

module.exports = () => ({
  extends: '@strapi/typescript-utils/lib/configs/admin',

  include: ['../plugins/**/admin/src/**/*', './'],
  exclude: ['node_modules/', 'build/', 'dist/', '**/*.test.ts'],
});
