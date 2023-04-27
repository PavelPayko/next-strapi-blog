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

	const token = "e3b8a1721dd6f6ffdb1caa6783d183a74dd479eb48f145612d74c75d309d60c9003a424e1608d8587d6939578889cdfa05a45f459c675753a269776e591ec1357fb44ee1008171295aa22e5a57be05439eb3c107c2c58cec600d3e6f85c7895f95c778bb254fe800e94e983c684d6549209830e4bfbcf94d236630dd2e5b0df5"
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