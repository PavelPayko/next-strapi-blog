'use strict';

/**
 * head controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::head.head');
