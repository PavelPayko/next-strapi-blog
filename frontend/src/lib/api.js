import qs from "qs";

/**
 * Get full Strapi URL from path
 * @param {string} path Path of the URL
 * @returns {string} Full Strapi URL
 */
export function getStrapiURL(path = "") {
	return `${process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
		}${path}`;
}

/**
 * Helper to make GET requests to Strapi API endpoints
 * @param {string} path Path of the API route
 * @param {Object} urlParamsObject URL params object, will be stringified
 * @param {Object} options Options passed to fetch
 * @returns Parsed API call response
 */
export async function fetchAPI(path, urlParamsObject = {}, options = {}) {

	const token = "2c486d2bb49f603ecf6947511a1b0ece5a611a4bd8f301562f57f32d2dbc32241b04d7bf4c3d592d4c02b1383c9cecc464d0d64f6b9190eb1853e47c52033729f04832339caa9cdc3d8d746d5f9d9e4623428af6c3668438ef59cfff1a64dd1162fb16df242b976d44299787578040d58a590385599868c48a308fb9b7bce62c"
	// Merge default and user options
	const mergedOptions = {
		headers: {
			"Content-Type": "application/json",
			"Authorization": `bearer ${token}`
		},
		...options,
	};

	// Build request URL
	const queryString = qs.stringify(urlParamsObject);
	const requestUrl = `${getStrapiURL(
		`/api${path}${queryString ? `?${queryString}` : ""}`
	)}`;

	console.log('api', requestUrl, mergedOptions);

	// Trigger API call
	const response = await fetch(requestUrl, mergedOptions);

	// Handle response
	if (!response.ok) {
		console.error(response.statusText);
		throw new Error(`An error occured please try again`);
	}
	const data = await response.json();
	return data;
}
