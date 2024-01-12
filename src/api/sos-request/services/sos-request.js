'use strict';

/**
 * sos-request service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sos-request.sos-request');
