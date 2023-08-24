'use strict';

module.exports = {
  getCount: async (ctx, next) => {
    const query = `query {
      resturants {
        data {
          id
          attributes {
            Title
            categories {
              data {
                id
                attributes {
                  Name
                }
              }
            },
            reviews {
              data {
                id
                attributes {
                  Stars
                }
              }
            }
          }
        }
        meta {
          pagination {
            page
            pageSize
            total
            pageCount
          }
        }
      }
    }`;

    try {
      const response = await fetch(`http://localhost:1337/graphql`);
      const data = await response.json();
      ctx.body = 'hello';
    } catch (err) {
      ctx.body = err;
    }
  }
};


