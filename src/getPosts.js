import contentfulPkg from 'contentful';
const { createClient } = contentfulPkg;

export default () => {
  
      const client = createClient({
        space: 'n6ng1p2m73ej',
        accessToken: 'PPlRPjSQNZrsJBEJ8bu3D9Muy5U40fa3bd6e42-wHO8'
      });
      return client
      .getEntries({})
      .then(response => {
        console.log('response')
        console.log(response)
        return response.items;
      })
      .catch(console.error);

}