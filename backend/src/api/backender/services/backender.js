'use strict';

/**
 * backender service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::backender.backender');
