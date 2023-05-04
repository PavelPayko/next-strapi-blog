'use strict';

/**
 * head service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::head.head');
