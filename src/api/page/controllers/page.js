'use strict';

/**
 * page controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
const auth = require("@strapi/admin/server/services/auth");
module.exports = createCoreController('api::page.page',({ strapi }) =>  ({
    // Method 1: Creating an entirely custom action
    async createAuthor(ctx) {
      
      try {
        const { firstName:firstname, lastName: lastname, email, password } = ctx.request.body;
        if (!firstname || !lastname || !email || !password) {
          // ctx.badRequest(message, details)
          return ctx.badRequest(`firstname, lastname, email and password are required fields`);
        }

        const user = await strapi.db.query("admin::user").findOne({ where: { email: email } });
        if (user) {
          strapi.log.error(`Couldn't create author: ${email} already exists`);
          return ctx.badRequest(`${email} already exists`)
        }

        const hashedPassword = await auth.hashPassword(password);
        const authorRole = await strapi.db.query("admin::role").findOne({ where: { code: 'strapi-editor' } })
        
        const adminUserData = {
          firstname,
          lastname,
          email,
          password: hashedPassword,
          roles: [authorRole],
          blocked: false,
          isActive: true,
        }

        const response = await strapi.db.query("admin::user").create({ data: { ...adminUserData } });
        
        strapi.log.info(`Created author: ${firstname} ${lastname} (${email})`);
        return ctx.send({ message: 'Author created successfully!', details: response }, 200);
      } catch (err) {
        return ctx.internalServerError(err.message)
      }
    }
  
  }));
