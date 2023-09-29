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
        // const response = await strapi.db.query("admin::user").update({ data: { ...adminUserData } });

        
        strapi.log.info(`Created author: ${firstname} ${lastname} (${email})`);
        return ctx.send({ message: 'Author created successfully!', details: response }, 200);
      } catch (err) {
        return ctx.internalServerError(err.message)
      }
    },
    async updateAuthor(ctx) {
        
        try {
          const { firstName:firstname, lastName: lastname,email } = ctx.request.body;
  
          // if (!id || !firstname || !lastname || !email || !password) {
            
          //   return ctx.badRequest(`id, firstname, lastname, email and password are required fields`);
          // }
  
          // const user = await strapi.db.query("admin::user").findOne({ where: { email: email } });
          // if (!user) {
          //   strapi.log.error(`Couldn't update author: ${email} doesn't exists`);
          //   return ctx.badRequest(`${email} doesn't exists`)
          // }
  
          // const hashedPassword = await auth.hashPassword(password);
          // const authorRole = await strapi.db.query("admin::role").findOne({ where: { code: 'strapi-editor' } })
          
          // const adminUserData = {
          //   firstname,
          //   lastname,
          //   email,
          //   password: hashedPassword,
          //   roles: [authorRole],
          //   blocked: false,
          //   isActive: true,
          // }
  
          // const response = await strapi.db.query("admin::user").update({ where: { id: id }, data: { ...adminUserData } });
          // // const response = await strapi.db.query("admin::user").update({ data: { ...adminUserData } });
  
          
          // strapi.log.info(`Updated author: ${firstname} ${lastname} (${email})`);
          await strapi.plugins['email'].services.email.send({
            to: email,
            from: "noreply@", //e.g. single sender verification in SendGrid
            cc: 'valid email address',
            bcc: 'valid email address',
            replyTo: 'valid email address',
            subject: 'The Strapi Email plugin worked successfully',
            text: 'Hello world!',
            html: 'Hello world!',
          });
          return ctx.send({ message: 'Email Sended!'}, 200);
        } catch (err) {
          console.log(err)
          return ctx.internalServerError(err.message)
        }
    },
    async getPageData(ctx) {
      try {
        const { slug } = ctx.params;
        const response = await strapi.entityService.findMany('api::page.page',{
          filters:{
            slug: slug
          },
          populate:['Section',"Section.column_html","Section.column_card","Section.column_accordion","Section.column_accordion.accordion" ,'nav','nav.logo','nav.navitems',"seo","footer.icons","footer.footerlinks","footer.column","banner"],
        });
        ctx.body = response[0];
      } catch (err) {
        return ctx.internalServerError(err.message)
      }
    }
  }));
