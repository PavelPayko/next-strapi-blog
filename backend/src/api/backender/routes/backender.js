'use strict';

/**
 * backender router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::backender.backender');
