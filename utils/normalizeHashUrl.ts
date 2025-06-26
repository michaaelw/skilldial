/**
 * Converts a Supabase-style hash URL into a real URL and
 * returns its search parameters.
 *
 * @example
 * const url     = 'http://localhost:8081/update-password#access_token=abc&token_type=bearer';
 * const { validUrl, params } = normalizeHashUrl(url);
 *
 * validUrl --> 'http://localhost:8081/update-password?access_token=abc&token_type=bearer'
 * params   --> { access_token: 'abc', token_type: 'bearer' }
 */
export function normalizeHashUrl(raw: string) {
  // 1) split once on the first '#'
  const [base, hash = ""] = raw.split("#");

  // 2) rebuild a “valid” URL by replacing # with ?
  const validUrl = `${base}?${hash}`;

  // 3) Parse the search parameters
  const urlObj = new URL(validUrl);
  const params = Object.fromEntries(urlObj.searchParams.entries());

  return { validUrl, params };
}
