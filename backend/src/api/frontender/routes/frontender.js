'use strict';

/**
 * frontender router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::frontender.frontender');
