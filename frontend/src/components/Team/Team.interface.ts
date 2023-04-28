
export interface Employee {
	id: number,
	attributes: Attributes
}

interface Attributes {
	Name: string
	stack: string
	createdAt: string
	updatedAt: string
	publishedAt: string
	photo: Photo
}

export interface Photo {
	data: {
		id: number
		attributes: PhotoAttributes
	}[]
}

export interface PhotoAttributes {
	name: string
	alternativeText: any
	caption: any
	width: number
	height: number
	formats: Formats
	hash: string
	ext: string
	mime: string
	size: number
	url: string
	previewUrl: any
	provider: string
	provider_metadata: any
	createdAt: string
	updatedAt: string
}

export interface Formats {
	thumbnail: Thumbnail
	small: Size
	medium: Size
	large: Size
}

export interface Thumbnail {
	name: string
	hash: string
	ext: string
	mime: string
	path: any
	width: number
	height: number
	size: number
	url: string
}

export interface Size {
	name: string
	hash: string
	ext: string
	mime: string
	path: any
	width: number
	height: number
	size: number
	url: string
}