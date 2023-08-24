'use strict';

/**
 * page controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::page.page',({ strapi }) =>  ({
    // Method 1: Creating an entirely custom action
    async findBySlug(ctx) {
      const { slug } = ctx.params;
    const page = await strapi.entityService.findMany('api::page.page', {
      filters: {
        slug: slug,
      },
      populate: '*',
    });
    
    // Process the populated response to remove unwanted fields
    const sanitizedPage = page.map(pageItem => {
      const sanitizedPageItem = { ...pageItem };
    
      // Remove the 'created_at' field from populated components
      if (sanitizedPageItem.sidebar) {
        sanitizedPageItem.sidebar = sanitizeComponent(sanitizedPageItem.sidebar);
      }
      if (sanitizedPageItem.navbar) {
        sanitizedPageItem.navbar = sanitizeComponent(sanitizedPageItem.navbar);
      }
      if (sanitizedPageItem.footer) {
        sanitizedPageItem.footer = sanitizeComponent(sanitizedPageItem.footer);
      }
      if (sanitizedPageItem.createdBy) {
        delete sanitizedPageItem.createdBy;
      }
      if (sanitizedPageItem.updatedBy) {
        delete sanitizedPageItem.updatedBy;
      }
    
      return sanitizedPageItem;
    });
    
    // Helper function to remove unwanted fields from a component
    function sanitizeComponent(component) {
      const sanitizedComponent = { ...component };
    
      // Remove 'createdBy' and other unwanted fields
      delete sanitizedComponent.publishedAt;
      delete sanitizedComponent.updatedAt;
      delete sanitizedComponent.createdAt;
    
      
    
      return sanitizedComponent;
    }
      if (sanitizedPage) {
        ctx.body = sanitizedPage;
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
