'use strict';

/**
 * frontender service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::frontender.frontender');
