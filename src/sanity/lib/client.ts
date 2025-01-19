import { createClient } from 'next-sanity'

 import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion ,
  token: 'sk3c7K6B6yQVC9ho43JwrZoQvAh0EGbNPJbPkMJMfaC2fDngrRkbOEKa3ifSSQUOWlZHHQGU7G2hAFQ7DTF618Xbtm5suuCI11ZmaNtLMsSgYHmaxPDsPBFepI9H6WL40xGLojA7yWcsuXVURaI1E6IhspAUij20R5x35aO3YxKUdDNEo9qI',
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
