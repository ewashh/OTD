import pkg from 'contentful';
const { createClient } = pkg;


export default () => {
    const client = createClient({
        space: "n6ng1p2m73ej",
        accessToken: "PPlRPjSQNZrsJBEJ8bu3D9Muy5U40fa3bd6e42-wHO8"
    });

    return client
        .getEntries({})
        .then(response => response.items)
        .catch(console.error);
}