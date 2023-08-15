'use strict';

/**
 * page controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::page.page',({ strapi }) =>  ({
    // Method 1: Creating an entirely custom action
    async findBySlug(ctx) {
      const { slug } = ctx.params;
    //   console.log(slug)
      // const query = `?filters[slug]=${slug}`;
    //   console.log(query)
      const page = await strapi.entityService.findMany('api::page.page',{
        filters: {
          slug:`${slug}`
        },
      });
    //   console.log(page)
      if (page) {
        ctx.body = page;
      } else {
        ctx.status = 404;
        ctx.body = {
          message: `Page with slug "${slug}" not found`,
        };
      }
    },
    async allPages(ctx) {
      // console.log(2222)
      const pages = await strapi.entityService.findMany('api::page.page');
      const slugs=[]
      if (pages) {
        pages.forEach(({Title,slug}) => {
          slugs.push({Title,slug})
        });
        ctx.body = slugs;
      } else {
        ctx.status = 404;
        ctx.body = {
          message: `Pages not found`,
        };
      }
    }
  
  }));
