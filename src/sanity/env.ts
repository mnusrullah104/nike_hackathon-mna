export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-18'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)
export const token = assertValue(
"skV9Dw12tHqIrbvgw3jFHJ9TRWw4it304txMWLxQIJzu2KzrFikxt2dChcaG5dsFC86V9vvdXTy3UgYMJZ4HGPp01EmmhwHGbxuHf6SNPZvbIt1DZltaOFhQPWSYrR31T9av6JgPt44T2Gz3nMezWRBmQiChkxJuEnm9psGiPt3ZB7qyn4Ng",

  'Missing environment variable: SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
