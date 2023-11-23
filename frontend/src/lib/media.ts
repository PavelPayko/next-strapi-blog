import { getStrapiURL } from "./api";

export function getStrapiMedia(media: any) {

	if (media) {
		const url = media?.attributes?.url;
		const imageUrl = url?.startsWith("/") ? getStrapiURL(url) : url;
		return imageUrl;
	}
}