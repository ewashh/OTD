import fetch from 'node-fetch'
import uuid from 'uuid'

export const handler = async (event, context) => {
  const eventBody = JSON.parse(event.body)
  const apiKey = process.env.CONTENTFUL_KEY;
  const space_id = 'n6ng1p2m73ej';
  const environment_id = 'master';
  const entry_id = uuid.v4();
  const content_type_id = 'tool';
  const ADD_ENTRY_URL = `https://api.contentful.com/spaces/${space_id}/environments/${environment_id}/entries/${entry_id}`

  const response = await fetch(
    ADD_ENTRY_URL,
    {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/vnd.contentful.management.v1+json',
        'X-Contentful-Content-Type': content_type_id,
      },
      body: JSON.stringify({
        "fields": {
          "toolName": {
            "en-US": eventBody.toolName
          },
          "shortDescription": {
            "en-US": eventBody.shortDescription
          },
          //"image": {
          //  "en-US": eventBody.toolName
          //},
          "link": {
            "en-US": eventBody.link
          },
          "categories": {
            "en-US": eventBody.categories ?? []
          }
        },
        "metadata": {
          "tags": []
        }
      })
    }
  )
  const data = await response.json()

  return {
    statusCode: response.statusCode,
    body: JSON.stringify({})
  }
}